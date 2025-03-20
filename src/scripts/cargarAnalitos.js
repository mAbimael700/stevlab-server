const Analito = require("../src/schemas/parameter");
const { equipos } = require("./cargarEquipos");
const mongoose = require('mongoose');

const analitos = [
    { name: "Aspartato aminotransferasa (suero)", code: "QSAST" },
    { name: "Alanina aminotransferasa (suero)", code: "QSALT" },
    { name: "Bilirrubina directa", code: "QSBILDIR" },
    { name: "Bilirrubina total", code: "QSBILTO" },
    { name: "Creatinina (suero)", code: "QSCREA" },
    { name: "Gama-glutamiltransferasa (suero)", code: "QSGGT" },
    { name: "Glucosa (suero)", code: "QSGLUC" },
    { name: "Hierro (Ferrozina, suero)", code: "QSIRON" },
    { name: "Lactato deshidrogenasa (suero)", code: "QSLDH" },
    { name: "Proteína total (suero)", code: "QSPRO" },
    { name: "Triglicéridos (suero)", code: "QSTRIG" },
    { name: "Urea UV (suero)", code: "QSURE" },
    { name: "Calcio (Arsenazo, suero)", code: "QSCAL" },
    { name: "Fósforo (suero)", code: "QSFOSF" },
    { name: "Magnesio (suero)", code: "QSMG" },
    { name: "Nitrógeno ureico en sangre (suero)", code: "QSBUN" },
    { name: "Ácido úrico (suero)", code: "QSAU" },
    { name: "Colesterol (suero)", code: "QSCOLE" },
    { name: "Amilasa directa (suero)", code: "QSAMY" },
    { name: "Colesterol HDL directo (suero)", code: "QSHDL" },
    { name: "Globulina (suero)", code: "QSGLO" },
    { name: "Relación albúmina/globulina (suero)", code: "QSALG" },
    { name: "Relación nitrógeno ureico/creatinina (suero)", code: "QSBUCR" },
    { name: "Bilirrubina indirecta (DPD, suero)", code: "QSBLIIN" },
    { name: "Lipasa (DGGR, suero)", code: "QSLIPA" },
    { name: "Proteína C Reactiva (CRP) - B1", code: "QSPRO" },
    { name: "Ferritina - B1", code: "QSFERRI" },
    { name: "Globulina", code: "QSGLOBU" },
    { name: "Colina Acetiltransferasa III", code: "COLACE" },
    { name: "Colesterol LDL - MI", code: "QSCLDL" },
    { name: "Perfil Lipídico - MI", code: "QSPFL" },
    { name: "Transaminasas (TGO/TGP)", code: "QSTGOTPG" },
    { name: "Colesterol VLDL - MI", code: "QSCVLDL" },
    { name: "Bilirrubina Total", code: "QSBIL" },
    { name: "Urea Nitrogenada", code: "QSNURE" },
    { name: "Transaminasa Glutámico Oxalacética (TGO)", code: "QSTGO" },
    { name: "Transaminasa Glutámico Pirúvica (TGP)", code: "QSTGP" },
    { name: "Hemoglobina Fetal", code: "QSGLICO" },
    { name: "Lactato Deshidrogenasa", code: "QSDES" },
    { name: "Lipasa", code: "QSLIPA" },
    { name: "Proteína C Reactiva (PCR)", code: "QSPRO2" },
    { name: "Tiempo de Protrombina", code: "QSTIPR" },
    { name: "Tiempo de Protrombina (Unidades Internacionales)", code: "QSTIPR2" },
    { name: "Calcio", code: "QSCAL" },
    { name: "Potasio", code: "QSPOT" },
    { name: "Sodio", code: "QSSOD" },
    { name: "Cloro", code: "QSCL" },
    { name: "Fosfatasa Alcalina", code: "QSALP" },
    { name: "Amilasa", code: "QSAMY" },
    { name: "Colinesterasa", code: "QSCOLI" },
    { name: "Gamma-Glutamil Transferasa", code: "QSGGT" },
    { name: "Aspartato Aminotransferasa", code: "QSTGO" },
    { name: "Alanina Aminotransferasa", code: "QSTGP" },
    { name: "Creatinina", code: "QSCREA" },
    { name: "Bilirrubina Directa", code: "BILD" },
    { name: "Glucosa", code: "QSGLU" },
    { name: "Colesterol HDL", code: "QSHDL" },
    { name: "Fósforo Inorgánico", code: "QSFOSF" },
    { name: "Leucocitos", code: "BHLEU" },
    { name: "Linfocitos Porcentual", code: "BHLINF2" },
    { name: "Neutrófilos Segmentados Porcentual", code: "BHNS2" },
    { name: "Monocitos Porcentual", code: "BHMON2" },
    { name: "Linfocitos Absoluto", code: "BHLINF" },
    { name: "Neutrófilos Segmentados", code: "BHNS" },
    { name: "Monocitos", code: "BHMON" },
    { name: "Eritrocitos", code: "BHERI" },
    { name: "Hemoglobina", code: "BHHEMO" },
    { name: "Hematocrito", code: "BHHEMA" },
    { name: "Volumen Corpuscular Medio", code: "BHVCM" },
    { name: "HCM", code: "BHHCM" },
    { name: "CMHB", code: "BHCMB" },
    { name: "Plaquetas", code: "BHPLT" },
    { name: "RDW", code: "BHRDW" },
    { name: "MPV", code: "BHMPV" },
    { name: "PDW", code: "BHPDW" },
    { name: "PCT", code: "BHPCT" },
    { name: "LCR", code: "BHLCR", },
    { name: "LN", code: "BHLN", },
];


let dymind = [{ name: "Leucocitos", code: "BHLEU" },
{ name: "Linfocitos Porcentual", code: "BHLINF2" },
{ name: "Neutrófilos Segmentados Porcentual", code: "BHNS2" },
{ name: "Monocitos Porcentual", code: "BHMON2" },
{ name: "Linfocitos Absoluto", code: "BHLINF" },
{ name: "Neutrófilos Segmentados", code: "BHNS" },
{ name: "Monocitos", code: "BHMON" },
{ name: "Eritrocitos", code: "BHERI" },
{ name: "Hemoglobina", code: "BHHEMO" },
{ name: "Hematocrito", code: "BHHEMA" },
{ name: "Volumen Corpuscular Medio", code: "BHVCM" },
{ name: "HCM", code: "BHHCM" },
{ name: "CMHB", code: "BHCMB" },
{ name: "Plaquetas", code: "BHPLT" },
{ name: "RDW", code: "BHRDW" },
{ name: "MPV", code: "BHMPV" },
{ name: "PDW", code: "BHPDW" },
{ name: "PCT", code: "BHPCT" },
{ name: "LCR", code: undefined, },
{ name: "LN", code: undefined, },]

[

{ name: "Bilirrubina/Delta", code: "BILDD" },
{ name: "Indice Aterogénico - MI", code: "QSINATE" },
{ name: "Albúmina", code: "QSALBU" },
{ name: "Antiestreptolisina O", code: "QSANTI" }]

async function cargarAnalitos() {
    try {
        const analitosc = await Analito.insertMany(analitos, { ordered: false });
        console.log('Analitos insertados correctamente');
        return analitosc;
    } catch (err) {
        console.error('Error al insertar analitos:', err);
        return []; // Devolver un array vacío si ocurre un error
    }
}

module.exports = { cargarAnalitos, analitos, dymind }