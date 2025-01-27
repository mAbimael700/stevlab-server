function generateAckDate() {
  const now = new Date();
  return now.toISOString().replace(/[-:T]/g, "").slice(0, 14); // Formato AAAAMMDDHHMMSS
}

module.exports = { generateAckDate };
