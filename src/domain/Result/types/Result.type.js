// src/types/result.types.js

/**
 * @typedef {import("../../../infra/Prisma/Generated").Result} Result
 * @typedef {import("../../../infra/Prisma/Generated").Parameter} Parameter
 * @typedef {import("../../../infra/Prisma/Generated").Equipment} Equipment
 * @typedef {import("../../../infra/Prisma/Generated").ParameterDictionary} ParameterDictionary
 * @typedef {import("../../../infra/Prisma/Generated").SystemParameter} SystemParameter
 *
 * @typedef {Result & {
 *   parameters: (Parameter & { equipment: Equipment, parameterDictionary: ParameterDictionary & {systemParameter: SystemParameter}} )[]
 * }} ResultWithParametersAndEquipment
 */
