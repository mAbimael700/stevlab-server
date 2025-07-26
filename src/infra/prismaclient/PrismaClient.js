// src/prismaClient.js
const { PrismaClient } = require("../prisma/generated");

const prisma = new PrismaClient({
  log: ["query", "info", "warn", "error"],
});

module.exports = prisma;
