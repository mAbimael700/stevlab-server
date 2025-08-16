class ServiceManager {
    constructor() {
        this.runningServices = new Map();
        this.shutdownHandlers = new Map();
    }

    async startService(name, serviceInstance, startMethod = 'start') {
        try {
            console.log(`🔧 Iniciando servicio: ${name}`);

            if (typeof serviceInstance[startMethod] === 'function') {
                await serviceInstance[startMethod]();
            } else if (typeof serviceInstance.initialize === 'function') {
                await serviceInstance.initialize();
            }

            this.runningServices.set(name, serviceInstance);
            console.log(`✅ Servicio ${name} iniciado correctamente`);
        } catch (error) {
            console.error(`❌ Error iniciando servicio ${name}:`, error);
            throw error;
        }
    }

    async stopService(name) {
        const service = this.runningServices.get(name);
        if (!service) {
            console.warn(`⚠️ Servicio ${name} no encontrado para detener`);
            return;
        }

        try {
            console.log(`🛑 Deteniendo servicio: ${name}`);

            // Intentar diferentes métodos de shutdown
            const shutdownMethods = ['stop', 'close', 'shutdown', 'terminate'];
            let stopped = false;

            for (const method of shutdownMethods) {
                if (typeof service[method] === 'function') {
                    await service[method]();
                    stopped = true;
                    break;
                }
            }

            if (!stopped) {
                console.warn(`⚠️ No se encontró método de shutdown para ${name}`);
            }

            this.runningServices.delete(name);
            console.log(`✅ Servicio ${name} detenido correctamente`);
        } catch (error) {
            console.error(`❌ Error deteniendo servicio ${name}:`, error);
            throw error;
        }
    }

    async stopAllServices() {
        console.log('🛑 Deteniendo todos los servicios...');

        // Detener servicios en orden inverso al que se iniciaron
        const serviceNames = Array.from(this.runningServices.keys()).reverse();

        for (const serviceName of serviceNames) {
            try {
                await this.stopService(serviceName);
            } catch (error) {
                console.error(`Error deteniendo ${serviceName}:`, error);
            }
        }

        this.runningServices.clear();
        console.log('✅ Todos los servicios detenidos');
    }

    isServiceRunning(name) {
        return this.runningServices.has(name);
    }

    getRunningServices() {
        return Array.from(this.runningServices.keys());
    }

    getServiceCount() {
        return this.runningServices.size;
    }
}

module.exports = ServiceManager;