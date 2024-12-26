
const mongoose = require('mongoose');
const { DB_PASSWORD } = require('../constants/CONSTANTS');
const password = encodeURIComponent(DB_PASSWORD);

let uri =
    `mongodb+srv://dbUser:${password}@stevlabdb.0kmnn.mongodb.net/?retryWrites=true&w=majority&appName=StevlabDB`

async function run() {
    mongoose.connect(uri)
        .then(_ => console.log("Database connected succesfully!"))
        .catch(error =>
            console.log("Hubo un error al conectarse a la base de datos:", error.message))
}

module.exports = {
    run
}
