const ApplicationInitializer = require("@/app/core/ApplicationInitializer");

class Application {
    constructor() {
        this.initializer = new ApplicationInitializer();
        this.container = null;
        this.shutdownHandlers = new Set();
    }

    async start() {
        try {
            const profile = this._getProfile();
            const customConfig = this._getCustomConfig();

            this._validateEnvironment(profile);

            this.container = await this.initializer.initialize(profile, customConfig);
            this._setupGracefulShutdown();

            this._logStartupInfo(profile);

        } catch (error) {
            console.error('💥 Error iniciando aplicación:', error);
            process.exit(1);
        }
    }

    _getProfile() {
        return process.env.DEPLOYMENT_PROFILE ||
            process.argv[2] ||
            DeploymentProfiles.STANDALONE;
    }

    _getCustomConfig() {
        // Aquí puedes agregar lógica para configuración personalizada
        const customConfig = {};

        // Ejemplo: override de puertos desde env vars
        if (process.env.TCP_PORT) {
            customConfig.tcpPort = parseInt(process.env.TCP_PORT);
        }
        if (process.env.HTTP_PORT) {
            customConfig.httpPort = parseInt(process.env.HTTP_PORT);
        }

        return customConfig;
    }

    _validateEnvironment(profile) {
        if (profile === DeploymentProfiles.EQUIPMENT_NODE && !process.env.CENTRAL_SERVER_URL) {
            throw new Error('CENTRAL_SERVER_URL es requerido para perfil EQUIPMENT_NODE');
        }
    }

    _logStartupInfo(profile) {
        console.log(`🎉 Aplicación ejecutándose con perfil: ${profile}`);
        console.log(`📊 Servicios ejecutándose: ${this.initializer.getRunningServices().join(', ')}`);
        console.log('💡 Para cambiar el perfil, usa: DEPLOYMENT_PROFILE=equipment-node npm start');
    }

    _setupGracefulShutdown() {
        const shutdownHandler = async (signal) => {
            console.log(`\n🔄 Recibida señal ${signal}, iniciando shutdown graceful...`);
            try {
                await this.initializer.shutdown();
                process.exit(0);
            } catch (error) {
                console.error('💥 Error durante shutdown:', error);
                process.exit(1);
            }
        };

        this.shutdownHandlers.add(shutdownHandler);
        process.on('SIGTERM', shutdownHandler);
        process.on('SIGINT', shutdownHandler);
        process.on('SIGUSR2', shutdownHandler); // Para nodemon
    }

    getInitializer() {
        return this.initializer;
    }

    getContainer() {
        return this.container;
    }
}

// Iniciar aplicación si se ejecuta directamente
if (require.main === module) {
    const app = new Application();
    app.start().catch(console.error);
}