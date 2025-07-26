// src/types/result.types.js

/**
 * @typedef {import("@/infra/prisma/generated").Result} Result
 * @typedef {import("@/infra/prisma/generated").Parameter} Parameter
 * @typedef {import("@/infra/prisma/generated").Equipment} Equipment
 * @typedef {import("@/infra/prisma/generated").ParameterDictionary} ParameterDictionary
 * @typedef {import("@/infra/prisma/generated").SystemParameter} SystemParameter
 *
 * @typedef {Result & {
 *   parameters: (Parameter & { equipment: Equipment, parameterDictionary: ParameterDictionary & {systemParameter: SystemParameter}} )[]
 * }} ResultWithParametersAndEquipment
 */
