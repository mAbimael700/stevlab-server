function generateAckDate(){
    return new Date().toISOString().replace(/[-:T]/g, '').slice(0, 14); // Formato AAAAMMDDHHMMSS
}

module.exports ={generateAckDate}