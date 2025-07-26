// src/prismaClient.js
const { PrismaClient } = require("@/infra/prisma/generated");

const prisma = new PrismaClient({
  log: ["query", "info", "warn", "error"],
});

module.exports = prisma;
