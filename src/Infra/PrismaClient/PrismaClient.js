// src/prismaClient.js
const { PrismaClient } = require("../Prisma/Generated");

const prisma = new PrismaClient({
  log: ["query", "info", "warn", "error"],
});

module.exports = prisma;
