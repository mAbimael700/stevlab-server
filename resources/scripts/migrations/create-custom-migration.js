const fs = require('fs');
const path = require('path');

// ⚙️ Configura aquí tu SQL y nombre de migración
const MIGRATION_NAME = process.argv[2] || 'custom-seed';
const SQL_CONTENT = fs.readFileSync(path.join(__dirname, 'custom-seed.sql'), 'utf-8');

const timestamp = new Date().toISOString().replace(/[-:T]/g, '').slice(0, 14);
const migrationFolder = path.join(__dirname, '..', '..', '..',
        'prisma', 'migrations', `${timestamp}_${MIGRATION_NAME}`
    )
;
const migrationFile = path.join(migrationFolder, 'migration.sql');

// 🚀 Crear carpeta y archivo
function createMigration() {
    if (fs.existsSync(migrationFolder)) {
        console.error('❌ La migración ya existe:', migrationFolder);
        process.exit(1);
    }

    fs.mkdirSync(migrationFolder, {recursive: true});
    fs.writeFileSync(migrationFile, SQL_CONTENT.trim());

    console.log(`✅ Migración creada: ${migrationFolder}`);
    console.log(`📝 Contenido de migration.sql:\n${SQL_CONTENT}`);
    console.log(`ℹ️ Ejecuta luego: npx prisma migrate deploy`);
}

createMigration();
