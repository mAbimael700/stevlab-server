
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model CommunicationProfiles
 * 
 */
export type CommunicationProfiles = $Result.DefaultSelection<Prisma.$CommunicationProfilesPayload>
/**
 * Model DirectoryHistorial
 * 
 */
export type DirectoryHistorial = $Result.DefaultSelection<Prisma.$DirectoryHistorialPayload>
/**
 * Model EquipmentProfile
 * 
 */
export type EquipmentProfile = $Result.DefaultSelection<Prisma.$EquipmentProfilePayload>
/**
 * Model Equipment
 * 
 */
export type Equipment = $Result.DefaultSelection<Prisma.$EquipmentPayload>
/**
 * Model HistogramResult
 * 
 */
export type HistogramResult = $Result.DefaultSelection<Prisma.$HistogramResultPayload>
/**
 * Model Parameter
 * 
 */
export type Parameter = $Result.DefaultSelection<Prisma.$ParameterPayload>
/**
 * Model Result
 * 
 */
export type Result = $Result.DefaultSelection<Prisma.$ResultPayload>
/**
 * Model ParameterDictionary
 * 
 */
export type ParameterDictionary = $Result.DefaultSelection<Prisma.$ParameterDictionaryPayload>
/**
 * Model ResultSend
 * 
 */
export type ResultSend = $Result.DefaultSelection<Prisma.$ResultSendPayload>
/**
 * Model SystemParameter
 * 
 */
export type SystemParameter = $Result.DefaultSelection<Prisma.$SystemParameterPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model EquipmentConfiguration
 * 
 */
export type EquipmentConfiguration = $Result.DefaultSelection<Prisma.$EquipmentConfigurationPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more CommunicationProfiles
 * const communicationProfiles = await prisma.communicationProfiles.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more CommunicationProfiles
   * const communicationProfiles = await prisma.communicationProfiles.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.communicationProfiles`: Exposes CRUD operations for the **CommunicationProfiles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CommunicationProfiles
    * const communicationProfiles = await prisma.communicationProfiles.findMany()
    * ```
    */
  get communicationProfiles(): Prisma.CommunicationProfilesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.directoryHistorial`: Exposes CRUD operations for the **DirectoryHistorial** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DirectoryHistorials
    * const directoryHistorials = await prisma.directoryHistorial.findMany()
    * ```
    */
  get directoryHistorial(): Prisma.DirectoryHistorialDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.equipmentProfile`: Exposes CRUD operations for the **EquipmentProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EquipmentProfiles
    * const equipmentProfiles = await prisma.equipmentProfile.findMany()
    * ```
    */
  get equipmentProfile(): Prisma.EquipmentProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.equipment`: Exposes CRUD operations for the **Equipment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Equipment
    * const equipment = await prisma.equipment.findMany()
    * ```
    */
  get equipment(): Prisma.EquipmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.histogramResult`: Exposes CRUD operations for the **HistogramResult** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HistogramResults
    * const histogramResults = await prisma.histogramResult.findMany()
    * ```
    */
  get histogramResult(): Prisma.HistogramResultDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.parameter`: Exposes CRUD operations for the **Parameter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Parameters
    * const parameters = await prisma.parameter.findMany()
    * ```
    */
  get parameter(): Prisma.ParameterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.result`: Exposes CRUD operations for the **Result** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Results
    * const results = await prisma.result.findMany()
    * ```
    */
  get result(): Prisma.ResultDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.parameterDictionary`: Exposes CRUD operations for the **ParameterDictionary** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ParameterDictionaries
    * const parameterDictionaries = await prisma.parameterDictionary.findMany()
    * ```
    */
  get parameterDictionary(): Prisma.ParameterDictionaryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.resultSend`: Exposes CRUD operations for the **ResultSend** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ResultSends
    * const resultSends = await prisma.resultSend.findMany()
    * ```
    */
  get resultSend(): Prisma.ResultSendDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.systemParameter`: Exposes CRUD operations for the **SystemParameter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SystemParameters
    * const systemParameters = await prisma.systemParameter.findMany()
    * ```
    */
  get systemParameter(): Prisma.SystemParameterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.equipmentConfiguration`: Exposes CRUD operations for the **EquipmentConfiguration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EquipmentConfigurations
    * const equipmentConfigurations = await prisma.equipmentConfiguration.findMany()
    * ```
    */
  get equipmentConfiguration(): Prisma.EquipmentConfigurationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    CommunicationProfiles: 'CommunicationProfiles',
    DirectoryHistorial: 'DirectoryHistorial',
    EquipmentProfile: 'EquipmentProfile',
    Equipment: 'Equipment',
    HistogramResult: 'HistogramResult',
    Parameter: 'Parameter',
    Result: 'Result',
    ParameterDictionary: 'ParameterDictionary',
    ResultSend: 'ResultSend',
    SystemParameter: 'SystemParameter',
    User: 'User',
    EquipmentConfiguration: 'EquipmentConfiguration'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "communicationProfiles" | "directoryHistorial" | "equipmentProfile" | "equipment" | "histogramResult" | "parameter" | "result" | "parameterDictionary" | "resultSend" | "systemParameter" | "user" | "equipmentConfiguration"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      CommunicationProfiles: {
        payload: Prisma.$CommunicationProfilesPayload<ExtArgs>
        fields: Prisma.CommunicationProfilesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommunicationProfilesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationProfilesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommunicationProfilesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationProfilesPayload>
          }
          findFirst: {
            args: Prisma.CommunicationProfilesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationProfilesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommunicationProfilesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationProfilesPayload>
          }
          findMany: {
            args: Prisma.CommunicationProfilesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationProfilesPayload>[]
          }
          create: {
            args: Prisma.CommunicationProfilesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationProfilesPayload>
          }
          createMany: {
            args: Prisma.CommunicationProfilesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommunicationProfilesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationProfilesPayload>[]
          }
          delete: {
            args: Prisma.CommunicationProfilesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationProfilesPayload>
          }
          update: {
            args: Prisma.CommunicationProfilesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationProfilesPayload>
          }
          deleteMany: {
            args: Prisma.CommunicationProfilesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommunicationProfilesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommunicationProfilesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationProfilesPayload>[]
          }
          upsert: {
            args: Prisma.CommunicationProfilesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunicationProfilesPayload>
          }
          aggregate: {
            args: Prisma.CommunicationProfilesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommunicationProfiles>
          }
          groupBy: {
            args: Prisma.CommunicationProfilesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommunicationProfilesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommunicationProfilesCountArgs<ExtArgs>
            result: $Utils.Optional<CommunicationProfilesCountAggregateOutputType> | number
          }
        }
      }
      DirectoryHistorial: {
        payload: Prisma.$DirectoryHistorialPayload<ExtArgs>
        fields: Prisma.DirectoryHistorialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DirectoryHistorialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectoryHistorialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DirectoryHistorialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectoryHistorialPayload>
          }
          findFirst: {
            args: Prisma.DirectoryHistorialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectoryHistorialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DirectoryHistorialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectoryHistorialPayload>
          }
          findMany: {
            args: Prisma.DirectoryHistorialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectoryHistorialPayload>[]
          }
          create: {
            args: Prisma.DirectoryHistorialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectoryHistorialPayload>
          }
          createMany: {
            args: Prisma.DirectoryHistorialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DirectoryHistorialCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectoryHistorialPayload>[]
          }
          delete: {
            args: Prisma.DirectoryHistorialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectoryHistorialPayload>
          }
          update: {
            args: Prisma.DirectoryHistorialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectoryHistorialPayload>
          }
          deleteMany: {
            args: Prisma.DirectoryHistorialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DirectoryHistorialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DirectoryHistorialUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectoryHistorialPayload>[]
          }
          upsert: {
            args: Prisma.DirectoryHistorialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectoryHistorialPayload>
          }
          aggregate: {
            args: Prisma.DirectoryHistorialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDirectoryHistorial>
          }
          groupBy: {
            args: Prisma.DirectoryHistorialGroupByArgs<ExtArgs>
            result: $Utils.Optional<DirectoryHistorialGroupByOutputType>[]
          }
          count: {
            args: Prisma.DirectoryHistorialCountArgs<ExtArgs>
            result: $Utils.Optional<DirectoryHistorialCountAggregateOutputType> | number
          }
        }
      }
      EquipmentProfile: {
        payload: Prisma.$EquipmentProfilePayload<ExtArgs>
        fields: Prisma.EquipmentProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EquipmentProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EquipmentProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentProfilePayload>
          }
          findFirst: {
            args: Prisma.EquipmentProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EquipmentProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentProfilePayload>
          }
          findMany: {
            args: Prisma.EquipmentProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentProfilePayload>[]
          }
          create: {
            args: Prisma.EquipmentProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentProfilePayload>
          }
          createMany: {
            args: Prisma.EquipmentProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EquipmentProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentProfilePayload>[]
          }
          delete: {
            args: Prisma.EquipmentProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentProfilePayload>
          }
          update: {
            args: Prisma.EquipmentProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentProfilePayload>
          }
          deleteMany: {
            args: Prisma.EquipmentProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EquipmentProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EquipmentProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentProfilePayload>[]
          }
          upsert: {
            args: Prisma.EquipmentProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentProfilePayload>
          }
          aggregate: {
            args: Prisma.EquipmentProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEquipmentProfile>
          }
          groupBy: {
            args: Prisma.EquipmentProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<EquipmentProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.EquipmentProfileCountArgs<ExtArgs>
            result: $Utils.Optional<EquipmentProfileCountAggregateOutputType> | number
          }
        }
      }
      Equipment: {
        payload: Prisma.$EquipmentPayload<ExtArgs>
        fields: Prisma.EquipmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EquipmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EquipmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          findFirst: {
            args: Prisma.EquipmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EquipmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          findMany: {
            args: Prisma.EquipmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>[]
          }
          create: {
            args: Prisma.EquipmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          createMany: {
            args: Prisma.EquipmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EquipmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>[]
          }
          delete: {
            args: Prisma.EquipmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          update: {
            args: Prisma.EquipmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          deleteMany: {
            args: Prisma.EquipmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EquipmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EquipmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>[]
          }
          upsert: {
            args: Prisma.EquipmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          aggregate: {
            args: Prisma.EquipmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEquipment>
          }
          groupBy: {
            args: Prisma.EquipmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<EquipmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.EquipmentCountArgs<ExtArgs>
            result: $Utils.Optional<EquipmentCountAggregateOutputType> | number
          }
        }
      }
      HistogramResult: {
        payload: Prisma.$HistogramResultPayload<ExtArgs>
        fields: Prisma.HistogramResultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HistogramResultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistogramResultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HistogramResultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistogramResultPayload>
          }
          findFirst: {
            args: Prisma.HistogramResultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistogramResultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HistogramResultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistogramResultPayload>
          }
          findMany: {
            args: Prisma.HistogramResultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistogramResultPayload>[]
          }
          create: {
            args: Prisma.HistogramResultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistogramResultPayload>
          }
          createMany: {
            args: Prisma.HistogramResultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HistogramResultCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistogramResultPayload>[]
          }
          delete: {
            args: Prisma.HistogramResultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistogramResultPayload>
          }
          update: {
            args: Prisma.HistogramResultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistogramResultPayload>
          }
          deleteMany: {
            args: Prisma.HistogramResultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HistogramResultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HistogramResultUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistogramResultPayload>[]
          }
          upsert: {
            args: Prisma.HistogramResultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistogramResultPayload>
          }
          aggregate: {
            args: Prisma.HistogramResultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHistogramResult>
          }
          groupBy: {
            args: Prisma.HistogramResultGroupByArgs<ExtArgs>
            result: $Utils.Optional<HistogramResultGroupByOutputType>[]
          }
          count: {
            args: Prisma.HistogramResultCountArgs<ExtArgs>
            result: $Utils.Optional<HistogramResultCountAggregateOutputType> | number
          }
        }
      }
      Parameter: {
        payload: Prisma.$ParameterPayload<ExtArgs>
        fields: Prisma.ParameterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParameterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParameterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParameterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParameterPayload>
          }
          findFirst: {
            args: Prisma.ParameterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParameterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParameterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParameterPayload>
          }
          findMany: {
            args: Prisma.ParameterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParameterPayload>[]
          }
          create: {
            args: Prisma.ParameterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParameterPayload>
          }
          createMany: {
            args: Prisma.ParameterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParameterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParameterPayload>[]
          }
          delete: {
            args: Prisma.ParameterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParameterPayload>
          }
          update: {
            args: Prisma.ParameterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParameterPayload>
          }
          deleteMany: {
            args: Prisma.ParameterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParameterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParameterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParameterPayload>[]
          }
          upsert: {
            args: Prisma.ParameterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParameterPayload>
          }
          aggregate: {
            args: Prisma.ParameterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParameter>
          }
          groupBy: {
            args: Prisma.ParameterGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParameterGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParameterCountArgs<ExtArgs>
            result: $Utils.Optional<ParameterCountAggregateOutputType> | number
          }
        }
      }
      Result: {
        payload: Prisma.$ResultPayload<ExtArgs>
        fields: Prisma.ResultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>
          }
          findFirst: {
            args: Prisma.ResultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>
          }
          findMany: {
            args: Prisma.ResultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>[]
          }
          create: {
            args: Prisma.ResultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>
          }
          createMany: {
            args: Prisma.ResultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResultCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>[]
          }
          delete: {
            args: Prisma.ResultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>
          }
          update: {
            args: Prisma.ResultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>
          }
          deleteMany: {
            args: Prisma.ResultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResultUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>[]
          }
          upsert: {
            args: Prisma.ResultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>
          }
          aggregate: {
            args: Prisma.ResultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResult>
          }
          groupBy: {
            args: Prisma.ResultGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResultGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResultCountArgs<ExtArgs>
            result: $Utils.Optional<ResultCountAggregateOutputType> | number
          }
        }
      }
      ParameterDictionary: {
        payload: Prisma.$ParameterDictionaryPayload<ExtArgs>
        fields: Prisma.ParameterDictionaryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParameterDictionaryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParameterDictionaryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParameterDictionaryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParameterDictionaryPayload>
          }
          findFirst: {
            args: Prisma.ParameterDictionaryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParameterDictionaryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParameterDictionaryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParameterDictionaryPayload>
          }
          findMany: {
            args: Prisma.ParameterDictionaryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParameterDictionaryPayload>[]
          }
          create: {
            args: Prisma.ParameterDictionaryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParameterDictionaryPayload>
          }
          createMany: {
            args: Prisma.ParameterDictionaryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParameterDictionaryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParameterDictionaryPayload>[]
          }
          delete: {
            args: Prisma.ParameterDictionaryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParameterDictionaryPayload>
          }
          update: {
            args: Prisma.ParameterDictionaryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParameterDictionaryPayload>
          }
          deleteMany: {
            args: Prisma.ParameterDictionaryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParameterDictionaryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParameterDictionaryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParameterDictionaryPayload>[]
          }
          upsert: {
            args: Prisma.ParameterDictionaryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParameterDictionaryPayload>
          }
          aggregate: {
            args: Prisma.ParameterDictionaryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParameterDictionary>
          }
          groupBy: {
            args: Prisma.ParameterDictionaryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParameterDictionaryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParameterDictionaryCountArgs<ExtArgs>
            result: $Utils.Optional<ParameterDictionaryCountAggregateOutputType> | number
          }
        }
      }
      ResultSend: {
        payload: Prisma.$ResultSendPayload<ExtArgs>
        fields: Prisma.ResultSendFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResultSendFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultSendPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResultSendFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultSendPayload>
          }
          findFirst: {
            args: Prisma.ResultSendFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultSendPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResultSendFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultSendPayload>
          }
          findMany: {
            args: Prisma.ResultSendFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultSendPayload>[]
          }
          create: {
            args: Prisma.ResultSendCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultSendPayload>
          }
          createMany: {
            args: Prisma.ResultSendCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResultSendCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultSendPayload>[]
          }
          delete: {
            args: Prisma.ResultSendDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultSendPayload>
          }
          update: {
            args: Prisma.ResultSendUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultSendPayload>
          }
          deleteMany: {
            args: Prisma.ResultSendDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResultSendUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResultSendUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultSendPayload>[]
          }
          upsert: {
            args: Prisma.ResultSendUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultSendPayload>
          }
          aggregate: {
            args: Prisma.ResultSendAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResultSend>
          }
          groupBy: {
            args: Prisma.ResultSendGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResultSendGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResultSendCountArgs<ExtArgs>
            result: $Utils.Optional<ResultSendCountAggregateOutputType> | number
          }
        }
      }
      SystemParameter: {
        payload: Prisma.$SystemParameterPayload<ExtArgs>
        fields: Prisma.SystemParameterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SystemParameterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemParameterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SystemParameterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemParameterPayload>
          }
          findFirst: {
            args: Prisma.SystemParameterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemParameterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SystemParameterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemParameterPayload>
          }
          findMany: {
            args: Prisma.SystemParameterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemParameterPayload>[]
          }
          create: {
            args: Prisma.SystemParameterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemParameterPayload>
          }
          createMany: {
            args: Prisma.SystemParameterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SystemParameterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemParameterPayload>[]
          }
          delete: {
            args: Prisma.SystemParameterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemParameterPayload>
          }
          update: {
            args: Prisma.SystemParameterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemParameterPayload>
          }
          deleteMany: {
            args: Prisma.SystemParameterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SystemParameterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SystemParameterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemParameterPayload>[]
          }
          upsert: {
            args: Prisma.SystemParameterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemParameterPayload>
          }
          aggregate: {
            args: Prisma.SystemParameterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSystemParameter>
          }
          groupBy: {
            args: Prisma.SystemParameterGroupByArgs<ExtArgs>
            result: $Utils.Optional<SystemParameterGroupByOutputType>[]
          }
          count: {
            args: Prisma.SystemParameterCountArgs<ExtArgs>
            result: $Utils.Optional<SystemParameterCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      EquipmentConfiguration: {
        payload: Prisma.$EquipmentConfigurationPayload<ExtArgs>
        fields: Prisma.EquipmentConfigurationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EquipmentConfigurationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentConfigurationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EquipmentConfigurationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentConfigurationPayload>
          }
          findFirst: {
            args: Prisma.EquipmentConfigurationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentConfigurationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EquipmentConfigurationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentConfigurationPayload>
          }
          findMany: {
            args: Prisma.EquipmentConfigurationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentConfigurationPayload>[]
          }
          create: {
            args: Prisma.EquipmentConfigurationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentConfigurationPayload>
          }
          createMany: {
            args: Prisma.EquipmentConfigurationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EquipmentConfigurationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentConfigurationPayload>[]
          }
          delete: {
            args: Prisma.EquipmentConfigurationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentConfigurationPayload>
          }
          update: {
            args: Prisma.EquipmentConfigurationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentConfigurationPayload>
          }
          deleteMany: {
            args: Prisma.EquipmentConfigurationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EquipmentConfigurationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EquipmentConfigurationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentConfigurationPayload>[]
          }
          upsert: {
            args: Prisma.EquipmentConfigurationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipmentConfigurationPayload>
          }
          aggregate: {
            args: Prisma.EquipmentConfigurationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEquipmentConfiguration>
          }
          groupBy: {
            args: Prisma.EquipmentConfigurationGroupByArgs<ExtArgs>
            result: $Utils.Optional<EquipmentConfigurationGroupByOutputType>[]
          }
          count: {
            args: Prisma.EquipmentConfigurationCountArgs<ExtArgs>
            result: $Utils.Optional<EquipmentConfigurationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    communicationProfiles?: CommunicationProfilesOmit
    directoryHistorial?: DirectoryHistorialOmit
    equipmentProfile?: EquipmentProfileOmit
    equipment?: EquipmentOmit
    histogramResult?: HistogramResultOmit
    parameter?: ParameterOmit
    result?: ResultOmit
    parameterDictionary?: ParameterDictionaryOmit
    resultSend?: ResultSendOmit
    systemParameter?: SystemParameterOmit
    user?: UserOmit
    equipmentConfiguration?: EquipmentConfigurationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CommunicationProfilesCountOutputType
   */

  export type CommunicationProfilesCountOutputType = {
    equipmentProfiles: number
  }

  export type CommunicationProfilesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipmentProfiles?: boolean | CommunicationProfilesCountOutputTypeCountEquipmentProfilesArgs
  }

  // Custom InputTypes
  /**
   * CommunicationProfilesCountOutputType without action
   */
  export type CommunicationProfilesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunicationProfilesCountOutputType
     */
    select?: CommunicationProfilesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CommunicationProfilesCountOutputType without action
   */
  export type CommunicationProfilesCountOutputTypeCountEquipmentProfilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipmentProfileWhereInput
  }


  /**
   * Count Type EquipmentProfileCountOutputType
   */

  export type EquipmentProfileCountOutputType = {
    equipments: number
  }

  export type EquipmentProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipments?: boolean | EquipmentProfileCountOutputTypeCountEquipmentsArgs
  }

  // Custom InputTypes
  /**
   * EquipmentProfileCountOutputType without action
   */
  export type EquipmentProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentProfileCountOutputType
     */
    select?: EquipmentProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EquipmentProfileCountOutputType without action
   */
  export type EquipmentProfileCountOutputTypeCountEquipmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipmentWhereInput
  }


  /**
   * Count Type EquipmentCountOutputType
   */

  export type EquipmentCountOutputType = {
    directoryHistorials: number
    parameters: number
    EquipmentConfiguration: number
  }

  export type EquipmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    directoryHistorials?: boolean | EquipmentCountOutputTypeCountDirectoryHistorialsArgs
    parameters?: boolean | EquipmentCountOutputTypeCountParametersArgs
    EquipmentConfiguration?: boolean | EquipmentCountOutputTypeCountEquipmentConfigurationArgs
  }

  // Custom InputTypes
  /**
   * EquipmentCountOutputType without action
   */
  export type EquipmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentCountOutputType
     */
    select?: EquipmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EquipmentCountOutputType without action
   */
  export type EquipmentCountOutputTypeCountDirectoryHistorialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DirectoryHistorialWhereInput
  }

  /**
   * EquipmentCountOutputType without action
   */
  export type EquipmentCountOutputTypeCountParametersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParameterWhereInput
  }

  /**
   * EquipmentCountOutputType without action
   */
  export type EquipmentCountOutputTypeCountEquipmentConfigurationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipmentConfigurationWhereInput
  }


  /**
   * Count Type ResultCountOutputType
   */

  export type ResultCountOutputType = {
    histogramResults: number
    parameters: number
    resultSends: number
  }

  export type ResultCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    histogramResults?: boolean | ResultCountOutputTypeCountHistogramResultsArgs
    parameters?: boolean | ResultCountOutputTypeCountParametersArgs
    resultSends?: boolean | ResultCountOutputTypeCountResultSendsArgs
  }

  // Custom InputTypes
  /**
   * ResultCountOutputType without action
   */
  export type ResultCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResultCountOutputType
     */
    select?: ResultCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ResultCountOutputType without action
   */
  export type ResultCountOutputTypeCountHistogramResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistogramResultWhereInput
  }

  /**
   * ResultCountOutputType without action
   */
  export type ResultCountOutputTypeCountParametersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParameterWhereInput
  }

  /**
   * ResultCountOutputType without action
   */
  export type ResultCountOutputTypeCountResultSendsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResultSendWhereInput
  }


  /**
   * Count Type ParameterDictionaryCountOutputType
   */

  export type ParameterDictionaryCountOutputType = {
    parameters: number
  }

  export type ParameterDictionaryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parameters?: boolean | ParameterDictionaryCountOutputTypeCountParametersArgs
  }

  // Custom InputTypes
  /**
   * ParameterDictionaryCountOutputType without action
   */
  export type ParameterDictionaryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParameterDictionaryCountOutputType
     */
    select?: ParameterDictionaryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ParameterDictionaryCountOutputType without action
   */
  export type ParameterDictionaryCountOutputTypeCountParametersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParameterWhereInput
  }


  /**
   * Count Type SystemParameterCountOutputType
   */

  export type SystemParameterCountOutputType = {
    parameterDictionaries: number
  }

  export type SystemParameterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parameterDictionaries?: boolean | SystemParameterCountOutputTypeCountParameterDictionariesArgs
  }

  // Custom InputTypes
  /**
   * SystemParameterCountOutputType without action
   */
  export type SystemParameterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemParameterCountOutputType
     */
    select?: SystemParameterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SystemParameterCountOutputType without action
   */
  export type SystemParameterCountOutputTypeCountParameterDictionariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParameterDictionaryWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    resultSends: number
    createdResults: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resultSends?: boolean | UserCountOutputTypeCountResultSendsArgs
    createdResults?: boolean | UserCountOutputTypeCountCreatedResultsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountResultSendsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResultSendWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResultWhereInput
  }


  /**
   * Models
   */

  /**
   * Model CommunicationProfiles
   */

  export type AggregateCommunicationProfiles = {
    _count: CommunicationProfilesCountAggregateOutputType | null
    _min: CommunicationProfilesMinAggregateOutputType | null
    _max: CommunicationProfilesMaxAggregateOutputType | null
  }

  export type CommunicationProfilesMinAggregateOutputType = {
    id: string | null
    checksum_regex: string | null
    type: string | null
  }

  export type CommunicationProfilesMaxAggregateOutputType = {
    id: string | null
    checksum_regex: string | null
    type: string | null
  }

  export type CommunicationProfilesCountAggregateOutputType = {
    id: number
    checksum_regex: number
    type: number
    _all: number
  }


  export type CommunicationProfilesMinAggregateInputType = {
    id?: true
    checksum_regex?: true
    type?: true
  }

  export type CommunicationProfilesMaxAggregateInputType = {
    id?: true
    checksum_regex?: true
    type?: true
  }

  export type CommunicationProfilesCountAggregateInputType = {
    id?: true
    checksum_regex?: true
    type?: true
    _all?: true
  }

  export type CommunicationProfilesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommunicationProfiles to aggregate.
     */
    where?: CommunicationProfilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunicationProfiles to fetch.
     */
    orderBy?: CommunicationProfilesOrderByWithRelationInput | CommunicationProfilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommunicationProfilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunicationProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunicationProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CommunicationProfiles
    **/
    _count?: true | CommunicationProfilesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommunicationProfilesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommunicationProfilesMaxAggregateInputType
  }

  export type GetCommunicationProfilesAggregateType<T extends CommunicationProfilesAggregateArgs> = {
        [P in keyof T & keyof AggregateCommunicationProfiles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommunicationProfiles[P]>
      : GetScalarType<T[P], AggregateCommunicationProfiles[P]>
  }




  export type CommunicationProfilesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunicationProfilesWhereInput
    orderBy?: CommunicationProfilesOrderByWithAggregationInput | CommunicationProfilesOrderByWithAggregationInput[]
    by: CommunicationProfilesScalarFieldEnum[] | CommunicationProfilesScalarFieldEnum
    having?: CommunicationProfilesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommunicationProfilesCountAggregateInputType | true
    _min?: CommunicationProfilesMinAggregateInputType
    _max?: CommunicationProfilesMaxAggregateInputType
  }

  export type CommunicationProfilesGroupByOutputType = {
    id: string
    checksum_regex: string | null
    type: string | null
    _count: CommunicationProfilesCountAggregateOutputType | null
    _min: CommunicationProfilesMinAggregateOutputType | null
    _max: CommunicationProfilesMaxAggregateOutputType | null
  }

  type GetCommunicationProfilesGroupByPayload<T extends CommunicationProfilesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommunicationProfilesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommunicationProfilesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommunicationProfilesGroupByOutputType[P]>
            : GetScalarType<T[P], CommunicationProfilesGroupByOutputType[P]>
        }
      >
    >


  export type CommunicationProfilesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    checksum_regex?: boolean
    type?: boolean
    equipmentProfiles?: boolean | CommunicationProfiles$equipmentProfilesArgs<ExtArgs>
    _count?: boolean | CommunicationProfilesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["communicationProfiles"]>

  export type CommunicationProfilesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    checksum_regex?: boolean
    type?: boolean
  }, ExtArgs["result"]["communicationProfiles"]>

  export type CommunicationProfilesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    checksum_regex?: boolean
    type?: boolean
  }, ExtArgs["result"]["communicationProfiles"]>

  export type CommunicationProfilesSelectScalar = {
    id?: boolean
    checksum_regex?: boolean
    type?: boolean
  }

  export type CommunicationProfilesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "checksum_regex" | "type", ExtArgs["result"]["communicationProfiles"]>
  export type CommunicationProfilesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipmentProfiles?: boolean | CommunicationProfiles$equipmentProfilesArgs<ExtArgs>
    _count?: boolean | CommunicationProfilesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CommunicationProfilesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CommunicationProfilesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CommunicationProfilesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CommunicationProfiles"
    objects: {
      equipmentProfiles: Prisma.$EquipmentProfilePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      checksum_regex: string | null
      type: string | null
    }, ExtArgs["result"]["communicationProfiles"]>
    composites: {}
  }

  type CommunicationProfilesGetPayload<S extends boolean | null | undefined | CommunicationProfilesDefaultArgs> = $Result.GetResult<Prisma.$CommunicationProfilesPayload, S>

  type CommunicationProfilesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommunicationProfilesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommunicationProfilesCountAggregateInputType | true
    }

  export interface CommunicationProfilesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CommunicationProfiles'], meta: { name: 'CommunicationProfiles' } }
    /**
     * Find zero or one CommunicationProfiles that matches the filter.
     * @param {CommunicationProfilesFindUniqueArgs} args - Arguments to find a CommunicationProfiles
     * @example
     * // Get one CommunicationProfiles
     * const communicationProfiles = await prisma.communicationProfiles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommunicationProfilesFindUniqueArgs>(args: SelectSubset<T, CommunicationProfilesFindUniqueArgs<ExtArgs>>): Prisma__CommunicationProfilesClient<$Result.GetResult<Prisma.$CommunicationProfilesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CommunicationProfiles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommunicationProfilesFindUniqueOrThrowArgs} args - Arguments to find a CommunicationProfiles
     * @example
     * // Get one CommunicationProfiles
     * const communicationProfiles = await prisma.communicationProfiles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommunicationProfilesFindUniqueOrThrowArgs>(args: SelectSubset<T, CommunicationProfilesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommunicationProfilesClient<$Result.GetResult<Prisma.$CommunicationProfilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommunicationProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunicationProfilesFindFirstArgs} args - Arguments to find a CommunicationProfiles
     * @example
     * // Get one CommunicationProfiles
     * const communicationProfiles = await prisma.communicationProfiles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommunicationProfilesFindFirstArgs>(args?: SelectSubset<T, CommunicationProfilesFindFirstArgs<ExtArgs>>): Prisma__CommunicationProfilesClient<$Result.GetResult<Prisma.$CommunicationProfilesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommunicationProfiles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunicationProfilesFindFirstOrThrowArgs} args - Arguments to find a CommunicationProfiles
     * @example
     * // Get one CommunicationProfiles
     * const communicationProfiles = await prisma.communicationProfiles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommunicationProfilesFindFirstOrThrowArgs>(args?: SelectSubset<T, CommunicationProfilesFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommunicationProfilesClient<$Result.GetResult<Prisma.$CommunicationProfilesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CommunicationProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunicationProfilesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CommunicationProfiles
     * const communicationProfiles = await prisma.communicationProfiles.findMany()
     * 
     * // Get first 10 CommunicationProfiles
     * const communicationProfiles = await prisma.communicationProfiles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const communicationProfilesWithIdOnly = await prisma.communicationProfiles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommunicationProfilesFindManyArgs>(args?: SelectSubset<T, CommunicationProfilesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunicationProfilesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CommunicationProfiles.
     * @param {CommunicationProfilesCreateArgs} args - Arguments to create a CommunicationProfiles.
     * @example
     * // Create one CommunicationProfiles
     * const CommunicationProfiles = await prisma.communicationProfiles.create({
     *   data: {
     *     // ... data to create a CommunicationProfiles
     *   }
     * })
     * 
     */
    create<T extends CommunicationProfilesCreateArgs>(args: SelectSubset<T, CommunicationProfilesCreateArgs<ExtArgs>>): Prisma__CommunicationProfilesClient<$Result.GetResult<Prisma.$CommunicationProfilesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CommunicationProfiles.
     * @param {CommunicationProfilesCreateManyArgs} args - Arguments to create many CommunicationProfiles.
     * @example
     * // Create many CommunicationProfiles
     * const communicationProfiles = await prisma.communicationProfiles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommunicationProfilesCreateManyArgs>(args?: SelectSubset<T, CommunicationProfilesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CommunicationProfiles and returns the data saved in the database.
     * @param {CommunicationProfilesCreateManyAndReturnArgs} args - Arguments to create many CommunicationProfiles.
     * @example
     * // Create many CommunicationProfiles
     * const communicationProfiles = await prisma.communicationProfiles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CommunicationProfiles and only return the `id`
     * const communicationProfilesWithIdOnly = await prisma.communicationProfiles.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommunicationProfilesCreateManyAndReturnArgs>(args?: SelectSubset<T, CommunicationProfilesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunicationProfilesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CommunicationProfiles.
     * @param {CommunicationProfilesDeleteArgs} args - Arguments to delete one CommunicationProfiles.
     * @example
     * // Delete one CommunicationProfiles
     * const CommunicationProfiles = await prisma.communicationProfiles.delete({
     *   where: {
     *     // ... filter to delete one CommunicationProfiles
     *   }
     * })
     * 
     */
    delete<T extends CommunicationProfilesDeleteArgs>(args: SelectSubset<T, CommunicationProfilesDeleteArgs<ExtArgs>>): Prisma__CommunicationProfilesClient<$Result.GetResult<Prisma.$CommunicationProfilesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CommunicationProfiles.
     * @param {CommunicationProfilesUpdateArgs} args - Arguments to update one CommunicationProfiles.
     * @example
     * // Update one CommunicationProfiles
     * const communicationProfiles = await prisma.communicationProfiles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommunicationProfilesUpdateArgs>(args: SelectSubset<T, CommunicationProfilesUpdateArgs<ExtArgs>>): Prisma__CommunicationProfilesClient<$Result.GetResult<Prisma.$CommunicationProfilesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CommunicationProfiles.
     * @param {CommunicationProfilesDeleteManyArgs} args - Arguments to filter CommunicationProfiles to delete.
     * @example
     * // Delete a few CommunicationProfiles
     * const { count } = await prisma.communicationProfiles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommunicationProfilesDeleteManyArgs>(args?: SelectSubset<T, CommunicationProfilesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommunicationProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunicationProfilesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CommunicationProfiles
     * const communicationProfiles = await prisma.communicationProfiles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommunicationProfilesUpdateManyArgs>(args: SelectSubset<T, CommunicationProfilesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommunicationProfiles and returns the data updated in the database.
     * @param {CommunicationProfilesUpdateManyAndReturnArgs} args - Arguments to update many CommunicationProfiles.
     * @example
     * // Update many CommunicationProfiles
     * const communicationProfiles = await prisma.communicationProfiles.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CommunicationProfiles and only return the `id`
     * const communicationProfilesWithIdOnly = await prisma.communicationProfiles.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommunicationProfilesUpdateManyAndReturnArgs>(args: SelectSubset<T, CommunicationProfilesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunicationProfilesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CommunicationProfiles.
     * @param {CommunicationProfilesUpsertArgs} args - Arguments to update or create a CommunicationProfiles.
     * @example
     * // Update or create a CommunicationProfiles
     * const communicationProfiles = await prisma.communicationProfiles.upsert({
     *   create: {
     *     // ... data to create a CommunicationProfiles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CommunicationProfiles we want to update
     *   }
     * })
     */
    upsert<T extends CommunicationProfilesUpsertArgs>(args: SelectSubset<T, CommunicationProfilesUpsertArgs<ExtArgs>>): Prisma__CommunicationProfilesClient<$Result.GetResult<Prisma.$CommunicationProfilesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CommunicationProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunicationProfilesCountArgs} args - Arguments to filter CommunicationProfiles to count.
     * @example
     * // Count the number of CommunicationProfiles
     * const count = await prisma.communicationProfiles.count({
     *   where: {
     *     // ... the filter for the CommunicationProfiles we want to count
     *   }
     * })
    **/
    count<T extends CommunicationProfilesCountArgs>(
      args?: Subset<T, CommunicationProfilesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommunicationProfilesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CommunicationProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunicationProfilesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommunicationProfilesAggregateArgs>(args: Subset<T, CommunicationProfilesAggregateArgs>): Prisma.PrismaPromise<GetCommunicationProfilesAggregateType<T>>

    /**
     * Group by CommunicationProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunicationProfilesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommunicationProfilesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommunicationProfilesGroupByArgs['orderBy'] }
        : { orderBy?: CommunicationProfilesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommunicationProfilesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommunicationProfilesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CommunicationProfiles model
   */
  readonly fields: CommunicationProfilesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CommunicationProfiles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommunicationProfilesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    equipmentProfiles<T extends CommunicationProfiles$equipmentProfilesArgs<ExtArgs> = {}>(args?: Subset<T, CommunicationProfiles$equipmentProfilesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CommunicationProfiles model
   */
  interface CommunicationProfilesFieldRefs {
    readonly id: FieldRef<"CommunicationProfiles", 'String'>
    readonly checksum_regex: FieldRef<"CommunicationProfiles", 'String'>
    readonly type: FieldRef<"CommunicationProfiles", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CommunicationProfiles findUnique
   */
  export type CommunicationProfilesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunicationProfiles
     */
    select?: CommunicationProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunicationProfiles
     */
    omit?: CommunicationProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationProfilesInclude<ExtArgs> | null
    /**
     * Filter, which CommunicationProfiles to fetch.
     */
    where: CommunicationProfilesWhereUniqueInput
  }

  /**
   * CommunicationProfiles findUniqueOrThrow
   */
  export type CommunicationProfilesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunicationProfiles
     */
    select?: CommunicationProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunicationProfiles
     */
    omit?: CommunicationProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationProfilesInclude<ExtArgs> | null
    /**
     * Filter, which CommunicationProfiles to fetch.
     */
    where: CommunicationProfilesWhereUniqueInput
  }

  /**
   * CommunicationProfiles findFirst
   */
  export type CommunicationProfilesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunicationProfiles
     */
    select?: CommunicationProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunicationProfiles
     */
    omit?: CommunicationProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationProfilesInclude<ExtArgs> | null
    /**
     * Filter, which CommunicationProfiles to fetch.
     */
    where?: CommunicationProfilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunicationProfiles to fetch.
     */
    orderBy?: CommunicationProfilesOrderByWithRelationInput | CommunicationProfilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommunicationProfiles.
     */
    cursor?: CommunicationProfilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunicationProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunicationProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommunicationProfiles.
     */
    distinct?: CommunicationProfilesScalarFieldEnum | CommunicationProfilesScalarFieldEnum[]
  }

  /**
   * CommunicationProfiles findFirstOrThrow
   */
  export type CommunicationProfilesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunicationProfiles
     */
    select?: CommunicationProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunicationProfiles
     */
    omit?: CommunicationProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationProfilesInclude<ExtArgs> | null
    /**
     * Filter, which CommunicationProfiles to fetch.
     */
    where?: CommunicationProfilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunicationProfiles to fetch.
     */
    orderBy?: CommunicationProfilesOrderByWithRelationInput | CommunicationProfilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommunicationProfiles.
     */
    cursor?: CommunicationProfilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunicationProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunicationProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommunicationProfiles.
     */
    distinct?: CommunicationProfilesScalarFieldEnum | CommunicationProfilesScalarFieldEnum[]
  }

  /**
   * CommunicationProfiles findMany
   */
  export type CommunicationProfilesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunicationProfiles
     */
    select?: CommunicationProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunicationProfiles
     */
    omit?: CommunicationProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationProfilesInclude<ExtArgs> | null
    /**
     * Filter, which CommunicationProfiles to fetch.
     */
    where?: CommunicationProfilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunicationProfiles to fetch.
     */
    orderBy?: CommunicationProfilesOrderByWithRelationInput | CommunicationProfilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CommunicationProfiles.
     */
    cursor?: CommunicationProfilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunicationProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunicationProfiles.
     */
    skip?: number
    distinct?: CommunicationProfilesScalarFieldEnum | CommunicationProfilesScalarFieldEnum[]
  }

  /**
   * CommunicationProfiles create
   */
  export type CommunicationProfilesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunicationProfiles
     */
    select?: CommunicationProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunicationProfiles
     */
    omit?: CommunicationProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationProfilesInclude<ExtArgs> | null
    /**
     * The data needed to create a CommunicationProfiles.
     */
    data: XOR<CommunicationProfilesCreateInput, CommunicationProfilesUncheckedCreateInput>
  }

  /**
   * CommunicationProfiles createMany
   */
  export type CommunicationProfilesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CommunicationProfiles.
     */
    data: CommunicationProfilesCreateManyInput | CommunicationProfilesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CommunicationProfiles createManyAndReturn
   */
  export type CommunicationProfilesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunicationProfiles
     */
    select?: CommunicationProfilesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommunicationProfiles
     */
    omit?: CommunicationProfilesOmit<ExtArgs> | null
    /**
     * The data used to create many CommunicationProfiles.
     */
    data: CommunicationProfilesCreateManyInput | CommunicationProfilesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CommunicationProfiles update
   */
  export type CommunicationProfilesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunicationProfiles
     */
    select?: CommunicationProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunicationProfiles
     */
    omit?: CommunicationProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationProfilesInclude<ExtArgs> | null
    /**
     * The data needed to update a CommunicationProfiles.
     */
    data: XOR<CommunicationProfilesUpdateInput, CommunicationProfilesUncheckedUpdateInput>
    /**
     * Choose, which CommunicationProfiles to update.
     */
    where: CommunicationProfilesWhereUniqueInput
  }

  /**
   * CommunicationProfiles updateMany
   */
  export type CommunicationProfilesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CommunicationProfiles.
     */
    data: XOR<CommunicationProfilesUpdateManyMutationInput, CommunicationProfilesUncheckedUpdateManyInput>
    /**
     * Filter which CommunicationProfiles to update
     */
    where?: CommunicationProfilesWhereInput
    /**
     * Limit how many CommunicationProfiles to update.
     */
    limit?: number
  }

  /**
   * CommunicationProfiles updateManyAndReturn
   */
  export type CommunicationProfilesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunicationProfiles
     */
    select?: CommunicationProfilesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommunicationProfiles
     */
    omit?: CommunicationProfilesOmit<ExtArgs> | null
    /**
     * The data used to update CommunicationProfiles.
     */
    data: XOR<CommunicationProfilesUpdateManyMutationInput, CommunicationProfilesUncheckedUpdateManyInput>
    /**
     * Filter which CommunicationProfiles to update
     */
    where?: CommunicationProfilesWhereInput
    /**
     * Limit how many CommunicationProfiles to update.
     */
    limit?: number
  }

  /**
   * CommunicationProfiles upsert
   */
  export type CommunicationProfilesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunicationProfiles
     */
    select?: CommunicationProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunicationProfiles
     */
    omit?: CommunicationProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationProfilesInclude<ExtArgs> | null
    /**
     * The filter to search for the CommunicationProfiles to update in case it exists.
     */
    where: CommunicationProfilesWhereUniqueInput
    /**
     * In case the CommunicationProfiles found by the `where` argument doesn't exist, create a new CommunicationProfiles with this data.
     */
    create: XOR<CommunicationProfilesCreateInput, CommunicationProfilesUncheckedCreateInput>
    /**
     * In case the CommunicationProfiles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommunicationProfilesUpdateInput, CommunicationProfilesUncheckedUpdateInput>
  }

  /**
   * CommunicationProfiles delete
   */
  export type CommunicationProfilesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunicationProfiles
     */
    select?: CommunicationProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunicationProfiles
     */
    omit?: CommunicationProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationProfilesInclude<ExtArgs> | null
    /**
     * Filter which CommunicationProfiles to delete.
     */
    where: CommunicationProfilesWhereUniqueInput
  }

  /**
   * CommunicationProfiles deleteMany
   */
  export type CommunicationProfilesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommunicationProfiles to delete
     */
    where?: CommunicationProfilesWhereInput
    /**
     * Limit how many CommunicationProfiles to delete.
     */
    limit?: number
  }

  /**
   * CommunicationProfiles.equipmentProfiles
   */
  export type CommunicationProfiles$equipmentProfilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentProfile
     */
    select?: EquipmentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentProfile
     */
    omit?: EquipmentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentProfileInclude<ExtArgs> | null
    where?: EquipmentProfileWhereInput
    orderBy?: EquipmentProfileOrderByWithRelationInput | EquipmentProfileOrderByWithRelationInput[]
    cursor?: EquipmentProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EquipmentProfileScalarFieldEnum | EquipmentProfileScalarFieldEnum[]
  }

  /**
   * CommunicationProfiles without action
   */
  export type CommunicationProfilesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunicationProfiles
     */
    select?: CommunicationProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunicationProfiles
     */
    omit?: CommunicationProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationProfilesInclude<ExtArgs> | null
  }


  /**
   * Model DirectoryHistorial
   */

  export type AggregateDirectoryHistorial = {
    _count: DirectoryHistorialCountAggregateOutputType | null
    _avg: DirectoryHistorialAvgAggregateOutputType | null
    _sum: DirectoryHistorialSumAggregateOutputType | null
    _min: DirectoryHistorialMinAggregateOutputType | null
    _max: DirectoryHistorialMaxAggregateOutputType | null
  }

  export type DirectoryHistorialAvgAggregateOutputType = {
    id: number | null
    equipment_id: number | null
    modified_at: number | null
  }

  export type DirectoryHistorialSumAggregateOutputType = {
    id: bigint | null
    equipment_id: bigint | null
    modified_at: bigint | null
  }

  export type DirectoryHistorialMinAggregateOutputType = {
    id: bigint | null
    equipment_id: bigint | null
    filename: string | null
    filepath: string | null
    modified_at: bigint | null
  }

  export type DirectoryHistorialMaxAggregateOutputType = {
    id: bigint | null
    equipment_id: bigint | null
    filename: string | null
    filepath: string | null
    modified_at: bigint | null
  }

  export type DirectoryHistorialCountAggregateOutputType = {
    id: number
    equipment_id: number
    filename: number
    filepath: number
    modified_at: number
    _all: number
  }


  export type DirectoryHistorialAvgAggregateInputType = {
    id?: true
    equipment_id?: true
    modified_at?: true
  }

  export type DirectoryHistorialSumAggregateInputType = {
    id?: true
    equipment_id?: true
    modified_at?: true
  }

  export type DirectoryHistorialMinAggregateInputType = {
    id?: true
    equipment_id?: true
    filename?: true
    filepath?: true
    modified_at?: true
  }

  export type DirectoryHistorialMaxAggregateInputType = {
    id?: true
    equipment_id?: true
    filename?: true
    filepath?: true
    modified_at?: true
  }

  export type DirectoryHistorialCountAggregateInputType = {
    id?: true
    equipment_id?: true
    filename?: true
    filepath?: true
    modified_at?: true
    _all?: true
  }

  export type DirectoryHistorialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DirectoryHistorial to aggregate.
     */
    where?: DirectoryHistorialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DirectoryHistorials to fetch.
     */
    orderBy?: DirectoryHistorialOrderByWithRelationInput | DirectoryHistorialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DirectoryHistorialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DirectoryHistorials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DirectoryHistorials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DirectoryHistorials
    **/
    _count?: true | DirectoryHistorialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DirectoryHistorialAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DirectoryHistorialSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DirectoryHistorialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DirectoryHistorialMaxAggregateInputType
  }

  export type GetDirectoryHistorialAggregateType<T extends DirectoryHistorialAggregateArgs> = {
        [P in keyof T & keyof AggregateDirectoryHistorial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDirectoryHistorial[P]>
      : GetScalarType<T[P], AggregateDirectoryHistorial[P]>
  }




  export type DirectoryHistorialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DirectoryHistorialWhereInput
    orderBy?: DirectoryHistorialOrderByWithAggregationInput | DirectoryHistorialOrderByWithAggregationInput[]
    by: DirectoryHistorialScalarFieldEnum[] | DirectoryHistorialScalarFieldEnum
    having?: DirectoryHistorialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DirectoryHistorialCountAggregateInputType | true
    _avg?: DirectoryHistorialAvgAggregateInputType
    _sum?: DirectoryHistorialSumAggregateInputType
    _min?: DirectoryHistorialMinAggregateInputType
    _max?: DirectoryHistorialMaxAggregateInputType
  }

  export type DirectoryHistorialGroupByOutputType = {
    id: bigint
    equipment_id: bigint | null
    filename: string | null
    filepath: string | null
    modified_at: bigint | null
    _count: DirectoryHistorialCountAggregateOutputType | null
    _avg: DirectoryHistorialAvgAggregateOutputType | null
    _sum: DirectoryHistorialSumAggregateOutputType | null
    _min: DirectoryHistorialMinAggregateOutputType | null
    _max: DirectoryHistorialMaxAggregateOutputType | null
  }

  type GetDirectoryHistorialGroupByPayload<T extends DirectoryHistorialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DirectoryHistorialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DirectoryHistorialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DirectoryHistorialGroupByOutputType[P]>
            : GetScalarType<T[P], DirectoryHistorialGroupByOutputType[P]>
        }
      >
    >


  export type DirectoryHistorialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    equipment_id?: boolean
    filename?: boolean
    filepath?: boolean
    modified_at?: boolean
    equipment?: boolean | DirectoryHistorial$equipmentArgs<ExtArgs>
  }, ExtArgs["result"]["directoryHistorial"]>

  export type DirectoryHistorialSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    equipment_id?: boolean
    filename?: boolean
    filepath?: boolean
    modified_at?: boolean
    equipment?: boolean | DirectoryHistorial$equipmentArgs<ExtArgs>
  }, ExtArgs["result"]["directoryHistorial"]>

  export type DirectoryHistorialSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    equipment_id?: boolean
    filename?: boolean
    filepath?: boolean
    modified_at?: boolean
    equipment?: boolean | DirectoryHistorial$equipmentArgs<ExtArgs>
  }, ExtArgs["result"]["directoryHistorial"]>

  export type DirectoryHistorialSelectScalar = {
    id?: boolean
    equipment_id?: boolean
    filename?: boolean
    filepath?: boolean
    modified_at?: boolean
  }

  export type DirectoryHistorialOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "equipment_id" | "filename" | "filepath" | "modified_at", ExtArgs["result"]["directoryHistorial"]>
  export type DirectoryHistorialInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipment?: boolean | DirectoryHistorial$equipmentArgs<ExtArgs>
  }
  export type DirectoryHistorialIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipment?: boolean | DirectoryHistorial$equipmentArgs<ExtArgs>
  }
  export type DirectoryHistorialIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipment?: boolean | DirectoryHistorial$equipmentArgs<ExtArgs>
  }

  export type $DirectoryHistorialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DirectoryHistorial"
    objects: {
      equipment: Prisma.$EquipmentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      equipment_id: bigint | null
      filename: string | null
      filepath: string | null
      modified_at: bigint | null
    }, ExtArgs["result"]["directoryHistorial"]>
    composites: {}
  }

  type DirectoryHistorialGetPayload<S extends boolean | null | undefined | DirectoryHistorialDefaultArgs> = $Result.GetResult<Prisma.$DirectoryHistorialPayload, S>

  type DirectoryHistorialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DirectoryHistorialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DirectoryHistorialCountAggregateInputType | true
    }

  export interface DirectoryHistorialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DirectoryHistorial'], meta: { name: 'DirectoryHistorial' } }
    /**
     * Find zero or one DirectoryHistorial that matches the filter.
     * @param {DirectoryHistorialFindUniqueArgs} args - Arguments to find a DirectoryHistorial
     * @example
     * // Get one DirectoryHistorial
     * const directoryHistorial = await prisma.directoryHistorial.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DirectoryHistorialFindUniqueArgs>(args: SelectSubset<T, DirectoryHistorialFindUniqueArgs<ExtArgs>>): Prisma__DirectoryHistorialClient<$Result.GetResult<Prisma.$DirectoryHistorialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DirectoryHistorial that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DirectoryHistorialFindUniqueOrThrowArgs} args - Arguments to find a DirectoryHistorial
     * @example
     * // Get one DirectoryHistorial
     * const directoryHistorial = await prisma.directoryHistorial.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DirectoryHistorialFindUniqueOrThrowArgs>(args: SelectSubset<T, DirectoryHistorialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DirectoryHistorialClient<$Result.GetResult<Prisma.$DirectoryHistorialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DirectoryHistorial that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectoryHistorialFindFirstArgs} args - Arguments to find a DirectoryHistorial
     * @example
     * // Get one DirectoryHistorial
     * const directoryHistorial = await prisma.directoryHistorial.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DirectoryHistorialFindFirstArgs>(args?: SelectSubset<T, DirectoryHistorialFindFirstArgs<ExtArgs>>): Prisma__DirectoryHistorialClient<$Result.GetResult<Prisma.$DirectoryHistorialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DirectoryHistorial that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectoryHistorialFindFirstOrThrowArgs} args - Arguments to find a DirectoryHistorial
     * @example
     * // Get one DirectoryHistorial
     * const directoryHistorial = await prisma.directoryHistorial.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DirectoryHistorialFindFirstOrThrowArgs>(args?: SelectSubset<T, DirectoryHistorialFindFirstOrThrowArgs<ExtArgs>>): Prisma__DirectoryHistorialClient<$Result.GetResult<Prisma.$DirectoryHistorialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DirectoryHistorials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectoryHistorialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DirectoryHistorials
     * const directoryHistorials = await prisma.directoryHistorial.findMany()
     * 
     * // Get first 10 DirectoryHistorials
     * const directoryHistorials = await prisma.directoryHistorial.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const directoryHistorialWithIdOnly = await prisma.directoryHistorial.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DirectoryHistorialFindManyArgs>(args?: SelectSubset<T, DirectoryHistorialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DirectoryHistorialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DirectoryHistorial.
     * @param {DirectoryHistorialCreateArgs} args - Arguments to create a DirectoryHistorial.
     * @example
     * // Create one DirectoryHistorial
     * const DirectoryHistorial = await prisma.directoryHistorial.create({
     *   data: {
     *     // ... data to create a DirectoryHistorial
     *   }
     * })
     * 
     */
    create<T extends DirectoryHistorialCreateArgs>(args: SelectSubset<T, DirectoryHistorialCreateArgs<ExtArgs>>): Prisma__DirectoryHistorialClient<$Result.GetResult<Prisma.$DirectoryHistorialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DirectoryHistorials.
     * @param {DirectoryHistorialCreateManyArgs} args - Arguments to create many DirectoryHistorials.
     * @example
     * // Create many DirectoryHistorials
     * const directoryHistorial = await prisma.directoryHistorial.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DirectoryHistorialCreateManyArgs>(args?: SelectSubset<T, DirectoryHistorialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DirectoryHistorials and returns the data saved in the database.
     * @param {DirectoryHistorialCreateManyAndReturnArgs} args - Arguments to create many DirectoryHistorials.
     * @example
     * // Create many DirectoryHistorials
     * const directoryHistorial = await prisma.directoryHistorial.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DirectoryHistorials and only return the `id`
     * const directoryHistorialWithIdOnly = await prisma.directoryHistorial.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DirectoryHistorialCreateManyAndReturnArgs>(args?: SelectSubset<T, DirectoryHistorialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DirectoryHistorialPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DirectoryHistorial.
     * @param {DirectoryHistorialDeleteArgs} args - Arguments to delete one DirectoryHistorial.
     * @example
     * // Delete one DirectoryHistorial
     * const DirectoryHistorial = await prisma.directoryHistorial.delete({
     *   where: {
     *     // ... filter to delete one DirectoryHistorial
     *   }
     * })
     * 
     */
    delete<T extends DirectoryHistorialDeleteArgs>(args: SelectSubset<T, DirectoryHistorialDeleteArgs<ExtArgs>>): Prisma__DirectoryHistorialClient<$Result.GetResult<Prisma.$DirectoryHistorialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DirectoryHistorial.
     * @param {DirectoryHistorialUpdateArgs} args - Arguments to update one DirectoryHistorial.
     * @example
     * // Update one DirectoryHistorial
     * const directoryHistorial = await prisma.directoryHistorial.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DirectoryHistorialUpdateArgs>(args: SelectSubset<T, DirectoryHistorialUpdateArgs<ExtArgs>>): Prisma__DirectoryHistorialClient<$Result.GetResult<Prisma.$DirectoryHistorialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DirectoryHistorials.
     * @param {DirectoryHistorialDeleteManyArgs} args - Arguments to filter DirectoryHistorials to delete.
     * @example
     * // Delete a few DirectoryHistorials
     * const { count } = await prisma.directoryHistorial.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DirectoryHistorialDeleteManyArgs>(args?: SelectSubset<T, DirectoryHistorialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DirectoryHistorials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectoryHistorialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DirectoryHistorials
     * const directoryHistorial = await prisma.directoryHistorial.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DirectoryHistorialUpdateManyArgs>(args: SelectSubset<T, DirectoryHistorialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DirectoryHistorials and returns the data updated in the database.
     * @param {DirectoryHistorialUpdateManyAndReturnArgs} args - Arguments to update many DirectoryHistorials.
     * @example
     * // Update many DirectoryHistorials
     * const directoryHistorial = await prisma.directoryHistorial.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DirectoryHistorials and only return the `id`
     * const directoryHistorialWithIdOnly = await prisma.directoryHistorial.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DirectoryHistorialUpdateManyAndReturnArgs>(args: SelectSubset<T, DirectoryHistorialUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DirectoryHistorialPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DirectoryHistorial.
     * @param {DirectoryHistorialUpsertArgs} args - Arguments to update or create a DirectoryHistorial.
     * @example
     * // Update or create a DirectoryHistorial
     * const directoryHistorial = await prisma.directoryHistorial.upsert({
     *   create: {
     *     // ... data to create a DirectoryHistorial
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DirectoryHistorial we want to update
     *   }
     * })
     */
    upsert<T extends DirectoryHistorialUpsertArgs>(args: SelectSubset<T, DirectoryHistorialUpsertArgs<ExtArgs>>): Prisma__DirectoryHistorialClient<$Result.GetResult<Prisma.$DirectoryHistorialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DirectoryHistorials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectoryHistorialCountArgs} args - Arguments to filter DirectoryHistorials to count.
     * @example
     * // Count the number of DirectoryHistorials
     * const count = await prisma.directoryHistorial.count({
     *   where: {
     *     // ... the filter for the DirectoryHistorials we want to count
     *   }
     * })
    **/
    count<T extends DirectoryHistorialCountArgs>(
      args?: Subset<T, DirectoryHistorialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DirectoryHistorialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DirectoryHistorial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectoryHistorialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DirectoryHistorialAggregateArgs>(args: Subset<T, DirectoryHistorialAggregateArgs>): Prisma.PrismaPromise<GetDirectoryHistorialAggregateType<T>>

    /**
     * Group by DirectoryHistorial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectoryHistorialGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DirectoryHistorialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DirectoryHistorialGroupByArgs['orderBy'] }
        : { orderBy?: DirectoryHistorialGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DirectoryHistorialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDirectoryHistorialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DirectoryHistorial model
   */
  readonly fields: DirectoryHistorialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DirectoryHistorial.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DirectoryHistorialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    equipment<T extends DirectoryHistorial$equipmentArgs<ExtArgs> = {}>(args?: Subset<T, DirectoryHistorial$equipmentArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DirectoryHistorial model
   */
  interface DirectoryHistorialFieldRefs {
    readonly id: FieldRef<"DirectoryHistorial", 'BigInt'>
    readonly equipment_id: FieldRef<"DirectoryHistorial", 'BigInt'>
    readonly filename: FieldRef<"DirectoryHistorial", 'String'>
    readonly filepath: FieldRef<"DirectoryHistorial", 'String'>
    readonly modified_at: FieldRef<"DirectoryHistorial", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * DirectoryHistorial findUnique
   */
  export type DirectoryHistorialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectoryHistorial
     */
    select?: DirectoryHistorialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DirectoryHistorial
     */
    omit?: DirectoryHistorialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectoryHistorialInclude<ExtArgs> | null
    /**
     * Filter, which DirectoryHistorial to fetch.
     */
    where: DirectoryHistorialWhereUniqueInput
  }

  /**
   * DirectoryHistorial findUniqueOrThrow
   */
  export type DirectoryHistorialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectoryHistorial
     */
    select?: DirectoryHistorialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DirectoryHistorial
     */
    omit?: DirectoryHistorialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectoryHistorialInclude<ExtArgs> | null
    /**
     * Filter, which DirectoryHistorial to fetch.
     */
    where: DirectoryHistorialWhereUniqueInput
  }

  /**
   * DirectoryHistorial findFirst
   */
  export type DirectoryHistorialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectoryHistorial
     */
    select?: DirectoryHistorialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DirectoryHistorial
     */
    omit?: DirectoryHistorialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectoryHistorialInclude<ExtArgs> | null
    /**
     * Filter, which DirectoryHistorial to fetch.
     */
    where?: DirectoryHistorialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DirectoryHistorials to fetch.
     */
    orderBy?: DirectoryHistorialOrderByWithRelationInput | DirectoryHistorialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DirectoryHistorials.
     */
    cursor?: DirectoryHistorialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DirectoryHistorials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DirectoryHistorials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DirectoryHistorials.
     */
    distinct?: DirectoryHistorialScalarFieldEnum | DirectoryHistorialScalarFieldEnum[]
  }

  /**
   * DirectoryHistorial findFirstOrThrow
   */
  export type DirectoryHistorialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectoryHistorial
     */
    select?: DirectoryHistorialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DirectoryHistorial
     */
    omit?: DirectoryHistorialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectoryHistorialInclude<ExtArgs> | null
    /**
     * Filter, which DirectoryHistorial to fetch.
     */
    where?: DirectoryHistorialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DirectoryHistorials to fetch.
     */
    orderBy?: DirectoryHistorialOrderByWithRelationInput | DirectoryHistorialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DirectoryHistorials.
     */
    cursor?: DirectoryHistorialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DirectoryHistorials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DirectoryHistorials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DirectoryHistorials.
     */
    distinct?: DirectoryHistorialScalarFieldEnum | DirectoryHistorialScalarFieldEnum[]
  }

  /**
   * DirectoryHistorial findMany
   */
  export type DirectoryHistorialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectoryHistorial
     */
    select?: DirectoryHistorialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DirectoryHistorial
     */
    omit?: DirectoryHistorialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectoryHistorialInclude<ExtArgs> | null
    /**
     * Filter, which DirectoryHistorials to fetch.
     */
    where?: DirectoryHistorialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DirectoryHistorials to fetch.
     */
    orderBy?: DirectoryHistorialOrderByWithRelationInput | DirectoryHistorialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DirectoryHistorials.
     */
    cursor?: DirectoryHistorialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DirectoryHistorials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DirectoryHistorials.
     */
    skip?: number
    distinct?: DirectoryHistorialScalarFieldEnum | DirectoryHistorialScalarFieldEnum[]
  }

  /**
   * DirectoryHistorial create
   */
  export type DirectoryHistorialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectoryHistorial
     */
    select?: DirectoryHistorialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DirectoryHistorial
     */
    omit?: DirectoryHistorialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectoryHistorialInclude<ExtArgs> | null
    /**
     * The data needed to create a DirectoryHistorial.
     */
    data: XOR<DirectoryHistorialCreateInput, DirectoryHistorialUncheckedCreateInput>
  }

  /**
   * DirectoryHistorial createMany
   */
  export type DirectoryHistorialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DirectoryHistorials.
     */
    data: DirectoryHistorialCreateManyInput | DirectoryHistorialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DirectoryHistorial createManyAndReturn
   */
  export type DirectoryHistorialCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectoryHistorial
     */
    select?: DirectoryHistorialSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DirectoryHistorial
     */
    omit?: DirectoryHistorialOmit<ExtArgs> | null
    /**
     * The data used to create many DirectoryHistorials.
     */
    data: DirectoryHistorialCreateManyInput | DirectoryHistorialCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectoryHistorialIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DirectoryHistorial update
   */
  export type DirectoryHistorialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectoryHistorial
     */
    select?: DirectoryHistorialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DirectoryHistorial
     */
    omit?: DirectoryHistorialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectoryHistorialInclude<ExtArgs> | null
    /**
     * The data needed to update a DirectoryHistorial.
     */
    data: XOR<DirectoryHistorialUpdateInput, DirectoryHistorialUncheckedUpdateInput>
    /**
     * Choose, which DirectoryHistorial to update.
     */
    where: DirectoryHistorialWhereUniqueInput
  }

  /**
   * DirectoryHistorial updateMany
   */
  export type DirectoryHistorialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DirectoryHistorials.
     */
    data: XOR<DirectoryHistorialUpdateManyMutationInput, DirectoryHistorialUncheckedUpdateManyInput>
    /**
     * Filter which DirectoryHistorials to update
     */
    where?: DirectoryHistorialWhereInput
    /**
     * Limit how many DirectoryHistorials to update.
     */
    limit?: number
  }

  /**
   * DirectoryHistorial updateManyAndReturn
   */
  export type DirectoryHistorialUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectoryHistorial
     */
    select?: DirectoryHistorialSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DirectoryHistorial
     */
    omit?: DirectoryHistorialOmit<ExtArgs> | null
    /**
     * The data used to update DirectoryHistorials.
     */
    data: XOR<DirectoryHistorialUpdateManyMutationInput, DirectoryHistorialUncheckedUpdateManyInput>
    /**
     * Filter which DirectoryHistorials to update
     */
    where?: DirectoryHistorialWhereInput
    /**
     * Limit how many DirectoryHistorials to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectoryHistorialIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DirectoryHistorial upsert
   */
  export type DirectoryHistorialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectoryHistorial
     */
    select?: DirectoryHistorialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DirectoryHistorial
     */
    omit?: DirectoryHistorialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectoryHistorialInclude<ExtArgs> | null
    /**
     * The filter to search for the DirectoryHistorial to update in case it exists.
     */
    where: DirectoryHistorialWhereUniqueInput
    /**
     * In case the DirectoryHistorial found by the `where` argument doesn't exist, create a new DirectoryHistorial with this data.
     */
    create: XOR<DirectoryHistorialCreateInput, DirectoryHistorialUncheckedCreateInput>
    /**
     * In case the DirectoryHistorial was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DirectoryHistorialUpdateInput, DirectoryHistorialUncheckedUpdateInput>
  }

  /**
   * DirectoryHistorial delete
   */
  export type DirectoryHistorialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectoryHistorial
     */
    select?: DirectoryHistorialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DirectoryHistorial
     */
    omit?: DirectoryHistorialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectoryHistorialInclude<ExtArgs> | null
    /**
     * Filter which DirectoryHistorial to delete.
     */
    where: DirectoryHistorialWhereUniqueInput
  }

  /**
   * DirectoryHistorial deleteMany
   */
  export type DirectoryHistorialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DirectoryHistorials to delete
     */
    where?: DirectoryHistorialWhereInput
    /**
     * Limit how many DirectoryHistorials to delete.
     */
    limit?: number
  }

  /**
   * DirectoryHistorial.equipment
   */
  export type DirectoryHistorial$equipmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    where?: EquipmentWhereInput
  }

  /**
   * DirectoryHistorial without action
   */
  export type DirectoryHistorialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectoryHistorial
     */
    select?: DirectoryHistorialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DirectoryHistorial
     */
    omit?: DirectoryHistorialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectoryHistorialInclude<ExtArgs> | null
  }


  /**
   * Model EquipmentProfile
   */

  export type AggregateEquipmentProfile = {
    _count: EquipmentProfileCountAggregateOutputType | null
    _avg: EquipmentProfileAvgAggregateOutputType | null
    _sum: EquipmentProfileSumAggregateOutputType | null
    _min: EquipmentProfileMinAggregateOutputType | null
    _max: EquipmentProfileMaxAggregateOutputType | null
  }

  export type EquipmentProfileAvgAggregateOutputType = {
    id: number | null
  }

  export type EquipmentProfileSumAggregateOutputType = {
    id: bigint | null
  }

  export type EquipmentProfileMinAggregateOutputType = {
    id: bigint | null
    communication_profile: string | null
    name: string | null
    active: boolean | null
    communication_type: string | null
  }

  export type EquipmentProfileMaxAggregateOutputType = {
    id: bigint | null
    communication_profile: string | null
    name: string | null
    active: boolean | null
    communication_type: string | null
  }

  export type EquipmentProfileCountAggregateOutputType = {
    id: number
    communication_profile: number
    name: number
    active: number
    communication_type: number
    _all: number
  }


  export type EquipmentProfileAvgAggregateInputType = {
    id?: true
  }

  export type EquipmentProfileSumAggregateInputType = {
    id?: true
  }

  export type EquipmentProfileMinAggregateInputType = {
    id?: true
    communication_profile?: true
    name?: true
    active?: true
    communication_type?: true
  }

  export type EquipmentProfileMaxAggregateInputType = {
    id?: true
    communication_profile?: true
    name?: true
    active?: true
    communication_type?: true
  }

  export type EquipmentProfileCountAggregateInputType = {
    id?: true
    communication_profile?: true
    name?: true
    active?: true
    communication_type?: true
    _all?: true
  }

  export type EquipmentProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EquipmentProfile to aggregate.
     */
    where?: EquipmentProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EquipmentProfiles to fetch.
     */
    orderBy?: EquipmentProfileOrderByWithRelationInput | EquipmentProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EquipmentProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EquipmentProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EquipmentProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EquipmentProfiles
    **/
    _count?: true | EquipmentProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EquipmentProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EquipmentProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EquipmentProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EquipmentProfileMaxAggregateInputType
  }

  export type GetEquipmentProfileAggregateType<T extends EquipmentProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateEquipmentProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEquipmentProfile[P]>
      : GetScalarType<T[P], AggregateEquipmentProfile[P]>
  }




  export type EquipmentProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipmentProfileWhereInput
    orderBy?: EquipmentProfileOrderByWithAggregationInput | EquipmentProfileOrderByWithAggregationInput[]
    by: EquipmentProfileScalarFieldEnum[] | EquipmentProfileScalarFieldEnum
    having?: EquipmentProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EquipmentProfileCountAggregateInputType | true
    _avg?: EquipmentProfileAvgAggregateInputType
    _sum?: EquipmentProfileSumAggregateInputType
    _min?: EquipmentProfileMinAggregateInputType
    _max?: EquipmentProfileMaxAggregateInputType
  }

  export type EquipmentProfileGroupByOutputType = {
    id: bigint
    communication_profile: string | null
    name: string | null
    active: boolean | null
    communication_type: string | null
    _count: EquipmentProfileCountAggregateOutputType | null
    _avg: EquipmentProfileAvgAggregateOutputType | null
    _sum: EquipmentProfileSumAggregateOutputType | null
    _min: EquipmentProfileMinAggregateOutputType | null
    _max: EquipmentProfileMaxAggregateOutputType | null
  }

  type GetEquipmentProfileGroupByPayload<T extends EquipmentProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EquipmentProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EquipmentProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EquipmentProfileGroupByOutputType[P]>
            : GetScalarType<T[P], EquipmentProfileGroupByOutputType[P]>
        }
      >
    >


  export type EquipmentProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    communication_profile?: boolean
    name?: boolean
    active?: boolean
    communication_type?: boolean
    communicationProfile?: boolean | EquipmentProfile$communicationProfileArgs<ExtArgs>
    equipments?: boolean | EquipmentProfile$equipmentsArgs<ExtArgs>
    _count?: boolean | EquipmentProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipmentProfile"]>

  export type EquipmentProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    communication_profile?: boolean
    name?: boolean
    active?: boolean
    communication_type?: boolean
    communicationProfile?: boolean | EquipmentProfile$communicationProfileArgs<ExtArgs>
  }, ExtArgs["result"]["equipmentProfile"]>

  export type EquipmentProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    communication_profile?: boolean
    name?: boolean
    active?: boolean
    communication_type?: boolean
    communicationProfile?: boolean | EquipmentProfile$communicationProfileArgs<ExtArgs>
  }, ExtArgs["result"]["equipmentProfile"]>

  export type EquipmentProfileSelectScalar = {
    id?: boolean
    communication_profile?: boolean
    name?: boolean
    active?: boolean
    communication_type?: boolean
  }

  export type EquipmentProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "communication_profile" | "name" | "active" | "communication_type", ExtArgs["result"]["equipmentProfile"]>
  export type EquipmentProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    communicationProfile?: boolean | EquipmentProfile$communicationProfileArgs<ExtArgs>
    equipments?: boolean | EquipmentProfile$equipmentsArgs<ExtArgs>
    _count?: boolean | EquipmentProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EquipmentProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    communicationProfile?: boolean | EquipmentProfile$communicationProfileArgs<ExtArgs>
  }
  export type EquipmentProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    communicationProfile?: boolean | EquipmentProfile$communicationProfileArgs<ExtArgs>
  }

  export type $EquipmentProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EquipmentProfile"
    objects: {
      communicationProfile: Prisma.$CommunicationProfilesPayload<ExtArgs> | null
      equipments: Prisma.$EquipmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      communication_profile: string | null
      name: string | null
      active: boolean | null
      communication_type: string | null
    }, ExtArgs["result"]["equipmentProfile"]>
    composites: {}
  }

  type EquipmentProfileGetPayload<S extends boolean | null | undefined | EquipmentProfileDefaultArgs> = $Result.GetResult<Prisma.$EquipmentProfilePayload, S>

  type EquipmentProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EquipmentProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EquipmentProfileCountAggregateInputType | true
    }

  export interface EquipmentProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EquipmentProfile'], meta: { name: 'EquipmentProfile' } }
    /**
     * Find zero or one EquipmentProfile that matches the filter.
     * @param {EquipmentProfileFindUniqueArgs} args - Arguments to find a EquipmentProfile
     * @example
     * // Get one EquipmentProfile
     * const equipmentProfile = await prisma.equipmentProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EquipmentProfileFindUniqueArgs>(args: SelectSubset<T, EquipmentProfileFindUniqueArgs<ExtArgs>>): Prisma__EquipmentProfileClient<$Result.GetResult<Prisma.$EquipmentProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EquipmentProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EquipmentProfileFindUniqueOrThrowArgs} args - Arguments to find a EquipmentProfile
     * @example
     * // Get one EquipmentProfile
     * const equipmentProfile = await prisma.equipmentProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EquipmentProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, EquipmentProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EquipmentProfileClient<$Result.GetResult<Prisma.$EquipmentProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EquipmentProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentProfileFindFirstArgs} args - Arguments to find a EquipmentProfile
     * @example
     * // Get one EquipmentProfile
     * const equipmentProfile = await prisma.equipmentProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EquipmentProfileFindFirstArgs>(args?: SelectSubset<T, EquipmentProfileFindFirstArgs<ExtArgs>>): Prisma__EquipmentProfileClient<$Result.GetResult<Prisma.$EquipmentProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EquipmentProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentProfileFindFirstOrThrowArgs} args - Arguments to find a EquipmentProfile
     * @example
     * // Get one EquipmentProfile
     * const equipmentProfile = await prisma.equipmentProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EquipmentProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, EquipmentProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__EquipmentProfileClient<$Result.GetResult<Prisma.$EquipmentProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EquipmentProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EquipmentProfiles
     * const equipmentProfiles = await prisma.equipmentProfile.findMany()
     * 
     * // Get first 10 EquipmentProfiles
     * const equipmentProfiles = await prisma.equipmentProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const equipmentProfileWithIdOnly = await prisma.equipmentProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EquipmentProfileFindManyArgs>(args?: SelectSubset<T, EquipmentProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EquipmentProfile.
     * @param {EquipmentProfileCreateArgs} args - Arguments to create a EquipmentProfile.
     * @example
     * // Create one EquipmentProfile
     * const EquipmentProfile = await prisma.equipmentProfile.create({
     *   data: {
     *     // ... data to create a EquipmentProfile
     *   }
     * })
     * 
     */
    create<T extends EquipmentProfileCreateArgs>(args: SelectSubset<T, EquipmentProfileCreateArgs<ExtArgs>>): Prisma__EquipmentProfileClient<$Result.GetResult<Prisma.$EquipmentProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EquipmentProfiles.
     * @param {EquipmentProfileCreateManyArgs} args - Arguments to create many EquipmentProfiles.
     * @example
     * // Create many EquipmentProfiles
     * const equipmentProfile = await prisma.equipmentProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EquipmentProfileCreateManyArgs>(args?: SelectSubset<T, EquipmentProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EquipmentProfiles and returns the data saved in the database.
     * @param {EquipmentProfileCreateManyAndReturnArgs} args - Arguments to create many EquipmentProfiles.
     * @example
     * // Create many EquipmentProfiles
     * const equipmentProfile = await prisma.equipmentProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EquipmentProfiles and only return the `id`
     * const equipmentProfileWithIdOnly = await prisma.equipmentProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EquipmentProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, EquipmentProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EquipmentProfile.
     * @param {EquipmentProfileDeleteArgs} args - Arguments to delete one EquipmentProfile.
     * @example
     * // Delete one EquipmentProfile
     * const EquipmentProfile = await prisma.equipmentProfile.delete({
     *   where: {
     *     // ... filter to delete one EquipmentProfile
     *   }
     * })
     * 
     */
    delete<T extends EquipmentProfileDeleteArgs>(args: SelectSubset<T, EquipmentProfileDeleteArgs<ExtArgs>>): Prisma__EquipmentProfileClient<$Result.GetResult<Prisma.$EquipmentProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EquipmentProfile.
     * @param {EquipmentProfileUpdateArgs} args - Arguments to update one EquipmentProfile.
     * @example
     * // Update one EquipmentProfile
     * const equipmentProfile = await prisma.equipmentProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EquipmentProfileUpdateArgs>(args: SelectSubset<T, EquipmentProfileUpdateArgs<ExtArgs>>): Prisma__EquipmentProfileClient<$Result.GetResult<Prisma.$EquipmentProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EquipmentProfiles.
     * @param {EquipmentProfileDeleteManyArgs} args - Arguments to filter EquipmentProfiles to delete.
     * @example
     * // Delete a few EquipmentProfiles
     * const { count } = await prisma.equipmentProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EquipmentProfileDeleteManyArgs>(args?: SelectSubset<T, EquipmentProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EquipmentProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EquipmentProfiles
     * const equipmentProfile = await prisma.equipmentProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EquipmentProfileUpdateManyArgs>(args: SelectSubset<T, EquipmentProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EquipmentProfiles and returns the data updated in the database.
     * @param {EquipmentProfileUpdateManyAndReturnArgs} args - Arguments to update many EquipmentProfiles.
     * @example
     * // Update many EquipmentProfiles
     * const equipmentProfile = await prisma.equipmentProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EquipmentProfiles and only return the `id`
     * const equipmentProfileWithIdOnly = await prisma.equipmentProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EquipmentProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, EquipmentProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EquipmentProfile.
     * @param {EquipmentProfileUpsertArgs} args - Arguments to update or create a EquipmentProfile.
     * @example
     * // Update or create a EquipmentProfile
     * const equipmentProfile = await prisma.equipmentProfile.upsert({
     *   create: {
     *     // ... data to create a EquipmentProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EquipmentProfile we want to update
     *   }
     * })
     */
    upsert<T extends EquipmentProfileUpsertArgs>(args: SelectSubset<T, EquipmentProfileUpsertArgs<ExtArgs>>): Prisma__EquipmentProfileClient<$Result.GetResult<Prisma.$EquipmentProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EquipmentProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentProfileCountArgs} args - Arguments to filter EquipmentProfiles to count.
     * @example
     * // Count the number of EquipmentProfiles
     * const count = await prisma.equipmentProfile.count({
     *   where: {
     *     // ... the filter for the EquipmentProfiles we want to count
     *   }
     * })
    **/
    count<T extends EquipmentProfileCountArgs>(
      args?: Subset<T, EquipmentProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EquipmentProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EquipmentProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EquipmentProfileAggregateArgs>(args: Subset<T, EquipmentProfileAggregateArgs>): Prisma.PrismaPromise<GetEquipmentProfileAggregateType<T>>

    /**
     * Group by EquipmentProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EquipmentProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EquipmentProfileGroupByArgs['orderBy'] }
        : { orderBy?: EquipmentProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EquipmentProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEquipmentProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EquipmentProfile model
   */
  readonly fields: EquipmentProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EquipmentProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EquipmentProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    communicationProfile<T extends EquipmentProfile$communicationProfileArgs<ExtArgs> = {}>(args?: Subset<T, EquipmentProfile$communicationProfileArgs<ExtArgs>>): Prisma__CommunicationProfilesClient<$Result.GetResult<Prisma.$CommunicationProfilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    equipments<T extends EquipmentProfile$equipmentsArgs<ExtArgs> = {}>(args?: Subset<T, EquipmentProfile$equipmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EquipmentProfile model
   */
  interface EquipmentProfileFieldRefs {
    readonly id: FieldRef<"EquipmentProfile", 'BigInt'>
    readonly communication_profile: FieldRef<"EquipmentProfile", 'String'>
    readonly name: FieldRef<"EquipmentProfile", 'String'>
    readonly active: FieldRef<"EquipmentProfile", 'Boolean'>
    readonly communication_type: FieldRef<"EquipmentProfile", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EquipmentProfile findUnique
   */
  export type EquipmentProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentProfile
     */
    select?: EquipmentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentProfile
     */
    omit?: EquipmentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentProfileInclude<ExtArgs> | null
    /**
     * Filter, which EquipmentProfile to fetch.
     */
    where: EquipmentProfileWhereUniqueInput
  }

  /**
   * EquipmentProfile findUniqueOrThrow
   */
  export type EquipmentProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentProfile
     */
    select?: EquipmentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentProfile
     */
    omit?: EquipmentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentProfileInclude<ExtArgs> | null
    /**
     * Filter, which EquipmentProfile to fetch.
     */
    where: EquipmentProfileWhereUniqueInput
  }

  /**
   * EquipmentProfile findFirst
   */
  export type EquipmentProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentProfile
     */
    select?: EquipmentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentProfile
     */
    omit?: EquipmentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentProfileInclude<ExtArgs> | null
    /**
     * Filter, which EquipmentProfile to fetch.
     */
    where?: EquipmentProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EquipmentProfiles to fetch.
     */
    orderBy?: EquipmentProfileOrderByWithRelationInput | EquipmentProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EquipmentProfiles.
     */
    cursor?: EquipmentProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EquipmentProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EquipmentProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EquipmentProfiles.
     */
    distinct?: EquipmentProfileScalarFieldEnum | EquipmentProfileScalarFieldEnum[]
  }

  /**
   * EquipmentProfile findFirstOrThrow
   */
  export type EquipmentProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentProfile
     */
    select?: EquipmentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentProfile
     */
    omit?: EquipmentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentProfileInclude<ExtArgs> | null
    /**
     * Filter, which EquipmentProfile to fetch.
     */
    where?: EquipmentProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EquipmentProfiles to fetch.
     */
    orderBy?: EquipmentProfileOrderByWithRelationInput | EquipmentProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EquipmentProfiles.
     */
    cursor?: EquipmentProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EquipmentProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EquipmentProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EquipmentProfiles.
     */
    distinct?: EquipmentProfileScalarFieldEnum | EquipmentProfileScalarFieldEnum[]
  }

  /**
   * EquipmentProfile findMany
   */
  export type EquipmentProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentProfile
     */
    select?: EquipmentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentProfile
     */
    omit?: EquipmentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentProfileInclude<ExtArgs> | null
    /**
     * Filter, which EquipmentProfiles to fetch.
     */
    where?: EquipmentProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EquipmentProfiles to fetch.
     */
    orderBy?: EquipmentProfileOrderByWithRelationInput | EquipmentProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EquipmentProfiles.
     */
    cursor?: EquipmentProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EquipmentProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EquipmentProfiles.
     */
    skip?: number
    distinct?: EquipmentProfileScalarFieldEnum | EquipmentProfileScalarFieldEnum[]
  }

  /**
   * EquipmentProfile create
   */
  export type EquipmentProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentProfile
     */
    select?: EquipmentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentProfile
     */
    omit?: EquipmentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a EquipmentProfile.
     */
    data: XOR<EquipmentProfileCreateInput, EquipmentProfileUncheckedCreateInput>
  }

  /**
   * EquipmentProfile createMany
   */
  export type EquipmentProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EquipmentProfiles.
     */
    data: EquipmentProfileCreateManyInput | EquipmentProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EquipmentProfile createManyAndReturn
   */
  export type EquipmentProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentProfile
     */
    select?: EquipmentProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentProfile
     */
    omit?: EquipmentProfileOmit<ExtArgs> | null
    /**
     * The data used to create many EquipmentProfiles.
     */
    data: EquipmentProfileCreateManyInput | EquipmentProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EquipmentProfile update
   */
  export type EquipmentProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentProfile
     */
    select?: EquipmentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentProfile
     */
    omit?: EquipmentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a EquipmentProfile.
     */
    data: XOR<EquipmentProfileUpdateInput, EquipmentProfileUncheckedUpdateInput>
    /**
     * Choose, which EquipmentProfile to update.
     */
    where: EquipmentProfileWhereUniqueInput
  }

  /**
   * EquipmentProfile updateMany
   */
  export type EquipmentProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EquipmentProfiles.
     */
    data: XOR<EquipmentProfileUpdateManyMutationInput, EquipmentProfileUncheckedUpdateManyInput>
    /**
     * Filter which EquipmentProfiles to update
     */
    where?: EquipmentProfileWhereInput
    /**
     * Limit how many EquipmentProfiles to update.
     */
    limit?: number
  }

  /**
   * EquipmentProfile updateManyAndReturn
   */
  export type EquipmentProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentProfile
     */
    select?: EquipmentProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentProfile
     */
    omit?: EquipmentProfileOmit<ExtArgs> | null
    /**
     * The data used to update EquipmentProfiles.
     */
    data: XOR<EquipmentProfileUpdateManyMutationInput, EquipmentProfileUncheckedUpdateManyInput>
    /**
     * Filter which EquipmentProfiles to update
     */
    where?: EquipmentProfileWhereInput
    /**
     * Limit how many EquipmentProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EquipmentProfile upsert
   */
  export type EquipmentProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentProfile
     */
    select?: EquipmentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentProfile
     */
    omit?: EquipmentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the EquipmentProfile to update in case it exists.
     */
    where: EquipmentProfileWhereUniqueInput
    /**
     * In case the EquipmentProfile found by the `where` argument doesn't exist, create a new EquipmentProfile with this data.
     */
    create: XOR<EquipmentProfileCreateInput, EquipmentProfileUncheckedCreateInput>
    /**
     * In case the EquipmentProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EquipmentProfileUpdateInput, EquipmentProfileUncheckedUpdateInput>
  }

  /**
   * EquipmentProfile delete
   */
  export type EquipmentProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentProfile
     */
    select?: EquipmentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentProfile
     */
    omit?: EquipmentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentProfileInclude<ExtArgs> | null
    /**
     * Filter which EquipmentProfile to delete.
     */
    where: EquipmentProfileWhereUniqueInput
  }

  /**
   * EquipmentProfile deleteMany
   */
  export type EquipmentProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EquipmentProfiles to delete
     */
    where?: EquipmentProfileWhereInput
    /**
     * Limit how many EquipmentProfiles to delete.
     */
    limit?: number
  }

  /**
   * EquipmentProfile.communicationProfile
   */
  export type EquipmentProfile$communicationProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunicationProfiles
     */
    select?: CommunicationProfilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunicationProfiles
     */
    omit?: CommunicationProfilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunicationProfilesInclude<ExtArgs> | null
    where?: CommunicationProfilesWhereInput
  }

  /**
   * EquipmentProfile.equipments
   */
  export type EquipmentProfile$equipmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    where?: EquipmentWhereInput
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    cursor?: EquipmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EquipmentScalarFieldEnum | EquipmentScalarFieldEnum[]
  }

  /**
   * EquipmentProfile without action
   */
  export type EquipmentProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentProfile
     */
    select?: EquipmentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentProfile
     */
    omit?: EquipmentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentProfileInclude<ExtArgs> | null
  }


  /**
   * Model Equipment
   */

  export type AggregateEquipment = {
    _count: EquipmentCountAggregateOutputType | null
    _avg: EquipmentAvgAggregateOutputType | null
    _sum: EquipmentSumAggregateOutputType | null
    _min: EquipmentMinAggregateOutputType | null
    _max: EquipmentMaxAggregateOutputType | null
  }

  export type EquipmentAvgAggregateOutputType = {
    id: number | null
    profile_id: number | null
  }

  export type EquipmentSumAggregateOutputType = {
    id: bigint | null
    profile_id: bigint | null
  }

  export type EquipmentMinAggregateOutputType = {
    id: bigint | null
    profile_id: bigint | null
    name: string | null
    created_at: Date | null
    modified_at: Date | null
    last_connection: Date | null
    connection_status: string | null
    active: boolean | null
  }

  export type EquipmentMaxAggregateOutputType = {
    id: bigint | null
    profile_id: bigint | null
    name: string | null
    created_at: Date | null
    modified_at: Date | null
    last_connection: Date | null
    connection_status: string | null
    active: boolean | null
  }

  export type EquipmentCountAggregateOutputType = {
    id: number
    profile_id: number
    name: number
    created_at: number
    modified_at: number
    last_connection: number
    connection_status: number
    active: number
    _all: number
  }


  export type EquipmentAvgAggregateInputType = {
    id?: true
    profile_id?: true
  }

  export type EquipmentSumAggregateInputType = {
    id?: true
    profile_id?: true
  }

  export type EquipmentMinAggregateInputType = {
    id?: true
    profile_id?: true
    name?: true
    created_at?: true
    modified_at?: true
    last_connection?: true
    connection_status?: true
    active?: true
  }

  export type EquipmentMaxAggregateInputType = {
    id?: true
    profile_id?: true
    name?: true
    created_at?: true
    modified_at?: true
    last_connection?: true
    connection_status?: true
    active?: true
  }

  export type EquipmentCountAggregateInputType = {
    id?: true
    profile_id?: true
    name?: true
    created_at?: true
    modified_at?: true
    last_connection?: true
    connection_status?: true
    active?: true
    _all?: true
  }

  export type EquipmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Equipment to aggregate.
     */
    where?: EquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipment to fetch.
     */
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipment from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipment.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Equipment
    **/
    _count?: true | EquipmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EquipmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EquipmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EquipmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EquipmentMaxAggregateInputType
  }

  export type GetEquipmentAggregateType<T extends EquipmentAggregateArgs> = {
        [P in keyof T & keyof AggregateEquipment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEquipment[P]>
      : GetScalarType<T[P], AggregateEquipment[P]>
  }




  export type EquipmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipmentWhereInput
    orderBy?: EquipmentOrderByWithAggregationInput | EquipmentOrderByWithAggregationInput[]
    by: EquipmentScalarFieldEnum[] | EquipmentScalarFieldEnum
    having?: EquipmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EquipmentCountAggregateInputType | true
    _avg?: EquipmentAvgAggregateInputType
    _sum?: EquipmentSumAggregateInputType
    _min?: EquipmentMinAggregateInputType
    _max?: EquipmentMaxAggregateInputType
  }

  export type EquipmentGroupByOutputType = {
    id: bigint
    profile_id: bigint | null
    name: string | null
    created_at: Date | null
    modified_at: Date | null
    last_connection: Date | null
    connection_status: string | null
    active: boolean | null
    _count: EquipmentCountAggregateOutputType | null
    _avg: EquipmentAvgAggregateOutputType | null
    _sum: EquipmentSumAggregateOutputType | null
    _min: EquipmentMinAggregateOutputType | null
    _max: EquipmentMaxAggregateOutputType | null
  }

  type GetEquipmentGroupByPayload<T extends EquipmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EquipmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EquipmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EquipmentGroupByOutputType[P]>
            : GetScalarType<T[P], EquipmentGroupByOutputType[P]>
        }
      >
    >


  export type EquipmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profile_id?: boolean
    name?: boolean
    created_at?: boolean
    modified_at?: boolean
    last_connection?: boolean
    connection_status?: boolean
    active?: boolean
    directoryHistorials?: boolean | Equipment$directoryHistorialsArgs<ExtArgs>
    equipmentProfile?: boolean | Equipment$equipmentProfileArgs<ExtArgs>
    parameters?: boolean | Equipment$parametersArgs<ExtArgs>
    EquipmentConfiguration?: boolean | Equipment$EquipmentConfigurationArgs<ExtArgs>
    _count?: boolean | EquipmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipment"]>

  export type EquipmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profile_id?: boolean
    name?: boolean
    created_at?: boolean
    modified_at?: boolean
    last_connection?: boolean
    connection_status?: boolean
    active?: boolean
    equipmentProfile?: boolean | Equipment$equipmentProfileArgs<ExtArgs>
  }, ExtArgs["result"]["equipment"]>

  export type EquipmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profile_id?: boolean
    name?: boolean
    created_at?: boolean
    modified_at?: boolean
    last_connection?: boolean
    connection_status?: boolean
    active?: boolean
    equipmentProfile?: boolean | Equipment$equipmentProfileArgs<ExtArgs>
  }, ExtArgs["result"]["equipment"]>

  export type EquipmentSelectScalar = {
    id?: boolean
    profile_id?: boolean
    name?: boolean
    created_at?: boolean
    modified_at?: boolean
    last_connection?: boolean
    connection_status?: boolean
    active?: boolean
  }

  export type EquipmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "profile_id" | "name" | "created_at" | "modified_at" | "last_connection" | "connection_status" | "active", ExtArgs["result"]["equipment"]>
  export type EquipmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    directoryHistorials?: boolean | Equipment$directoryHistorialsArgs<ExtArgs>
    equipmentProfile?: boolean | Equipment$equipmentProfileArgs<ExtArgs>
    parameters?: boolean | Equipment$parametersArgs<ExtArgs>
    EquipmentConfiguration?: boolean | Equipment$EquipmentConfigurationArgs<ExtArgs>
    _count?: boolean | EquipmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EquipmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipmentProfile?: boolean | Equipment$equipmentProfileArgs<ExtArgs>
  }
  export type EquipmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipmentProfile?: boolean | Equipment$equipmentProfileArgs<ExtArgs>
  }

  export type $EquipmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Equipment"
    objects: {
      directoryHistorials: Prisma.$DirectoryHistorialPayload<ExtArgs>[]
      equipmentProfile: Prisma.$EquipmentProfilePayload<ExtArgs> | null
      parameters: Prisma.$ParameterPayload<ExtArgs>[]
      EquipmentConfiguration: Prisma.$EquipmentConfigurationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      profile_id: bigint | null
      name: string | null
      created_at: Date | null
      modified_at: Date | null
      last_connection: Date | null
      connection_status: string | null
      active: boolean | null
    }, ExtArgs["result"]["equipment"]>
    composites: {}
  }

  type EquipmentGetPayload<S extends boolean | null | undefined | EquipmentDefaultArgs> = $Result.GetResult<Prisma.$EquipmentPayload, S>

  type EquipmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EquipmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EquipmentCountAggregateInputType | true
    }

  export interface EquipmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Equipment'], meta: { name: 'Equipment' } }
    /**
     * Find zero or one Equipment that matches the filter.
     * @param {EquipmentFindUniqueArgs} args - Arguments to find a Equipment
     * @example
     * // Get one Equipment
     * const equipment = await prisma.equipment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EquipmentFindUniqueArgs>(args: SelectSubset<T, EquipmentFindUniqueArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Equipment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EquipmentFindUniqueOrThrowArgs} args - Arguments to find a Equipment
     * @example
     * // Get one Equipment
     * const equipment = await prisma.equipment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EquipmentFindUniqueOrThrowArgs>(args: SelectSubset<T, EquipmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Equipment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentFindFirstArgs} args - Arguments to find a Equipment
     * @example
     * // Get one Equipment
     * const equipment = await prisma.equipment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EquipmentFindFirstArgs>(args?: SelectSubset<T, EquipmentFindFirstArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Equipment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentFindFirstOrThrowArgs} args - Arguments to find a Equipment
     * @example
     * // Get one Equipment
     * const equipment = await prisma.equipment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EquipmentFindFirstOrThrowArgs>(args?: SelectSubset<T, EquipmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Equipment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Equipment
     * const equipment = await prisma.equipment.findMany()
     * 
     * // Get first 10 Equipment
     * const equipment = await prisma.equipment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const equipmentWithIdOnly = await prisma.equipment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EquipmentFindManyArgs>(args?: SelectSubset<T, EquipmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Equipment.
     * @param {EquipmentCreateArgs} args - Arguments to create a Equipment.
     * @example
     * // Create one Equipment
     * const Equipment = await prisma.equipment.create({
     *   data: {
     *     // ... data to create a Equipment
     *   }
     * })
     * 
     */
    create<T extends EquipmentCreateArgs>(args: SelectSubset<T, EquipmentCreateArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Equipment.
     * @param {EquipmentCreateManyArgs} args - Arguments to create many Equipment.
     * @example
     * // Create many Equipment
     * const equipment = await prisma.equipment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EquipmentCreateManyArgs>(args?: SelectSubset<T, EquipmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Equipment and returns the data saved in the database.
     * @param {EquipmentCreateManyAndReturnArgs} args - Arguments to create many Equipment.
     * @example
     * // Create many Equipment
     * const equipment = await prisma.equipment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Equipment and only return the `id`
     * const equipmentWithIdOnly = await prisma.equipment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EquipmentCreateManyAndReturnArgs>(args?: SelectSubset<T, EquipmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Equipment.
     * @param {EquipmentDeleteArgs} args - Arguments to delete one Equipment.
     * @example
     * // Delete one Equipment
     * const Equipment = await prisma.equipment.delete({
     *   where: {
     *     // ... filter to delete one Equipment
     *   }
     * })
     * 
     */
    delete<T extends EquipmentDeleteArgs>(args: SelectSubset<T, EquipmentDeleteArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Equipment.
     * @param {EquipmentUpdateArgs} args - Arguments to update one Equipment.
     * @example
     * // Update one Equipment
     * const equipment = await prisma.equipment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EquipmentUpdateArgs>(args: SelectSubset<T, EquipmentUpdateArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Equipment.
     * @param {EquipmentDeleteManyArgs} args - Arguments to filter Equipment to delete.
     * @example
     * // Delete a few Equipment
     * const { count } = await prisma.equipment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EquipmentDeleteManyArgs>(args?: SelectSubset<T, EquipmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Equipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Equipment
     * const equipment = await prisma.equipment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EquipmentUpdateManyArgs>(args: SelectSubset<T, EquipmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Equipment and returns the data updated in the database.
     * @param {EquipmentUpdateManyAndReturnArgs} args - Arguments to update many Equipment.
     * @example
     * // Update many Equipment
     * const equipment = await prisma.equipment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Equipment and only return the `id`
     * const equipmentWithIdOnly = await prisma.equipment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EquipmentUpdateManyAndReturnArgs>(args: SelectSubset<T, EquipmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Equipment.
     * @param {EquipmentUpsertArgs} args - Arguments to update or create a Equipment.
     * @example
     * // Update or create a Equipment
     * const equipment = await prisma.equipment.upsert({
     *   create: {
     *     // ... data to create a Equipment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Equipment we want to update
     *   }
     * })
     */
    upsert<T extends EquipmentUpsertArgs>(args: SelectSubset<T, EquipmentUpsertArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Equipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentCountArgs} args - Arguments to filter Equipment to count.
     * @example
     * // Count the number of Equipment
     * const count = await prisma.equipment.count({
     *   where: {
     *     // ... the filter for the Equipment we want to count
     *   }
     * })
    **/
    count<T extends EquipmentCountArgs>(
      args?: Subset<T, EquipmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EquipmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Equipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EquipmentAggregateArgs>(args: Subset<T, EquipmentAggregateArgs>): Prisma.PrismaPromise<GetEquipmentAggregateType<T>>

    /**
     * Group by Equipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EquipmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EquipmentGroupByArgs['orderBy'] }
        : { orderBy?: EquipmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EquipmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEquipmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Equipment model
   */
  readonly fields: EquipmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Equipment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EquipmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    directoryHistorials<T extends Equipment$directoryHistorialsArgs<ExtArgs> = {}>(args?: Subset<T, Equipment$directoryHistorialsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DirectoryHistorialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    equipmentProfile<T extends Equipment$equipmentProfileArgs<ExtArgs> = {}>(args?: Subset<T, Equipment$equipmentProfileArgs<ExtArgs>>): Prisma__EquipmentProfileClient<$Result.GetResult<Prisma.$EquipmentProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    parameters<T extends Equipment$parametersArgs<ExtArgs> = {}>(args?: Subset<T, Equipment$parametersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParameterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    EquipmentConfiguration<T extends Equipment$EquipmentConfigurationArgs<ExtArgs> = {}>(args?: Subset<T, Equipment$EquipmentConfigurationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentConfigurationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Equipment model
   */
  interface EquipmentFieldRefs {
    readonly id: FieldRef<"Equipment", 'BigInt'>
    readonly profile_id: FieldRef<"Equipment", 'BigInt'>
    readonly name: FieldRef<"Equipment", 'String'>
    readonly created_at: FieldRef<"Equipment", 'DateTime'>
    readonly modified_at: FieldRef<"Equipment", 'DateTime'>
    readonly last_connection: FieldRef<"Equipment", 'DateTime'>
    readonly connection_status: FieldRef<"Equipment", 'String'>
    readonly active: FieldRef<"Equipment", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Equipment findUnique
   */
  export type EquipmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where: EquipmentWhereUniqueInput
  }

  /**
   * Equipment findUniqueOrThrow
   */
  export type EquipmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where: EquipmentWhereUniqueInput
  }

  /**
   * Equipment findFirst
   */
  export type EquipmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where?: EquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipment to fetch.
     */
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Equipment.
     */
    cursor?: EquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipment from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipment.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Equipment.
     */
    distinct?: EquipmentScalarFieldEnum | EquipmentScalarFieldEnum[]
  }

  /**
   * Equipment findFirstOrThrow
   */
  export type EquipmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where?: EquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipment to fetch.
     */
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Equipment.
     */
    cursor?: EquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipment from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipment.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Equipment.
     */
    distinct?: EquipmentScalarFieldEnum | EquipmentScalarFieldEnum[]
  }

  /**
   * Equipment findMany
   */
  export type EquipmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where?: EquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipment to fetch.
     */
    orderBy?: EquipmentOrderByWithRelationInput | EquipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Equipment.
     */
    cursor?: EquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipment from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipment.
     */
    skip?: number
    distinct?: EquipmentScalarFieldEnum | EquipmentScalarFieldEnum[]
  }

  /**
   * Equipment create
   */
  export type EquipmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Equipment.
     */
    data: XOR<EquipmentCreateInput, EquipmentUncheckedCreateInput>
  }

  /**
   * Equipment createMany
   */
  export type EquipmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Equipment.
     */
    data: EquipmentCreateManyInput | EquipmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Equipment createManyAndReturn
   */
  export type EquipmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * The data used to create many Equipment.
     */
    data: EquipmentCreateManyInput | EquipmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Equipment update
   */
  export type EquipmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Equipment.
     */
    data: XOR<EquipmentUpdateInput, EquipmentUncheckedUpdateInput>
    /**
     * Choose, which Equipment to update.
     */
    where: EquipmentWhereUniqueInput
  }

  /**
   * Equipment updateMany
   */
  export type EquipmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Equipment.
     */
    data: XOR<EquipmentUpdateManyMutationInput, EquipmentUncheckedUpdateManyInput>
    /**
     * Filter which Equipment to update
     */
    where?: EquipmentWhereInput
    /**
     * Limit how many Equipment to update.
     */
    limit?: number
  }

  /**
   * Equipment updateManyAndReturn
   */
  export type EquipmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * The data used to update Equipment.
     */
    data: XOR<EquipmentUpdateManyMutationInput, EquipmentUncheckedUpdateManyInput>
    /**
     * Filter which Equipment to update
     */
    where?: EquipmentWhereInput
    /**
     * Limit how many Equipment to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Equipment upsert
   */
  export type EquipmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Equipment to update in case it exists.
     */
    where: EquipmentWhereUniqueInput
    /**
     * In case the Equipment found by the `where` argument doesn't exist, create a new Equipment with this data.
     */
    create: XOR<EquipmentCreateInput, EquipmentUncheckedCreateInput>
    /**
     * In case the Equipment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EquipmentUpdateInput, EquipmentUncheckedUpdateInput>
  }

  /**
   * Equipment delete
   */
  export type EquipmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    /**
     * Filter which Equipment to delete.
     */
    where: EquipmentWhereUniqueInput
  }

  /**
   * Equipment deleteMany
   */
  export type EquipmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Equipment to delete
     */
    where?: EquipmentWhereInput
    /**
     * Limit how many Equipment to delete.
     */
    limit?: number
  }

  /**
   * Equipment.directoryHistorials
   */
  export type Equipment$directoryHistorialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectoryHistorial
     */
    select?: DirectoryHistorialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DirectoryHistorial
     */
    omit?: DirectoryHistorialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectoryHistorialInclude<ExtArgs> | null
    where?: DirectoryHistorialWhereInput
    orderBy?: DirectoryHistorialOrderByWithRelationInput | DirectoryHistorialOrderByWithRelationInput[]
    cursor?: DirectoryHistorialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DirectoryHistorialScalarFieldEnum | DirectoryHistorialScalarFieldEnum[]
  }

  /**
   * Equipment.equipmentProfile
   */
  export type Equipment$equipmentProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentProfile
     */
    select?: EquipmentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentProfile
     */
    omit?: EquipmentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentProfileInclude<ExtArgs> | null
    where?: EquipmentProfileWhereInput
  }

  /**
   * Equipment.parameters
   */
  export type Equipment$parametersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parameter
     */
    select?: ParameterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parameter
     */
    omit?: ParameterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParameterInclude<ExtArgs> | null
    where?: ParameterWhereInput
    orderBy?: ParameterOrderByWithRelationInput | ParameterOrderByWithRelationInput[]
    cursor?: ParameterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParameterScalarFieldEnum | ParameterScalarFieldEnum[]
  }

  /**
   * Equipment.EquipmentConfiguration
   */
  export type Equipment$EquipmentConfigurationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentConfiguration
     */
    select?: EquipmentConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentConfiguration
     */
    omit?: EquipmentConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentConfigurationInclude<ExtArgs> | null
    where?: EquipmentConfigurationWhereInput
    orderBy?: EquipmentConfigurationOrderByWithRelationInput | EquipmentConfigurationOrderByWithRelationInput[]
    cursor?: EquipmentConfigurationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EquipmentConfigurationScalarFieldEnum | EquipmentConfigurationScalarFieldEnum[]
  }

  /**
   * Equipment without action
   */
  export type EquipmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
  }


  /**
   * Model HistogramResult
   */

  export type AggregateHistogramResult = {
    _count: HistogramResultCountAggregateOutputType | null
    _avg: HistogramResultAvgAggregateOutputType | null
    _sum: HistogramResultSumAggregateOutputType | null
    _min: HistogramResultMinAggregateOutputType | null
    _max: HistogramResultMaxAggregateOutputType | null
  }

  export type HistogramResultAvgAggregateOutputType = {
    id: number | null
  }

  export type HistogramResultSumAggregateOutputType = {
    id: bigint | null
  }

  export type HistogramResultMinAggregateOutputType = {
    id: bigint | null
    result_folio: string | null
    description: string | null
    value: string | null
    created_at: Date | null
    active: boolean | null
  }

  export type HistogramResultMaxAggregateOutputType = {
    id: bigint | null
    result_folio: string | null
    description: string | null
    value: string | null
    created_at: Date | null
    active: boolean | null
  }

  export type HistogramResultCountAggregateOutputType = {
    id: number
    result_folio: number
    description: number
    value: number
    created_at: number
    active: number
    _all: number
  }


  export type HistogramResultAvgAggregateInputType = {
    id?: true
  }

  export type HistogramResultSumAggregateInputType = {
    id?: true
  }

  export type HistogramResultMinAggregateInputType = {
    id?: true
    result_folio?: true
    description?: true
    value?: true
    created_at?: true
    active?: true
  }

  export type HistogramResultMaxAggregateInputType = {
    id?: true
    result_folio?: true
    description?: true
    value?: true
    created_at?: true
    active?: true
  }

  export type HistogramResultCountAggregateInputType = {
    id?: true
    result_folio?: true
    description?: true
    value?: true
    created_at?: true
    active?: true
    _all?: true
  }

  export type HistogramResultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HistogramResult to aggregate.
     */
    where?: HistogramResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistogramResults to fetch.
     */
    orderBy?: HistogramResultOrderByWithRelationInput | HistogramResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HistogramResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistogramResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistogramResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HistogramResults
    **/
    _count?: true | HistogramResultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HistogramResultAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HistogramResultSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HistogramResultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HistogramResultMaxAggregateInputType
  }

  export type GetHistogramResultAggregateType<T extends HistogramResultAggregateArgs> = {
        [P in keyof T & keyof AggregateHistogramResult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistogramResult[P]>
      : GetScalarType<T[P], AggregateHistogramResult[P]>
  }




  export type HistogramResultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistogramResultWhereInput
    orderBy?: HistogramResultOrderByWithAggregationInput | HistogramResultOrderByWithAggregationInput[]
    by: HistogramResultScalarFieldEnum[] | HistogramResultScalarFieldEnum
    having?: HistogramResultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HistogramResultCountAggregateInputType | true
    _avg?: HistogramResultAvgAggregateInputType
    _sum?: HistogramResultSumAggregateInputType
    _min?: HistogramResultMinAggregateInputType
    _max?: HistogramResultMaxAggregateInputType
  }

  export type HistogramResultGroupByOutputType = {
    id: bigint
    result_folio: string | null
    description: string | null
    value: string | null
    created_at: Date | null
    active: boolean | null
    _count: HistogramResultCountAggregateOutputType | null
    _avg: HistogramResultAvgAggregateOutputType | null
    _sum: HistogramResultSumAggregateOutputType | null
    _min: HistogramResultMinAggregateOutputType | null
    _max: HistogramResultMaxAggregateOutputType | null
  }

  type GetHistogramResultGroupByPayload<T extends HistogramResultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HistogramResultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HistogramResultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HistogramResultGroupByOutputType[P]>
            : GetScalarType<T[P], HistogramResultGroupByOutputType[P]>
        }
      >
    >


  export type HistogramResultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    result_folio?: boolean
    description?: boolean
    value?: boolean
    created_at?: boolean
    active?: boolean
    result?: boolean | HistogramResult$resultArgs<ExtArgs>
  }, ExtArgs["result"]["histogramResult"]>

  export type HistogramResultSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    result_folio?: boolean
    description?: boolean
    value?: boolean
    created_at?: boolean
    active?: boolean
    result?: boolean | HistogramResult$resultArgs<ExtArgs>
  }, ExtArgs["result"]["histogramResult"]>

  export type HistogramResultSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    result_folio?: boolean
    description?: boolean
    value?: boolean
    created_at?: boolean
    active?: boolean
    result?: boolean | HistogramResult$resultArgs<ExtArgs>
  }, ExtArgs["result"]["histogramResult"]>

  export type HistogramResultSelectScalar = {
    id?: boolean
    result_folio?: boolean
    description?: boolean
    value?: boolean
    created_at?: boolean
    active?: boolean
  }

  export type HistogramResultOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "result_folio" | "description" | "value" | "created_at" | "active", ExtArgs["result"]["histogramResult"]>
  export type HistogramResultInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    result?: boolean | HistogramResult$resultArgs<ExtArgs>
  }
  export type HistogramResultIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    result?: boolean | HistogramResult$resultArgs<ExtArgs>
  }
  export type HistogramResultIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    result?: boolean | HistogramResult$resultArgs<ExtArgs>
  }

  export type $HistogramResultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HistogramResult"
    objects: {
      result: Prisma.$ResultPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      result_folio: string | null
      description: string | null
      value: string | null
      created_at: Date | null
      active: boolean | null
    }, ExtArgs["result"]["histogramResult"]>
    composites: {}
  }

  type HistogramResultGetPayload<S extends boolean | null | undefined | HistogramResultDefaultArgs> = $Result.GetResult<Prisma.$HistogramResultPayload, S>

  type HistogramResultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HistogramResultFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HistogramResultCountAggregateInputType | true
    }

  export interface HistogramResultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HistogramResult'], meta: { name: 'HistogramResult' } }
    /**
     * Find zero or one HistogramResult that matches the filter.
     * @param {HistogramResultFindUniqueArgs} args - Arguments to find a HistogramResult
     * @example
     * // Get one HistogramResult
     * const histogramResult = await prisma.histogramResult.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HistogramResultFindUniqueArgs>(args: SelectSubset<T, HistogramResultFindUniqueArgs<ExtArgs>>): Prisma__HistogramResultClient<$Result.GetResult<Prisma.$HistogramResultPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HistogramResult that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HistogramResultFindUniqueOrThrowArgs} args - Arguments to find a HistogramResult
     * @example
     * // Get one HistogramResult
     * const histogramResult = await prisma.histogramResult.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HistogramResultFindUniqueOrThrowArgs>(args: SelectSubset<T, HistogramResultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HistogramResultClient<$Result.GetResult<Prisma.$HistogramResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HistogramResult that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistogramResultFindFirstArgs} args - Arguments to find a HistogramResult
     * @example
     * // Get one HistogramResult
     * const histogramResult = await prisma.histogramResult.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HistogramResultFindFirstArgs>(args?: SelectSubset<T, HistogramResultFindFirstArgs<ExtArgs>>): Prisma__HistogramResultClient<$Result.GetResult<Prisma.$HistogramResultPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HistogramResult that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistogramResultFindFirstOrThrowArgs} args - Arguments to find a HistogramResult
     * @example
     * // Get one HistogramResult
     * const histogramResult = await prisma.histogramResult.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HistogramResultFindFirstOrThrowArgs>(args?: SelectSubset<T, HistogramResultFindFirstOrThrowArgs<ExtArgs>>): Prisma__HistogramResultClient<$Result.GetResult<Prisma.$HistogramResultPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HistogramResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistogramResultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HistogramResults
     * const histogramResults = await prisma.histogramResult.findMany()
     * 
     * // Get first 10 HistogramResults
     * const histogramResults = await prisma.histogramResult.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const histogramResultWithIdOnly = await prisma.histogramResult.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HistogramResultFindManyArgs>(args?: SelectSubset<T, HistogramResultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistogramResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HistogramResult.
     * @param {HistogramResultCreateArgs} args - Arguments to create a HistogramResult.
     * @example
     * // Create one HistogramResult
     * const HistogramResult = await prisma.histogramResult.create({
     *   data: {
     *     // ... data to create a HistogramResult
     *   }
     * })
     * 
     */
    create<T extends HistogramResultCreateArgs>(args: SelectSubset<T, HistogramResultCreateArgs<ExtArgs>>): Prisma__HistogramResultClient<$Result.GetResult<Prisma.$HistogramResultPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HistogramResults.
     * @param {HistogramResultCreateManyArgs} args - Arguments to create many HistogramResults.
     * @example
     * // Create many HistogramResults
     * const histogramResult = await prisma.histogramResult.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HistogramResultCreateManyArgs>(args?: SelectSubset<T, HistogramResultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HistogramResults and returns the data saved in the database.
     * @param {HistogramResultCreateManyAndReturnArgs} args - Arguments to create many HistogramResults.
     * @example
     * // Create many HistogramResults
     * const histogramResult = await prisma.histogramResult.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HistogramResults and only return the `id`
     * const histogramResultWithIdOnly = await prisma.histogramResult.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HistogramResultCreateManyAndReturnArgs>(args?: SelectSubset<T, HistogramResultCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistogramResultPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HistogramResult.
     * @param {HistogramResultDeleteArgs} args - Arguments to delete one HistogramResult.
     * @example
     * // Delete one HistogramResult
     * const HistogramResult = await prisma.histogramResult.delete({
     *   where: {
     *     // ... filter to delete one HistogramResult
     *   }
     * })
     * 
     */
    delete<T extends HistogramResultDeleteArgs>(args: SelectSubset<T, HistogramResultDeleteArgs<ExtArgs>>): Prisma__HistogramResultClient<$Result.GetResult<Prisma.$HistogramResultPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HistogramResult.
     * @param {HistogramResultUpdateArgs} args - Arguments to update one HistogramResult.
     * @example
     * // Update one HistogramResult
     * const histogramResult = await prisma.histogramResult.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HistogramResultUpdateArgs>(args: SelectSubset<T, HistogramResultUpdateArgs<ExtArgs>>): Prisma__HistogramResultClient<$Result.GetResult<Prisma.$HistogramResultPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HistogramResults.
     * @param {HistogramResultDeleteManyArgs} args - Arguments to filter HistogramResults to delete.
     * @example
     * // Delete a few HistogramResults
     * const { count } = await prisma.histogramResult.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HistogramResultDeleteManyArgs>(args?: SelectSubset<T, HistogramResultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HistogramResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistogramResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HistogramResults
     * const histogramResult = await prisma.histogramResult.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HistogramResultUpdateManyArgs>(args: SelectSubset<T, HistogramResultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HistogramResults and returns the data updated in the database.
     * @param {HistogramResultUpdateManyAndReturnArgs} args - Arguments to update many HistogramResults.
     * @example
     * // Update many HistogramResults
     * const histogramResult = await prisma.histogramResult.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HistogramResults and only return the `id`
     * const histogramResultWithIdOnly = await prisma.histogramResult.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HistogramResultUpdateManyAndReturnArgs>(args: SelectSubset<T, HistogramResultUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistogramResultPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HistogramResult.
     * @param {HistogramResultUpsertArgs} args - Arguments to update or create a HistogramResult.
     * @example
     * // Update or create a HistogramResult
     * const histogramResult = await prisma.histogramResult.upsert({
     *   create: {
     *     // ... data to create a HistogramResult
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HistogramResult we want to update
     *   }
     * })
     */
    upsert<T extends HistogramResultUpsertArgs>(args: SelectSubset<T, HistogramResultUpsertArgs<ExtArgs>>): Prisma__HistogramResultClient<$Result.GetResult<Prisma.$HistogramResultPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HistogramResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistogramResultCountArgs} args - Arguments to filter HistogramResults to count.
     * @example
     * // Count the number of HistogramResults
     * const count = await prisma.histogramResult.count({
     *   where: {
     *     // ... the filter for the HistogramResults we want to count
     *   }
     * })
    **/
    count<T extends HistogramResultCountArgs>(
      args?: Subset<T, HistogramResultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HistogramResultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HistogramResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistogramResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HistogramResultAggregateArgs>(args: Subset<T, HistogramResultAggregateArgs>): Prisma.PrismaPromise<GetHistogramResultAggregateType<T>>

    /**
     * Group by HistogramResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistogramResultGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HistogramResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HistogramResultGroupByArgs['orderBy'] }
        : { orderBy?: HistogramResultGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HistogramResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistogramResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HistogramResult model
   */
  readonly fields: HistogramResultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HistogramResult.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HistogramResultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    result<T extends HistogramResult$resultArgs<ExtArgs> = {}>(args?: Subset<T, HistogramResult$resultArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HistogramResult model
   */
  interface HistogramResultFieldRefs {
    readonly id: FieldRef<"HistogramResult", 'BigInt'>
    readonly result_folio: FieldRef<"HistogramResult", 'String'>
    readonly description: FieldRef<"HistogramResult", 'String'>
    readonly value: FieldRef<"HistogramResult", 'String'>
    readonly created_at: FieldRef<"HistogramResult", 'DateTime'>
    readonly active: FieldRef<"HistogramResult", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * HistogramResult findUnique
   */
  export type HistogramResultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistogramResult
     */
    select?: HistogramResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistogramResult
     */
    omit?: HistogramResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistogramResultInclude<ExtArgs> | null
    /**
     * Filter, which HistogramResult to fetch.
     */
    where: HistogramResultWhereUniqueInput
  }

  /**
   * HistogramResult findUniqueOrThrow
   */
  export type HistogramResultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistogramResult
     */
    select?: HistogramResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistogramResult
     */
    omit?: HistogramResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistogramResultInclude<ExtArgs> | null
    /**
     * Filter, which HistogramResult to fetch.
     */
    where: HistogramResultWhereUniqueInput
  }

  /**
   * HistogramResult findFirst
   */
  export type HistogramResultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistogramResult
     */
    select?: HistogramResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistogramResult
     */
    omit?: HistogramResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistogramResultInclude<ExtArgs> | null
    /**
     * Filter, which HistogramResult to fetch.
     */
    where?: HistogramResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistogramResults to fetch.
     */
    orderBy?: HistogramResultOrderByWithRelationInput | HistogramResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HistogramResults.
     */
    cursor?: HistogramResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistogramResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistogramResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HistogramResults.
     */
    distinct?: HistogramResultScalarFieldEnum | HistogramResultScalarFieldEnum[]
  }

  /**
   * HistogramResult findFirstOrThrow
   */
  export type HistogramResultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistogramResult
     */
    select?: HistogramResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistogramResult
     */
    omit?: HistogramResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistogramResultInclude<ExtArgs> | null
    /**
     * Filter, which HistogramResult to fetch.
     */
    where?: HistogramResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistogramResults to fetch.
     */
    orderBy?: HistogramResultOrderByWithRelationInput | HistogramResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HistogramResults.
     */
    cursor?: HistogramResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistogramResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistogramResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HistogramResults.
     */
    distinct?: HistogramResultScalarFieldEnum | HistogramResultScalarFieldEnum[]
  }

  /**
   * HistogramResult findMany
   */
  export type HistogramResultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistogramResult
     */
    select?: HistogramResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistogramResult
     */
    omit?: HistogramResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistogramResultInclude<ExtArgs> | null
    /**
     * Filter, which HistogramResults to fetch.
     */
    where?: HistogramResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistogramResults to fetch.
     */
    orderBy?: HistogramResultOrderByWithRelationInput | HistogramResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HistogramResults.
     */
    cursor?: HistogramResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistogramResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistogramResults.
     */
    skip?: number
    distinct?: HistogramResultScalarFieldEnum | HistogramResultScalarFieldEnum[]
  }

  /**
   * HistogramResult create
   */
  export type HistogramResultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistogramResult
     */
    select?: HistogramResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistogramResult
     */
    omit?: HistogramResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistogramResultInclude<ExtArgs> | null
    /**
     * The data needed to create a HistogramResult.
     */
    data: XOR<HistogramResultCreateInput, HistogramResultUncheckedCreateInput>
  }

  /**
   * HistogramResult createMany
   */
  export type HistogramResultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HistogramResults.
     */
    data: HistogramResultCreateManyInput | HistogramResultCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HistogramResult createManyAndReturn
   */
  export type HistogramResultCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistogramResult
     */
    select?: HistogramResultSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HistogramResult
     */
    omit?: HistogramResultOmit<ExtArgs> | null
    /**
     * The data used to create many HistogramResults.
     */
    data: HistogramResultCreateManyInput | HistogramResultCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistogramResultIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HistogramResult update
   */
  export type HistogramResultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistogramResult
     */
    select?: HistogramResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistogramResult
     */
    omit?: HistogramResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistogramResultInclude<ExtArgs> | null
    /**
     * The data needed to update a HistogramResult.
     */
    data: XOR<HistogramResultUpdateInput, HistogramResultUncheckedUpdateInput>
    /**
     * Choose, which HistogramResult to update.
     */
    where: HistogramResultWhereUniqueInput
  }

  /**
   * HistogramResult updateMany
   */
  export type HistogramResultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HistogramResults.
     */
    data: XOR<HistogramResultUpdateManyMutationInput, HistogramResultUncheckedUpdateManyInput>
    /**
     * Filter which HistogramResults to update
     */
    where?: HistogramResultWhereInput
    /**
     * Limit how many HistogramResults to update.
     */
    limit?: number
  }

  /**
   * HistogramResult updateManyAndReturn
   */
  export type HistogramResultUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistogramResult
     */
    select?: HistogramResultSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HistogramResult
     */
    omit?: HistogramResultOmit<ExtArgs> | null
    /**
     * The data used to update HistogramResults.
     */
    data: XOR<HistogramResultUpdateManyMutationInput, HistogramResultUncheckedUpdateManyInput>
    /**
     * Filter which HistogramResults to update
     */
    where?: HistogramResultWhereInput
    /**
     * Limit how many HistogramResults to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistogramResultIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HistogramResult upsert
   */
  export type HistogramResultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistogramResult
     */
    select?: HistogramResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistogramResult
     */
    omit?: HistogramResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistogramResultInclude<ExtArgs> | null
    /**
     * The filter to search for the HistogramResult to update in case it exists.
     */
    where: HistogramResultWhereUniqueInput
    /**
     * In case the HistogramResult found by the `where` argument doesn't exist, create a new HistogramResult with this data.
     */
    create: XOR<HistogramResultCreateInput, HistogramResultUncheckedCreateInput>
    /**
     * In case the HistogramResult was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HistogramResultUpdateInput, HistogramResultUncheckedUpdateInput>
  }

  /**
   * HistogramResult delete
   */
  export type HistogramResultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistogramResult
     */
    select?: HistogramResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistogramResult
     */
    omit?: HistogramResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistogramResultInclude<ExtArgs> | null
    /**
     * Filter which HistogramResult to delete.
     */
    where: HistogramResultWhereUniqueInput
  }

  /**
   * HistogramResult deleteMany
   */
  export type HistogramResultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HistogramResults to delete
     */
    where?: HistogramResultWhereInput
    /**
     * Limit how many HistogramResults to delete.
     */
    limit?: number
  }

  /**
   * HistogramResult.result
   */
  export type HistogramResult$resultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    where?: ResultWhereInput
  }

  /**
   * HistogramResult without action
   */
  export type HistogramResultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistogramResult
     */
    select?: HistogramResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistogramResult
     */
    omit?: HistogramResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistogramResultInclude<ExtArgs> | null
  }


  /**
   * Model Parameter
   */

  export type AggregateParameter = {
    _count: ParameterCountAggregateOutputType | null
    _avg: ParameterAvgAggregateOutputType | null
    _sum: ParameterSumAggregateOutputType | null
    _min: ParameterMinAggregateOutputType | null
    _max: ParameterMaxAggregateOutputType | null
  }

  export type ParameterAvgAggregateOutputType = {
    id: number | null
    equipment_id: number | null
    parameter_dictionary_id: number | null
  }

  export type ParameterSumAggregateOutputType = {
    id: bigint | null
    equipment_id: bigint | null
    parameter_dictionary_id: bigint | null
  }

  export type ParameterMinAggregateOutputType = {
    id: bigint | null
    result_folio: string | null
    equipment_id: bigint | null
    parameter_dictionary_id: bigint | null
    description: string | null
    value: string | null
    unit_measurement: string | null
    max_range: string | null
    min_range: string | null
    created_at: Date | null
    active: boolean | null
  }

  export type ParameterMaxAggregateOutputType = {
    id: bigint | null
    result_folio: string | null
    equipment_id: bigint | null
    parameter_dictionary_id: bigint | null
    description: string | null
    value: string | null
    unit_measurement: string | null
    max_range: string | null
    min_range: string | null
    created_at: Date | null
    active: boolean | null
  }

  export type ParameterCountAggregateOutputType = {
    id: number
    result_folio: number
    equipment_id: number
    parameter_dictionary_id: number
    description: number
    value: number
    unit_measurement: number
    max_range: number
    min_range: number
    created_at: number
    active: number
    _all: number
  }


  export type ParameterAvgAggregateInputType = {
    id?: true
    equipment_id?: true
    parameter_dictionary_id?: true
  }

  export type ParameterSumAggregateInputType = {
    id?: true
    equipment_id?: true
    parameter_dictionary_id?: true
  }

  export type ParameterMinAggregateInputType = {
    id?: true
    result_folio?: true
    equipment_id?: true
    parameter_dictionary_id?: true
    description?: true
    value?: true
    unit_measurement?: true
    max_range?: true
    min_range?: true
    created_at?: true
    active?: true
  }

  export type ParameterMaxAggregateInputType = {
    id?: true
    result_folio?: true
    equipment_id?: true
    parameter_dictionary_id?: true
    description?: true
    value?: true
    unit_measurement?: true
    max_range?: true
    min_range?: true
    created_at?: true
    active?: true
  }

  export type ParameterCountAggregateInputType = {
    id?: true
    result_folio?: true
    equipment_id?: true
    parameter_dictionary_id?: true
    description?: true
    value?: true
    unit_measurement?: true
    max_range?: true
    min_range?: true
    created_at?: true
    active?: true
    _all?: true
  }

  export type ParameterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parameter to aggregate.
     */
    where?: ParameterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parameters to fetch.
     */
    orderBy?: ParameterOrderByWithRelationInput | ParameterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParameterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parameters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parameters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Parameters
    **/
    _count?: true | ParameterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParameterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParameterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParameterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParameterMaxAggregateInputType
  }

  export type GetParameterAggregateType<T extends ParameterAggregateArgs> = {
        [P in keyof T & keyof AggregateParameter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParameter[P]>
      : GetScalarType<T[P], AggregateParameter[P]>
  }




  export type ParameterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParameterWhereInput
    orderBy?: ParameterOrderByWithAggregationInput | ParameterOrderByWithAggregationInput[]
    by: ParameterScalarFieldEnum[] | ParameterScalarFieldEnum
    having?: ParameterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParameterCountAggregateInputType | true
    _avg?: ParameterAvgAggregateInputType
    _sum?: ParameterSumAggregateInputType
    _min?: ParameterMinAggregateInputType
    _max?: ParameterMaxAggregateInputType
  }

  export type ParameterGroupByOutputType = {
    id: bigint
    result_folio: string | null
    equipment_id: bigint | null
    parameter_dictionary_id: bigint | null
    description: string | null
    value: string | null
    unit_measurement: string | null
    max_range: string | null
    min_range: string | null
    created_at: Date | null
    active: boolean | null
    _count: ParameterCountAggregateOutputType | null
    _avg: ParameterAvgAggregateOutputType | null
    _sum: ParameterSumAggregateOutputType | null
    _min: ParameterMinAggregateOutputType | null
    _max: ParameterMaxAggregateOutputType | null
  }

  type GetParameterGroupByPayload<T extends ParameterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParameterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParameterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParameterGroupByOutputType[P]>
            : GetScalarType<T[P], ParameterGroupByOutputType[P]>
        }
      >
    >


  export type ParameterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    result_folio?: boolean
    equipment_id?: boolean
    parameter_dictionary_id?: boolean
    description?: boolean
    value?: boolean
    unit_measurement?: boolean
    max_range?: boolean
    min_range?: boolean
    created_at?: boolean
    active?: boolean
    equipment?: boolean | Parameter$equipmentArgs<ExtArgs>
    parameterDictionary?: boolean | Parameter$parameterDictionaryArgs<ExtArgs>
    result?: boolean | Parameter$resultArgs<ExtArgs>
  }, ExtArgs["result"]["parameter"]>

  export type ParameterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    result_folio?: boolean
    equipment_id?: boolean
    parameter_dictionary_id?: boolean
    description?: boolean
    value?: boolean
    unit_measurement?: boolean
    max_range?: boolean
    min_range?: boolean
    created_at?: boolean
    active?: boolean
    equipment?: boolean | Parameter$equipmentArgs<ExtArgs>
    parameterDictionary?: boolean | Parameter$parameterDictionaryArgs<ExtArgs>
    result?: boolean | Parameter$resultArgs<ExtArgs>
  }, ExtArgs["result"]["parameter"]>

  export type ParameterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    result_folio?: boolean
    equipment_id?: boolean
    parameter_dictionary_id?: boolean
    description?: boolean
    value?: boolean
    unit_measurement?: boolean
    max_range?: boolean
    min_range?: boolean
    created_at?: boolean
    active?: boolean
    equipment?: boolean | Parameter$equipmentArgs<ExtArgs>
    parameterDictionary?: boolean | Parameter$parameterDictionaryArgs<ExtArgs>
    result?: boolean | Parameter$resultArgs<ExtArgs>
  }, ExtArgs["result"]["parameter"]>

  export type ParameterSelectScalar = {
    id?: boolean
    result_folio?: boolean
    equipment_id?: boolean
    parameter_dictionary_id?: boolean
    description?: boolean
    value?: boolean
    unit_measurement?: boolean
    max_range?: boolean
    min_range?: boolean
    created_at?: boolean
    active?: boolean
  }

  export type ParameterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "result_folio" | "equipment_id" | "parameter_dictionary_id" | "description" | "value" | "unit_measurement" | "max_range" | "min_range" | "created_at" | "active", ExtArgs["result"]["parameter"]>
  export type ParameterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipment?: boolean | Parameter$equipmentArgs<ExtArgs>
    parameterDictionary?: boolean | Parameter$parameterDictionaryArgs<ExtArgs>
    result?: boolean | Parameter$resultArgs<ExtArgs>
  }
  export type ParameterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipment?: boolean | Parameter$equipmentArgs<ExtArgs>
    parameterDictionary?: boolean | Parameter$parameterDictionaryArgs<ExtArgs>
    result?: boolean | Parameter$resultArgs<ExtArgs>
  }
  export type ParameterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipment?: boolean | Parameter$equipmentArgs<ExtArgs>
    parameterDictionary?: boolean | Parameter$parameterDictionaryArgs<ExtArgs>
    result?: boolean | Parameter$resultArgs<ExtArgs>
  }

  export type $ParameterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Parameter"
    objects: {
      equipment: Prisma.$EquipmentPayload<ExtArgs> | null
      parameterDictionary: Prisma.$ParameterDictionaryPayload<ExtArgs> | null
      result: Prisma.$ResultPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      result_folio: string | null
      equipment_id: bigint | null
      parameter_dictionary_id: bigint | null
      description: string | null
      value: string | null
      unit_measurement: string | null
      max_range: string | null
      min_range: string | null
      created_at: Date | null
      active: boolean | null
    }, ExtArgs["result"]["parameter"]>
    composites: {}
  }

  type ParameterGetPayload<S extends boolean | null | undefined | ParameterDefaultArgs> = $Result.GetResult<Prisma.$ParameterPayload, S>

  type ParameterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParameterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParameterCountAggregateInputType | true
    }

  export interface ParameterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Parameter'], meta: { name: 'Parameter' } }
    /**
     * Find zero or one Parameter that matches the filter.
     * @param {ParameterFindUniqueArgs} args - Arguments to find a Parameter
     * @example
     * // Get one Parameter
     * const parameter = await prisma.parameter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParameterFindUniqueArgs>(args: SelectSubset<T, ParameterFindUniqueArgs<ExtArgs>>): Prisma__ParameterClient<$Result.GetResult<Prisma.$ParameterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Parameter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParameterFindUniqueOrThrowArgs} args - Arguments to find a Parameter
     * @example
     * // Get one Parameter
     * const parameter = await prisma.parameter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParameterFindUniqueOrThrowArgs>(args: SelectSubset<T, ParameterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParameterClient<$Result.GetResult<Prisma.$ParameterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Parameter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParameterFindFirstArgs} args - Arguments to find a Parameter
     * @example
     * // Get one Parameter
     * const parameter = await prisma.parameter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParameterFindFirstArgs>(args?: SelectSubset<T, ParameterFindFirstArgs<ExtArgs>>): Prisma__ParameterClient<$Result.GetResult<Prisma.$ParameterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Parameter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParameterFindFirstOrThrowArgs} args - Arguments to find a Parameter
     * @example
     * // Get one Parameter
     * const parameter = await prisma.parameter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParameterFindFirstOrThrowArgs>(args?: SelectSubset<T, ParameterFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParameterClient<$Result.GetResult<Prisma.$ParameterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Parameters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParameterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Parameters
     * const parameters = await prisma.parameter.findMany()
     * 
     * // Get first 10 Parameters
     * const parameters = await prisma.parameter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parameterWithIdOnly = await prisma.parameter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParameterFindManyArgs>(args?: SelectSubset<T, ParameterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParameterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Parameter.
     * @param {ParameterCreateArgs} args - Arguments to create a Parameter.
     * @example
     * // Create one Parameter
     * const Parameter = await prisma.parameter.create({
     *   data: {
     *     // ... data to create a Parameter
     *   }
     * })
     * 
     */
    create<T extends ParameterCreateArgs>(args: SelectSubset<T, ParameterCreateArgs<ExtArgs>>): Prisma__ParameterClient<$Result.GetResult<Prisma.$ParameterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Parameters.
     * @param {ParameterCreateManyArgs} args - Arguments to create many Parameters.
     * @example
     * // Create many Parameters
     * const parameter = await prisma.parameter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParameterCreateManyArgs>(args?: SelectSubset<T, ParameterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Parameters and returns the data saved in the database.
     * @param {ParameterCreateManyAndReturnArgs} args - Arguments to create many Parameters.
     * @example
     * // Create many Parameters
     * const parameter = await prisma.parameter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Parameters and only return the `id`
     * const parameterWithIdOnly = await prisma.parameter.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParameterCreateManyAndReturnArgs>(args?: SelectSubset<T, ParameterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParameterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Parameter.
     * @param {ParameterDeleteArgs} args - Arguments to delete one Parameter.
     * @example
     * // Delete one Parameter
     * const Parameter = await prisma.parameter.delete({
     *   where: {
     *     // ... filter to delete one Parameter
     *   }
     * })
     * 
     */
    delete<T extends ParameterDeleteArgs>(args: SelectSubset<T, ParameterDeleteArgs<ExtArgs>>): Prisma__ParameterClient<$Result.GetResult<Prisma.$ParameterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Parameter.
     * @param {ParameterUpdateArgs} args - Arguments to update one Parameter.
     * @example
     * // Update one Parameter
     * const parameter = await prisma.parameter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParameterUpdateArgs>(args: SelectSubset<T, ParameterUpdateArgs<ExtArgs>>): Prisma__ParameterClient<$Result.GetResult<Prisma.$ParameterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Parameters.
     * @param {ParameterDeleteManyArgs} args - Arguments to filter Parameters to delete.
     * @example
     * // Delete a few Parameters
     * const { count } = await prisma.parameter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParameterDeleteManyArgs>(args?: SelectSubset<T, ParameterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parameters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParameterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Parameters
     * const parameter = await prisma.parameter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParameterUpdateManyArgs>(args: SelectSubset<T, ParameterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parameters and returns the data updated in the database.
     * @param {ParameterUpdateManyAndReturnArgs} args - Arguments to update many Parameters.
     * @example
     * // Update many Parameters
     * const parameter = await prisma.parameter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Parameters and only return the `id`
     * const parameterWithIdOnly = await prisma.parameter.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ParameterUpdateManyAndReturnArgs>(args: SelectSubset<T, ParameterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParameterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Parameter.
     * @param {ParameterUpsertArgs} args - Arguments to update or create a Parameter.
     * @example
     * // Update or create a Parameter
     * const parameter = await prisma.parameter.upsert({
     *   create: {
     *     // ... data to create a Parameter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Parameter we want to update
     *   }
     * })
     */
    upsert<T extends ParameterUpsertArgs>(args: SelectSubset<T, ParameterUpsertArgs<ExtArgs>>): Prisma__ParameterClient<$Result.GetResult<Prisma.$ParameterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Parameters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParameterCountArgs} args - Arguments to filter Parameters to count.
     * @example
     * // Count the number of Parameters
     * const count = await prisma.parameter.count({
     *   where: {
     *     // ... the filter for the Parameters we want to count
     *   }
     * })
    **/
    count<T extends ParameterCountArgs>(
      args?: Subset<T, ParameterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParameterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Parameter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParameterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParameterAggregateArgs>(args: Subset<T, ParameterAggregateArgs>): Prisma.PrismaPromise<GetParameterAggregateType<T>>

    /**
     * Group by Parameter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParameterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ParameterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParameterGroupByArgs['orderBy'] }
        : { orderBy?: ParameterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ParameterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParameterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Parameter model
   */
  readonly fields: ParameterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Parameter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParameterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    equipment<T extends Parameter$equipmentArgs<ExtArgs> = {}>(args?: Subset<T, Parameter$equipmentArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    parameterDictionary<T extends Parameter$parameterDictionaryArgs<ExtArgs> = {}>(args?: Subset<T, Parameter$parameterDictionaryArgs<ExtArgs>>): Prisma__ParameterDictionaryClient<$Result.GetResult<Prisma.$ParameterDictionaryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    result<T extends Parameter$resultArgs<ExtArgs> = {}>(args?: Subset<T, Parameter$resultArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Parameter model
   */
  interface ParameterFieldRefs {
    readonly id: FieldRef<"Parameter", 'BigInt'>
    readonly result_folio: FieldRef<"Parameter", 'String'>
    readonly equipment_id: FieldRef<"Parameter", 'BigInt'>
    readonly parameter_dictionary_id: FieldRef<"Parameter", 'BigInt'>
    readonly description: FieldRef<"Parameter", 'String'>
    readonly value: FieldRef<"Parameter", 'String'>
    readonly unit_measurement: FieldRef<"Parameter", 'String'>
    readonly max_range: FieldRef<"Parameter", 'String'>
    readonly min_range: FieldRef<"Parameter", 'String'>
    readonly created_at: FieldRef<"Parameter", 'DateTime'>
    readonly active: FieldRef<"Parameter", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Parameter findUnique
   */
  export type ParameterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parameter
     */
    select?: ParameterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parameter
     */
    omit?: ParameterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParameterInclude<ExtArgs> | null
    /**
     * Filter, which Parameter to fetch.
     */
    where: ParameterWhereUniqueInput
  }

  /**
   * Parameter findUniqueOrThrow
   */
  export type ParameterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parameter
     */
    select?: ParameterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parameter
     */
    omit?: ParameterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParameterInclude<ExtArgs> | null
    /**
     * Filter, which Parameter to fetch.
     */
    where: ParameterWhereUniqueInput
  }

  /**
   * Parameter findFirst
   */
  export type ParameterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parameter
     */
    select?: ParameterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parameter
     */
    omit?: ParameterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParameterInclude<ExtArgs> | null
    /**
     * Filter, which Parameter to fetch.
     */
    where?: ParameterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parameters to fetch.
     */
    orderBy?: ParameterOrderByWithRelationInput | ParameterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parameters.
     */
    cursor?: ParameterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parameters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parameters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parameters.
     */
    distinct?: ParameterScalarFieldEnum | ParameterScalarFieldEnum[]
  }

  /**
   * Parameter findFirstOrThrow
   */
  export type ParameterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parameter
     */
    select?: ParameterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parameter
     */
    omit?: ParameterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParameterInclude<ExtArgs> | null
    /**
     * Filter, which Parameter to fetch.
     */
    where?: ParameterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parameters to fetch.
     */
    orderBy?: ParameterOrderByWithRelationInput | ParameterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parameters.
     */
    cursor?: ParameterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parameters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parameters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parameters.
     */
    distinct?: ParameterScalarFieldEnum | ParameterScalarFieldEnum[]
  }

  /**
   * Parameter findMany
   */
  export type ParameterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parameter
     */
    select?: ParameterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parameter
     */
    omit?: ParameterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParameterInclude<ExtArgs> | null
    /**
     * Filter, which Parameters to fetch.
     */
    where?: ParameterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parameters to fetch.
     */
    orderBy?: ParameterOrderByWithRelationInput | ParameterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Parameters.
     */
    cursor?: ParameterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parameters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parameters.
     */
    skip?: number
    distinct?: ParameterScalarFieldEnum | ParameterScalarFieldEnum[]
  }

  /**
   * Parameter create
   */
  export type ParameterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parameter
     */
    select?: ParameterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parameter
     */
    omit?: ParameterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParameterInclude<ExtArgs> | null
    /**
     * The data needed to create a Parameter.
     */
    data: XOR<ParameterCreateInput, ParameterUncheckedCreateInput>
  }

  /**
   * Parameter createMany
   */
  export type ParameterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Parameters.
     */
    data: ParameterCreateManyInput | ParameterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Parameter createManyAndReturn
   */
  export type ParameterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parameter
     */
    select?: ParameterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Parameter
     */
    omit?: ParameterOmit<ExtArgs> | null
    /**
     * The data used to create many Parameters.
     */
    data: ParameterCreateManyInput | ParameterCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParameterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Parameter update
   */
  export type ParameterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parameter
     */
    select?: ParameterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parameter
     */
    omit?: ParameterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParameterInclude<ExtArgs> | null
    /**
     * The data needed to update a Parameter.
     */
    data: XOR<ParameterUpdateInput, ParameterUncheckedUpdateInput>
    /**
     * Choose, which Parameter to update.
     */
    where: ParameterWhereUniqueInput
  }

  /**
   * Parameter updateMany
   */
  export type ParameterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Parameters.
     */
    data: XOR<ParameterUpdateManyMutationInput, ParameterUncheckedUpdateManyInput>
    /**
     * Filter which Parameters to update
     */
    where?: ParameterWhereInput
    /**
     * Limit how many Parameters to update.
     */
    limit?: number
  }

  /**
   * Parameter updateManyAndReturn
   */
  export type ParameterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parameter
     */
    select?: ParameterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Parameter
     */
    omit?: ParameterOmit<ExtArgs> | null
    /**
     * The data used to update Parameters.
     */
    data: XOR<ParameterUpdateManyMutationInput, ParameterUncheckedUpdateManyInput>
    /**
     * Filter which Parameters to update
     */
    where?: ParameterWhereInput
    /**
     * Limit how many Parameters to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParameterIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Parameter upsert
   */
  export type ParameterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parameter
     */
    select?: ParameterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parameter
     */
    omit?: ParameterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParameterInclude<ExtArgs> | null
    /**
     * The filter to search for the Parameter to update in case it exists.
     */
    where: ParameterWhereUniqueInput
    /**
     * In case the Parameter found by the `where` argument doesn't exist, create a new Parameter with this data.
     */
    create: XOR<ParameterCreateInput, ParameterUncheckedCreateInput>
    /**
     * In case the Parameter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParameterUpdateInput, ParameterUncheckedUpdateInput>
  }

  /**
   * Parameter delete
   */
  export type ParameterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parameter
     */
    select?: ParameterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parameter
     */
    omit?: ParameterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParameterInclude<ExtArgs> | null
    /**
     * Filter which Parameter to delete.
     */
    where: ParameterWhereUniqueInput
  }

  /**
   * Parameter deleteMany
   */
  export type ParameterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parameters to delete
     */
    where?: ParameterWhereInput
    /**
     * Limit how many Parameters to delete.
     */
    limit?: number
  }

  /**
   * Parameter.equipment
   */
  export type Parameter$equipmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipment
     */
    omit?: EquipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentInclude<ExtArgs> | null
    where?: EquipmentWhereInput
  }

  /**
   * Parameter.parameterDictionary
   */
  export type Parameter$parameterDictionaryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParameterDictionary
     */
    select?: ParameterDictionarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParameterDictionary
     */
    omit?: ParameterDictionaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParameterDictionaryInclude<ExtArgs> | null
    where?: ParameterDictionaryWhereInput
  }

  /**
   * Parameter.result
   */
  export type Parameter$resultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    where?: ResultWhereInput
  }

  /**
   * Parameter without action
   */
  export type ParameterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parameter
     */
    select?: ParameterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parameter
     */
    omit?: ParameterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParameterInclude<ExtArgs> | null
  }


  /**
   * Model Result
   */

  export type AggregateResult = {
    _count: ResultCountAggregateOutputType | null
    _avg: ResultAvgAggregateOutputType | null
    _sum: ResultSumAggregateOutputType | null
    _min: ResultMinAggregateOutputType | null
    _max: ResultMaxAggregateOutputType | null
  }

  export type ResultAvgAggregateOutputType = {
    created_by: number | null
  }

  export type ResultSumAggregateOutputType = {
    created_by: bigint | null
  }

  export type ResultMinAggregateOutputType = {
    folio: string | null
    created_by: bigint | null
    sample_id: string | null
    created_at: Date | null
    last_modified_at: Date | null
    active: boolean | null
  }

  export type ResultMaxAggregateOutputType = {
    folio: string | null
    created_by: bigint | null
    sample_id: string | null
    created_at: Date | null
    last_modified_at: Date | null
    active: boolean | null
  }

  export type ResultCountAggregateOutputType = {
    folio: number
    created_by: number
    sample_id: number
    created_at: number
    last_modified_at: number
    active: number
    _all: number
  }


  export type ResultAvgAggregateInputType = {
    created_by?: true
  }

  export type ResultSumAggregateInputType = {
    created_by?: true
  }

  export type ResultMinAggregateInputType = {
    folio?: true
    created_by?: true
    sample_id?: true
    created_at?: true
    last_modified_at?: true
    active?: true
  }

  export type ResultMaxAggregateInputType = {
    folio?: true
    created_by?: true
    sample_id?: true
    created_at?: true
    last_modified_at?: true
    active?: true
  }

  export type ResultCountAggregateInputType = {
    folio?: true
    created_by?: true
    sample_id?: true
    created_at?: true
    last_modified_at?: true
    active?: true
    _all?: true
  }

  export type ResultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Result to aggregate.
     */
    where?: ResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Results to fetch.
     */
    orderBy?: ResultOrderByWithRelationInput | ResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Results from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Results.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Results
    **/
    _count?: true | ResultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResultAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResultSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResultMaxAggregateInputType
  }

  export type GetResultAggregateType<T extends ResultAggregateArgs> = {
        [P in keyof T & keyof AggregateResult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResult[P]>
      : GetScalarType<T[P], AggregateResult[P]>
  }




  export type ResultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResultWhereInput
    orderBy?: ResultOrderByWithAggregationInput | ResultOrderByWithAggregationInput[]
    by: ResultScalarFieldEnum[] | ResultScalarFieldEnum
    having?: ResultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResultCountAggregateInputType | true
    _avg?: ResultAvgAggregateInputType
    _sum?: ResultSumAggregateInputType
    _min?: ResultMinAggregateInputType
    _max?: ResultMaxAggregateInputType
  }

  export type ResultGroupByOutputType = {
    folio: string
    created_by: bigint | null
    sample_id: string | null
    created_at: Date | null
    last_modified_at: Date | null
    active: boolean | null
    _count: ResultCountAggregateOutputType | null
    _avg: ResultAvgAggregateOutputType | null
    _sum: ResultSumAggregateOutputType | null
    _min: ResultMinAggregateOutputType | null
    _max: ResultMaxAggregateOutputType | null
  }

  type GetResultGroupByPayload<T extends ResultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResultGroupByOutputType[P]>
            : GetScalarType<T[P], ResultGroupByOutputType[P]>
        }
      >
    >


  export type ResultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    folio?: boolean
    created_by?: boolean
    sample_id?: boolean
    created_at?: boolean
    last_modified_at?: boolean
    active?: boolean
    histogramResults?: boolean | Result$histogramResultsArgs<ExtArgs>
    parameters?: boolean | Result$parametersArgs<ExtArgs>
    resultSends?: boolean | Result$resultSendsArgs<ExtArgs>
    user?: boolean | Result$userArgs<ExtArgs>
    _count?: boolean | ResultCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["result"]>

  export type ResultSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    folio?: boolean
    created_by?: boolean
    sample_id?: boolean
    created_at?: boolean
    last_modified_at?: boolean
    active?: boolean
    user?: boolean | Result$userArgs<ExtArgs>
  }, ExtArgs["result"]["result"]>

  export type ResultSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    folio?: boolean
    created_by?: boolean
    sample_id?: boolean
    created_at?: boolean
    last_modified_at?: boolean
    active?: boolean
    user?: boolean | Result$userArgs<ExtArgs>
  }, ExtArgs["result"]["result"]>

  export type ResultSelectScalar = {
    folio?: boolean
    created_by?: boolean
    sample_id?: boolean
    created_at?: boolean
    last_modified_at?: boolean
    active?: boolean
  }

  export type ResultOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"folio" | "created_by" | "sample_id" | "created_at" | "last_modified_at" | "active", ExtArgs["result"]["result"]>
  export type ResultInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    histogramResults?: boolean | Result$histogramResultsArgs<ExtArgs>
    parameters?: boolean | Result$parametersArgs<ExtArgs>
    resultSends?: boolean | Result$resultSendsArgs<ExtArgs>
    user?: boolean | Result$userArgs<ExtArgs>
    _count?: boolean | ResultCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ResultIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Result$userArgs<ExtArgs>
  }
  export type ResultIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Result$userArgs<ExtArgs>
  }

  export type $ResultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Result"
    objects: {
      histogramResults: Prisma.$HistogramResultPayload<ExtArgs>[]
      parameters: Prisma.$ParameterPayload<ExtArgs>[]
      resultSends: Prisma.$ResultSendPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      folio: string
      created_by: bigint | null
      sample_id: string | null
      created_at: Date | null
      last_modified_at: Date | null
      active: boolean | null
    }, ExtArgs["result"]["result"]>
    composites: {}
  }

  type ResultGetPayload<S extends boolean | null | undefined | ResultDefaultArgs> = $Result.GetResult<Prisma.$ResultPayload, S>

  type ResultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResultFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResultCountAggregateInputType | true
    }

  export interface ResultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Result'], meta: { name: 'Result' } }
    /**
     * Find zero or one Result that matches the filter.
     * @param {ResultFindUniqueArgs} args - Arguments to find a Result
     * @example
     * // Get one Result
     * const result = await prisma.result.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResultFindUniqueArgs>(args: SelectSubset<T, ResultFindUniqueArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Result that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResultFindUniqueOrThrowArgs} args - Arguments to find a Result
     * @example
     * // Get one Result
     * const result = await prisma.result.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResultFindUniqueOrThrowArgs>(args: SelectSubset<T, ResultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Result that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultFindFirstArgs} args - Arguments to find a Result
     * @example
     * // Get one Result
     * const result = await prisma.result.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResultFindFirstArgs>(args?: SelectSubset<T, ResultFindFirstArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Result that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultFindFirstOrThrowArgs} args - Arguments to find a Result
     * @example
     * // Get one Result
     * const result = await prisma.result.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResultFindFirstOrThrowArgs>(args?: SelectSubset<T, ResultFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Results that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Results
     * const results = await prisma.result.findMany()
     * 
     * // Get first 10 Results
     * const results = await prisma.result.findMany({ take: 10 })
     * 
     * // Only select the `folio`
     * const resultWithFolioOnly = await prisma.result.findMany({ select: { folio: true } })
     * 
     */
    findMany<T extends ResultFindManyArgs>(args?: SelectSubset<T, ResultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Result.
     * @param {ResultCreateArgs} args - Arguments to create a Result.
     * @example
     * // Create one Result
     * const Result = await prisma.result.create({
     *   data: {
     *     // ... data to create a Result
     *   }
     * })
     * 
     */
    create<T extends ResultCreateArgs>(args: SelectSubset<T, ResultCreateArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Results.
     * @param {ResultCreateManyArgs} args - Arguments to create many Results.
     * @example
     * // Create many Results
     * const result = await prisma.result.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResultCreateManyArgs>(args?: SelectSubset<T, ResultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Results and returns the data saved in the database.
     * @param {ResultCreateManyAndReturnArgs} args - Arguments to create many Results.
     * @example
     * // Create many Results
     * const result = await prisma.result.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Results and only return the `folio`
     * const resultWithFolioOnly = await prisma.result.createManyAndReturn({
     *   select: { folio: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResultCreateManyAndReturnArgs>(args?: SelectSubset<T, ResultCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Result.
     * @param {ResultDeleteArgs} args - Arguments to delete one Result.
     * @example
     * // Delete one Result
     * const Result = await prisma.result.delete({
     *   where: {
     *     // ... filter to delete one Result
     *   }
     * })
     * 
     */
    delete<T extends ResultDeleteArgs>(args: SelectSubset<T, ResultDeleteArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Result.
     * @param {ResultUpdateArgs} args - Arguments to update one Result.
     * @example
     * // Update one Result
     * const result = await prisma.result.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResultUpdateArgs>(args: SelectSubset<T, ResultUpdateArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Results.
     * @param {ResultDeleteManyArgs} args - Arguments to filter Results to delete.
     * @example
     * // Delete a few Results
     * const { count } = await prisma.result.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResultDeleteManyArgs>(args?: SelectSubset<T, ResultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Results.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Results
     * const result = await prisma.result.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResultUpdateManyArgs>(args: SelectSubset<T, ResultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Results and returns the data updated in the database.
     * @param {ResultUpdateManyAndReturnArgs} args - Arguments to update many Results.
     * @example
     * // Update many Results
     * const result = await prisma.result.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Results and only return the `folio`
     * const resultWithFolioOnly = await prisma.result.updateManyAndReturn({
     *   select: { folio: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ResultUpdateManyAndReturnArgs>(args: SelectSubset<T, ResultUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Result.
     * @param {ResultUpsertArgs} args - Arguments to update or create a Result.
     * @example
     * // Update or create a Result
     * const result = await prisma.result.upsert({
     *   create: {
     *     // ... data to create a Result
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Result we want to update
     *   }
     * })
     */
    upsert<T extends ResultUpsertArgs>(args: SelectSubset<T, ResultUpsertArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Results.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultCountArgs} args - Arguments to filter Results to count.
     * @example
     * // Count the number of Results
     * const count = await prisma.result.count({
     *   where: {
     *     // ... the filter for the Results we want to count
     *   }
     * })
    **/
    count<T extends ResultCountArgs>(
      args?: Subset<T, ResultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Result.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ResultAggregateArgs>(args: Subset<T, ResultAggregateArgs>): Prisma.PrismaPromise<GetResultAggregateType<T>>

    /**
     * Group by Result.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResultGroupByArgs['orderBy'] }
        : { orderBy?: ResultGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Result model
   */
  readonly fields: ResultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Result.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    histogramResults<T extends Result$histogramResultsArgs<ExtArgs> = {}>(args?: Subset<T, Result$histogramResultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistogramResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    parameters<T extends Result$parametersArgs<ExtArgs> = {}>(args?: Subset<T, Result$parametersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParameterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    resultSends<T extends Result$resultSendsArgs<ExtArgs> = {}>(args?: Subset<T, Result$resultSendsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResultSendPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends Result$userArgs<ExtArgs> = {}>(args?: Subset<T, Result$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Result model
   */
  interface ResultFieldRefs {
    readonly folio: FieldRef<"Result", 'String'>
    readonly created_by: FieldRef<"Result", 'BigInt'>
    readonly sample_id: FieldRef<"Result", 'String'>
    readonly created_at: FieldRef<"Result", 'DateTime'>
    readonly last_modified_at: FieldRef<"Result", 'DateTime'>
    readonly active: FieldRef<"Result", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Result findUnique
   */
  export type ResultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * Filter, which Result to fetch.
     */
    where: ResultWhereUniqueInput
  }

  /**
   * Result findUniqueOrThrow
   */
  export type ResultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * Filter, which Result to fetch.
     */
    where: ResultWhereUniqueInput
  }

  /**
   * Result findFirst
   */
  export type ResultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * Filter, which Result to fetch.
     */
    where?: ResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Results to fetch.
     */
    orderBy?: ResultOrderByWithRelationInput | ResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Results.
     */
    cursor?: ResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Results from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Results.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Results.
     */
    distinct?: ResultScalarFieldEnum | ResultScalarFieldEnum[]
  }

  /**
   * Result findFirstOrThrow
   */
  export type ResultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * Filter, which Result to fetch.
     */
    where?: ResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Results to fetch.
     */
    orderBy?: ResultOrderByWithRelationInput | ResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Results.
     */
    cursor?: ResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Results from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Results.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Results.
     */
    distinct?: ResultScalarFieldEnum | ResultScalarFieldEnum[]
  }

  /**
   * Result findMany
   */
  export type ResultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * Filter, which Results to fetch.
     */
    where?: ResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Results to fetch.
     */
    orderBy?: ResultOrderByWithRelationInput | ResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Results.
     */
    cursor?: ResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Results from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Results.
     */
    skip?: number
    distinct?: ResultScalarFieldEnum | ResultScalarFieldEnum[]
  }

  /**
   * Result create
   */
  export type ResultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * The data needed to create a Result.
     */
    data: XOR<ResultCreateInput, ResultUncheckedCreateInput>
  }

  /**
   * Result createMany
   */
  export type ResultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Results.
     */
    data: ResultCreateManyInput | ResultCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Result createManyAndReturn
   */
  export type ResultCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * The data used to create many Results.
     */
    data: ResultCreateManyInput | ResultCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Result update
   */
  export type ResultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * The data needed to update a Result.
     */
    data: XOR<ResultUpdateInput, ResultUncheckedUpdateInput>
    /**
     * Choose, which Result to update.
     */
    where: ResultWhereUniqueInput
  }

  /**
   * Result updateMany
   */
  export type ResultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Results.
     */
    data: XOR<ResultUpdateManyMutationInput, ResultUncheckedUpdateManyInput>
    /**
     * Filter which Results to update
     */
    where?: ResultWhereInput
    /**
     * Limit how many Results to update.
     */
    limit?: number
  }

  /**
   * Result updateManyAndReturn
   */
  export type ResultUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * The data used to update Results.
     */
    data: XOR<ResultUpdateManyMutationInput, ResultUncheckedUpdateManyInput>
    /**
     * Filter which Results to update
     */
    where?: ResultWhereInput
    /**
     * Limit how many Results to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Result upsert
   */
  export type ResultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * The filter to search for the Result to update in case it exists.
     */
    where: ResultWhereUniqueInput
    /**
     * In case the Result found by the `where` argument doesn't exist, create a new Result with this data.
     */
    create: XOR<ResultCreateInput, ResultUncheckedCreateInput>
    /**
     * In case the Result was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResultUpdateInput, ResultUncheckedUpdateInput>
  }

  /**
   * Result delete
   */
  export type ResultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * Filter which Result to delete.
     */
    where: ResultWhereUniqueInput
  }

  /**
   * Result deleteMany
   */
  export type ResultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Results to delete
     */
    where?: ResultWhereInput
    /**
     * Limit how many Results to delete.
     */
    limit?: number
  }

  /**
   * Result.histogramResults
   */
  export type Result$histogramResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistogramResult
     */
    select?: HistogramResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistogramResult
     */
    omit?: HistogramResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistogramResultInclude<ExtArgs> | null
    where?: HistogramResultWhereInput
    orderBy?: HistogramResultOrderByWithRelationInput | HistogramResultOrderByWithRelationInput[]
    cursor?: HistogramResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistogramResultScalarFieldEnum | HistogramResultScalarFieldEnum[]
  }

  /**
   * Result.parameters
   */
  export type Result$parametersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parameter
     */
    select?: ParameterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parameter
     */
    omit?: ParameterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParameterInclude<ExtArgs> | null
    where?: ParameterWhereInput
    orderBy?: ParameterOrderByWithRelationInput | ParameterOrderByWithRelationInput[]
    cursor?: ParameterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParameterScalarFieldEnum | ParameterScalarFieldEnum[]
  }

  /**
   * Result.resultSends
   */
  export type Result$resultSendsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResultSend
     */
    select?: ResultSendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResultSend
     */
    omit?: ResultSendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultSendInclude<ExtArgs> | null
    where?: ResultSendWhereInput
    orderBy?: ResultSendOrderByWithRelationInput | ResultSendOrderByWithRelationInput[]
    cursor?: ResultSendWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResultSendScalarFieldEnum | ResultSendScalarFieldEnum[]
  }

  /**
   * Result.user
   */
  export type Result$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Result without action
   */
  export type ResultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
  }


  /**
   * Model ParameterDictionary
   */

  export type AggregateParameterDictionary = {
    _count: ParameterDictionaryCountAggregateOutputType | null
    _avg: ParameterDictionaryAvgAggregateOutputType | null
    _sum: ParameterDictionarySumAggregateOutputType | null
    _min: ParameterDictionaryMinAggregateOutputType | null
    _max: ParameterDictionaryMaxAggregateOutputType | null
  }

  export type ParameterDictionaryAvgAggregateOutputType = {
    id: number | null
    system_parameter_id: number | null
  }

  export type ParameterDictionarySumAggregateOutputType = {
    id: bigint | null
    system_parameter_id: bigint | null
  }

  export type ParameterDictionaryMinAggregateOutputType = {
    id: bigint | null
    system_parameter_id: bigint | null
    parameter_description: string | null
  }

  export type ParameterDictionaryMaxAggregateOutputType = {
    id: bigint | null
    system_parameter_id: bigint | null
    parameter_description: string | null
  }

  export type ParameterDictionaryCountAggregateOutputType = {
    id: number
    system_parameter_id: number
    parameter_description: number
    _all: number
  }


  export type ParameterDictionaryAvgAggregateInputType = {
    id?: true
    system_parameter_id?: true
  }

  export type ParameterDictionarySumAggregateInputType = {
    id?: true
    system_parameter_id?: true
  }

  export type ParameterDictionaryMinAggregateInputType = {
    id?: true
    system_parameter_id?: true
    parameter_description?: true
  }

  export type ParameterDictionaryMaxAggregateInputType = {
    id?: true
    system_parameter_id?: true
    parameter_description?: true
  }

  export type ParameterDictionaryCountAggregateInputType = {
    id?: true
    system_parameter_id?: true
    parameter_description?: true
    _all?: true
  }

  export type ParameterDictionaryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParameterDictionary to aggregate.
     */
    where?: ParameterDictionaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParameterDictionaries to fetch.
     */
    orderBy?: ParameterDictionaryOrderByWithRelationInput | ParameterDictionaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParameterDictionaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParameterDictionaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParameterDictionaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ParameterDictionaries
    **/
    _count?: true | ParameterDictionaryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParameterDictionaryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParameterDictionarySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParameterDictionaryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParameterDictionaryMaxAggregateInputType
  }

  export type GetParameterDictionaryAggregateType<T extends ParameterDictionaryAggregateArgs> = {
        [P in keyof T & keyof AggregateParameterDictionary]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParameterDictionary[P]>
      : GetScalarType<T[P], AggregateParameterDictionary[P]>
  }




  export type ParameterDictionaryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParameterDictionaryWhereInput
    orderBy?: ParameterDictionaryOrderByWithAggregationInput | ParameterDictionaryOrderByWithAggregationInput[]
    by: ParameterDictionaryScalarFieldEnum[] | ParameterDictionaryScalarFieldEnum
    having?: ParameterDictionaryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParameterDictionaryCountAggregateInputType | true
    _avg?: ParameterDictionaryAvgAggregateInputType
    _sum?: ParameterDictionarySumAggregateInputType
    _min?: ParameterDictionaryMinAggregateInputType
    _max?: ParameterDictionaryMaxAggregateInputType
  }

  export type ParameterDictionaryGroupByOutputType = {
    id: bigint
    system_parameter_id: bigint | null
    parameter_description: string | null
    _count: ParameterDictionaryCountAggregateOutputType | null
    _avg: ParameterDictionaryAvgAggregateOutputType | null
    _sum: ParameterDictionarySumAggregateOutputType | null
    _min: ParameterDictionaryMinAggregateOutputType | null
    _max: ParameterDictionaryMaxAggregateOutputType | null
  }

  type GetParameterDictionaryGroupByPayload<T extends ParameterDictionaryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParameterDictionaryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParameterDictionaryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParameterDictionaryGroupByOutputType[P]>
            : GetScalarType<T[P], ParameterDictionaryGroupByOutputType[P]>
        }
      >
    >


  export type ParameterDictionarySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    system_parameter_id?: boolean
    parameter_description?: boolean
    systemParameter?: boolean | ParameterDictionary$systemParameterArgs<ExtArgs>
    parameters?: boolean | ParameterDictionary$parametersArgs<ExtArgs>
    _count?: boolean | ParameterDictionaryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parameterDictionary"]>

  export type ParameterDictionarySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    system_parameter_id?: boolean
    parameter_description?: boolean
    systemParameter?: boolean | ParameterDictionary$systemParameterArgs<ExtArgs>
  }, ExtArgs["result"]["parameterDictionary"]>

  export type ParameterDictionarySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    system_parameter_id?: boolean
    parameter_description?: boolean
    systemParameter?: boolean | ParameterDictionary$systemParameterArgs<ExtArgs>
  }, ExtArgs["result"]["parameterDictionary"]>

  export type ParameterDictionarySelectScalar = {
    id?: boolean
    system_parameter_id?: boolean
    parameter_description?: boolean
  }

  export type ParameterDictionaryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "system_parameter_id" | "parameter_description", ExtArgs["result"]["parameterDictionary"]>
  export type ParameterDictionaryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    systemParameter?: boolean | ParameterDictionary$systemParameterArgs<ExtArgs>
    parameters?: boolean | ParameterDictionary$parametersArgs<ExtArgs>
    _count?: boolean | ParameterDictionaryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ParameterDictionaryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    systemParameter?: boolean | ParameterDictionary$systemParameterArgs<ExtArgs>
  }
  export type ParameterDictionaryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    systemParameter?: boolean | ParameterDictionary$systemParameterArgs<ExtArgs>
  }

  export type $ParameterDictionaryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ParameterDictionary"
    objects: {
      systemParameter: Prisma.$SystemParameterPayload<ExtArgs> | null
      parameters: Prisma.$ParameterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      system_parameter_id: bigint | null
      parameter_description: string | null
    }, ExtArgs["result"]["parameterDictionary"]>
    composites: {}
  }

  type ParameterDictionaryGetPayload<S extends boolean | null | undefined | ParameterDictionaryDefaultArgs> = $Result.GetResult<Prisma.$ParameterDictionaryPayload, S>

  type ParameterDictionaryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParameterDictionaryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParameterDictionaryCountAggregateInputType | true
    }

  export interface ParameterDictionaryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ParameterDictionary'], meta: { name: 'ParameterDictionary' } }
    /**
     * Find zero or one ParameterDictionary that matches the filter.
     * @param {ParameterDictionaryFindUniqueArgs} args - Arguments to find a ParameterDictionary
     * @example
     * // Get one ParameterDictionary
     * const parameterDictionary = await prisma.parameterDictionary.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParameterDictionaryFindUniqueArgs>(args: SelectSubset<T, ParameterDictionaryFindUniqueArgs<ExtArgs>>): Prisma__ParameterDictionaryClient<$Result.GetResult<Prisma.$ParameterDictionaryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ParameterDictionary that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParameterDictionaryFindUniqueOrThrowArgs} args - Arguments to find a ParameterDictionary
     * @example
     * // Get one ParameterDictionary
     * const parameterDictionary = await prisma.parameterDictionary.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParameterDictionaryFindUniqueOrThrowArgs>(args: SelectSubset<T, ParameterDictionaryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParameterDictionaryClient<$Result.GetResult<Prisma.$ParameterDictionaryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParameterDictionary that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParameterDictionaryFindFirstArgs} args - Arguments to find a ParameterDictionary
     * @example
     * // Get one ParameterDictionary
     * const parameterDictionary = await prisma.parameterDictionary.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParameterDictionaryFindFirstArgs>(args?: SelectSubset<T, ParameterDictionaryFindFirstArgs<ExtArgs>>): Prisma__ParameterDictionaryClient<$Result.GetResult<Prisma.$ParameterDictionaryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParameterDictionary that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParameterDictionaryFindFirstOrThrowArgs} args - Arguments to find a ParameterDictionary
     * @example
     * // Get one ParameterDictionary
     * const parameterDictionary = await prisma.parameterDictionary.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParameterDictionaryFindFirstOrThrowArgs>(args?: SelectSubset<T, ParameterDictionaryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParameterDictionaryClient<$Result.GetResult<Prisma.$ParameterDictionaryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ParameterDictionaries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParameterDictionaryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ParameterDictionaries
     * const parameterDictionaries = await prisma.parameterDictionary.findMany()
     * 
     * // Get first 10 ParameterDictionaries
     * const parameterDictionaries = await prisma.parameterDictionary.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parameterDictionaryWithIdOnly = await prisma.parameterDictionary.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParameterDictionaryFindManyArgs>(args?: SelectSubset<T, ParameterDictionaryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParameterDictionaryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ParameterDictionary.
     * @param {ParameterDictionaryCreateArgs} args - Arguments to create a ParameterDictionary.
     * @example
     * // Create one ParameterDictionary
     * const ParameterDictionary = await prisma.parameterDictionary.create({
     *   data: {
     *     // ... data to create a ParameterDictionary
     *   }
     * })
     * 
     */
    create<T extends ParameterDictionaryCreateArgs>(args: SelectSubset<T, ParameterDictionaryCreateArgs<ExtArgs>>): Prisma__ParameterDictionaryClient<$Result.GetResult<Prisma.$ParameterDictionaryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ParameterDictionaries.
     * @param {ParameterDictionaryCreateManyArgs} args - Arguments to create many ParameterDictionaries.
     * @example
     * // Create many ParameterDictionaries
     * const parameterDictionary = await prisma.parameterDictionary.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParameterDictionaryCreateManyArgs>(args?: SelectSubset<T, ParameterDictionaryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ParameterDictionaries and returns the data saved in the database.
     * @param {ParameterDictionaryCreateManyAndReturnArgs} args - Arguments to create many ParameterDictionaries.
     * @example
     * // Create many ParameterDictionaries
     * const parameterDictionary = await prisma.parameterDictionary.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ParameterDictionaries and only return the `id`
     * const parameterDictionaryWithIdOnly = await prisma.parameterDictionary.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParameterDictionaryCreateManyAndReturnArgs>(args?: SelectSubset<T, ParameterDictionaryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParameterDictionaryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ParameterDictionary.
     * @param {ParameterDictionaryDeleteArgs} args - Arguments to delete one ParameterDictionary.
     * @example
     * // Delete one ParameterDictionary
     * const ParameterDictionary = await prisma.parameterDictionary.delete({
     *   where: {
     *     // ... filter to delete one ParameterDictionary
     *   }
     * })
     * 
     */
    delete<T extends ParameterDictionaryDeleteArgs>(args: SelectSubset<T, ParameterDictionaryDeleteArgs<ExtArgs>>): Prisma__ParameterDictionaryClient<$Result.GetResult<Prisma.$ParameterDictionaryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ParameterDictionary.
     * @param {ParameterDictionaryUpdateArgs} args - Arguments to update one ParameterDictionary.
     * @example
     * // Update one ParameterDictionary
     * const parameterDictionary = await prisma.parameterDictionary.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParameterDictionaryUpdateArgs>(args: SelectSubset<T, ParameterDictionaryUpdateArgs<ExtArgs>>): Prisma__ParameterDictionaryClient<$Result.GetResult<Prisma.$ParameterDictionaryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ParameterDictionaries.
     * @param {ParameterDictionaryDeleteManyArgs} args - Arguments to filter ParameterDictionaries to delete.
     * @example
     * // Delete a few ParameterDictionaries
     * const { count } = await prisma.parameterDictionary.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParameterDictionaryDeleteManyArgs>(args?: SelectSubset<T, ParameterDictionaryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParameterDictionaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParameterDictionaryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ParameterDictionaries
     * const parameterDictionary = await prisma.parameterDictionary.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParameterDictionaryUpdateManyArgs>(args: SelectSubset<T, ParameterDictionaryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParameterDictionaries and returns the data updated in the database.
     * @param {ParameterDictionaryUpdateManyAndReturnArgs} args - Arguments to update many ParameterDictionaries.
     * @example
     * // Update many ParameterDictionaries
     * const parameterDictionary = await prisma.parameterDictionary.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ParameterDictionaries and only return the `id`
     * const parameterDictionaryWithIdOnly = await prisma.parameterDictionary.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ParameterDictionaryUpdateManyAndReturnArgs>(args: SelectSubset<T, ParameterDictionaryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParameterDictionaryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ParameterDictionary.
     * @param {ParameterDictionaryUpsertArgs} args - Arguments to update or create a ParameterDictionary.
     * @example
     * // Update or create a ParameterDictionary
     * const parameterDictionary = await prisma.parameterDictionary.upsert({
     *   create: {
     *     // ... data to create a ParameterDictionary
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ParameterDictionary we want to update
     *   }
     * })
     */
    upsert<T extends ParameterDictionaryUpsertArgs>(args: SelectSubset<T, ParameterDictionaryUpsertArgs<ExtArgs>>): Prisma__ParameterDictionaryClient<$Result.GetResult<Prisma.$ParameterDictionaryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ParameterDictionaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParameterDictionaryCountArgs} args - Arguments to filter ParameterDictionaries to count.
     * @example
     * // Count the number of ParameterDictionaries
     * const count = await prisma.parameterDictionary.count({
     *   where: {
     *     // ... the filter for the ParameterDictionaries we want to count
     *   }
     * })
    **/
    count<T extends ParameterDictionaryCountArgs>(
      args?: Subset<T, ParameterDictionaryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParameterDictionaryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ParameterDictionary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParameterDictionaryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParameterDictionaryAggregateArgs>(args: Subset<T, ParameterDictionaryAggregateArgs>): Prisma.PrismaPromise<GetParameterDictionaryAggregateType<T>>

    /**
     * Group by ParameterDictionary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParameterDictionaryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ParameterDictionaryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParameterDictionaryGroupByArgs['orderBy'] }
        : { orderBy?: ParameterDictionaryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ParameterDictionaryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParameterDictionaryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ParameterDictionary model
   */
  readonly fields: ParameterDictionaryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ParameterDictionary.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParameterDictionaryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    systemParameter<T extends ParameterDictionary$systemParameterArgs<ExtArgs> = {}>(args?: Subset<T, ParameterDictionary$systemParameterArgs<ExtArgs>>): Prisma__SystemParameterClient<$Result.GetResult<Prisma.$SystemParameterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    parameters<T extends ParameterDictionary$parametersArgs<ExtArgs> = {}>(args?: Subset<T, ParameterDictionary$parametersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParameterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ParameterDictionary model
   */
  interface ParameterDictionaryFieldRefs {
    readonly id: FieldRef<"ParameterDictionary", 'BigInt'>
    readonly system_parameter_id: FieldRef<"ParameterDictionary", 'BigInt'>
    readonly parameter_description: FieldRef<"ParameterDictionary", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ParameterDictionary findUnique
   */
  export type ParameterDictionaryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParameterDictionary
     */
    select?: ParameterDictionarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParameterDictionary
     */
    omit?: ParameterDictionaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParameterDictionaryInclude<ExtArgs> | null
    /**
     * Filter, which ParameterDictionary to fetch.
     */
    where: ParameterDictionaryWhereUniqueInput
  }

  /**
   * ParameterDictionary findUniqueOrThrow
   */
  export type ParameterDictionaryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParameterDictionary
     */
    select?: ParameterDictionarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParameterDictionary
     */
    omit?: ParameterDictionaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParameterDictionaryInclude<ExtArgs> | null
    /**
     * Filter, which ParameterDictionary to fetch.
     */
    where: ParameterDictionaryWhereUniqueInput
  }

  /**
   * ParameterDictionary findFirst
   */
  export type ParameterDictionaryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParameterDictionary
     */
    select?: ParameterDictionarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParameterDictionary
     */
    omit?: ParameterDictionaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParameterDictionaryInclude<ExtArgs> | null
    /**
     * Filter, which ParameterDictionary to fetch.
     */
    where?: ParameterDictionaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParameterDictionaries to fetch.
     */
    orderBy?: ParameterDictionaryOrderByWithRelationInput | ParameterDictionaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParameterDictionaries.
     */
    cursor?: ParameterDictionaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParameterDictionaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParameterDictionaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParameterDictionaries.
     */
    distinct?: ParameterDictionaryScalarFieldEnum | ParameterDictionaryScalarFieldEnum[]
  }

  /**
   * ParameterDictionary findFirstOrThrow
   */
  export type ParameterDictionaryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParameterDictionary
     */
    select?: ParameterDictionarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParameterDictionary
     */
    omit?: ParameterDictionaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParameterDictionaryInclude<ExtArgs> | null
    /**
     * Filter, which ParameterDictionary to fetch.
     */
    where?: ParameterDictionaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParameterDictionaries to fetch.
     */
    orderBy?: ParameterDictionaryOrderByWithRelationInput | ParameterDictionaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParameterDictionaries.
     */
    cursor?: ParameterDictionaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParameterDictionaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParameterDictionaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParameterDictionaries.
     */
    distinct?: ParameterDictionaryScalarFieldEnum | ParameterDictionaryScalarFieldEnum[]
  }

  /**
   * ParameterDictionary findMany
   */
  export type ParameterDictionaryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParameterDictionary
     */
    select?: ParameterDictionarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParameterDictionary
     */
    omit?: ParameterDictionaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParameterDictionaryInclude<ExtArgs> | null
    /**
     * Filter, which ParameterDictionaries to fetch.
     */
    where?: ParameterDictionaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParameterDictionaries to fetch.
     */
    orderBy?: ParameterDictionaryOrderByWithRelationInput | ParameterDictionaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ParameterDictionaries.
     */
    cursor?: ParameterDictionaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParameterDictionaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParameterDictionaries.
     */
    skip?: number
    distinct?: ParameterDictionaryScalarFieldEnum | ParameterDictionaryScalarFieldEnum[]
  }

  /**
   * ParameterDictionary create
   */
  export type ParameterDictionaryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParameterDictionary
     */
    select?: ParameterDictionarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParameterDictionary
     */
    omit?: ParameterDictionaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParameterDictionaryInclude<ExtArgs> | null
    /**
     * The data needed to create a ParameterDictionary.
     */
    data: XOR<ParameterDictionaryCreateInput, ParameterDictionaryUncheckedCreateInput>
  }

  /**
   * ParameterDictionary createMany
   */
  export type ParameterDictionaryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ParameterDictionaries.
     */
    data: ParameterDictionaryCreateManyInput | ParameterDictionaryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ParameterDictionary createManyAndReturn
   */
  export type ParameterDictionaryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParameterDictionary
     */
    select?: ParameterDictionarySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParameterDictionary
     */
    omit?: ParameterDictionaryOmit<ExtArgs> | null
    /**
     * The data used to create many ParameterDictionaries.
     */
    data: ParameterDictionaryCreateManyInput | ParameterDictionaryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParameterDictionaryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ParameterDictionary update
   */
  export type ParameterDictionaryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParameterDictionary
     */
    select?: ParameterDictionarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParameterDictionary
     */
    omit?: ParameterDictionaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParameterDictionaryInclude<ExtArgs> | null
    /**
     * The data needed to update a ParameterDictionary.
     */
    data: XOR<ParameterDictionaryUpdateInput, ParameterDictionaryUncheckedUpdateInput>
    /**
     * Choose, which ParameterDictionary to update.
     */
    where: ParameterDictionaryWhereUniqueInput
  }

  /**
   * ParameterDictionary updateMany
   */
  export type ParameterDictionaryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ParameterDictionaries.
     */
    data: XOR<ParameterDictionaryUpdateManyMutationInput, ParameterDictionaryUncheckedUpdateManyInput>
    /**
     * Filter which ParameterDictionaries to update
     */
    where?: ParameterDictionaryWhereInput
    /**
     * Limit how many ParameterDictionaries to update.
     */
    limit?: number
  }

  /**
   * ParameterDictionary updateManyAndReturn
   */
  export type ParameterDictionaryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParameterDictionary
     */
    select?: ParameterDictionarySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParameterDictionary
     */
    omit?: ParameterDictionaryOmit<ExtArgs> | null
    /**
     * The data used to update ParameterDictionaries.
     */
    data: XOR<ParameterDictionaryUpdateManyMutationInput, ParameterDictionaryUncheckedUpdateManyInput>
    /**
     * Filter which ParameterDictionaries to update
     */
    where?: ParameterDictionaryWhereInput
    /**
     * Limit how many ParameterDictionaries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParameterDictionaryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ParameterDictionary upsert
   */
  export type ParameterDictionaryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParameterDictionary
     */
    select?: ParameterDictionarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParameterDictionary
     */
    omit?: ParameterDictionaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParameterDictionaryInclude<ExtArgs> | null
    /**
     * The filter to search for the ParameterDictionary to update in case it exists.
     */
    where: ParameterDictionaryWhereUniqueInput
    /**
     * In case the ParameterDictionary found by the `where` argument doesn't exist, create a new ParameterDictionary with this data.
     */
    create: XOR<ParameterDictionaryCreateInput, ParameterDictionaryUncheckedCreateInput>
    /**
     * In case the ParameterDictionary was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParameterDictionaryUpdateInput, ParameterDictionaryUncheckedUpdateInput>
  }

  /**
   * ParameterDictionary delete
   */
  export type ParameterDictionaryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParameterDictionary
     */
    select?: ParameterDictionarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParameterDictionary
     */
    omit?: ParameterDictionaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParameterDictionaryInclude<ExtArgs> | null
    /**
     * Filter which ParameterDictionary to delete.
     */
    where: ParameterDictionaryWhereUniqueInput
  }

  /**
   * ParameterDictionary deleteMany
   */
  export type ParameterDictionaryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParameterDictionaries to delete
     */
    where?: ParameterDictionaryWhereInput
    /**
     * Limit how many ParameterDictionaries to delete.
     */
    limit?: number
  }

  /**
   * ParameterDictionary.systemParameter
   */
  export type ParameterDictionary$systemParameterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemParameter
     */
    select?: SystemParameterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemParameter
     */
    omit?: SystemParameterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemParameterInclude<ExtArgs> | null
    where?: SystemParameterWhereInput
  }

  /**
   * ParameterDictionary.parameters
   */
  export type ParameterDictionary$parametersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parameter
     */
    select?: ParameterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parameter
     */
    omit?: ParameterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParameterInclude<ExtArgs> | null
    where?: ParameterWhereInput
    orderBy?: ParameterOrderByWithRelationInput | ParameterOrderByWithRelationInput[]
    cursor?: ParameterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParameterScalarFieldEnum | ParameterScalarFieldEnum[]
  }

  /**
   * ParameterDictionary without action
   */
  export type ParameterDictionaryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParameterDictionary
     */
    select?: ParameterDictionarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParameterDictionary
     */
    omit?: ParameterDictionaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParameterDictionaryInclude<ExtArgs> | null
  }


  /**
   * Model ResultSend
   */

  export type AggregateResultSend = {
    _count: ResultSendCountAggregateOutputType | null
    _avg: ResultSendAvgAggregateOutputType | null
    _sum: ResultSendSumAggregateOutputType | null
    _min: ResultSendMinAggregateOutputType | null
    _max: ResultSendMaxAggregateOutputType | null
  }

  export type ResultSendAvgAggregateOutputType = {
    id: number | null
    send_by: number | null
  }

  export type ResultSendSumAggregateOutputType = {
    id: bigint | null
    send_by: bigint | null
  }

  export type ResultSendMinAggregateOutputType = {
    id: bigint | null
    result_folio: string | null
    send_by: bigint | null
    send_at: Date | null
    status: string | null
  }

  export type ResultSendMaxAggregateOutputType = {
    id: bigint | null
    result_folio: string | null
    send_by: bigint | null
    send_at: Date | null
    status: string | null
  }

  export type ResultSendCountAggregateOutputType = {
    id: number
    result_folio: number
    send_by: number
    send_at: number
    status: number
    payload: number
    response: number
    _all: number
  }


  export type ResultSendAvgAggregateInputType = {
    id?: true
    send_by?: true
  }

  export type ResultSendSumAggregateInputType = {
    id?: true
    send_by?: true
  }

  export type ResultSendMinAggregateInputType = {
    id?: true
    result_folio?: true
    send_by?: true
    send_at?: true
    status?: true
  }

  export type ResultSendMaxAggregateInputType = {
    id?: true
    result_folio?: true
    send_by?: true
    send_at?: true
    status?: true
  }

  export type ResultSendCountAggregateInputType = {
    id?: true
    result_folio?: true
    send_by?: true
    send_at?: true
    status?: true
    payload?: true
    response?: true
    _all?: true
  }

  export type ResultSendAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResultSend to aggregate.
     */
    where?: ResultSendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResultSends to fetch.
     */
    orderBy?: ResultSendOrderByWithRelationInput | ResultSendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResultSendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResultSends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResultSends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ResultSends
    **/
    _count?: true | ResultSendCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResultSendAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResultSendSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResultSendMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResultSendMaxAggregateInputType
  }

  export type GetResultSendAggregateType<T extends ResultSendAggregateArgs> = {
        [P in keyof T & keyof AggregateResultSend]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResultSend[P]>
      : GetScalarType<T[P], AggregateResultSend[P]>
  }




  export type ResultSendGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResultSendWhereInput
    orderBy?: ResultSendOrderByWithAggregationInput | ResultSendOrderByWithAggregationInput[]
    by: ResultSendScalarFieldEnum[] | ResultSendScalarFieldEnum
    having?: ResultSendScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResultSendCountAggregateInputType | true
    _avg?: ResultSendAvgAggregateInputType
    _sum?: ResultSendSumAggregateInputType
    _min?: ResultSendMinAggregateInputType
    _max?: ResultSendMaxAggregateInputType
  }

  export type ResultSendGroupByOutputType = {
    id: bigint
    result_folio: string | null
    send_by: bigint | null
    send_at: Date | null
    status: string | null
    payload: JsonValue | null
    response: JsonValue | null
    _count: ResultSendCountAggregateOutputType | null
    _avg: ResultSendAvgAggregateOutputType | null
    _sum: ResultSendSumAggregateOutputType | null
    _min: ResultSendMinAggregateOutputType | null
    _max: ResultSendMaxAggregateOutputType | null
  }

  type GetResultSendGroupByPayload<T extends ResultSendGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResultSendGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResultSendGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResultSendGroupByOutputType[P]>
            : GetScalarType<T[P], ResultSendGroupByOutputType[P]>
        }
      >
    >


  export type ResultSendSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    result_folio?: boolean
    send_by?: boolean
    send_at?: boolean
    status?: boolean
    payload?: boolean
    response?: boolean
    result?: boolean | ResultSend$resultArgs<ExtArgs>
    user?: boolean | ResultSend$userArgs<ExtArgs>
  }, ExtArgs["result"]["resultSend"]>

  export type ResultSendSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    result_folio?: boolean
    send_by?: boolean
    send_at?: boolean
    status?: boolean
    payload?: boolean
    response?: boolean
    result?: boolean | ResultSend$resultArgs<ExtArgs>
    user?: boolean | ResultSend$userArgs<ExtArgs>
  }, ExtArgs["result"]["resultSend"]>

  export type ResultSendSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    result_folio?: boolean
    send_by?: boolean
    send_at?: boolean
    status?: boolean
    payload?: boolean
    response?: boolean
    result?: boolean | ResultSend$resultArgs<ExtArgs>
    user?: boolean | ResultSend$userArgs<ExtArgs>
  }, ExtArgs["result"]["resultSend"]>

  export type ResultSendSelectScalar = {
    id?: boolean
    result_folio?: boolean
    send_by?: boolean
    send_at?: boolean
    status?: boolean
    payload?: boolean
    response?: boolean
  }

  export type ResultSendOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "result_folio" | "send_by" | "send_at" | "status" | "payload" | "response", ExtArgs["result"]["resultSend"]>
  export type ResultSendInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    result?: boolean | ResultSend$resultArgs<ExtArgs>
    user?: boolean | ResultSend$userArgs<ExtArgs>
  }
  export type ResultSendIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    result?: boolean | ResultSend$resultArgs<ExtArgs>
    user?: boolean | ResultSend$userArgs<ExtArgs>
  }
  export type ResultSendIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    result?: boolean | ResultSend$resultArgs<ExtArgs>
    user?: boolean | ResultSend$userArgs<ExtArgs>
  }

  export type $ResultSendPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ResultSend"
    objects: {
      result: Prisma.$ResultPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      result_folio: string | null
      send_by: bigint | null
      send_at: Date | null
      status: string | null
      payload: Prisma.JsonValue | null
      response: Prisma.JsonValue | null
    }, ExtArgs["result"]["resultSend"]>
    composites: {}
  }

  type ResultSendGetPayload<S extends boolean | null | undefined | ResultSendDefaultArgs> = $Result.GetResult<Prisma.$ResultSendPayload, S>

  type ResultSendCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResultSendFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResultSendCountAggregateInputType | true
    }

  export interface ResultSendDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ResultSend'], meta: { name: 'ResultSend' } }
    /**
     * Find zero or one ResultSend that matches the filter.
     * @param {ResultSendFindUniqueArgs} args - Arguments to find a ResultSend
     * @example
     * // Get one ResultSend
     * const resultSend = await prisma.resultSend.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResultSendFindUniqueArgs>(args: SelectSubset<T, ResultSendFindUniqueArgs<ExtArgs>>): Prisma__ResultSendClient<$Result.GetResult<Prisma.$ResultSendPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ResultSend that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResultSendFindUniqueOrThrowArgs} args - Arguments to find a ResultSend
     * @example
     * // Get one ResultSend
     * const resultSend = await prisma.resultSend.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResultSendFindUniqueOrThrowArgs>(args: SelectSubset<T, ResultSendFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResultSendClient<$Result.GetResult<Prisma.$ResultSendPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ResultSend that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultSendFindFirstArgs} args - Arguments to find a ResultSend
     * @example
     * // Get one ResultSend
     * const resultSend = await prisma.resultSend.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResultSendFindFirstArgs>(args?: SelectSubset<T, ResultSendFindFirstArgs<ExtArgs>>): Prisma__ResultSendClient<$Result.GetResult<Prisma.$ResultSendPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ResultSend that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultSendFindFirstOrThrowArgs} args - Arguments to find a ResultSend
     * @example
     * // Get one ResultSend
     * const resultSend = await prisma.resultSend.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResultSendFindFirstOrThrowArgs>(args?: SelectSubset<T, ResultSendFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResultSendClient<$Result.GetResult<Prisma.$ResultSendPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ResultSends that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultSendFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ResultSends
     * const resultSends = await prisma.resultSend.findMany()
     * 
     * // Get first 10 ResultSends
     * const resultSends = await prisma.resultSend.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resultSendWithIdOnly = await prisma.resultSend.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResultSendFindManyArgs>(args?: SelectSubset<T, ResultSendFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResultSendPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ResultSend.
     * @param {ResultSendCreateArgs} args - Arguments to create a ResultSend.
     * @example
     * // Create one ResultSend
     * const ResultSend = await prisma.resultSend.create({
     *   data: {
     *     // ... data to create a ResultSend
     *   }
     * })
     * 
     */
    create<T extends ResultSendCreateArgs>(args: SelectSubset<T, ResultSendCreateArgs<ExtArgs>>): Prisma__ResultSendClient<$Result.GetResult<Prisma.$ResultSendPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ResultSends.
     * @param {ResultSendCreateManyArgs} args - Arguments to create many ResultSends.
     * @example
     * // Create many ResultSends
     * const resultSend = await prisma.resultSend.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResultSendCreateManyArgs>(args?: SelectSubset<T, ResultSendCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ResultSends and returns the data saved in the database.
     * @param {ResultSendCreateManyAndReturnArgs} args - Arguments to create many ResultSends.
     * @example
     * // Create many ResultSends
     * const resultSend = await prisma.resultSend.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ResultSends and only return the `id`
     * const resultSendWithIdOnly = await prisma.resultSend.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResultSendCreateManyAndReturnArgs>(args?: SelectSubset<T, ResultSendCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResultSendPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ResultSend.
     * @param {ResultSendDeleteArgs} args - Arguments to delete one ResultSend.
     * @example
     * // Delete one ResultSend
     * const ResultSend = await prisma.resultSend.delete({
     *   where: {
     *     // ... filter to delete one ResultSend
     *   }
     * })
     * 
     */
    delete<T extends ResultSendDeleteArgs>(args: SelectSubset<T, ResultSendDeleteArgs<ExtArgs>>): Prisma__ResultSendClient<$Result.GetResult<Prisma.$ResultSendPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ResultSend.
     * @param {ResultSendUpdateArgs} args - Arguments to update one ResultSend.
     * @example
     * // Update one ResultSend
     * const resultSend = await prisma.resultSend.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResultSendUpdateArgs>(args: SelectSubset<T, ResultSendUpdateArgs<ExtArgs>>): Prisma__ResultSendClient<$Result.GetResult<Prisma.$ResultSendPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ResultSends.
     * @param {ResultSendDeleteManyArgs} args - Arguments to filter ResultSends to delete.
     * @example
     * // Delete a few ResultSends
     * const { count } = await prisma.resultSend.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResultSendDeleteManyArgs>(args?: SelectSubset<T, ResultSendDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResultSends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultSendUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ResultSends
     * const resultSend = await prisma.resultSend.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResultSendUpdateManyArgs>(args: SelectSubset<T, ResultSendUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResultSends and returns the data updated in the database.
     * @param {ResultSendUpdateManyAndReturnArgs} args - Arguments to update many ResultSends.
     * @example
     * // Update many ResultSends
     * const resultSend = await prisma.resultSend.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ResultSends and only return the `id`
     * const resultSendWithIdOnly = await prisma.resultSend.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ResultSendUpdateManyAndReturnArgs>(args: SelectSubset<T, ResultSendUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResultSendPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ResultSend.
     * @param {ResultSendUpsertArgs} args - Arguments to update or create a ResultSend.
     * @example
     * // Update or create a ResultSend
     * const resultSend = await prisma.resultSend.upsert({
     *   create: {
     *     // ... data to create a ResultSend
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ResultSend we want to update
     *   }
     * })
     */
    upsert<T extends ResultSendUpsertArgs>(args: SelectSubset<T, ResultSendUpsertArgs<ExtArgs>>): Prisma__ResultSendClient<$Result.GetResult<Prisma.$ResultSendPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ResultSends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultSendCountArgs} args - Arguments to filter ResultSends to count.
     * @example
     * // Count the number of ResultSends
     * const count = await prisma.resultSend.count({
     *   where: {
     *     // ... the filter for the ResultSends we want to count
     *   }
     * })
    **/
    count<T extends ResultSendCountArgs>(
      args?: Subset<T, ResultSendCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResultSendCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ResultSend.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultSendAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ResultSendAggregateArgs>(args: Subset<T, ResultSendAggregateArgs>): Prisma.PrismaPromise<GetResultSendAggregateType<T>>

    /**
     * Group by ResultSend.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultSendGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ResultSendGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResultSendGroupByArgs['orderBy'] }
        : { orderBy?: ResultSendGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ResultSendGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResultSendGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ResultSend model
   */
  readonly fields: ResultSendFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ResultSend.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResultSendClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    result<T extends ResultSend$resultArgs<ExtArgs> = {}>(args?: Subset<T, ResultSend$resultArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends ResultSend$userArgs<ExtArgs> = {}>(args?: Subset<T, ResultSend$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ResultSend model
   */
  interface ResultSendFieldRefs {
    readonly id: FieldRef<"ResultSend", 'BigInt'>
    readonly result_folio: FieldRef<"ResultSend", 'String'>
    readonly send_by: FieldRef<"ResultSend", 'BigInt'>
    readonly send_at: FieldRef<"ResultSend", 'DateTime'>
    readonly status: FieldRef<"ResultSend", 'String'>
    readonly payload: FieldRef<"ResultSend", 'Json'>
    readonly response: FieldRef<"ResultSend", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * ResultSend findUnique
   */
  export type ResultSendFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResultSend
     */
    select?: ResultSendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResultSend
     */
    omit?: ResultSendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultSendInclude<ExtArgs> | null
    /**
     * Filter, which ResultSend to fetch.
     */
    where: ResultSendWhereUniqueInput
  }

  /**
   * ResultSend findUniqueOrThrow
   */
  export type ResultSendFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResultSend
     */
    select?: ResultSendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResultSend
     */
    omit?: ResultSendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultSendInclude<ExtArgs> | null
    /**
     * Filter, which ResultSend to fetch.
     */
    where: ResultSendWhereUniqueInput
  }

  /**
   * ResultSend findFirst
   */
  export type ResultSendFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResultSend
     */
    select?: ResultSendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResultSend
     */
    omit?: ResultSendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultSendInclude<ExtArgs> | null
    /**
     * Filter, which ResultSend to fetch.
     */
    where?: ResultSendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResultSends to fetch.
     */
    orderBy?: ResultSendOrderByWithRelationInput | ResultSendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResultSends.
     */
    cursor?: ResultSendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResultSends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResultSends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResultSends.
     */
    distinct?: ResultSendScalarFieldEnum | ResultSendScalarFieldEnum[]
  }

  /**
   * ResultSend findFirstOrThrow
   */
  export type ResultSendFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResultSend
     */
    select?: ResultSendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResultSend
     */
    omit?: ResultSendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultSendInclude<ExtArgs> | null
    /**
     * Filter, which ResultSend to fetch.
     */
    where?: ResultSendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResultSends to fetch.
     */
    orderBy?: ResultSendOrderByWithRelationInput | ResultSendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResultSends.
     */
    cursor?: ResultSendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResultSends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResultSends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResultSends.
     */
    distinct?: ResultSendScalarFieldEnum | ResultSendScalarFieldEnum[]
  }

  /**
   * ResultSend findMany
   */
  export type ResultSendFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResultSend
     */
    select?: ResultSendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResultSend
     */
    omit?: ResultSendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultSendInclude<ExtArgs> | null
    /**
     * Filter, which ResultSends to fetch.
     */
    where?: ResultSendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResultSends to fetch.
     */
    orderBy?: ResultSendOrderByWithRelationInput | ResultSendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ResultSends.
     */
    cursor?: ResultSendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResultSends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResultSends.
     */
    skip?: number
    distinct?: ResultSendScalarFieldEnum | ResultSendScalarFieldEnum[]
  }

  /**
   * ResultSend create
   */
  export type ResultSendCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResultSend
     */
    select?: ResultSendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResultSend
     */
    omit?: ResultSendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultSendInclude<ExtArgs> | null
    /**
     * The data needed to create a ResultSend.
     */
    data: XOR<ResultSendCreateInput, ResultSendUncheckedCreateInput>
  }

  /**
   * ResultSend createMany
   */
  export type ResultSendCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ResultSends.
     */
    data: ResultSendCreateManyInput | ResultSendCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ResultSend createManyAndReturn
   */
  export type ResultSendCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResultSend
     */
    select?: ResultSendSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ResultSend
     */
    omit?: ResultSendOmit<ExtArgs> | null
    /**
     * The data used to create many ResultSends.
     */
    data: ResultSendCreateManyInput | ResultSendCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultSendIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ResultSend update
   */
  export type ResultSendUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResultSend
     */
    select?: ResultSendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResultSend
     */
    omit?: ResultSendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultSendInclude<ExtArgs> | null
    /**
     * The data needed to update a ResultSend.
     */
    data: XOR<ResultSendUpdateInput, ResultSendUncheckedUpdateInput>
    /**
     * Choose, which ResultSend to update.
     */
    where: ResultSendWhereUniqueInput
  }

  /**
   * ResultSend updateMany
   */
  export type ResultSendUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ResultSends.
     */
    data: XOR<ResultSendUpdateManyMutationInput, ResultSendUncheckedUpdateManyInput>
    /**
     * Filter which ResultSends to update
     */
    where?: ResultSendWhereInput
    /**
     * Limit how many ResultSends to update.
     */
    limit?: number
  }

  /**
   * ResultSend updateManyAndReturn
   */
  export type ResultSendUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResultSend
     */
    select?: ResultSendSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ResultSend
     */
    omit?: ResultSendOmit<ExtArgs> | null
    /**
     * The data used to update ResultSends.
     */
    data: XOR<ResultSendUpdateManyMutationInput, ResultSendUncheckedUpdateManyInput>
    /**
     * Filter which ResultSends to update
     */
    where?: ResultSendWhereInput
    /**
     * Limit how many ResultSends to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultSendIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ResultSend upsert
   */
  export type ResultSendUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResultSend
     */
    select?: ResultSendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResultSend
     */
    omit?: ResultSendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultSendInclude<ExtArgs> | null
    /**
     * The filter to search for the ResultSend to update in case it exists.
     */
    where: ResultSendWhereUniqueInput
    /**
     * In case the ResultSend found by the `where` argument doesn't exist, create a new ResultSend with this data.
     */
    create: XOR<ResultSendCreateInput, ResultSendUncheckedCreateInput>
    /**
     * In case the ResultSend was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResultSendUpdateInput, ResultSendUncheckedUpdateInput>
  }

  /**
   * ResultSend delete
   */
  export type ResultSendDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResultSend
     */
    select?: ResultSendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResultSend
     */
    omit?: ResultSendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultSendInclude<ExtArgs> | null
    /**
     * Filter which ResultSend to delete.
     */
    where: ResultSendWhereUniqueInput
  }

  /**
   * ResultSend deleteMany
   */
  export type ResultSendDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResultSends to delete
     */
    where?: ResultSendWhereInput
    /**
     * Limit how many ResultSends to delete.
     */
    limit?: number
  }

  /**
   * ResultSend.result
   */
  export type ResultSend$resultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    where?: ResultWhereInput
  }

  /**
   * ResultSend.user
   */
  export type ResultSend$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * ResultSend without action
   */
  export type ResultSendDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResultSend
     */
    select?: ResultSendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResultSend
     */
    omit?: ResultSendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultSendInclude<ExtArgs> | null
  }


  /**
   * Model SystemParameter
   */

  export type AggregateSystemParameter = {
    _count: SystemParameterCountAggregateOutputType | null
    _avg: SystemParameterAvgAggregateOutputType | null
    _sum: SystemParameterSumAggregateOutputType | null
    _min: SystemParameterMinAggregateOutputType | null
    _max: SystemParameterMaxAggregateOutputType | null
  }

  export type SystemParameterAvgAggregateOutputType = {
    id: number | null
  }

  export type SystemParameterSumAggregateOutputType = {
    id: bigint | null
  }

  export type SystemParameterMinAggregateOutputType = {
    id: bigint | null
    value: string | null
  }

  export type SystemParameterMaxAggregateOutputType = {
    id: bigint | null
    value: string | null
  }

  export type SystemParameterCountAggregateOutputType = {
    id: number
    value: number
    _all: number
  }


  export type SystemParameterAvgAggregateInputType = {
    id?: true
  }

  export type SystemParameterSumAggregateInputType = {
    id?: true
  }

  export type SystemParameterMinAggregateInputType = {
    id?: true
    value?: true
  }

  export type SystemParameterMaxAggregateInputType = {
    id?: true
    value?: true
  }

  export type SystemParameterCountAggregateInputType = {
    id?: true
    value?: true
    _all?: true
  }

  export type SystemParameterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemParameter to aggregate.
     */
    where?: SystemParameterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemParameters to fetch.
     */
    orderBy?: SystemParameterOrderByWithRelationInput | SystemParameterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SystemParameterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemParameters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemParameters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SystemParameters
    **/
    _count?: true | SystemParameterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SystemParameterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SystemParameterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SystemParameterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SystemParameterMaxAggregateInputType
  }

  export type GetSystemParameterAggregateType<T extends SystemParameterAggregateArgs> = {
        [P in keyof T & keyof AggregateSystemParameter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSystemParameter[P]>
      : GetScalarType<T[P], AggregateSystemParameter[P]>
  }




  export type SystemParameterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SystemParameterWhereInput
    orderBy?: SystemParameterOrderByWithAggregationInput | SystemParameterOrderByWithAggregationInput[]
    by: SystemParameterScalarFieldEnum[] | SystemParameterScalarFieldEnum
    having?: SystemParameterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SystemParameterCountAggregateInputType | true
    _avg?: SystemParameterAvgAggregateInputType
    _sum?: SystemParameterSumAggregateInputType
    _min?: SystemParameterMinAggregateInputType
    _max?: SystemParameterMaxAggregateInputType
  }

  export type SystemParameterGroupByOutputType = {
    id: bigint
    value: string | null
    _count: SystemParameterCountAggregateOutputType | null
    _avg: SystemParameterAvgAggregateOutputType | null
    _sum: SystemParameterSumAggregateOutputType | null
    _min: SystemParameterMinAggregateOutputType | null
    _max: SystemParameterMaxAggregateOutputType | null
  }

  type GetSystemParameterGroupByPayload<T extends SystemParameterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SystemParameterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SystemParameterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SystemParameterGroupByOutputType[P]>
            : GetScalarType<T[P], SystemParameterGroupByOutputType[P]>
        }
      >
    >


  export type SystemParameterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    parameterDictionaries?: boolean | SystemParameter$parameterDictionariesArgs<ExtArgs>
    _count?: boolean | SystemParameterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["systemParameter"]>

  export type SystemParameterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
  }, ExtArgs["result"]["systemParameter"]>

  export type SystemParameterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
  }, ExtArgs["result"]["systemParameter"]>

  export type SystemParameterSelectScalar = {
    id?: boolean
    value?: boolean
  }

  export type SystemParameterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "value", ExtArgs["result"]["systemParameter"]>
  export type SystemParameterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parameterDictionaries?: boolean | SystemParameter$parameterDictionariesArgs<ExtArgs>
    _count?: boolean | SystemParameterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SystemParameterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SystemParameterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SystemParameterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SystemParameter"
    objects: {
      parameterDictionaries: Prisma.$ParameterDictionaryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      value: string | null
    }, ExtArgs["result"]["systemParameter"]>
    composites: {}
  }

  type SystemParameterGetPayload<S extends boolean | null | undefined | SystemParameterDefaultArgs> = $Result.GetResult<Prisma.$SystemParameterPayload, S>

  type SystemParameterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SystemParameterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SystemParameterCountAggregateInputType | true
    }

  export interface SystemParameterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SystemParameter'], meta: { name: 'SystemParameter' } }
    /**
     * Find zero or one SystemParameter that matches the filter.
     * @param {SystemParameterFindUniqueArgs} args - Arguments to find a SystemParameter
     * @example
     * // Get one SystemParameter
     * const systemParameter = await prisma.systemParameter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SystemParameterFindUniqueArgs>(args: SelectSubset<T, SystemParameterFindUniqueArgs<ExtArgs>>): Prisma__SystemParameterClient<$Result.GetResult<Prisma.$SystemParameterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SystemParameter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SystemParameterFindUniqueOrThrowArgs} args - Arguments to find a SystemParameter
     * @example
     * // Get one SystemParameter
     * const systemParameter = await prisma.systemParameter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SystemParameterFindUniqueOrThrowArgs>(args: SelectSubset<T, SystemParameterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SystemParameterClient<$Result.GetResult<Prisma.$SystemParameterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SystemParameter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemParameterFindFirstArgs} args - Arguments to find a SystemParameter
     * @example
     * // Get one SystemParameter
     * const systemParameter = await prisma.systemParameter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SystemParameterFindFirstArgs>(args?: SelectSubset<T, SystemParameterFindFirstArgs<ExtArgs>>): Prisma__SystemParameterClient<$Result.GetResult<Prisma.$SystemParameterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SystemParameter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemParameterFindFirstOrThrowArgs} args - Arguments to find a SystemParameter
     * @example
     * // Get one SystemParameter
     * const systemParameter = await prisma.systemParameter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SystemParameterFindFirstOrThrowArgs>(args?: SelectSubset<T, SystemParameterFindFirstOrThrowArgs<ExtArgs>>): Prisma__SystemParameterClient<$Result.GetResult<Prisma.$SystemParameterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SystemParameters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemParameterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SystemParameters
     * const systemParameters = await prisma.systemParameter.findMany()
     * 
     * // Get first 10 SystemParameters
     * const systemParameters = await prisma.systemParameter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const systemParameterWithIdOnly = await prisma.systemParameter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SystemParameterFindManyArgs>(args?: SelectSubset<T, SystemParameterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemParameterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SystemParameter.
     * @param {SystemParameterCreateArgs} args - Arguments to create a SystemParameter.
     * @example
     * // Create one SystemParameter
     * const SystemParameter = await prisma.systemParameter.create({
     *   data: {
     *     // ... data to create a SystemParameter
     *   }
     * })
     * 
     */
    create<T extends SystemParameterCreateArgs>(args: SelectSubset<T, SystemParameterCreateArgs<ExtArgs>>): Prisma__SystemParameterClient<$Result.GetResult<Prisma.$SystemParameterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SystemParameters.
     * @param {SystemParameterCreateManyArgs} args - Arguments to create many SystemParameters.
     * @example
     * // Create many SystemParameters
     * const systemParameter = await prisma.systemParameter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SystemParameterCreateManyArgs>(args?: SelectSubset<T, SystemParameterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SystemParameters and returns the data saved in the database.
     * @param {SystemParameterCreateManyAndReturnArgs} args - Arguments to create many SystemParameters.
     * @example
     * // Create many SystemParameters
     * const systemParameter = await prisma.systemParameter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SystemParameters and only return the `id`
     * const systemParameterWithIdOnly = await prisma.systemParameter.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SystemParameterCreateManyAndReturnArgs>(args?: SelectSubset<T, SystemParameterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemParameterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SystemParameter.
     * @param {SystemParameterDeleteArgs} args - Arguments to delete one SystemParameter.
     * @example
     * // Delete one SystemParameter
     * const SystemParameter = await prisma.systemParameter.delete({
     *   where: {
     *     // ... filter to delete one SystemParameter
     *   }
     * })
     * 
     */
    delete<T extends SystemParameterDeleteArgs>(args: SelectSubset<T, SystemParameterDeleteArgs<ExtArgs>>): Prisma__SystemParameterClient<$Result.GetResult<Prisma.$SystemParameterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SystemParameter.
     * @param {SystemParameterUpdateArgs} args - Arguments to update one SystemParameter.
     * @example
     * // Update one SystemParameter
     * const systemParameter = await prisma.systemParameter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SystemParameterUpdateArgs>(args: SelectSubset<T, SystemParameterUpdateArgs<ExtArgs>>): Prisma__SystemParameterClient<$Result.GetResult<Prisma.$SystemParameterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SystemParameters.
     * @param {SystemParameterDeleteManyArgs} args - Arguments to filter SystemParameters to delete.
     * @example
     * // Delete a few SystemParameters
     * const { count } = await prisma.systemParameter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SystemParameterDeleteManyArgs>(args?: SelectSubset<T, SystemParameterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemParameters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemParameterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SystemParameters
     * const systemParameter = await prisma.systemParameter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SystemParameterUpdateManyArgs>(args: SelectSubset<T, SystemParameterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemParameters and returns the data updated in the database.
     * @param {SystemParameterUpdateManyAndReturnArgs} args - Arguments to update many SystemParameters.
     * @example
     * // Update many SystemParameters
     * const systemParameter = await prisma.systemParameter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SystemParameters and only return the `id`
     * const systemParameterWithIdOnly = await prisma.systemParameter.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SystemParameterUpdateManyAndReturnArgs>(args: SelectSubset<T, SystemParameterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemParameterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SystemParameter.
     * @param {SystemParameterUpsertArgs} args - Arguments to update or create a SystemParameter.
     * @example
     * // Update or create a SystemParameter
     * const systemParameter = await prisma.systemParameter.upsert({
     *   create: {
     *     // ... data to create a SystemParameter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SystemParameter we want to update
     *   }
     * })
     */
    upsert<T extends SystemParameterUpsertArgs>(args: SelectSubset<T, SystemParameterUpsertArgs<ExtArgs>>): Prisma__SystemParameterClient<$Result.GetResult<Prisma.$SystemParameterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SystemParameters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemParameterCountArgs} args - Arguments to filter SystemParameters to count.
     * @example
     * // Count the number of SystemParameters
     * const count = await prisma.systemParameter.count({
     *   where: {
     *     // ... the filter for the SystemParameters we want to count
     *   }
     * })
    **/
    count<T extends SystemParameterCountArgs>(
      args?: Subset<T, SystemParameterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SystemParameterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SystemParameter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemParameterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SystemParameterAggregateArgs>(args: Subset<T, SystemParameterAggregateArgs>): Prisma.PrismaPromise<GetSystemParameterAggregateType<T>>

    /**
     * Group by SystemParameter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemParameterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SystemParameterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SystemParameterGroupByArgs['orderBy'] }
        : { orderBy?: SystemParameterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SystemParameterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSystemParameterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SystemParameter model
   */
  readonly fields: SystemParameterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SystemParameter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SystemParameterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parameterDictionaries<T extends SystemParameter$parameterDictionariesArgs<ExtArgs> = {}>(args?: Subset<T, SystemParameter$parameterDictionariesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParameterDictionaryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SystemParameter model
   */
  interface SystemParameterFieldRefs {
    readonly id: FieldRef<"SystemParameter", 'BigInt'>
    readonly value: FieldRef<"SystemParameter", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SystemParameter findUnique
   */
  export type SystemParameterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemParameter
     */
    select?: SystemParameterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemParameter
     */
    omit?: SystemParameterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemParameterInclude<ExtArgs> | null
    /**
     * Filter, which SystemParameter to fetch.
     */
    where: SystemParameterWhereUniqueInput
  }

  /**
   * SystemParameter findUniqueOrThrow
   */
  export type SystemParameterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemParameter
     */
    select?: SystemParameterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemParameter
     */
    omit?: SystemParameterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemParameterInclude<ExtArgs> | null
    /**
     * Filter, which SystemParameter to fetch.
     */
    where: SystemParameterWhereUniqueInput
  }

  /**
   * SystemParameter findFirst
   */
  export type SystemParameterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemParameter
     */
    select?: SystemParameterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemParameter
     */
    omit?: SystemParameterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemParameterInclude<ExtArgs> | null
    /**
     * Filter, which SystemParameter to fetch.
     */
    where?: SystemParameterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemParameters to fetch.
     */
    orderBy?: SystemParameterOrderByWithRelationInput | SystemParameterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemParameters.
     */
    cursor?: SystemParameterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemParameters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemParameters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemParameters.
     */
    distinct?: SystemParameterScalarFieldEnum | SystemParameterScalarFieldEnum[]
  }

  /**
   * SystemParameter findFirstOrThrow
   */
  export type SystemParameterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemParameter
     */
    select?: SystemParameterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemParameter
     */
    omit?: SystemParameterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemParameterInclude<ExtArgs> | null
    /**
     * Filter, which SystemParameter to fetch.
     */
    where?: SystemParameterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemParameters to fetch.
     */
    orderBy?: SystemParameterOrderByWithRelationInput | SystemParameterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemParameters.
     */
    cursor?: SystemParameterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemParameters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemParameters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemParameters.
     */
    distinct?: SystemParameterScalarFieldEnum | SystemParameterScalarFieldEnum[]
  }

  /**
   * SystemParameter findMany
   */
  export type SystemParameterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemParameter
     */
    select?: SystemParameterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemParameter
     */
    omit?: SystemParameterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemParameterInclude<ExtArgs> | null
    /**
     * Filter, which SystemParameters to fetch.
     */
    where?: SystemParameterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemParameters to fetch.
     */
    orderBy?: SystemParameterOrderByWithRelationInput | SystemParameterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SystemParameters.
     */
    cursor?: SystemParameterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemParameters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemParameters.
     */
    skip?: number
    distinct?: SystemParameterScalarFieldEnum | SystemParameterScalarFieldEnum[]
  }

  /**
   * SystemParameter create
   */
  export type SystemParameterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemParameter
     */
    select?: SystemParameterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemParameter
     */
    omit?: SystemParameterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemParameterInclude<ExtArgs> | null
    /**
     * The data needed to create a SystemParameter.
     */
    data: XOR<SystemParameterCreateInput, SystemParameterUncheckedCreateInput>
  }

  /**
   * SystemParameter createMany
   */
  export type SystemParameterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SystemParameters.
     */
    data: SystemParameterCreateManyInput | SystemParameterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SystemParameter createManyAndReturn
   */
  export type SystemParameterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemParameter
     */
    select?: SystemParameterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SystemParameter
     */
    omit?: SystemParameterOmit<ExtArgs> | null
    /**
     * The data used to create many SystemParameters.
     */
    data: SystemParameterCreateManyInput | SystemParameterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SystemParameter update
   */
  export type SystemParameterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemParameter
     */
    select?: SystemParameterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemParameter
     */
    omit?: SystemParameterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemParameterInclude<ExtArgs> | null
    /**
     * The data needed to update a SystemParameter.
     */
    data: XOR<SystemParameterUpdateInput, SystemParameterUncheckedUpdateInput>
    /**
     * Choose, which SystemParameter to update.
     */
    where: SystemParameterWhereUniqueInput
  }

  /**
   * SystemParameter updateMany
   */
  export type SystemParameterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SystemParameters.
     */
    data: XOR<SystemParameterUpdateManyMutationInput, SystemParameterUncheckedUpdateManyInput>
    /**
     * Filter which SystemParameters to update
     */
    where?: SystemParameterWhereInput
    /**
     * Limit how many SystemParameters to update.
     */
    limit?: number
  }

  /**
   * SystemParameter updateManyAndReturn
   */
  export type SystemParameterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemParameter
     */
    select?: SystemParameterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SystemParameter
     */
    omit?: SystemParameterOmit<ExtArgs> | null
    /**
     * The data used to update SystemParameters.
     */
    data: XOR<SystemParameterUpdateManyMutationInput, SystemParameterUncheckedUpdateManyInput>
    /**
     * Filter which SystemParameters to update
     */
    where?: SystemParameterWhereInput
    /**
     * Limit how many SystemParameters to update.
     */
    limit?: number
  }

  /**
   * SystemParameter upsert
   */
  export type SystemParameterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemParameter
     */
    select?: SystemParameterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemParameter
     */
    omit?: SystemParameterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemParameterInclude<ExtArgs> | null
    /**
     * The filter to search for the SystemParameter to update in case it exists.
     */
    where: SystemParameterWhereUniqueInput
    /**
     * In case the SystemParameter found by the `where` argument doesn't exist, create a new SystemParameter with this data.
     */
    create: XOR<SystemParameterCreateInput, SystemParameterUncheckedCreateInput>
    /**
     * In case the SystemParameter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SystemParameterUpdateInput, SystemParameterUncheckedUpdateInput>
  }

  /**
   * SystemParameter delete
   */
  export type SystemParameterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemParameter
     */
    select?: SystemParameterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemParameter
     */
    omit?: SystemParameterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemParameterInclude<ExtArgs> | null
    /**
     * Filter which SystemParameter to delete.
     */
    where: SystemParameterWhereUniqueInput
  }

  /**
   * SystemParameter deleteMany
   */
  export type SystemParameterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemParameters to delete
     */
    where?: SystemParameterWhereInput
    /**
     * Limit how many SystemParameters to delete.
     */
    limit?: number
  }

  /**
   * SystemParameter.parameterDictionaries
   */
  export type SystemParameter$parameterDictionariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParameterDictionary
     */
    select?: ParameterDictionarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParameterDictionary
     */
    omit?: ParameterDictionaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParameterDictionaryInclude<ExtArgs> | null
    where?: ParameterDictionaryWhereInput
    orderBy?: ParameterDictionaryOrderByWithRelationInput | ParameterDictionaryOrderByWithRelationInput[]
    cursor?: ParameterDictionaryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParameterDictionaryScalarFieldEnum | ParameterDictionaryScalarFieldEnum[]
  }

  /**
   * SystemParameter without action
   */
  export type SystemParameterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemParameter
     */
    select?: SystemParameterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemParameter
     */
    omit?: SystemParameterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemParameterInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: bigint | null
  }

  export type UserMinAggregateOutputType = {
    id: bigint | null
    username: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: bigint | null
    username: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: bigint
    username: string | null
    password: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    resultSends?: boolean | User$resultSendsArgs<ExtArgs>
    createdResults?: boolean | User$createdResultsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resultSends?: boolean | User$resultSendsArgs<ExtArgs>
    createdResults?: boolean | User$createdResultsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      resultSends: Prisma.$ResultSendPayload<ExtArgs>[]
      createdResults: Prisma.$ResultPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      username: string | null
      password: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    resultSends<T extends User$resultSendsArgs<ExtArgs> = {}>(args?: Subset<T, User$resultSendsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResultSendPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdResults<T extends User$createdResultsArgs<ExtArgs> = {}>(args?: Subset<T, User$createdResultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'BigInt'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.resultSends
   */
  export type User$resultSendsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResultSend
     */
    select?: ResultSendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResultSend
     */
    omit?: ResultSendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultSendInclude<ExtArgs> | null
    where?: ResultSendWhereInput
    orderBy?: ResultSendOrderByWithRelationInput | ResultSendOrderByWithRelationInput[]
    cursor?: ResultSendWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResultSendScalarFieldEnum | ResultSendScalarFieldEnum[]
  }

  /**
   * User.createdResults
   */
  export type User$createdResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    where?: ResultWhereInput
    orderBy?: ResultOrderByWithRelationInput | ResultOrderByWithRelationInput[]
    cursor?: ResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResultScalarFieldEnum | ResultScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model EquipmentConfiguration
   */

  export type AggregateEquipmentConfiguration = {
    _count: EquipmentConfigurationCountAggregateOutputType | null
    _avg: EquipmentConfigurationAvgAggregateOutputType | null
    _sum: EquipmentConfigurationSumAggregateOutputType | null
    _min: EquipmentConfigurationMinAggregateOutputType | null
    _max: EquipmentConfigurationMaxAggregateOutputType | null
  }

  export type EquipmentConfigurationAvgAggregateOutputType = {
    equipment_id: number | null
    baud_rate: number | null
  }

  export type EquipmentConfigurationSumAggregateOutputType = {
    equipment_id: bigint | null
    baud_rate: number | null
  }

  export type EquipmentConfigurationMinAggregateOutputType = {
    equipment_id: bigint | null
    port: string | null
    ip_address: string | null
    baud_rate: number | null
    mac_address: string | null
    remote_directory: string | null
  }

  export type EquipmentConfigurationMaxAggregateOutputType = {
    equipment_id: bigint | null
    port: string | null
    ip_address: string | null
    baud_rate: number | null
    mac_address: string | null
    remote_directory: string | null
  }

  export type EquipmentConfigurationCountAggregateOutputType = {
    equipment_id: number
    port: number
    ip_address: number
    baud_rate: number
    mac_address: number
    remote_directory: number
    _all: number
  }


  export type EquipmentConfigurationAvgAggregateInputType = {
    equipment_id?: true
    baud_rate?: true
  }

  export type EquipmentConfigurationSumAggregateInputType = {
    equipment_id?: true
    baud_rate?: true
  }

  export type EquipmentConfigurationMinAggregateInputType = {
    equipment_id?: true
    port?: true
    ip_address?: true
    baud_rate?: true
    mac_address?: true
    remote_directory?: true
  }

  export type EquipmentConfigurationMaxAggregateInputType = {
    equipment_id?: true
    port?: true
    ip_address?: true
    baud_rate?: true
    mac_address?: true
    remote_directory?: true
  }

  export type EquipmentConfigurationCountAggregateInputType = {
    equipment_id?: true
    port?: true
    ip_address?: true
    baud_rate?: true
    mac_address?: true
    remote_directory?: true
    _all?: true
  }

  export type EquipmentConfigurationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EquipmentConfiguration to aggregate.
     */
    where?: EquipmentConfigurationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EquipmentConfigurations to fetch.
     */
    orderBy?: EquipmentConfigurationOrderByWithRelationInput | EquipmentConfigurationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EquipmentConfigurationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EquipmentConfigurations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EquipmentConfigurations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EquipmentConfigurations
    **/
    _count?: true | EquipmentConfigurationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EquipmentConfigurationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EquipmentConfigurationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EquipmentConfigurationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EquipmentConfigurationMaxAggregateInputType
  }

  export type GetEquipmentConfigurationAggregateType<T extends EquipmentConfigurationAggregateArgs> = {
        [P in keyof T & keyof AggregateEquipmentConfiguration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEquipmentConfiguration[P]>
      : GetScalarType<T[P], AggregateEquipmentConfiguration[P]>
  }




  export type EquipmentConfigurationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipmentConfigurationWhereInput
    orderBy?: EquipmentConfigurationOrderByWithAggregationInput | EquipmentConfigurationOrderByWithAggregationInput[]
    by: EquipmentConfigurationScalarFieldEnum[] | EquipmentConfigurationScalarFieldEnum
    having?: EquipmentConfigurationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EquipmentConfigurationCountAggregateInputType | true
    _avg?: EquipmentConfigurationAvgAggregateInputType
    _sum?: EquipmentConfigurationSumAggregateInputType
    _min?: EquipmentConfigurationMinAggregateInputType
    _max?: EquipmentConfigurationMaxAggregateInputType
  }

  export type EquipmentConfigurationGroupByOutputType = {
    equipment_id: bigint
    port: string
    ip_address: string
    baud_rate: number
    mac_address: string
    remote_directory: string
    _count: EquipmentConfigurationCountAggregateOutputType | null
    _avg: EquipmentConfigurationAvgAggregateOutputType | null
    _sum: EquipmentConfigurationSumAggregateOutputType | null
    _min: EquipmentConfigurationMinAggregateOutputType | null
    _max: EquipmentConfigurationMaxAggregateOutputType | null
  }

  type GetEquipmentConfigurationGroupByPayload<T extends EquipmentConfigurationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EquipmentConfigurationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EquipmentConfigurationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EquipmentConfigurationGroupByOutputType[P]>
            : GetScalarType<T[P], EquipmentConfigurationGroupByOutputType[P]>
        }
      >
    >


  export type EquipmentConfigurationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    equipment_id?: boolean
    port?: boolean
    ip_address?: boolean
    baud_rate?: boolean
    mac_address?: boolean
    remote_directory?: boolean
    equipment?: boolean | EquipmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipmentConfiguration"]>

  export type EquipmentConfigurationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    equipment_id?: boolean
    port?: boolean
    ip_address?: boolean
    baud_rate?: boolean
    mac_address?: boolean
    remote_directory?: boolean
    equipment?: boolean | EquipmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipmentConfiguration"]>

  export type EquipmentConfigurationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    equipment_id?: boolean
    port?: boolean
    ip_address?: boolean
    baud_rate?: boolean
    mac_address?: boolean
    remote_directory?: boolean
    equipment?: boolean | EquipmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipmentConfiguration"]>

  export type EquipmentConfigurationSelectScalar = {
    equipment_id?: boolean
    port?: boolean
    ip_address?: boolean
    baud_rate?: boolean
    mac_address?: boolean
    remote_directory?: boolean
  }

  export type EquipmentConfigurationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"equipment_id" | "port" | "ip_address" | "baud_rate" | "mac_address" | "remote_directory", ExtArgs["result"]["equipmentConfiguration"]>
  export type EquipmentConfigurationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipment?: boolean | EquipmentDefaultArgs<ExtArgs>
  }
  export type EquipmentConfigurationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipment?: boolean | EquipmentDefaultArgs<ExtArgs>
  }
  export type EquipmentConfigurationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipment?: boolean | EquipmentDefaultArgs<ExtArgs>
  }

  export type $EquipmentConfigurationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EquipmentConfiguration"
    objects: {
      equipment: Prisma.$EquipmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      equipment_id: bigint
      port: string
      ip_address: string
      baud_rate: number
      mac_address: string
      remote_directory: string
    }, ExtArgs["result"]["equipmentConfiguration"]>
    composites: {}
  }

  type EquipmentConfigurationGetPayload<S extends boolean | null | undefined | EquipmentConfigurationDefaultArgs> = $Result.GetResult<Prisma.$EquipmentConfigurationPayload, S>

  type EquipmentConfigurationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EquipmentConfigurationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EquipmentConfigurationCountAggregateInputType | true
    }

  export interface EquipmentConfigurationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EquipmentConfiguration'], meta: { name: 'EquipmentConfiguration' } }
    /**
     * Find zero or one EquipmentConfiguration that matches the filter.
     * @param {EquipmentConfigurationFindUniqueArgs} args - Arguments to find a EquipmentConfiguration
     * @example
     * // Get one EquipmentConfiguration
     * const equipmentConfiguration = await prisma.equipmentConfiguration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EquipmentConfigurationFindUniqueArgs>(args: SelectSubset<T, EquipmentConfigurationFindUniqueArgs<ExtArgs>>): Prisma__EquipmentConfigurationClient<$Result.GetResult<Prisma.$EquipmentConfigurationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EquipmentConfiguration that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EquipmentConfigurationFindUniqueOrThrowArgs} args - Arguments to find a EquipmentConfiguration
     * @example
     * // Get one EquipmentConfiguration
     * const equipmentConfiguration = await prisma.equipmentConfiguration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EquipmentConfigurationFindUniqueOrThrowArgs>(args: SelectSubset<T, EquipmentConfigurationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EquipmentConfigurationClient<$Result.GetResult<Prisma.$EquipmentConfigurationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EquipmentConfiguration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentConfigurationFindFirstArgs} args - Arguments to find a EquipmentConfiguration
     * @example
     * // Get one EquipmentConfiguration
     * const equipmentConfiguration = await prisma.equipmentConfiguration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EquipmentConfigurationFindFirstArgs>(args?: SelectSubset<T, EquipmentConfigurationFindFirstArgs<ExtArgs>>): Prisma__EquipmentConfigurationClient<$Result.GetResult<Prisma.$EquipmentConfigurationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EquipmentConfiguration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentConfigurationFindFirstOrThrowArgs} args - Arguments to find a EquipmentConfiguration
     * @example
     * // Get one EquipmentConfiguration
     * const equipmentConfiguration = await prisma.equipmentConfiguration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EquipmentConfigurationFindFirstOrThrowArgs>(args?: SelectSubset<T, EquipmentConfigurationFindFirstOrThrowArgs<ExtArgs>>): Prisma__EquipmentConfigurationClient<$Result.GetResult<Prisma.$EquipmentConfigurationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EquipmentConfigurations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentConfigurationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EquipmentConfigurations
     * const equipmentConfigurations = await prisma.equipmentConfiguration.findMany()
     * 
     * // Get first 10 EquipmentConfigurations
     * const equipmentConfigurations = await prisma.equipmentConfiguration.findMany({ take: 10 })
     * 
     * // Only select the `equipment_id`
     * const equipmentConfigurationWithEquipment_idOnly = await prisma.equipmentConfiguration.findMany({ select: { equipment_id: true } })
     * 
     */
    findMany<T extends EquipmentConfigurationFindManyArgs>(args?: SelectSubset<T, EquipmentConfigurationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentConfigurationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EquipmentConfiguration.
     * @param {EquipmentConfigurationCreateArgs} args - Arguments to create a EquipmentConfiguration.
     * @example
     * // Create one EquipmentConfiguration
     * const EquipmentConfiguration = await prisma.equipmentConfiguration.create({
     *   data: {
     *     // ... data to create a EquipmentConfiguration
     *   }
     * })
     * 
     */
    create<T extends EquipmentConfigurationCreateArgs>(args: SelectSubset<T, EquipmentConfigurationCreateArgs<ExtArgs>>): Prisma__EquipmentConfigurationClient<$Result.GetResult<Prisma.$EquipmentConfigurationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EquipmentConfigurations.
     * @param {EquipmentConfigurationCreateManyArgs} args - Arguments to create many EquipmentConfigurations.
     * @example
     * // Create many EquipmentConfigurations
     * const equipmentConfiguration = await prisma.equipmentConfiguration.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EquipmentConfigurationCreateManyArgs>(args?: SelectSubset<T, EquipmentConfigurationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EquipmentConfigurations and returns the data saved in the database.
     * @param {EquipmentConfigurationCreateManyAndReturnArgs} args - Arguments to create many EquipmentConfigurations.
     * @example
     * // Create many EquipmentConfigurations
     * const equipmentConfiguration = await prisma.equipmentConfiguration.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EquipmentConfigurations and only return the `equipment_id`
     * const equipmentConfigurationWithEquipment_idOnly = await prisma.equipmentConfiguration.createManyAndReturn({
     *   select: { equipment_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EquipmentConfigurationCreateManyAndReturnArgs>(args?: SelectSubset<T, EquipmentConfigurationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentConfigurationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EquipmentConfiguration.
     * @param {EquipmentConfigurationDeleteArgs} args - Arguments to delete one EquipmentConfiguration.
     * @example
     * // Delete one EquipmentConfiguration
     * const EquipmentConfiguration = await prisma.equipmentConfiguration.delete({
     *   where: {
     *     // ... filter to delete one EquipmentConfiguration
     *   }
     * })
     * 
     */
    delete<T extends EquipmentConfigurationDeleteArgs>(args: SelectSubset<T, EquipmentConfigurationDeleteArgs<ExtArgs>>): Prisma__EquipmentConfigurationClient<$Result.GetResult<Prisma.$EquipmentConfigurationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EquipmentConfiguration.
     * @param {EquipmentConfigurationUpdateArgs} args - Arguments to update one EquipmentConfiguration.
     * @example
     * // Update one EquipmentConfiguration
     * const equipmentConfiguration = await prisma.equipmentConfiguration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EquipmentConfigurationUpdateArgs>(args: SelectSubset<T, EquipmentConfigurationUpdateArgs<ExtArgs>>): Prisma__EquipmentConfigurationClient<$Result.GetResult<Prisma.$EquipmentConfigurationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EquipmentConfigurations.
     * @param {EquipmentConfigurationDeleteManyArgs} args - Arguments to filter EquipmentConfigurations to delete.
     * @example
     * // Delete a few EquipmentConfigurations
     * const { count } = await prisma.equipmentConfiguration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EquipmentConfigurationDeleteManyArgs>(args?: SelectSubset<T, EquipmentConfigurationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EquipmentConfigurations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentConfigurationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EquipmentConfigurations
     * const equipmentConfiguration = await prisma.equipmentConfiguration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EquipmentConfigurationUpdateManyArgs>(args: SelectSubset<T, EquipmentConfigurationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EquipmentConfigurations and returns the data updated in the database.
     * @param {EquipmentConfigurationUpdateManyAndReturnArgs} args - Arguments to update many EquipmentConfigurations.
     * @example
     * // Update many EquipmentConfigurations
     * const equipmentConfiguration = await prisma.equipmentConfiguration.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EquipmentConfigurations and only return the `equipment_id`
     * const equipmentConfigurationWithEquipment_idOnly = await prisma.equipmentConfiguration.updateManyAndReturn({
     *   select: { equipment_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EquipmentConfigurationUpdateManyAndReturnArgs>(args: SelectSubset<T, EquipmentConfigurationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentConfigurationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EquipmentConfiguration.
     * @param {EquipmentConfigurationUpsertArgs} args - Arguments to update or create a EquipmentConfiguration.
     * @example
     * // Update or create a EquipmentConfiguration
     * const equipmentConfiguration = await prisma.equipmentConfiguration.upsert({
     *   create: {
     *     // ... data to create a EquipmentConfiguration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EquipmentConfiguration we want to update
     *   }
     * })
     */
    upsert<T extends EquipmentConfigurationUpsertArgs>(args: SelectSubset<T, EquipmentConfigurationUpsertArgs<ExtArgs>>): Prisma__EquipmentConfigurationClient<$Result.GetResult<Prisma.$EquipmentConfigurationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EquipmentConfigurations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentConfigurationCountArgs} args - Arguments to filter EquipmentConfigurations to count.
     * @example
     * // Count the number of EquipmentConfigurations
     * const count = await prisma.equipmentConfiguration.count({
     *   where: {
     *     // ... the filter for the EquipmentConfigurations we want to count
     *   }
     * })
    **/
    count<T extends EquipmentConfigurationCountArgs>(
      args?: Subset<T, EquipmentConfigurationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EquipmentConfigurationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EquipmentConfiguration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentConfigurationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EquipmentConfigurationAggregateArgs>(args: Subset<T, EquipmentConfigurationAggregateArgs>): Prisma.PrismaPromise<GetEquipmentConfigurationAggregateType<T>>

    /**
     * Group by EquipmentConfiguration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentConfigurationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EquipmentConfigurationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EquipmentConfigurationGroupByArgs['orderBy'] }
        : { orderBy?: EquipmentConfigurationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EquipmentConfigurationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEquipmentConfigurationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EquipmentConfiguration model
   */
  readonly fields: EquipmentConfigurationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EquipmentConfiguration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EquipmentConfigurationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    equipment<T extends EquipmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EquipmentDefaultArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EquipmentConfiguration model
   */
  interface EquipmentConfigurationFieldRefs {
    readonly equipment_id: FieldRef<"EquipmentConfiguration", 'BigInt'>
    readonly port: FieldRef<"EquipmentConfiguration", 'String'>
    readonly ip_address: FieldRef<"EquipmentConfiguration", 'String'>
    readonly baud_rate: FieldRef<"EquipmentConfiguration", 'Int'>
    readonly mac_address: FieldRef<"EquipmentConfiguration", 'String'>
    readonly remote_directory: FieldRef<"EquipmentConfiguration", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EquipmentConfiguration findUnique
   */
  export type EquipmentConfigurationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentConfiguration
     */
    select?: EquipmentConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentConfiguration
     */
    omit?: EquipmentConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentConfigurationInclude<ExtArgs> | null
    /**
     * Filter, which EquipmentConfiguration to fetch.
     */
    where: EquipmentConfigurationWhereUniqueInput
  }

  /**
   * EquipmentConfiguration findUniqueOrThrow
   */
  export type EquipmentConfigurationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentConfiguration
     */
    select?: EquipmentConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentConfiguration
     */
    omit?: EquipmentConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentConfigurationInclude<ExtArgs> | null
    /**
     * Filter, which EquipmentConfiguration to fetch.
     */
    where: EquipmentConfigurationWhereUniqueInput
  }

  /**
   * EquipmentConfiguration findFirst
   */
  export type EquipmentConfigurationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentConfiguration
     */
    select?: EquipmentConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentConfiguration
     */
    omit?: EquipmentConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentConfigurationInclude<ExtArgs> | null
    /**
     * Filter, which EquipmentConfiguration to fetch.
     */
    where?: EquipmentConfigurationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EquipmentConfigurations to fetch.
     */
    orderBy?: EquipmentConfigurationOrderByWithRelationInput | EquipmentConfigurationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EquipmentConfigurations.
     */
    cursor?: EquipmentConfigurationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EquipmentConfigurations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EquipmentConfigurations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EquipmentConfigurations.
     */
    distinct?: EquipmentConfigurationScalarFieldEnum | EquipmentConfigurationScalarFieldEnum[]
  }

  /**
   * EquipmentConfiguration findFirstOrThrow
   */
  export type EquipmentConfigurationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentConfiguration
     */
    select?: EquipmentConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentConfiguration
     */
    omit?: EquipmentConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentConfigurationInclude<ExtArgs> | null
    /**
     * Filter, which EquipmentConfiguration to fetch.
     */
    where?: EquipmentConfigurationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EquipmentConfigurations to fetch.
     */
    orderBy?: EquipmentConfigurationOrderByWithRelationInput | EquipmentConfigurationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EquipmentConfigurations.
     */
    cursor?: EquipmentConfigurationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EquipmentConfigurations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EquipmentConfigurations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EquipmentConfigurations.
     */
    distinct?: EquipmentConfigurationScalarFieldEnum | EquipmentConfigurationScalarFieldEnum[]
  }

  /**
   * EquipmentConfiguration findMany
   */
  export type EquipmentConfigurationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentConfiguration
     */
    select?: EquipmentConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentConfiguration
     */
    omit?: EquipmentConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentConfigurationInclude<ExtArgs> | null
    /**
     * Filter, which EquipmentConfigurations to fetch.
     */
    where?: EquipmentConfigurationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EquipmentConfigurations to fetch.
     */
    orderBy?: EquipmentConfigurationOrderByWithRelationInput | EquipmentConfigurationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EquipmentConfigurations.
     */
    cursor?: EquipmentConfigurationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EquipmentConfigurations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EquipmentConfigurations.
     */
    skip?: number
    distinct?: EquipmentConfigurationScalarFieldEnum | EquipmentConfigurationScalarFieldEnum[]
  }

  /**
   * EquipmentConfiguration create
   */
  export type EquipmentConfigurationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentConfiguration
     */
    select?: EquipmentConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentConfiguration
     */
    omit?: EquipmentConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentConfigurationInclude<ExtArgs> | null
    /**
     * The data needed to create a EquipmentConfiguration.
     */
    data: XOR<EquipmentConfigurationCreateInput, EquipmentConfigurationUncheckedCreateInput>
  }

  /**
   * EquipmentConfiguration createMany
   */
  export type EquipmentConfigurationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EquipmentConfigurations.
     */
    data: EquipmentConfigurationCreateManyInput | EquipmentConfigurationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EquipmentConfiguration createManyAndReturn
   */
  export type EquipmentConfigurationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentConfiguration
     */
    select?: EquipmentConfigurationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentConfiguration
     */
    omit?: EquipmentConfigurationOmit<ExtArgs> | null
    /**
     * The data used to create many EquipmentConfigurations.
     */
    data: EquipmentConfigurationCreateManyInput | EquipmentConfigurationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentConfigurationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EquipmentConfiguration update
   */
  export type EquipmentConfigurationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentConfiguration
     */
    select?: EquipmentConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentConfiguration
     */
    omit?: EquipmentConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentConfigurationInclude<ExtArgs> | null
    /**
     * The data needed to update a EquipmentConfiguration.
     */
    data: XOR<EquipmentConfigurationUpdateInput, EquipmentConfigurationUncheckedUpdateInput>
    /**
     * Choose, which EquipmentConfiguration to update.
     */
    where: EquipmentConfigurationWhereUniqueInput
  }

  /**
   * EquipmentConfiguration updateMany
   */
  export type EquipmentConfigurationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EquipmentConfigurations.
     */
    data: XOR<EquipmentConfigurationUpdateManyMutationInput, EquipmentConfigurationUncheckedUpdateManyInput>
    /**
     * Filter which EquipmentConfigurations to update
     */
    where?: EquipmentConfigurationWhereInput
    /**
     * Limit how many EquipmentConfigurations to update.
     */
    limit?: number
  }

  /**
   * EquipmentConfiguration updateManyAndReturn
   */
  export type EquipmentConfigurationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentConfiguration
     */
    select?: EquipmentConfigurationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentConfiguration
     */
    omit?: EquipmentConfigurationOmit<ExtArgs> | null
    /**
     * The data used to update EquipmentConfigurations.
     */
    data: XOR<EquipmentConfigurationUpdateManyMutationInput, EquipmentConfigurationUncheckedUpdateManyInput>
    /**
     * Filter which EquipmentConfigurations to update
     */
    where?: EquipmentConfigurationWhereInput
    /**
     * Limit how many EquipmentConfigurations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentConfigurationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EquipmentConfiguration upsert
   */
  export type EquipmentConfigurationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentConfiguration
     */
    select?: EquipmentConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentConfiguration
     */
    omit?: EquipmentConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentConfigurationInclude<ExtArgs> | null
    /**
     * The filter to search for the EquipmentConfiguration to update in case it exists.
     */
    where: EquipmentConfigurationWhereUniqueInput
    /**
     * In case the EquipmentConfiguration found by the `where` argument doesn't exist, create a new EquipmentConfiguration with this data.
     */
    create: XOR<EquipmentConfigurationCreateInput, EquipmentConfigurationUncheckedCreateInput>
    /**
     * In case the EquipmentConfiguration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EquipmentConfigurationUpdateInput, EquipmentConfigurationUncheckedUpdateInput>
  }

  /**
   * EquipmentConfiguration delete
   */
  export type EquipmentConfigurationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentConfiguration
     */
    select?: EquipmentConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentConfiguration
     */
    omit?: EquipmentConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentConfigurationInclude<ExtArgs> | null
    /**
     * Filter which EquipmentConfiguration to delete.
     */
    where: EquipmentConfigurationWhereUniqueInput
  }

  /**
   * EquipmentConfiguration deleteMany
   */
  export type EquipmentConfigurationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EquipmentConfigurations to delete
     */
    where?: EquipmentConfigurationWhereInput
    /**
     * Limit how many EquipmentConfigurations to delete.
     */
    limit?: number
  }

  /**
   * EquipmentConfiguration without action
   */
  export type EquipmentConfigurationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipmentConfiguration
     */
    select?: EquipmentConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipmentConfiguration
     */
    omit?: EquipmentConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipmentConfigurationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CommunicationProfilesScalarFieldEnum: {
    id: 'id',
    checksum_regex: 'checksum_regex',
    type: 'type'
  };

  export type CommunicationProfilesScalarFieldEnum = (typeof CommunicationProfilesScalarFieldEnum)[keyof typeof CommunicationProfilesScalarFieldEnum]


  export const DirectoryHistorialScalarFieldEnum: {
    id: 'id',
    equipment_id: 'equipment_id',
    filename: 'filename',
    filepath: 'filepath',
    modified_at: 'modified_at'
  };

  export type DirectoryHistorialScalarFieldEnum = (typeof DirectoryHistorialScalarFieldEnum)[keyof typeof DirectoryHistorialScalarFieldEnum]


  export const EquipmentProfileScalarFieldEnum: {
    id: 'id',
    communication_profile: 'communication_profile',
    name: 'name',
    active: 'active',
    communication_type: 'communication_type'
  };

  export type EquipmentProfileScalarFieldEnum = (typeof EquipmentProfileScalarFieldEnum)[keyof typeof EquipmentProfileScalarFieldEnum]


  export const EquipmentScalarFieldEnum: {
    id: 'id',
    profile_id: 'profile_id',
    name: 'name',
    created_at: 'created_at',
    modified_at: 'modified_at',
    last_connection: 'last_connection',
    connection_status: 'connection_status',
    active: 'active'
  };

  export type EquipmentScalarFieldEnum = (typeof EquipmentScalarFieldEnum)[keyof typeof EquipmentScalarFieldEnum]


  export const HistogramResultScalarFieldEnum: {
    id: 'id',
    result_folio: 'result_folio',
    description: 'description',
    value: 'value',
    created_at: 'created_at',
    active: 'active'
  };

  export type HistogramResultScalarFieldEnum = (typeof HistogramResultScalarFieldEnum)[keyof typeof HistogramResultScalarFieldEnum]


  export const ParameterScalarFieldEnum: {
    id: 'id',
    result_folio: 'result_folio',
    equipment_id: 'equipment_id',
    parameter_dictionary_id: 'parameter_dictionary_id',
    description: 'description',
    value: 'value',
    unit_measurement: 'unit_measurement',
    max_range: 'max_range',
    min_range: 'min_range',
    created_at: 'created_at',
    active: 'active'
  };

  export type ParameterScalarFieldEnum = (typeof ParameterScalarFieldEnum)[keyof typeof ParameterScalarFieldEnum]


  export const ResultScalarFieldEnum: {
    folio: 'folio',
    created_by: 'created_by',
    sample_id: 'sample_id',
    created_at: 'created_at',
    last_modified_at: 'last_modified_at',
    active: 'active'
  };

  export type ResultScalarFieldEnum = (typeof ResultScalarFieldEnum)[keyof typeof ResultScalarFieldEnum]


  export const ParameterDictionaryScalarFieldEnum: {
    id: 'id',
    system_parameter_id: 'system_parameter_id',
    parameter_description: 'parameter_description'
  };

  export type ParameterDictionaryScalarFieldEnum = (typeof ParameterDictionaryScalarFieldEnum)[keyof typeof ParameterDictionaryScalarFieldEnum]


  export const ResultSendScalarFieldEnum: {
    id: 'id',
    result_folio: 'result_folio',
    send_by: 'send_by',
    send_at: 'send_at',
    status: 'status',
    payload: 'payload',
    response: 'response'
  };

  export type ResultSendScalarFieldEnum = (typeof ResultSendScalarFieldEnum)[keyof typeof ResultSendScalarFieldEnum]


  export const SystemParameterScalarFieldEnum: {
    id: 'id',
    value: 'value'
  };

  export type SystemParameterScalarFieldEnum = (typeof SystemParameterScalarFieldEnum)[keyof typeof SystemParameterScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const EquipmentConfigurationScalarFieldEnum: {
    equipment_id: 'equipment_id',
    port: 'port',
    ip_address: 'ip_address',
    baud_rate: 'baud_rate',
    mac_address: 'mac_address',
    remote_directory: 'remote_directory'
  };

  export type EquipmentConfigurationScalarFieldEnum = (typeof EquipmentConfigurationScalarFieldEnum)[keyof typeof EquipmentConfigurationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CommunicationProfilesWhereInput = {
    AND?: CommunicationProfilesWhereInput | CommunicationProfilesWhereInput[]
    OR?: CommunicationProfilesWhereInput[]
    NOT?: CommunicationProfilesWhereInput | CommunicationProfilesWhereInput[]
    id?: StringFilter<"CommunicationProfiles"> | string
    checksum_regex?: StringNullableFilter<"CommunicationProfiles"> | string | null
    type?: StringNullableFilter<"CommunicationProfiles"> | string | null
    equipmentProfiles?: EquipmentProfileListRelationFilter
  }

  export type CommunicationProfilesOrderByWithRelationInput = {
    id?: SortOrder
    checksum_regex?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    equipmentProfiles?: EquipmentProfileOrderByRelationAggregateInput
  }

  export type CommunicationProfilesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommunicationProfilesWhereInput | CommunicationProfilesWhereInput[]
    OR?: CommunicationProfilesWhereInput[]
    NOT?: CommunicationProfilesWhereInput | CommunicationProfilesWhereInput[]
    checksum_regex?: StringNullableFilter<"CommunicationProfiles"> | string | null
    type?: StringNullableFilter<"CommunicationProfiles"> | string | null
    equipmentProfiles?: EquipmentProfileListRelationFilter
  }, "id">

  export type CommunicationProfilesOrderByWithAggregationInput = {
    id?: SortOrder
    checksum_regex?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    _count?: CommunicationProfilesCountOrderByAggregateInput
    _max?: CommunicationProfilesMaxOrderByAggregateInput
    _min?: CommunicationProfilesMinOrderByAggregateInput
  }

  export type CommunicationProfilesScalarWhereWithAggregatesInput = {
    AND?: CommunicationProfilesScalarWhereWithAggregatesInput | CommunicationProfilesScalarWhereWithAggregatesInput[]
    OR?: CommunicationProfilesScalarWhereWithAggregatesInput[]
    NOT?: CommunicationProfilesScalarWhereWithAggregatesInput | CommunicationProfilesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CommunicationProfiles"> | string
    checksum_regex?: StringNullableWithAggregatesFilter<"CommunicationProfiles"> | string | null
    type?: StringNullableWithAggregatesFilter<"CommunicationProfiles"> | string | null
  }

  export type DirectoryHistorialWhereInput = {
    AND?: DirectoryHistorialWhereInput | DirectoryHistorialWhereInput[]
    OR?: DirectoryHistorialWhereInput[]
    NOT?: DirectoryHistorialWhereInput | DirectoryHistorialWhereInput[]
    id?: BigIntFilter<"DirectoryHistorial"> | bigint | number
    equipment_id?: BigIntNullableFilter<"DirectoryHistorial"> | bigint | number | null
    filename?: StringNullableFilter<"DirectoryHistorial"> | string | null
    filepath?: StringNullableFilter<"DirectoryHistorial"> | string | null
    modified_at?: BigIntNullableFilter<"DirectoryHistorial"> | bigint | number | null
    equipment?: XOR<EquipmentNullableScalarRelationFilter, EquipmentWhereInput> | null
  }

  export type DirectoryHistorialOrderByWithRelationInput = {
    id?: SortOrder
    equipment_id?: SortOrderInput | SortOrder
    filename?: SortOrderInput | SortOrder
    filepath?: SortOrderInput | SortOrder
    modified_at?: SortOrderInput | SortOrder
    equipment?: EquipmentOrderByWithRelationInput
  }

  export type DirectoryHistorialWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: DirectoryHistorialWhereInput | DirectoryHistorialWhereInput[]
    OR?: DirectoryHistorialWhereInput[]
    NOT?: DirectoryHistorialWhereInput | DirectoryHistorialWhereInput[]
    equipment_id?: BigIntNullableFilter<"DirectoryHistorial"> | bigint | number | null
    filename?: StringNullableFilter<"DirectoryHistorial"> | string | null
    filepath?: StringNullableFilter<"DirectoryHistorial"> | string | null
    modified_at?: BigIntNullableFilter<"DirectoryHistorial"> | bigint | number | null
    equipment?: XOR<EquipmentNullableScalarRelationFilter, EquipmentWhereInput> | null
  }, "id">

  export type DirectoryHistorialOrderByWithAggregationInput = {
    id?: SortOrder
    equipment_id?: SortOrderInput | SortOrder
    filename?: SortOrderInput | SortOrder
    filepath?: SortOrderInput | SortOrder
    modified_at?: SortOrderInput | SortOrder
    _count?: DirectoryHistorialCountOrderByAggregateInput
    _avg?: DirectoryHistorialAvgOrderByAggregateInput
    _max?: DirectoryHistorialMaxOrderByAggregateInput
    _min?: DirectoryHistorialMinOrderByAggregateInput
    _sum?: DirectoryHistorialSumOrderByAggregateInput
  }

  export type DirectoryHistorialScalarWhereWithAggregatesInput = {
    AND?: DirectoryHistorialScalarWhereWithAggregatesInput | DirectoryHistorialScalarWhereWithAggregatesInput[]
    OR?: DirectoryHistorialScalarWhereWithAggregatesInput[]
    NOT?: DirectoryHistorialScalarWhereWithAggregatesInput | DirectoryHistorialScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"DirectoryHistorial"> | bigint | number
    equipment_id?: BigIntNullableWithAggregatesFilter<"DirectoryHistorial"> | bigint | number | null
    filename?: StringNullableWithAggregatesFilter<"DirectoryHistorial"> | string | null
    filepath?: StringNullableWithAggregatesFilter<"DirectoryHistorial"> | string | null
    modified_at?: BigIntNullableWithAggregatesFilter<"DirectoryHistorial"> | bigint | number | null
  }

  export type EquipmentProfileWhereInput = {
    AND?: EquipmentProfileWhereInput | EquipmentProfileWhereInput[]
    OR?: EquipmentProfileWhereInput[]
    NOT?: EquipmentProfileWhereInput | EquipmentProfileWhereInput[]
    id?: BigIntFilter<"EquipmentProfile"> | bigint | number
    communication_profile?: StringNullableFilter<"EquipmentProfile"> | string | null
    name?: StringNullableFilter<"EquipmentProfile"> | string | null
    active?: BoolNullableFilter<"EquipmentProfile"> | boolean | null
    communication_type?: StringNullableFilter<"EquipmentProfile"> | string | null
    communicationProfile?: XOR<CommunicationProfilesNullableScalarRelationFilter, CommunicationProfilesWhereInput> | null
    equipments?: EquipmentListRelationFilter
  }

  export type EquipmentProfileOrderByWithRelationInput = {
    id?: SortOrder
    communication_profile?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    active?: SortOrderInput | SortOrder
    communication_type?: SortOrderInput | SortOrder
    communicationProfile?: CommunicationProfilesOrderByWithRelationInput
    equipments?: EquipmentOrderByRelationAggregateInput
  }

  export type EquipmentProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: EquipmentProfileWhereInput | EquipmentProfileWhereInput[]
    OR?: EquipmentProfileWhereInput[]
    NOT?: EquipmentProfileWhereInput | EquipmentProfileWhereInput[]
    communication_profile?: StringNullableFilter<"EquipmentProfile"> | string | null
    name?: StringNullableFilter<"EquipmentProfile"> | string | null
    active?: BoolNullableFilter<"EquipmentProfile"> | boolean | null
    communication_type?: StringNullableFilter<"EquipmentProfile"> | string | null
    communicationProfile?: XOR<CommunicationProfilesNullableScalarRelationFilter, CommunicationProfilesWhereInput> | null
    equipments?: EquipmentListRelationFilter
  }, "id">

  export type EquipmentProfileOrderByWithAggregationInput = {
    id?: SortOrder
    communication_profile?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    active?: SortOrderInput | SortOrder
    communication_type?: SortOrderInput | SortOrder
    _count?: EquipmentProfileCountOrderByAggregateInput
    _avg?: EquipmentProfileAvgOrderByAggregateInput
    _max?: EquipmentProfileMaxOrderByAggregateInput
    _min?: EquipmentProfileMinOrderByAggregateInput
    _sum?: EquipmentProfileSumOrderByAggregateInput
  }

  export type EquipmentProfileScalarWhereWithAggregatesInput = {
    AND?: EquipmentProfileScalarWhereWithAggregatesInput | EquipmentProfileScalarWhereWithAggregatesInput[]
    OR?: EquipmentProfileScalarWhereWithAggregatesInput[]
    NOT?: EquipmentProfileScalarWhereWithAggregatesInput | EquipmentProfileScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"EquipmentProfile"> | bigint | number
    communication_profile?: StringNullableWithAggregatesFilter<"EquipmentProfile"> | string | null
    name?: StringNullableWithAggregatesFilter<"EquipmentProfile"> | string | null
    active?: BoolNullableWithAggregatesFilter<"EquipmentProfile"> | boolean | null
    communication_type?: StringNullableWithAggregatesFilter<"EquipmentProfile"> | string | null
  }

  export type EquipmentWhereInput = {
    AND?: EquipmentWhereInput | EquipmentWhereInput[]
    OR?: EquipmentWhereInput[]
    NOT?: EquipmentWhereInput | EquipmentWhereInput[]
    id?: BigIntFilter<"Equipment"> | bigint | number
    profile_id?: BigIntNullableFilter<"Equipment"> | bigint | number | null
    name?: StringNullableFilter<"Equipment"> | string | null
    created_at?: DateTimeNullableFilter<"Equipment"> | Date | string | null
    modified_at?: DateTimeNullableFilter<"Equipment"> | Date | string | null
    last_connection?: DateTimeNullableFilter<"Equipment"> | Date | string | null
    connection_status?: StringNullableFilter<"Equipment"> | string | null
    active?: BoolNullableFilter<"Equipment"> | boolean | null
    directoryHistorials?: DirectoryHistorialListRelationFilter
    equipmentProfile?: XOR<EquipmentProfileNullableScalarRelationFilter, EquipmentProfileWhereInput> | null
    parameters?: ParameterListRelationFilter
    EquipmentConfiguration?: EquipmentConfigurationListRelationFilter
  }

  export type EquipmentOrderByWithRelationInput = {
    id?: SortOrder
    profile_id?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    modified_at?: SortOrderInput | SortOrder
    last_connection?: SortOrderInput | SortOrder
    connection_status?: SortOrderInput | SortOrder
    active?: SortOrderInput | SortOrder
    directoryHistorials?: DirectoryHistorialOrderByRelationAggregateInput
    equipmentProfile?: EquipmentProfileOrderByWithRelationInput
    parameters?: ParameterOrderByRelationAggregateInput
    EquipmentConfiguration?: EquipmentConfigurationOrderByRelationAggregateInput
  }

  export type EquipmentWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: EquipmentWhereInput | EquipmentWhereInput[]
    OR?: EquipmentWhereInput[]
    NOT?: EquipmentWhereInput | EquipmentWhereInput[]
    profile_id?: BigIntNullableFilter<"Equipment"> | bigint | number | null
    name?: StringNullableFilter<"Equipment"> | string | null
    created_at?: DateTimeNullableFilter<"Equipment"> | Date | string | null
    modified_at?: DateTimeNullableFilter<"Equipment"> | Date | string | null
    last_connection?: DateTimeNullableFilter<"Equipment"> | Date | string | null
    connection_status?: StringNullableFilter<"Equipment"> | string | null
    active?: BoolNullableFilter<"Equipment"> | boolean | null
    directoryHistorials?: DirectoryHistorialListRelationFilter
    equipmentProfile?: XOR<EquipmentProfileNullableScalarRelationFilter, EquipmentProfileWhereInput> | null
    parameters?: ParameterListRelationFilter
    EquipmentConfiguration?: EquipmentConfigurationListRelationFilter
  }, "id">

  export type EquipmentOrderByWithAggregationInput = {
    id?: SortOrder
    profile_id?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    modified_at?: SortOrderInput | SortOrder
    last_connection?: SortOrderInput | SortOrder
    connection_status?: SortOrderInput | SortOrder
    active?: SortOrderInput | SortOrder
    _count?: EquipmentCountOrderByAggregateInput
    _avg?: EquipmentAvgOrderByAggregateInput
    _max?: EquipmentMaxOrderByAggregateInput
    _min?: EquipmentMinOrderByAggregateInput
    _sum?: EquipmentSumOrderByAggregateInput
  }

  export type EquipmentScalarWhereWithAggregatesInput = {
    AND?: EquipmentScalarWhereWithAggregatesInput | EquipmentScalarWhereWithAggregatesInput[]
    OR?: EquipmentScalarWhereWithAggregatesInput[]
    NOT?: EquipmentScalarWhereWithAggregatesInput | EquipmentScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Equipment"> | bigint | number
    profile_id?: BigIntNullableWithAggregatesFilter<"Equipment"> | bigint | number | null
    name?: StringNullableWithAggregatesFilter<"Equipment"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"Equipment"> | Date | string | null
    modified_at?: DateTimeNullableWithAggregatesFilter<"Equipment"> | Date | string | null
    last_connection?: DateTimeNullableWithAggregatesFilter<"Equipment"> | Date | string | null
    connection_status?: StringNullableWithAggregatesFilter<"Equipment"> | string | null
    active?: BoolNullableWithAggregatesFilter<"Equipment"> | boolean | null
  }

  export type HistogramResultWhereInput = {
    AND?: HistogramResultWhereInput | HistogramResultWhereInput[]
    OR?: HistogramResultWhereInput[]
    NOT?: HistogramResultWhereInput | HistogramResultWhereInput[]
    id?: BigIntFilter<"HistogramResult"> | bigint | number
    result_folio?: StringNullableFilter<"HistogramResult"> | string | null
    description?: StringNullableFilter<"HistogramResult"> | string | null
    value?: StringNullableFilter<"HistogramResult"> | string | null
    created_at?: DateTimeNullableFilter<"HistogramResult"> | Date | string | null
    active?: BoolNullableFilter<"HistogramResult"> | boolean | null
    result?: XOR<ResultNullableScalarRelationFilter, ResultWhereInput> | null
  }

  export type HistogramResultOrderByWithRelationInput = {
    id?: SortOrder
    result_folio?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    value?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    active?: SortOrderInput | SortOrder
    result?: ResultOrderByWithRelationInput
  }

  export type HistogramResultWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: HistogramResultWhereInput | HistogramResultWhereInput[]
    OR?: HistogramResultWhereInput[]
    NOT?: HistogramResultWhereInput | HistogramResultWhereInput[]
    result_folio?: StringNullableFilter<"HistogramResult"> | string | null
    description?: StringNullableFilter<"HistogramResult"> | string | null
    value?: StringNullableFilter<"HistogramResult"> | string | null
    created_at?: DateTimeNullableFilter<"HistogramResult"> | Date | string | null
    active?: BoolNullableFilter<"HistogramResult"> | boolean | null
    result?: XOR<ResultNullableScalarRelationFilter, ResultWhereInput> | null
  }, "id">

  export type HistogramResultOrderByWithAggregationInput = {
    id?: SortOrder
    result_folio?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    value?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    active?: SortOrderInput | SortOrder
    _count?: HistogramResultCountOrderByAggregateInput
    _avg?: HistogramResultAvgOrderByAggregateInput
    _max?: HistogramResultMaxOrderByAggregateInput
    _min?: HistogramResultMinOrderByAggregateInput
    _sum?: HistogramResultSumOrderByAggregateInput
  }

  export type HistogramResultScalarWhereWithAggregatesInput = {
    AND?: HistogramResultScalarWhereWithAggregatesInput | HistogramResultScalarWhereWithAggregatesInput[]
    OR?: HistogramResultScalarWhereWithAggregatesInput[]
    NOT?: HistogramResultScalarWhereWithAggregatesInput | HistogramResultScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"HistogramResult"> | bigint | number
    result_folio?: StringNullableWithAggregatesFilter<"HistogramResult"> | string | null
    description?: StringNullableWithAggregatesFilter<"HistogramResult"> | string | null
    value?: StringNullableWithAggregatesFilter<"HistogramResult"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"HistogramResult"> | Date | string | null
    active?: BoolNullableWithAggregatesFilter<"HistogramResult"> | boolean | null
  }

  export type ParameterWhereInput = {
    AND?: ParameterWhereInput | ParameterWhereInput[]
    OR?: ParameterWhereInput[]
    NOT?: ParameterWhereInput | ParameterWhereInput[]
    id?: BigIntFilter<"Parameter"> | bigint | number
    result_folio?: StringNullableFilter<"Parameter"> | string | null
    equipment_id?: BigIntNullableFilter<"Parameter"> | bigint | number | null
    parameter_dictionary_id?: BigIntNullableFilter<"Parameter"> | bigint | number | null
    description?: StringNullableFilter<"Parameter"> | string | null
    value?: StringNullableFilter<"Parameter"> | string | null
    unit_measurement?: StringNullableFilter<"Parameter"> | string | null
    max_range?: StringNullableFilter<"Parameter"> | string | null
    min_range?: StringNullableFilter<"Parameter"> | string | null
    created_at?: DateTimeNullableFilter<"Parameter"> | Date | string | null
    active?: BoolNullableFilter<"Parameter"> | boolean | null
    equipment?: XOR<EquipmentNullableScalarRelationFilter, EquipmentWhereInput> | null
    parameterDictionary?: XOR<ParameterDictionaryNullableScalarRelationFilter, ParameterDictionaryWhereInput> | null
    result?: XOR<ResultNullableScalarRelationFilter, ResultWhereInput> | null
  }

  export type ParameterOrderByWithRelationInput = {
    id?: SortOrder
    result_folio?: SortOrderInput | SortOrder
    equipment_id?: SortOrderInput | SortOrder
    parameter_dictionary_id?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    value?: SortOrderInput | SortOrder
    unit_measurement?: SortOrderInput | SortOrder
    max_range?: SortOrderInput | SortOrder
    min_range?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    active?: SortOrderInput | SortOrder
    equipment?: EquipmentOrderByWithRelationInput
    parameterDictionary?: ParameterDictionaryOrderByWithRelationInput
    result?: ResultOrderByWithRelationInput
  }

  export type ParameterWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: ParameterWhereInput | ParameterWhereInput[]
    OR?: ParameterWhereInput[]
    NOT?: ParameterWhereInput | ParameterWhereInput[]
    result_folio?: StringNullableFilter<"Parameter"> | string | null
    equipment_id?: BigIntNullableFilter<"Parameter"> | bigint | number | null
    parameter_dictionary_id?: BigIntNullableFilter<"Parameter"> | bigint | number | null
    description?: StringNullableFilter<"Parameter"> | string | null
    value?: StringNullableFilter<"Parameter"> | string | null
    unit_measurement?: StringNullableFilter<"Parameter"> | string | null
    max_range?: StringNullableFilter<"Parameter"> | string | null
    min_range?: StringNullableFilter<"Parameter"> | string | null
    created_at?: DateTimeNullableFilter<"Parameter"> | Date | string | null
    active?: BoolNullableFilter<"Parameter"> | boolean | null
    equipment?: XOR<EquipmentNullableScalarRelationFilter, EquipmentWhereInput> | null
    parameterDictionary?: XOR<ParameterDictionaryNullableScalarRelationFilter, ParameterDictionaryWhereInput> | null
    result?: XOR<ResultNullableScalarRelationFilter, ResultWhereInput> | null
  }, "id">

  export type ParameterOrderByWithAggregationInput = {
    id?: SortOrder
    result_folio?: SortOrderInput | SortOrder
    equipment_id?: SortOrderInput | SortOrder
    parameter_dictionary_id?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    value?: SortOrderInput | SortOrder
    unit_measurement?: SortOrderInput | SortOrder
    max_range?: SortOrderInput | SortOrder
    min_range?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    active?: SortOrderInput | SortOrder
    _count?: ParameterCountOrderByAggregateInput
    _avg?: ParameterAvgOrderByAggregateInput
    _max?: ParameterMaxOrderByAggregateInput
    _min?: ParameterMinOrderByAggregateInput
    _sum?: ParameterSumOrderByAggregateInput
  }

  export type ParameterScalarWhereWithAggregatesInput = {
    AND?: ParameterScalarWhereWithAggregatesInput | ParameterScalarWhereWithAggregatesInput[]
    OR?: ParameterScalarWhereWithAggregatesInput[]
    NOT?: ParameterScalarWhereWithAggregatesInput | ParameterScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Parameter"> | bigint | number
    result_folio?: StringNullableWithAggregatesFilter<"Parameter"> | string | null
    equipment_id?: BigIntNullableWithAggregatesFilter<"Parameter"> | bigint | number | null
    parameter_dictionary_id?: BigIntNullableWithAggregatesFilter<"Parameter"> | bigint | number | null
    description?: StringNullableWithAggregatesFilter<"Parameter"> | string | null
    value?: StringNullableWithAggregatesFilter<"Parameter"> | string | null
    unit_measurement?: StringNullableWithAggregatesFilter<"Parameter"> | string | null
    max_range?: StringNullableWithAggregatesFilter<"Parameter"> | string | null
    min_range?: StringNullableWithAggregatesFilter<"Parameter"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"Parameter"> | Date | string | null
    active?: BoolNullableWithAggregatesFilter<"Parameter"> | boolean | null
  }

  export type ResultWhereInput = {
    AND?: ResultWhereInput | ResultWhereInput[]
    OR?: ResultWhereInput[]
    NOT?: ResultWhereInput | ResultWhereInput[]
    folio?: StringFilter<"Result"> | string
    created_by?: BigIntNullableFilter<"Result"> | bigint | number | null
    sample_id?: StringNullableFilter<"Result"> | string | null
    created_at?: DateTimeNullableFilter<"Result"> | Date | string | null
    last_modified_at?: DateTimeNullableFilter<"Result"> | Date | string | null
    active?: BoolNullableFilter<"Result"> | boolean | null
    histogramResults?: HistogramResultListRelationFilter
    parameters?: ParameterListRelationFilter
    resultSends?: ResultSendListRelationFilter
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type ResultOrderByWithRelationInput = {
    folio?: SortOrder
    created_by?: SortOrderInput | SortOrder
    sample_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    last_modified_at?: SortOrderInput | SortOrder
    active?: SortOrderInput | SortOrder
    histogramResults?: HistogramResultOrderByRelationAggregateInput
    parameters?: ParameterOrderByRelationAggregateInput
    resultSends?: ResultSendOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type ResultWhereUniqueInput = Prisma.AtLeast<{
    folio?: string
    AND?: ResultWhereInput | ResultWhereInput[]
    OR?: ResultWhereInput[]
    NOT?: ResultWhereInput | ResultWhereInput[]
    created_by?: BigIntNullableFilter<"Result"> | bigint | number | null
    sample_id?: StringNullableFilter<"Result"> | string | null
    created_at?: DateTimeNullableFilter<"Result"> | Date | string | null
    last_modified_at?: DateTimeNullableFilter<"Result"> | Date | string | null
    active?: BoolNullableFilter<"Result"> | boolean | null
    histogramResults?: HistogramResultListRelationFilter
    parameters?: ParameterListRelationFilter
    resultSends?: ResultSendListRelationFilter
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "folio">

  export type ResultOrderByWithAggregationInput = {
    folio?: SortOrder
    created_by?: SortOrderInput | SortOrder
    sample_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    last_modified_at?: SortOrderInput | SortOrder
    active?: SortOrderInput | SortOrder
    _count?: ResultCountOrderByAggregateInput
    _avg?: ResultAvgOrderByAggregateInput
    _max?: ResultMaxOrderByAggregateInput
    _min?: ResultMinOrderByAggregateInput
    _sum?: ResultSumOrderByAggregateInput
  }

  export type ResultScalarWhereWithAggregatesInput = {
    AND?: ResultScalarWhereWithAggregatesInput | ResultScalarWhereWithAggregatesInput[]
    OR?: ResultScalarWhereWithAggregatesInput[]
    NOT?: ResultScalarWhereWithAggregatesInput | ResultScalarWhereWithAggregatesInput[]
    folio?: StringWithAggregatesFilter<"Result"> | string
    created_by?: BigIntNullableWithAggregatesFilter<"Result"> | bigint | number | null
    sample_id?: StringNullableWithAggregatesFilter<"Result"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"Result"> | Date | string | null
    last_modified_at?: DateTimeNullableWithAggregatesFilter<"Result"> | Date | string | null
    active?: BoolNullableWithAggregatesFilter<"Result"> | boolean | null
  }

  export type ParameterDictionaryWhereInput = {
    AND?: ParameterDictionaryWhereInput | ParameterDictionaryWhereInput[]
    OR?: ParameterDictionaryWhereInput[]
    NOT?: ParameterDictionaryWhereInput | ParameterDictionaryWhereInput[]
    id?: BigIntFilter<"ParameterDictionary"> | bigint | number
    system_parameter_id?: BigIntNullableFilter<"ParameterDictionary"> | bigint | number | null
    parameter_description?: StringNullableFilter<"ParameterDictionary"> | string | null
    systemParameter?: XOR<SystemParameterNullableScalarRelationFilter, SystemParameterWhereInput> | null
    parameters?: ParameterListRelationFilter
  }

  export type ParameterDictionaryOrderByWithRelationInput = {
    id?: SortOrder
    system_parameter_id?: SortOrderInput | SortOrder
    parameter_description?: SortOrderInput | SortOrder
    systemParameter?: SystemParameterOrderByWithRelationInput
    parameters?: ParameterOrderByRelationAggregateInput
  }

  export type ParameterDictionaryWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: ParameterDictionaryWhereInput | ParameterDictionaryWhereInput[]
    OR?: ParameterDictionaryWhereInput[]
    NOT?: ParameterDictionaryWhereInput | ParameterDictionaryWhereInput[]
    system_parameter_id?: BigIntNullableFilter<"ParameterDictionary"> | bigint | number | null
    parameter_description?: StringNullableFilter<"ParameterDictionary"> | string | null
    systemParameter?: XOR<SystemParameterNullableScalarRelationFilter, SystemParameterWhereInput> | null
    parameters?: ParameterListRelationFilter
  }, "id">

  export type ParameterDictionaryOrderByWithAggregationInput = {
    id?: SortOrder
    system_parameter_id?: SortOrderInput | SortOrder
    parameter_description?: SortOrderInput | SortOrder
    _count?: ParameterDictionaryCountOrderByAggregateInput
    _avg?: ParameterDictionaryAvgOrderByAggregateInput
    _max?: ParameterDictionaryMaxOrderByAggregateInput
    _min?: ParameterDictionaryMinOrderByAggregateInput
    _sum?: ParameterDictionarySumOrderByAggregateInput
  }

  export type ParameterDictionaryScalarWhereWithAggregatesInput = {
    AND?: ParameterDictionaryScalarWhereWithAggregatesInput | ParameterDictionaryScalarWhereWithAggregatesInput[]
    OR?: ParameterDictionaryScalarWhereWithAggregatesInput[]
    NOT?: ParameterDictionaryScalarWhereWithAggregatesInput | ParameterDictionaryScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"ParameterDictionary"> | bigint | number
    system_parameter_id?: BigIntNullableWithAggregatesFilter<"ParameterDictionary"> | bigint | number | null
    parameter_description?: StringNullableWithAggregatesFilter<"ParameterDictionary"> | string | null
  }

  export type ResultSendWhereInput = {
    AND?: ResultSendWhereInput | ResultSendWhereInput[]
    OR?: ResultSendWhereInput[]
    NOT?: ResultSendWhereInput | ResultSendWhereInput[]
    id?: BigIntFilter<"ResultSend"> | bigint | number
    result_folio?: StringNullableFilter<"ResultSend"> | string | null
    send_by?: BigIntNullableFilter<"ResultSend"> | bigint | number | null
    send_at?: DateTimeNullableFilter<"ResultSend"> | Date | string | null
    status?: StringNullableFilter<"ResultSend"> | string | null
    payload?: JsonNullableFilter<"ResultSend">
    response?: JsonNullableFilter<"ResultSend">
    result?: XOR<ResultNullableScalarRelationFilter, ResultWhereInput> | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type ResultSendOrderByWithRelationInput = {
    id?: SortOrder
    result_folio?: SortOrderInput | SortOrder
    send_by?: SortOrderInput | SortOrder
    send_at?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    payload?: SortOrderInput | SortOrder
    response?: SortOrderInput | SortOrder
    result?: ResultOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ResultSendWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: ResultSendWhereInput | ResultSendWhereInput[]
    OR?: ResultSendWhereInput[]
    NOT?: ResultSendWhereInput | ResultSendWhereInput[]
    result_folio?: StringNullableFilter<"ResultSend"> | string | null
    send_by?: BigIntNullableFilter<"ResultSend"> | bigint | number | null
    send_at?: DateTimeNullableFilter<"ResultSend"> | Date | string | null
    status?: StringNullableFilter<"ResultSend"> | string | null
    payload?: JsonNullableFilter<"ResultSend">
    response?: JsonNullableFilter<"ResultSend">
    result?: XOR<ResultNullableScalarRelationFilter, ResultWhereInput> | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type ResultSendOrderByWithAggregationInput = {
    id?: SortOrder
    result_folio?: SortOrderInput | SortOrder
    send_by?: SortOrderInput | SortOrder
    send_at?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    payload?: SortOrderInput | SortOrder
    response?: SortOrderInput | SortOrder
    _count?: ResultSendCountOrderByAggregateInput
    _avg?: ResultSendAvgOrderByAggregateInput
    _max?: ResultSendMaxOrderByAggregateInput
    _min?: ResultSendMinOrderByAggregateInput
    _sum?: ResultSendSumOrderByAggregateInput
  }

  export type ResultSendScalarWhereWithAggregatesInput = {
    AND?: ResultSendScalarWhereWithAggregatesInput | ResultSendScalarWhereWithAggregatesInput[]
    OR?: ResultSendScalarWhereWithAggregatesInput[]
    NOT?: ResultSendScalarWhereWithAggregatesInput | ResultSendScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"ResultSend"> | bigint | number
    result_folio?: StringNullableWithAggregatesFilter<"ResultSend"> | string | null
    send_by?: BigIntNullableWithAggregatesFilter<"ResultSend"> | bigint | number | null
    send_at?: DateTimeNullableWithAggregatesFilter<"ResultSend"> | Date | string | null
    status?: StringNullableWithAggregatesFilter<"ResultSend"> | string | null
    payload?: JsonNullableWithAggregatesFilter<"ResultSend">
    response?: JsonNullableWithAggregatesFilter<"ResultSend">
  }

  export type SystemParameterWhereInput = {
    AND?: SystemParameterWhereInput | SystemParameterWhereInput[]
    OR?: SystemParameterWhereInput[]
    NOT?: SystemParameterWhereInput | SystemParameterWhereInput[]
    id?: BigIntFilter<"SystemParameter"> | bigint | number
    value?: StringNullableFilter<"SystemParameter"> | string | null
    parameterDictionaries?: ParameterDictionaryListRelationFilter
  }

  export type SystemParameterOrderByWithRelationInput = {
    id?: SortOrder
    value?: SortOrderInput | SortOrder
    parameterDictionaries?: ParameterDictionaryOrderByRelationAggregateInput
  }

  export type SystemParameterWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: SystemParameterWhereInput | SystemParameterWhereInput[]
    OR?: SystemParameterWhereInput[]
    NOT?: SystemParameterWhereInput | SystemParameterWhereInput[]
    value?: StringNullableFilter<"SystemParameter"> | string | null
    parameterDictionaries?: ParameterDictionaryListRelationFilter
  }, "id">

  export type SystemParameterOrderByWithAggregationInput = {
    id?: SortOrder
    value?: SortOrderInput | SortOrder
    _count?: SystemParameterCountOrderByAggregateInput
    _avg?: SystemParameterAvgOrderByAggregateInput
    _max?: SystemParameterMaxOrderByAggregateInput
    _min?: SystemParameterMinOrderByAggregateInput
    _sum?: SystemParameterSumOrderByAggregateInput
  }

  export type SystemParameterScalarWhereWithAggregatesInput = {
    AND?: SystemParameterScalarWhereWithAggregatesInput | SystemParameterScalarWhereWithAggregatesInput[]
    OR?: SystemParameterScalarWhereWithAggregatesInput[]
    NOT?: SystemParameterScalarWhereWithAggregatesInput | SystemParameterScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"SystemParameter"> | bigint | number
    value?: StringNullableWithAggregatesFilter<"SystemParameter"> | string | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: BigIntFilter<"User"> | bigint | number
    username?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    resultSends?: ResultSendListRelationFilter
    createdResults?: ResultListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    resultSends?: ResultSendOrderByRelationAggregateInput
    createdResults?: ResultOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    resultSends?: ResultSendListRelationFilter
    createdResults?: ResultListRelationFilter
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"User"> | bigint | number
    username?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type EquipmentConfigurationWhereInput = {
    AND?: EquipmentConfigurationWhereInput | EquipmentConfigurationWhereInput[]
    OR?: EquipmentConfigurationWhereInput[]
    NOT?: EquipmentConfigurationWhereInput | EquipmentConfigurationWhereInput[]
    equipment_id?: BigIntFilter<"EquipmentConfiguration"> | bigint | number
    port?: StringFilter<"EquipmentConfiguration"> | string
    ip_address?: StringFilter<"EquipmentConfiguration"> | string
    baud_rate?: IntFilter<"EquipmentConfiguration"> | number
    mac_address?: StringFilter<"EquipmentConfiguration"> | string
    remote_directory?: StringFilter<"EquipmentConfiguration"> | string
    equipment?: XOR<EquipmentScalarRelationFilter, EquipmentWhereInput>
  }

  export type EquipmentConfigurationOrderByWithRelationInput = {
    equipment_id?: SortOrder
    port?: SortOrder
    ip_address?: SortOrder
    baud_rate?: SortOrder
    mac_address?: SortOrder
    remote_directory?: SortOrder
    equipment?: EquipmentOrderByWithRelationInput
  }

  export type EquipmentConfigurationWhereUniqueInput = Prisma.AtLeast<{
    equipment_id?: bigint | number
    AND?: EquipmentConfigurationWhereInput | EquipmentConfigurationWhereInput[]
    OR?: EquipmentConfigurationWhereInput[]
    NOT?: EquipmentConfigurationWhereInput | EquipmentConfigurationWhereInput[]
    port?: StringFilter<"EquipmentConfiguration"> | string
    ip_address?: StringFilter<"EquipmentConfiguration"> | string
    baud_rate?: IntFilter<"EquipmentConfiguration"> | number
    mac_address?: StringFilter<"EquipmentConfiguration"> | string
    remote_directory?: StringFilter<"EquipmentConfiguration"> | string
    equipment?: XOR<EquipmentScalarRelationFilter, EquipmentWhereInput>
  }, "equipment_id">

  export type EquipmentConfigurationOrderByWithAggregationInput = {
    equipment_id?: SortOrder
    port?: SortOrder
    ip_address?: SortOrder
    baud_rate?: SortOrder
    mac_address?: SortOrder
    remote_directory?: SortOrder
    _count?: EquipmentConfigurationCountOrderByAggregateInput
    _avg?: EquipmentConfigurationAvgOrderByAggregateInput
    _max?: EquipmentConfigurationMaxOrderByAggregateInput
    _min?: EquipmentConfigurationMinOrderByAggregateInput
    _sum?: EquipmentConfigurationSumOrderByAggregateInput
  }

  export type EquipmentConfigurationScalarWhereWithAggregatesInput = {
    AND?: EquipmentConfigurationScalarWhereWithAggregatesInput | EquipmentConfigurationScalarWhereWithAggregatesInput[]
    OR?: EquipmentConfigurationScalarWhereWithAggregatesInput[]
    NOT?: EquipmentConfigurationScalarWhereWithAggregatesInput | EquipmentConfigurationScalarWhereWithAggregatesInput[]
    equipment_id?: BigIntWithAggregatesFilter<"EquipmentConfiguration"> | bigint | number
    port?: StringWithAggregatesFilter<"EquipmentConfiguration"> | string
    ip_address?: StringWithAggregatesFilter<"EquipmentConfiguration"> | string
    baud_rate?: IntWithAggregatesFilter<"EquipmentConfiguration"> | number
    mac_address?: StringWithAggregatesFilter<"EquipmentConfiguration"> | string
    remote_directory?: StringWithAggregatesFilter<"EquipmentConfiguration"> | string
  }

  export type CommunicationProfilesCreateInput = {
    id: string
    checksum_regex?: string | null
    type?: string | null
    equipmentProfiles?: EquipmentProfileCreateNestedManyWithoutCommunicationProfileInput
  }

  export type CommunicationProfilesUncheckedCreateInput = {
    id: string
    checksum_regex?: string | null
    type?: string | null
    equipmentProfiles?: EquipmentProfileUncheckedCreateNestedManyWithoutCommunicationProfileInput
  }

  export type CommunicationProfilesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    checksum_regex?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    equipmentProfiles?: EquipmentProfileUpdateManyWithoutCommunicationProfileNestedInput
  }

  export type CommunicationProfilesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    checksum_regex?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    equipmentProfiles?: EquipmentProfileUncheckedUpdateManyWithoutCommunicationProfileNestedInput
  }

  export type CommunicationProfilesCreateManyInput = {
    id: string
    checksum_regex?: string | null
    type?: string | null
  }

  export type CommunicationProfilesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    checksum_regex?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommunicationProfilesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    checksum_regex?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DirectoryHistorialCreateInput = {
    id: bigint | number
    filename?: string | null
    filepath?: string | null
    modified_at?: bigint | number | null
    equipment?: EquipmentCreateNestedOneWithoutDirectoryHistorialsInput
  }

  export type DirectoryHistorialUncheckedCreateInput = {
    id: bigint | number
    equipment_id?: bigint | number | null
    filename?: string | null
    filepath?: string | null
    modified_at?: bigint | number | null
  }

  export type DirectoryHistorialUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    filename?: NullableStringFieldUpdateOperationsInput | string | null
    filepath?: NullableStringFieldUpdateOperationsInput | string | null
    modified_at?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    equipment?: EquipmentUpdateOneWithoutDirectoryHistorialsNestedInput
  }

  export type DirectoryHistorialUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    equipment_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    filename?: NullableStringFieldUpdateOperationsInput | string | null
    filepath?: NullableStringFieldUpdateOperationsInput | string | null
    modified_at?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type DirectoryHistorialCreateManyInput = {
    id: bigint | number
    equipment_id?: bigint | number | null
    filename?: string | null
    filepath?: string | null
    modified_at?: bigint | number | null
  }

  export type DirectoryHistorialUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    filename?: NullableStringFieldUpdateOperationsInput | string | null
    filepath?: NullableStringFieldUpdateOperationsInput | string | null
    modified_at?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type DirectoryHistorialUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    equipment_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    filename?: NullableStringFieldUpdateOperationsInput | string | null
    filepath?: NullableStringFieldUpdateOperationsInput | string | null
    modified_at?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type EquipmentProfileCreateInput = {
    id: bigint | number
    name?: string | null
    active?: boolean | null
    communication_type?: string | null
    communicationProfile?: CommunicationProfilesCreateNestedOneWithoutEquipmentProfilesInput
    equipments?: EquipmentCreateNestedManyWithoutEquipmentProfileInput
  }

  export type EquipmentProfileUncheckedCreateInput = {
    id: bigint | number
    communication_profile?: string | null
    name?: string | null
    active?: boolean | null
    communication_type?: string | null
    equipments?: EquipmentUncheckedCreateNestedManyWithoutEquipmentProfileInput
  }

  export type EquipmentProfileUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    communication_type?: NullableStringFieldUpdateOperationsInput | string | null
    communicationProfile?: CommunicationProfilesUpdateOneWithoutEquipmentProfilesNestedInput
    equipments?: EquipmentUpdateManyWithoutEquipmentProfileNestedInput
  }

  export type EquipmentProfileUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    communication_profile?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    communication_type?: NullableStringFieldUpdateOperationsInput | string | null
    equipments?: EquipmentUncheckedUpdateManyWithoutEquipmentProfileNestedInput
  }

  export type EquipmentProfileCreateManyInput = {
    id: bigint | number
    communication_profile?: string | null
    name?: string | null
    active?: boolean | null
    communication_type?: string | null
  }

  export type EquipmentProfileUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    communication_type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EquipmentProfileUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    communication_profile?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    communication_type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EquipmentCreateInput = {
    id: bigint | number
    name?: string | null
    created_at?: Date | string | null
    modified_at?: Date | string | null
    last_connection?: Date | string | null
    connection_status?: string | null
    active?: boolean | null
    directoryHistorials?: DirectoryHistorialCreateNestedManyWithoutEquipmentInput
    equipmentProfile?: EquipmentProfileCreateNestedOneWithoutEquipmentsInput
    parameters?: ParameterCreateNestedManyWithoutEquipmentInput
    EquipmentConfiguration?: EquipmentConfigurationCreateNestedManyWithoutEquipmentInput
  }

  export type EquipmentUncheckedCreateInput = {
    id: bigint | number
    profile_id?: bigint | number | null
    name?: string | null
    created_at?: Date | string | null
    modified_at?: Date | string | null
    last_connection?: Date | string | null
    connection_status?: string | null
    active?: boolean | null
    directoryHistorials?: DirectoryHistorialUncheckedCreateNestedManyWithoutEquipmentInput
    parameters?: ParameterUncheckedCreateNestedManyWithoutEquipmentInput
    EquipmentConfiguration?: EquipmentConfigurationUncheckedCreateNestedManyWithoutEquipmentInput
  }

  export type EquipmentUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_connection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    connection_status?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    directoryHistorials?: DirectoryHistorialUpdateManyWithoutEquipmentNestedInput
    equipmentProfile?: EquipmentProfileUpdateOneWithoutEquipmentsNestedInput
    parameters?: ParameterUpdateManyWithoutEquipmentNestedInput
    EquipmentConfiguration?: EquipmentConfigurationUpdateManyWithoutEquipmentNestedInput
  }

  export type EquipmentUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    profile_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_connection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    connection_status?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    directoryHistorials?: DirectoryHistorialUncheckedUpdateManyWithoutEquipmentNestedInput
    parameters?: ParameterUncheckedUpdateManyWithoutEquipmentNestedInput
    EquipmentConfiguration?: EquipmentConfigurationUncheckedUpdateManyWithoutEquipmentNestedInput
  }

  export type EquipmentCreateManyInput = {
    id: bigint | number
    profile_id?: bigint | number | null
    name?: string | null
    created_at?: Date | string | null
    modified_at?: Date | string | null
    last_connection?: Date | string | null
    connection_status?: string | null
    active?: boolean | null
  }

  export type EquipmentUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_connection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    connection_status?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type EquipmentUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    profile_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_connection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    connection_status?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type HistogramResultCreateInput = {
    id: bigint | number
    description?: string | null
    value?: string | null
    created_at?: Date | string | null
    active?: boolean | null
    result?: ResultCreateNestedOneWithoutHistogramResultsInput
  }

  export type HistogramResultUncheckedCreateInput = {
    id: bigint | number
    result_folio?: string | null
    description?: string | null
    value?: string | null
    created_at?: Date | string | null
    active?: boolean | null
  }

  export type HistogramResultUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    result?: ResultUpdateOneWithoutHistogramResultsNestedInput
  }

  export type HistogramResultUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    result_folio?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type HistogramResultCreateManyInput = {
    id: bigint | number
    result_folio?: string | null
    description?: string | null
    value?: string | null
    created_at?: Date | string | null
    active?: boolean | null
  }

  export type HistogramResultUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type HistogramResultUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    result_folio?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ParameterCreateInput = {
    id: bigint | number
    description?: string | null
    value?: string | null
    unit_measurement?: string | null
    max_range?: string | null
    min_range?: string | null
    created_at?: Date | string | null
    active?: boolean | null
    equipment?: EquipmentCreateNestedOneWithoutParametersInput
    parameterDictionary?: ParameterDictionaryCreateNestedOneWithoutParametersInput
    result?: ResultCreateNestedOneWithoutParametersInput
  }

  export type ParameterUncheckedCreateInput = {
    id: bigint | number
    result_folio?: string | null
    equipment_id?: bigint | number | null
    parameter_dictionary_id?: bigint | number | null
    description?: string | null
    value?: string | null
    unit_measurement?: string | null
    max_range?: string | null
    min_range?: string | null
    created_at?: Date | string | null
    active?: boolean | null
  }

  export type ParameterUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    unit_measurement?: NullableStringFieldUpdateOperationsInput | string | null
    max_range?: NullableStringFieldUpdateOperationsInput | string | null
    min_range?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    equipment?: EquipmentUpdateOneWithoutParametersNestedInput
    parameterDictionary?: ParameterDictionaryUpdateOneWithoutParametersNestedInput
    result?: ResultUpdateOneWithoutParametersNestedInput
  }

  export type ParameterUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    result_folio?: NullableStringFieldUpdateOperationsInput | string | null
    equipment_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    parameter_dictionary_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    unit_measurement?: NullableStringFieldUpdateOperationsInput | string | null
    max_range?: NullableStringFieldUpdateOperationsInput | string | null
    min_range?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ParameterCreateManyInput = {
    id: bigint | number
    result_folio?: string | null
    equipment_id?: bigint | number | null
    parameter_dictionary_id?: bigint | number | null
    description?: string | null
    value?: string | null
    unit_measurement?: string | null
    max_range?: string | null
    min_range?: string | null
    created_at?: Date | string | null
    active?: boolean | null
  }

  export type ParameterUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    unit_measurement?: NullableStringFieldUpdateOperationsInput | string | null
    max_range?: NullableStringFieldUpdateOperationsInput | string | null
    min_range?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ParameterUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    result_folio?: NullableStringFieldUpdateOperationsInput | string | null
    equipment_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    parameter_dictionary_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    unit_measurement?: NullableStringFieldUpdateOperationsInput | string | null
    max_range?: NullableStringFieldUpdateOperationsInput | string | null
    min_range?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ResultCreateInput = {
    folio: string
    sample_id?: string | null
    created_at?: Date | string | null
    last_modified_at?: Date | string | null
    active?: boolean | null
    histogramResults?: HistogramResultCreateNestedManyWithoutResultInput
    parameters?: ParameterCreateNestedManyWithoutResultInput
    resultSends?: ResultSendCreateNestedManyWithoutResultInput
    user?: UserCreateNestedOneWithoutCreatedResultsInput
  }

  export type ResultUncheckedCreateInput = {
    folio: string
    created_by?: bigint | number | null
    sample_id?: string | null
    created_at?: Date | string | null
    last_modified_at?: Date | string | null
    active?: boolean | null
    histogramResults?: HistogramResultUncheckedCreateNestedManyWithoutResultInput
    parameters?: ParameterUncheckedCreateNestedManyWithoutResultInput
    resultSends?: ResultSendUncheckedCreateNestedManyWithoutResultInput
  }

  export type ResultUpdateInput = {
    folio?: StringFieldUpdateOperationsInput | string
    sample_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    histogramResults?: HistogramResultUpdateManyWithoutResultNestedInput
    parameters?: ParameterUpdateManyWithoutResultNestedInput
    resultSends?: ResultSendUpdateManyWithoutResultNestedInput
    user?: UserUpdateOneWithoutCreatedResultsNestedInput
  }

  export type ResultUncheckedUpdateInput = {
    folio?: StringFieldUpdateOperationsInput | string
    created_by?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    sample_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    histogramResults?: HistogramResultUncheckedUpdateManyWithoutResultNestedInput
    parameters?: ParameterUncheckedUpdateManyWithoutResultNestedInput
    resultSends?: ResultSendUncheckedUpdateManyWithoutResultNestedInput
  }

  export type ResultCreateManyInput = {
    folio: string
    created_by?: bigint | number | null
    sample_id?: string | null
    created_at?: Date | string | null
    last_modified_at?: Date | string | null
    active?: boolean | null
  }

  export type ResultUpdateManyMutationInput = {
    folio?: StringFieldUpdateOperationsInput | string
    sample_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ResultUncheckedUpdateManyInput = {
    folio?: StringFieldUpdateOperationsInput | string
    created_by?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    sample_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ParameterDictionaryCreateInput = {
    id: bigint | number
    parameter_description?: string | null
    systemParameter?: SystemParameterCreateNestedOneWithoutParameterDictionariesInput
    parameters?: ParameterCreateNestedManyWithoutParameterDictionaryInput
  }

  export type ParameterDictionaryUncheckedCreateInput = {
    id: bigint | number
    system_parameter_id?: bigint | number | null
    parameter_description?: string | null
    parameters?: ParameterUncheckedCreateNestedManyWithoutParameterDictionaryInput
  }

  export type ParameterDictionaryUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    parameter_description?: NullableStringFieldUpdateOperationsInput | string | null
    systemParameter?: SystemParameterUpdateOneWithoutParameterDictionariesNestedInput
    parameters?: ParameterUpdateManyWithoutParameterDictionaryNestedInput
  }

  export type ParameterDictionaryUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    system_parameter_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    parameter_description?: NullableStringFieldUpdateOperationsInput | string | null
    parameters?: ParameterUncheckedUpdateManyWithoutParameterDictionaryNestedInput
  }

  export type ParameterDictionaryCreateManyInput = {
    id: bigint | number
    system_parameter_id?: bigint | number | null
    parameter_description?: string | null
  }

  export type ParameterDictionaryUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    parameter_description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ParameterDictionaryUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    system_parameter_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    parameter_description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ResultSendCreateInput = {
    id: bigint | number
    send_at?: Date | string | null
    status?: string | null
    payload?: NullableJsonNullValueInput | InputJsonValue
    response?: NullableJsonNullValueInput | InputJsonValue
    result?: ResultCreateNestedOneWithoutResultSendsInput
    user?: UserCreateNestedOneWithoutResultSendsInput
  }

  export type ResultSendUncheckedCreateInput = {
    id: bigint | number
    result_folio?: string | null
    send_by?: bigint | number | null
    send_at?: Date | string | null
    status?: string | null
    payload?: NullableJsonNullValueInput | InputJsonValue
    response?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ResultSendUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    send_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: NullableJsonNullValueInput | InputJsonValue
    response?: NullableJsonNullValueInput | InputJsonValue
    result?: ResultUpdateOneWithoutResultSendsNestedInput
    user?: UserUpdateOneWithoutResultSendsNestedInput
  }

  export type ResultSendUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    result_folio?: NullableStringFieldUpdateOperationsInput | string | null
    send_by?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    send_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: NullableJsonNullValueInput | InputJsonValue
    response?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ResultSendCreateManyInput = {
    id: bigint | number
    result_folio?: string | null
    send_by?: bigint | number | null
    send_at?: Date | string | null
    status?: string | null
    payload?: NullableJsonNullValueInput | InputJsonValue
    response?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ResultSendUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    send_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: NullableJsonNullValueInput | InputJsonValue
    response?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ResultSendUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    result_folio?: NullableStringFieldUpdateOperationsInput | string | null
    send_by?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    send_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: NullableJsonNullValueInput | InputJsonValue
    response?: NullableJsonNullValueInput | InputJsonValue
  }

  export type SystemParameterCreateInput = {
    id: bigint | number
    value?: string | null
    parameterDictionaries?: ParameterDictionaryCreateNestedManyWithoutSystemParameterInput
  }

  export type SystemParameterUncheckedCreateInput = {
    id: bigint | number
    value?: string | null
    parameterDictionaries?: ParameterDictionaryUncheckedCreateNestedManyWithoutSystemParameterInput
  }

  export type SystemParameterUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    value?: NullableStringFieldUpdateOperationsInput | string | null
    parameterDictionaries?: ParameterDictionaryUpdateManyWithoutSystemParameterNestedInput
  }

  export type SystemParameterUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    value?: NullableStringFieldUpdateOperationsInput | string | null
    parameterDictionaries?: ParameterDictionaryUncheckedUpdateManyWithoutSystemParameterNestedInput
  }

  export type SystemParameterCreateManyInput = {
    id: bigint | number
    value?: string | null
  }

  export type SystemParameterUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    value?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SystemParameterUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    value?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateInput = {
    id: bigint | number
    username?: string | null
    password?: string | null
    resultSends?: ResultSendCreateNestedManyWithoutUserInput
    createdResults?: ResultCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: bigint | number
    username?: string | null
    password?: string | null
    resultSends?: ResultSendUncheckedCreateNestedManyWithoutUserInput
    createdResults?: ResultUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    resultSends?: ResultSendUpdateManyWithoutUserNestedInput
    createdResults?: ResultUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    resultSends?: ResultSendUncheckedUpdateManyWithoutUserNestedInput
    createdResults?: ResultUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: bigint | number
    username?: string | null
    password?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EquipmentConfigurationCreateInput = {
    port: string
    ip_address: string
    baud_rate: number
    mac_address: string
    remote_directory: string
    equipment: EquipmentCreateNestedOneWithoutEquipmentConfigurationInput
  }

  export type EquipmentConfigurationUncheckedCreateInput = {
    equipment_id: bigint | number
    port: string
    ip_address: string
    baud_rate: number
    mac_address: string
    remote_directory: string
  }

  export type EquipmentConfigurationUpdateInput = {
    port?: StringFieldUpdateOperationsInput | string
    ip_address?: StringFieldUpdateOperationsInput | string
    baud_rate?: IntFieldUpdateOperationsInput | number
    mac_address?: StringFieldUpdateOperationsInput | string
    remote_directory?: StringFieldUpdateOperationsInput | string
    equipment?: EquipmentUpdateOneRequiredWithoutEquipmentConfigurationNestedInput
  }

  export type EquipmentConfigurationUncheckedUpdateInput = {
    equipment_id?: BigIntFieldUpdateOperationsInput | bigint | number
    port?: StringFieldUpdateOperationsInput | string
    ip_address?: StringFieldUpdateOperationsInput | string
    baud_rate?: IntFieldUpdateOperationsInput | number
    mac_address?: StringFieldUpdateOperationsInput | string
    remote_directory?: StringFieldUpdateOperationsInput | string
  }

  export type EquipmentConfigurationCreateManyInput = {
    equipment_id: bigint | number
    port: string
    ip_address: string
    baud_rate: number
    mac_address: string
    remote_directory: string
  }

  export type EquipmentConfigurationUpdateManyMutationInput = {
    port?: StringFieldUpdateOperationsInput | string
    ip_address?: StringFieldUpdateOperationsInput | string
    baud_rate?: IntFieldUpdateOperationsInput | number
    mac_address?: StringFieldUpdateOperationsInput | string
    remote_directory?: StringFieldUpdateOperationsInput | string
  }

  export type EquipmentConfigurationUncheckedUpdateManyInput = {
    equipment_id?: BigIntFieldUpdateOperationsInput | bigint | number
    port?: StringFieldUpdateOperationsInput | string
    ip_address?: StringFieldUpdateOperationsInput | string
    baud_rate?: IntFieldUpdateOperationsInput | number
    mac_address?: StringFieldUpdateOperationsInput | string
    remote_directory?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EquipmentProfileListRelationFilter = {
    every?: EquipmentProfileWhereInput
    some?: EquipmentProfileWhereInput
    none?: EquipmentProfileWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EquipmentProfileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommunicationProfilesCountOrderByAggregateInput = {
    id?: SortOrder
    checksum_regex?: SortOrder
    type?: SortOrder
  }

  export type CommunicationProfilesMaxOrderByAggregateInput = {
    id?: SortOrder
    checksum_regex?: SortOrder
    type?: SortOrder
  }

  export type CommunicationProfilesMinOrderByAggregateInput = {
    id?: SortOrder
    checksum_regex?: SortOrder
    type?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type EquipmentNullableScalarRelationFilter = {
    is?: EquipmentWhereInput | null
    isNot?: EquipmentWhereInput | null
  }

  export type DirectoryHistorialCountOrderByAggregateInput = {
    id?: SortOrder
    equipment_id?: SortOrder
    filename?: SortOrder
    filepath?: SortOrder
    modified_at?: SortOrder
  }

  export type DirectoryHistorialAvgOrderByAggregateInput = {
    id?: SortOrder
    equipment_id?: SortOrder
    modified_at?: SortOrder
  }

  export type DirectoryHistorialMaxOrderByAggregateInput = {
    id?: SortOrder
    equipment_id?: SortOrder
    filename?: SortOrder
    filepath?: SortOrder
    modified_at?: SortOrder
  }

  export type DirectoryHistorialMinOrderByAggregateInput = {
    id?: SortOrder
    equipment_id?: SortOrder
    filename?: SortOrder
    filepath?: SortOrder
    modified_at?: SortOrder
  }

  export type DirectoryHistorialSumOrderByAggregateInput = {
    id?: SortOrder
    equipment_id?: SortOrder
    modified_at?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type CommunicationProfilesNullableScalarRelationFilter = {
    is?: CommunicationProfilesWhereInput | null
    isNot?: CommunicationProfilesWhereInput | null
  }

  export type EquipmentListRelationFilter = {
    every?: EquipmentWhereInput
    some?: EquipmentWhereInput
    none?: EquipmentWhereInput
  }

  export type EquipmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EquipmentProfileCountOrderByAggregateInput = {
    id?: SortOrder
    communication_profile?: SortOrder
    name?: SortOrder
    active?: SortOrder
    communication_type?: SortOrder
  }

  export type EquipmentProfileAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EquipmentProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    communication_profile?: SortOrder
    name?: SortOrder
    active?: SortOrder
    communication_type?: SortOrder
  }

  export type EquipmentProfileMinOrderByAggregateInput = {
    id?: SortOrder
    communication_profile?: SortOrder
    name?: SortOrder
    active?: SortOrder
    communication_type?: SortOrder
  }

  export type EquipmentProfileSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DirectoryHistorialListRelationFilter = {
    every?: DirectoryHistorialWhereInput
    some?: DirectoryHistorialWhereInput
    none?: DirectoryHistorialWhereInput
  }

  export type EquipmentProfileNullableScalarRelationFilter = {
    is?: EquipmentProfileWhereInput | null
    isNot?: EquipmentProfileWhereInput | null
  }

  export type ParameterListRelationFilter = {
    every?: ParameterWhereInput
    some?: ParameterWhereInput
    none?: ParameterWhereInput
  }

  export type EquipmentConfigurationListRelationFilter = {
    every?: EquipmentConfigurationWhereInput
    some?: EquipmentConfigurationWhereInput
    none?: EquipmentConfigurationWhereInput
  }

  export type DirectoryHistorialOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ParameterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EquipmentConfigurationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EquipmentCountOrderByAggregateInput = {
    id?: SortOrder
    profile_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
    last_connection?: SortOrder
    connection_status?: SortOrder
    active?: SortOrder
  }

  export type EquipmentAvgOrderByAggregateInput = {
    id?: SortOrder
    profile_id?: SortOrder
  }

  export type EquipmentMaxOrderByAggregateInput = {
    id?: SortOrder
    profile_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
    last_connection?: SortOrder
    connection_status?: SortOrder
    active?: SortOrder
  }

  export type EquipmentMinOrderByAggregateInput = {
    id?: SortOrder
    profile_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
    last_connection?: SortOrder
    connection_status?: SortOrder
    active?: SortOrder
  }

  export type EquipmentSumOrderByAggregateInput = {
    id?: SortOrder
    profile_id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ResultNullableScalarRelationFilter = {
    is?: ResultWhereInput | null
    isNot?: ResultWhereInput | null
  }

  export type HistogramResultCountOrderByAggregateInput = {
    id?: SortOrder
    result_folio?: SortOrder
    description?: SortOrder
    value?: SortOrder
    created_at?: SortOrder
    active?: SortOrder
  }

  export type HistogramResultAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type HistogramResultMaxOrderByAggregateInput = {
    id?: SortOrder
    result_folio?: SortOrder
    description?: SortOrder
    value?: SortOrder
    created_at?: SortOrder
    active?: SortOrder
  }

  export type HistogramResultMinOrderByAggregateInput = {
    id?: SortOrder
    result_folio?: SortOrder
    description?: SortOrder
    value?: SortOrder
    created_at?: SortOrder
    active?: SortOrder
  }

  export type HistogramResultSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ParameterDictionaryNullableScalarRelationFilter = {
    is?: ParameterDictionaryWhereInput | null
    isNot?: ParameterDictionaryWhereInput | null
  }

  export type ParameterCountOrderByAggregateInput = {
    id?: SortOrder
    result_folio?: SortOrder
    equipment_id?: SortOrder
    parameter_dictionary_id?: SortOrder
    description?: SortOrder
    value?: SortOrder
    unit_measurement?: SortOrder
    max_range?: SortOrder
    min_range?: SortOrder
    created_at?: SortOrder
    active?: SortOrder
  }

  export type ParameterAvgOrderByAggregateInput = {
    id?: SortOrder
    equipment_id?: SortOrder
    parameter_dictionary_id?: SortOrder
  }

  export type ParameterMaxOrderByAggregateInput = {
    id?: SortOrder
    result_folio?: SortOrder
    equipment_id?: SortOrder
    parameter_dictionary_id?: SortOrder
    description?: SortOrder
    value?: SortOrder
    unit_measurement?: SortOrder
    max_range?: SortOrder
    min_range?: SortOrder
    created_at?: SortOrder
    active?: SortOrder
  }

  export type ParameterMinOrderByAggregateInput = {
    id?: SortOrder
    result_folio?: SortOrder
    equipment_id?: SortOrder
    parameter_dictionary_id?: SortOrder
    description?: SortOrder
    value?: SortOrder
    unit_measurement?: SortOrder
    max_range?: SortOrder
    min_range?: SortOrder
    created_at?: SortOrder
    active?: SortOrder
  }

  export type ParameterSumOrderByAggregateInput = {
    id?: SortOrder
    equipment_id?: SortOrder
    parameter_dictionary_id?: SortOrder
  }

  export type HistogramResultListRelationFilter = {
    every?: HistogramResultWhereInput
    some?: HistogramResultWhereInput
    none?: HistogramResultWhereInput
  }

  export type ResultSendListRelationFilter = {
    every?: ResultSendWhereInput
    some?: ResultSendWhereInput
    none?: ResultSendWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type HistogramResultOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ResultSendOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ResultCountOrderByAggregateInput = {
    folio?: SortOrder
    created_by?: SortOrder
    sample_id?: SortOrder
    created_at?: SortOrder
    last_modified_at?: SortOrder
    active?: SortOrder
  }

  export type ResultAvgOrderByAggregateInput = {
    created_by?: SortOrder
  }

  export type ResultMaxOrderByAggregateInput = {
    folio?: SortOrder
    created_by?: SortOrder
    sample_id?: SortOrder
    created_at?: SortOrder
    last_modified_at?: SortOrder
    active?: SortOrder
  }

  export type ResultMinOrderByAggregateInput = {
    folio?: SortOrder
    created_by?: SortOrder
    sample_id?: SortOrder
    created_at?: SortOrder
    last_modified_at?: SortOrder
    active?: SortOrder
  }

  export type ResultSumOrderByAggregateInput = {
    created_by?: SortOrder
  }

  export type SystemParameterNullableScalarRelationFilter = {
    is?: SystemParameterWhereInput | null
    isNot?: SystemParameterWhereInput | null
  }

  export type ParameterDictionaryCountOrderByAggregateInput = {
    id?: SortOrder
    system_parameter_id?: SortOrder
    parameter_description?: SortOrder
  }

  export type ParameterDictionaryAvgOrderByAggregateInput = {
    id?: SortOrder
    system_parameter_id?: SortOrder
  }

  export type ParameterDictionaryMaxOrderByAggregateInput = {
    id?: SortOrder
    system_parameter_id?: SortOrder
    parameter_description?: SortOrder
  }

  export type ParameterDictionaryMinOrderByAggregateInput = {
    id?: SortOrder
    system_parameter_id?: SortOrder
    parameter_description?: SortOrder
  }

  export type ParameterDictionarySumOrderByAggregateInput = {
    id?: SortOrder
    system_parameter_id?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ResultSendCountOrderByAggregateInput = {
    id?: SortOrder
    result_folio?: SortOrder
    send_by?: SortOrder
    send_at?: SortOrder
    status?: SortOrder
    payload?: SortOrder
    response?: SortOrder
  }

  export type ResultSendAvgOrderByAggregateInput = {
    id?: SortOrder
    send_by?: SortOrder
  }

  export type ResultSendMaxOrderByAggregateInput = {
    id?: SortOrder
    result_folio?: SortOrder
    send_by?: SortOrder
    send_at?: SortOrder
    status?: SortOrder
  }

  export type ResultSendMinOrderByAggregateInput = {
    id?: SortOrder
    result_folio?: SortOrder
    send_by?: SortOrder
    send_at?: SortOrder
    status?: SortOrder
  }

  export type ResultSendSumOrderByAggregateInput = {
    id?: SortOrder
    send_by?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type ParameterDictionaryListRelationFilter = {
    every?: ParameterDictionaryWhereInput
    some?: ParameterDictionaryWhereInput
    none?: ParameterDictionaryWhereInput
  }

  export type ParameterDictionaryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SystemParameterCountOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
  }

  export type SystemParameterAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SystemParameterMaxOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
  }

  export type SystemParameterMinOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
  }

  export type SystemParameterSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ResultListRelationFilter = {
    every?: ResultWhereInput
    some?: ResultWhereInput
    none?: ResultWhereInput
  }

  export type ResultOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EquipmentScalarRelationFilter = {
    is?: EquipmentWhereInput
    isNot?: EquipmentWhereInput
  }

  export type EquipmentConfigurationCountOrderByAggregateInput = {
    equipment_id?: SortOrder
    port?: SortOrder
    ip_address?: SortOrder
    baud_rate?: SortOrder
    mac_address?: SortOrder
    remote_directory?: SortOrder
  }

  export type EquipmentConfigurationAvgOrderByAggregateInput = {
    equipment_id?: SortOrder
    baud_rate?: SortOrder
  }

  export type EquipmentConfigurationMaxOrderByAggregateInput = {
    equipment_id?: SortOrder
    port?: SortOrder
    ip_address?: SortOrder
    baud_rate?: SortOrder
    mac_address?: SortOrder
    remote_directory?: SortOrder
  }

  export type EquipmentConfigurationMinOrderByAggregateInput = {
    equipment_id?: SortOrder
    port?: SortOrder
    ip_address?: SortOrder
    baud_rate?: SortOrder
    mac_address?: SortOrder
    remote_directory?: SortOrder
  }

  export type EquipmentConfigurationSumOrderByAggregateInput = {
    equipment_id?: SortOrder
    baud_rate?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EquipmentProfileCreateNestedManyWithoutCommunicationProfileInput = {
    create?: XOR<EquipmentProfileCreateWithoutCommunicationProfileInput, EquipmentProfileUncheckedCreateWithoutCommunicationProfileInput> | EquipmentProfileCreateWithoutCommunicationProfileInput[] | EquipmentProfileUncheckedCreateWithoutCommunicationProfileInput[]
    connectOrCreate?: EquipmentProfileCreateOrConnectWithoutCommunicationProfileInput | EquipmentProfileCreateOrConnectWithoutCommunicationProfileInput[]
    createMany?: EquipmentProfileCreateManyCommunicationProfileInputEnvelope
    connect?: EquipmentProfileWhereUniqueInput | EquipmentProfileWhereUniqueInput[]
  }

  export type EquipmentProfileUncheckedCreateNestedManyWithoutCommunicationProfileInput = {
    create?: XOR<EquipmentProfileCreateWithoutCommunicationProfileInput, EquipmentProfileUncheckedCreateWithoutCommunicationProfileInput> | EquipmentProfileCreateWithoutCommunicationProfileInput[] | EquipmentProfileUncheckedCreateWithoutCommunicationProfileInput[]
    connectOrCreate?: EquipmentProfileCreateOrConnectWithoutCommunicationProfileInput | EquipmentProfileCreateOrConnectWithoutCommunicationProfileInput[]
    createMany?: EquipmentProfileCreateManyCommunicationProfileInputEnvelope
    connect?: EquipmentProfileWhereUniqueInput | EquipmentProfileWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EquipmentProfileUpdateManyWithoutCommunicationProfileNestedInput = {
    create?: XOR<EquipmentProfileCreateWithoutCommunicationProfileInput, EquipmentProfileUncheckedCreateWithoutCommunicationProfileInput> | EquipmentProfileCreateWithoutCommunicationProfileInput[] | EquipmentProfileUncheckedCreateWithoutCommunicationProfileInput[]
    connectOrCreate?: EquipmentProfileCreateOrConnectWithoutCommunicationProfileInput | EquipmentProfileCreateOrConnectWithoutCommunicationProfileInput[]
    upsert?: EquipmentProfileUpsertWithWhereUniqueWithoutCommunicationProfileInput | EquipmentProfileUpsertWithWhereUniqueWithoutCommunicationProfileInput[]
    createMany?: EquipmentProfileCreateManyCommunicationProfileInputEnvelope
    set?: EquipmentProfileWhereUniqueInput | EquipmentProfileWhereUniqueInput[]
    disconnect?: EquipmentProfileWhereUniqueInput | EquipmentProfileWhereUniqueInput[]
    delete?: EquipmentProfileWhereUniqueInput | EquipmentProfileWhereUniqueInput[]
    connect?: EquipmentProfileWhereUniqueInput | EquipmentProfileWhereUniqueInput[]
    update?: EquipmentProfileUpdateWithWhereUniqueWithoutCommunicationProfileInput | EquipmentProfileUpdateWithWhereUniqueWithoutCommunicationProfileInput[]
    updateMany?: EquipmentProfileUpdateManyWithWhereWithoutCommunicationProfileInput | EquipmentProfileUpdateManyWithWhereWithoutCommunicationProfileInput[]
    deleteMany?: EquipmentProfileScalarWhereInput | EquipmentProfileScalarWhereInput[]
  }

  export type EquipmentProfileUncheckedUpdateManyWithoutCommunicationProfileNestedInput = {
    create?: XOR<EquipmentProfileCreateWithoutCommunicationProfileInput, EquipmentProfileUncheckedCreateWithoutCommunicationProfileInput> | EquipmentProfileCreateWithoutCommunicationProfileInput[] | EquipmentProfileUncheckedCreateWithoutCommunicationProfileInput[]
    connectOrCreate?: EquipmentProfileCreateOrConnectWithoutCommunicationProfileInput | EquipmentProfileCreateOrConnectWithoutCommunicationProfileInput[]
    upsert?: EquipmentProfileUpsertWithWhereUniqueWithoutCommunicationProfileInput | EquipmentProfileUpsertWithWhereUniqueWithoutCommunicationProfileInput[]
    createMany?: EquipmentProfileCreateManyCommunicationProfileInputEnvelope
    set?: EquipmentProfileWhereUniqueInput | EquipmentProfileWhereUniqueInput[]
    disconnect?: EquipmentProfileWhereUniqueInput | EquipmentProfileWhereUniqueInput[]
    delete?: EquipmentProfileWhereUniqueInput | EquipmentProfileWhereUniqueInput[]
    connect?: EquipmentProfileWhereUniqueInput | EquipmentProfileWhereUniqueInput[]
    update?: EquipmentProfileUpdateWithWhereUniqueWithoutCommunicationProfileInput | EquipmentProfileUpdateWithWhereUniqueWithoutCommunicationProfileInput[]
    updateMany?: EquipmentProfileUpdateManyWithWhereWithoutCommunicationProfileInput | EquipmentProfileUpdateManyWithWhereWithoutCommunicationProfileInput[]
    deleteMany?: EquipmentProfileScalarWhereInput | EquipmentProfileScalarWhereInput[]
  }

  export type EquipmentCreateNestedOneWithoutDirectoryHistorialsInput = {
    create?: XOR<EquipmentCreateWithoutDirectoryHistorialsInput, EquipmentUncheckedCreateWithoutDirectoryHistorialsInput>
    connectOrCreate?: EquipmentCreateOrConnectWithoutDirectoryHistorialsInput
    connect?: EquipmentWhereUniqueInput
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type EquipmentUpdateOneWithoutDirectoryHistorialsNestedInput = {
    create?: XOR<EquipmentCreateWithoutDirectoryHistorialsInput, EquipmentUncheckedCreateWithoutDirectoryHistorialsInput>
    connectOrCreate?: EquipmentCreateOrConnectWithoutDirectoryHistorialsInput
    upsert?: EquipmentUpsertWithoutDirectoryHistorialsInput
    disconnect?: EquipmentWhereInput | boolean
    delete?: EquipmentWhereInput | boolean
    connect?: EquipmentWhereUniqueInput
    update?: XOR<XOR<EquipmentUpdateToOneWithWhereWithoutDirectoryHistorialsInput, EquipmentUpdateWithoutDirectoryHistorialsInput>, EquipmentUncheckedUpdateWithoutDirectoryHistorialsInput>
  }

  export type CommunicationProfilesCreateNestedOneWithoutEquipmentProfilesInput = {
    create?: XOR<CommunicationProfilesCreateWithoutEquipmentProfilesInput, CommunicationProfilesUncheckedCreateWithoutEquipmentProfilesInput>
    connectOrCreate?: CommunicationProfilesCreateOrConnectWithoutEquipmentProfilesInput
    connect?: CommunicationProfilesWhereUniqueInput
  }

  export type EquipmentCreateNestedManyWithoutEquipmentProfileInput = {
    create?: XOR<EquipmentCreateWithoutEquipmentProfileInput, EquipmentUncheckedCreateWithoutEquipmentProfileInput> | EquipmentCreateWithoutEquipmentProfileInput[] | EquipmentUncheckedCreateWithoutEquipmentProfileInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutEquipmentProfileInput | EquipmentCreateOrConnectWithoutEquipmentProfileInput[]
    createMany?: EquipmentCreateManyEquipmentProfileInputEnvelope
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
  }

  export type EquipmentUncheckedCreateNestedManyWithoutEquipmentProfileInput = {
    create?: XOR<EquipmentCreateWithoutEquipmentProfileInput, EquipmentUncheckedCreateWithoutEquipmentProfileInput> | EquipmentCreateWithoutEquipmentProfileInput[] | EquipmentUncheckedCreateWithoutEquipmentProfileInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutEquipmentProfileInput | EquipmentCreateOrConnectWithoutEquipmentProfileInput[]
    createMany?: EquipmentCreateManyEquipmentProfileInputEnvelope
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type CommunicationProfilesUpdateOneWithoutEquipmentProfilesNestedInput = {
    create?: XOR<CommunicationProfilesCreateWithoutEquipmentProfilesInput, CommunicationProfilesUncheckedCreateWithoutEquipmentProfilesInput>
    connectOrCreate?: CommunicationProfilesCreateOrConnectWithoutEquipmentProfilesInput
    upsert?: CommunicationProfilesUpsertWithoutEquipmentProfilesInput
    disconnect?: CommunicationProfilesWhereInput | boolean
    delete?: CommunicationProfilesWhereInput | boolean
    connect?: CommunicationProfilesWhereUniqueInput
    update?: XOR<XOR<CommunicationProfilesUpdateToOneWithWhereWithoutEquipmentProfilesInput, CommunicationProfilesUpdateWithoutEquipmentProfilesInput>, CommunicationProfilesUncheckedUpdateWithoutEquipmentProfilesInput>
  }

  export type EquipmentUpdateManyWithoutEquipmentProfileNestedInput = {
    create?: XOR<EquipmentCreateWithoutEquipmentProfileInput, EquipmentUncheckedCreateWithoutEquipmentProfileInput> | EquipmentCreateWithoutEquipmentProfileInput[] | EquipmentUncheckedCreateWithoutEquipmentProfileInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutEquipmentProfileInput | EquipmentCreateOrConnectWithoutEquipmentProfileInput[]
    upsert?: EquipmentUpsertWithWhereUniqueWithoutEquipmentProfileInput | EquipmentUpsertWithWhereUniqueWithoutEquipmentProfileInput[]
    createMany?: EquipmentCreateManyEquipmentProfileInputEnvelope
    set?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    disconnect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    delete?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    update?: EquipmentUpdateWithWhereUniqueWithoutEquipmentProfileInput | EquipmentUpdateWithWhereUniqueWithoutEquipmentProfileInput[]
    updateMany?: EquipmentUpdateManyWithWhereWithoutEquipmentProfileInput | EquipmentUpdateManyWithWhereWithoutEquipmentProfileInput[]
    deleteMany?: EquipmentScalarWhereInput | EquipmentScalarWhereInput[]
  }

  export type EquipmentUncheckedUpdateManyWithoutEquipmentProfileNestedInput = {
    create?: XOR<EquipmentCreateWithoutEquipmentProfileInput, EquipmentUncheckedCreateWithoutEquipmentProfileInput> | EquipmentCreateWithoutEquipmentProfileInput[] | EquipmentUncheckedCreateWithoutEquipmentProfileInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutEquipmentProfileInput | EquipmentCreateOrConnectWithoutEquipmentProfileInput[]
    upsert?: EquipmentUpsertWithWhereUniqueWithoutEquipmentProfileInput | EquipmentUpsertWithWhereUniqueWithoutEquipmentProfileInput[]
    createMany?: EquipmentCreateManyEquipmentProfileInputEnvelope
    set?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    disconnect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    delete?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    update?: EquipmentUpdateWithWhereUniqueWithoutEquipmentProfileInput | EquipmentUpdateWithWhereUniqueWithoutEquipmentProfileInput[]
    updateMany?: EquipmentUpdateManyWithWhereWithoutEquipmentProfileInput | EquipmentUpdateManyWithWhereWithoutEquipmentProfileInput[]
    deleteMany?: EquipmentScalarWhereInput | EquipmentScalarWhereInput[]
  }

  export type DirectoryHistorialCreateNestedManyWithoutEquipmentInput = {
    create?: XOR<DirectoryHistorialCreateWithoutEquipmentInput, DirectoryHistorialUncheckedCreateWithoutEquipmentInput> | DirectoryHistorialCreateWithoutEquipmentInput[] | DirectoryHistorialUncheckedCreateWithoutEquipmentInput[]
    connectOrCreate?: DirectoryHistorialCreateOrConnectWithoutEquipmentInput | DirectoryHistorialCreateOrConnectWithoutEquipmentInput[]
    createMany?: DirectoryHistorialCreateManyEquipmentInputEnvelope
    connect?: DirectoryHistorialWhereUniqueInput | DirectoryHistorialWhereUniqueInput[]
  }

  export type EquipmentProfileCreateNestedOneWithoutEquipmentsInput = {
    create?: XOR<EquipmentProfileCreateWithoutEquipmentsInput, EquipmentProfileUncheckedCreateWithoutEquipmentsInput>
    connectOrCreate?: EquipmentProfileCreateOrConnectWithoutEquipmentsInput
    connect?: EquipmentProfileWhereUniqueInput
  }

  export type ParameterCreateNestedManyWithoutEquipmentInput = {
    create?: XOR<ParameterCreateWithoutEquipmentInput, ParameterUncheckedCreateWithoutEquipmentInput> | ParameterCreateWithoutEquipmentInput[] | ParameterUncheckedCreateWithoutEquipmentInput[]
    connectOrCreate?: ParameterCreateOrConnectWithoutEquipmentInput | ParameterCreateOrConnectWithoutEquipmentInput[]
    createMany?: ParameterCreateManyEquipmentInputEnvelope
    connect?: ParameterWhereUniqueInput | ParameterWhereUniqueInput[]
  }

  export type EquipmentConfigurationCreateNestedManyWithoutEquipmentInput = {
    create?: XOR<EquipmentConfigurationCreateWithoutEquipmentInput, EquipmentConfigurationUncheckedCreateWithoutEquipmentInput> | EquipmentConfigurationCreateWithoutEquipmentInput[] | EquipmentConfigurationUncheckedCreateWithoutEquipmentInput[]
    connectOrCreate?: EquipmentConfigurationCreateOrConnectWithoutEquipmentInput | EquipmentConfigurationCreateOrConnectWithoutEquipmentInput[]
    createMany?: EquipmentConfigurationCreateManyEquipmentInputEnvelope
    connect?: EquipmentConfigurationWhereUniqueInput | EquipmentConfigurationWhereUniqueInput[]
  }

  export type DirectoryHistorialUncheckedCreateNestedManyWithoutEquipmentInput = {
    create?: XOR<DirectoryHistorialCreateWithoutEquipmentInput, DirectoryHistorialUncheckedCreateWithoutEquipmentInput> | DirectoryHistorialCreateWithoutEquipmentInput[] | DirectoryHistorialUncheckedCreateWithoutEquipmentInput[]
    connectOrCreate?: DirectoryHistorialCreateOrConnectWithoutEquipmentInput | DirectoryHistorialCreateOrConnectWithoutEquipmentInput[]
    createMany?: DirectoryHistorialCreateManyEquipmentInputEnvelope
    connect?: DirectoryHistorialWhereUniqueInput | DirectoryHistorialWhereUniqueInput[]
  }

  export type ParameterUncheckedCreateNestedManyWithoutEquipmentInput = {
    create?: XOR<ParameterCreateWithoutEquipmentInput, ParameterUncheckedCreateWithoutEquipmentInput> | ParameterCreateWithoutEquipmentInput[] | ParameterUncheckedCreateWithoutEquipmentInput[]
    connectOrCreate?: ParameterCreateOrConnectWithoutEquipmentInput | ParameterCreateOrConnectWithoutEquipmentInput[]
    createMany?: ParameterCreateManyEquipmentInputEnvelope
    connect?: ParameterWhereUniqueInput | ParameterWhereUniqueInput[]
  }

  export type EquipmentConfigurationUncheckedCreateNestedManyWithoutEquipmentInput = {
    create?: XOR<EquipmentConfigurationCreateWithoutEquipmentInput, EquipmentConfigurationUncheckedCreateWithoutEquipmentInput> | EquipmentConfigurationCreateWithoutEquipmentInput[] | EquipmentConfigurationUncheckedCreateWithoutEquipmentInput[]
    connectOrCreate?: EquipmentConfigurationCreateOrConnectWithoutEquipmentInput | EquipmentConfigurationCreateOrConnectWithoutEquipmentInput[]
    createMany?: EquipmentConfigurationCreateManyEquipmentInputEnvelope
    connect?: EquipmentConfigurationWhereUniqueInput | EquipmentConfigurationWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DirectoryHistorialUpdateManyWithoutEquipmentNestedInput = {
    create?: XOR<DirectoryHistorialCreateWithoutEquipmentInput, DirectoryHistorialUncheckedCreateWithoutEquipmentInput> | DirectoryHistorialCreateWithoutEquipmentInput[] | DirectoryHistorialUncheckedCreateWithoutEquipmentInput[]
    connectOrCreate?: DirectoryHistorialCreateOrConnectWithoutEquipmentInput | DirectoryHistorialCreateOrConnectWithoutEquipmentInput[]
    upsert?: DirectoryHistorialUpsertWithWhereUniqueWithoutEquipmentInput | DirectoryHistorialUpsertWithWhereUniqueWithoutEquipmentInput[]
    createMany?: DirectoryHistorialCreateManyEquipmentInputEnvelope
    set?: DirectoryHistorialWhereUniqueInput | DirectoryHistorialWhereUniqueInput[]
    disconnect?: DirectoryHistorialWhereUniqueInput | DirectoryHistorialWhereUniqueInput[]
    delete?: DirectoryHistorialWhereUniqueInput | DirectoryHistorialWhereUniqueInput[]
    connect?: DirectoryHistorialWhereUniqueInput | DirectoryHistorialWhereUniqueInput[]
    update?: DirectoryHistorialUpdateWithWhereUniqueWithoutEquipmentInput | DirectoryHistorialUpdateWithWhereUniqueWithoutEquipmentInput[]
    updateMany?: DirectoryHistorialUpdateManyWithWhereWithoutEquipmentInput | DirectoryHistorialUpdateManyWithWhereWithoutEquipmentInput[]
    deleteMany?: DirectoryHistorialScalarWhereInput | DirectoryHistorialScalarWhereInput[]
  }

  export type EquipmentProfileUpdateOneWithoutEquipmentsNestedInput = {
    create?: XOR<EquipmentProfileCreateWithoutEquipmentsInput, EquipmentProfileUncheckedCreateWithoutEquipmentsInput>
    connectOrCreate?: EquipmentProfileCreateOrConnectWithoutEquipmentsInput
    upsert?: EquipmentProfileUpsertWithoutEquipmentsInput
    disconnect?: EquipmentProfileWhereInput | boolean
    delete?: EquipmentProfileWhereInput | boolean
    connect?: EquipmentProfileWhereUniqueInput
    update?: XOR<XOR<EquipmentProfileUpdateToOneWithWhereWithoutEquipmentsInput, EquipmentProfileUpdateWithoutEquipmentsInput>, EquipmentProfileUncheckedUpdateWithoutEquipmentsInput>
  }

  export type ParameterUpdateManyWithoutEquipmentNestedInput = {
    create?: XOR<ParameterCreateWithoutEquipmentInput, ParameterUncheckedCreateWithoutEquipmentInput> | ParameterCreateWithoutEquipmentInput[] | ParameterUncheckedCreateWithoutEquipmentInput[]
    connectOrCreate?: ParameterCreateOrConnectWithoutEquipmentInput | ParameterCreateOrConnectWithoutEquipmentInput[]
    upsert?: ParameterUpsertWithWhereUniqueWithoutEquipmentInput | ParameterUpsertWithWhereUniqueWithoutEquipmentInput[]
    createMany?: ParameterCreateManyEquipmentInputEnvelope
    set?: ParameterWhereUniqueInput | ParameterWhereUniqueInput[]
    disconnect?: ParameterWhereUniqueInput | ParameterWhereUniqueInput[]
    delete?: ParameterWhereUniqueInput | ParameterWhereUniqueInput[]
    connect?: ParameterWhereUniqueInput | ParameterWhereUniqueInput[]
    update?: ParameterUpdateWithWhereUniqueWithoutEquipmentInput | ParameterUpdateWithWhereUniqueWithoutEquipmentInput[]
    updateMany?: ParameterUpdateManyWithWhereWithoutEquipmentInput | ParameterUpdateManyWithWhereWithoutEquipmentInput[]
    deleteMany?: ParameterScalarWhereInput | ParameterScalarWhereInput[]
  }

  export type EquipmentConfigurationUpdateManyWithoutEquipmentNestedInput = {
    create?: XOR<EquipmentConfigurationCreateWithoutEquipmentInput, EquipmentConfigurationUncheckedCreateWithoutEquipmentInput> | EquipmentConfigurationCreateWithoutEquipmentInput[] | EquipmentConfigurationUncheckedCreateWithoutEquipmentInput[]
    connectOrCreate?: EquipmentConfigurationCreateOrConnectWithoutEquipmentInput | EquipmentConfigurationCreateOrConnectWithoutEquipmentInput[]
    upsert?: EquipmentConfigurationUpsertWithWhereUniqueWithoutEquipmentInput | EquipmentConfigurationUpsertWithWhereUniqueWithoutEquipmentInput[]
    createMany?: EquipmentConfigurationCreateManyEquipmentInputEnvelope
    set?: EquipmentConfigurationWhereUniqueInput | EquipmentConfigurationWhereUniqueInput[]
    disconnect?: EquipmentConfigurationWhereUniqueInput | EquipmentConfigurationWhereUniqueInput[]
    delete?: EquipmentConfigurationWhereUniqueInput | EquipmentConfigurationWhereUniqueInput[]
    connect?: EquipmentConfigurationWhereUniqueInput | EquipmentConfigurationWhereUniqueInput[]
    update?: EquipmentConfigurationUpdateWithWhereUniqueWithoutEquipmentInput | EquipmentConfigurationUpdateWithWhereUniqueWithoutEquipmentInput[]
    updateMany?: EquipmentConfigurationUpdateManyWithWhereWithoutEquipmentInput | EquipmentConfigurationUpdateManyWithWhereWithoutEquipmentInput[]
    deleteMany?: EquipmentConfigurationScalarWhereInput | EquipmentConfigurationScalarWhereInput[]
  }

  export type DirectoryHistorialUncheckedUpdateManyWithoutEquipmentNestedInput = {
    create?: XOR<DirectoryHistorialCreateWithoutEquipmentInput, DirectoryHistorialUncheckedCreateWithoutEquipmentInput> | DirectoryHistorialCreateWithoutEquipmentInput[] | DirectoryHistorialUncheckedCreateWithoutEquipmentInput[]
    connectOrCreate?: DirectoryHistorialCreateOrConnectWithoutEquipmentInput | DirectoryHistorialCreateOrConnectWithoutEquipmentInput[]
    upsert?: DirectoryHistorialUpsertWithWhereUniqueWithoutEquipmentInput | DirectoryHistorialUpsertWithWhereUniqueWithoutEquipmentInput[]
    createMany?: DirectoryHistorialCreateManyEquipmentInputEnvelope
    set?: DirectoryHistorialWhereUniqueInput | DirectoryHistorialWhereUniqueInput[]
    disconnect?: DirectoryHistorialWhereUniqueInput | DirectoryHistorialWhereUniqueInput[]
    delete?: DirectoryHistorialWhereUniqueInput | DirectoryHistorialWhereUniqueInput[]
    connect?: DirectoryHistorialWhereUniqueInput | DirectoryHistorialWhereUniqueInput[]
    update?: DirectoryHistorialUpdateWithWhereUniqueWithoutEquipmentInput | DirectoryHistorialUpdateWithWhereUniqueWithoutEquipmentInput[]
    updateMany?: DirectoryHistorialUpdateManyWithWhereWithoutEquipmentInput | DirectoryHistorialUpdateManyWithWhereWithoutEquipmentInput[]
    deleteMany?: DirectoryHistorialScalarWhereInput | DirectoryHistorialScalarWhereInput[]
  }

  export type ParameterUncheckedUpdateManyWithoutEquipmentNestedInput = {
    create?: XOR<ParameterCreateWithoutEquipmentInput, ParameterUncheckedCreateWithoutEquipmentInput> | ParameterCreateWithoutEquipmentInput[] | ParameterUncheckedCreateWithoutEquipmentInput[]
    connectOrCreate?: ParameterCreateOrConnectWithoutEquipmentInput | ParameterCreateOrConnectWithoutEquipmentInput[]
    upsert?: ParameterUpsertWithWhereUniqueWithoutEquipmentInput | ParameterUpsertWithWhereUniqueWithoutEquipmentInput[]
    createMany?: ParameterCreateManyEquipmentInputEnvelope
    set?: ParameterWhereUniqueInput | ParameterWhereUniqueInput[]
    disconnect?: ParameterWhereUniqueInput | ParameterWhereUniqueInput[]
    delete?: ParameterWhereUniqueInput | ParameterWhereUniqueInput[]
    connect?: ParameterWhereUniqueInput | ParameterWhereUniqueInput[]
    update?: ParameterUpdateWithWhereUniqueWithoutEquipmentInput | ParameterUpdateWithWhereUniqueWithoutEquipmentInput[]
    updateMany?: ParameterUpdateManyWithWhereWithoutEquipmentInput | ParameterUpdateManyWithWhereWithoutEquipmentInput[]
    deleteMany?: ParameterScalarWhereInput | ParameterScalarWhereInput[]
  }

  export type EquipmentConfigurationUncheckedUpdateManyWithoutEquipmentNestedInput = {
    create?: XOR<EquipmentConfigurationCreateWithoutEquipmentInput, EquipmentConfigurationUncheckedCreateWithoutEquipmentInput> | EquipmentConfigurationCreateWithoutEquipmentInput[] | EquipmentConfigurationUncheckedCreateWithoutEquipmentInput[]
    connectOrCreate?: EquipmentConfigurationCreateOrConnectWithoutEquipmentInput | EquipmentConfigurationCreateOrConnectWithoutEquipmentInput[]
    upsert?: EquipmentConfigurationUpsertWithWhereUniqueWithoutEquipmentInput | EquipmentConfigurationUpsertWithWhereUniqueWithoutEquipmentInput[]
    createMany?: EquipmentConfigurationCreateManyEquipmentInputEnvelope
    set?: EquipmentConfigurationWhereUniqueInput | EquipmentConfigurationWhereUniqueInput[]
    disconnect?: EquipmentConfigurationWhereUniqueInput | EquipmentConfigurationWhereUniqueInput[]
    delete?: EquipmentConfigurationWhereUniqueInput | EquipmentConfigurationWhereUniqueInput[]
    connect?: EquipmentConfigurationWhereUniqueInput | EquipmentConfigurationWhereUniqueInput[]
    update?: EquipmentConfigurationUpdateWithWhereUniqueWithoutEquipmentInput | EquipmentConfigurationUpdateWithWhereUniqueWithoutEquipmentInput[]
    updateMany?: EquipmentConfigurationUpdateManyWithWhereWithoutEquipmentInput | EquipmentConfigurationUpdateManyWithWhereWithoutEquipmentInput[]
    deleteMany?: EquipmentConfigurationScalarWhereInput | EquipmentConfigurationScalarWhereInput[]
  }

  export type ResultCreateNestedOneWithoutHistogramResultsInput = {
    create?: XOR<ResultCreateWithoutHistogramResultsInput, ResultUncheckedCreateWithoutHistogramResultsInput>
    connectOrCreate?: ResultCreateOrConnectWithoutHistogramResultsInput
    connect?: ResultWhereUniqueInput
  }

  export type ResultUpdateOneWithoutHistogramResultsNestedInput = {
    create?: XOR<ResultCreateWithoutHistogramResultsInput, ResultUncheckedCreateWithoutHistogramResultsInput>
    connectOrCreate?: ResultCreateOrConnectWithoutHistogramResultsInput
    upsert?: ResultUpsertWithoutHistogramResultsInput
    disconnect?: ResultWhereInput | boolean
    delete?: ResultWhereInput | boolean
    connect?: ResultWhereUniqueInput
    update?: XOR<XOR<ResultUpdateToOneWithWhereWithoutHistogramResultsInput, ResultUpdateWithoutHistogramResultsInput>, ResultUncheckedUpdateWithoutHistogramResultsInput>
  }

  export type EquipmentCreateNestedOneWithoutParametersInput = {
    create?: XOR<EquipmentCreateWithoutParametersInput, EquipmentUncheckedCreateWithoutParametersInput>
    connectOrCreate?: EquipmentCreateOrConnectWithoutParametersInput
    connect?: EquipmentWhereUniqueInput
  }

  export type ParameterDictionaryCreateNestedOneWithoutParametersInput = {
    create?: XOR<ParameterDictionaryCreateWithoutParametersInput, ParameterDictionaryUncheckedCreateWithoutParametersInput>
    connectOrCreate?: ParameterDictionaryCreateOrConnectWithoutParametersInput
    connect?: ParameterDictionaryWhereUniqueInput
  }

  export type ResultCreateNestedOneWithoutParametersInput = {
    create?: XOR<ResultCreateWithoutParametersInput, ResultUncheckedCreateWithoutParametersInput>
    connectOrCreate?: ResultCreateOrConnectWithoutParametersInput
    connect?: ResultWhereUniqueInput
  }

  export type EquipmentUpdateOneWithoutParametersNestedInput = {
    create?: XOR<EquipmentCreateWithoutParametersInput, EquipmentUncheckedCreateWithoutParametersInput>
    connectOrCreate?: EquipmentCreateOrConnectWithoutParametersInput
    upsert?: EquipmentUpsertWithoutParametersInput
    disconnect?: EquipmentWhereInput | boolean
    delete?: EquipmentWhereInput | boolean
    connect?: EquipmentWhereUniqueInput
    update?: XOR<XOR<EquipmentUpdateToOneWithWhereWithoutParametersInput, EquipmentUpdateWithoutParametersInput>, EquipmentUncheckedUpdateWithoutParametersInput>
  }

  export type ParameterDictionaryUpdateOneWithoutParametersNestedInput = {
    create?: XOR<ParameterDictionaryCreateWithoutParametersInput, ParameterDictionaryUncheckedCreateWithoutParametersInput>
    connectOrCreate?: ParameterDictionaryCreateOrConnectWithoutParametersInput
    upsert?: ParameterDictionaryUpsertWithoutParametersInput
    disconnect?: ParameterDictionaryWhereInput | boolean
    delete?: ParameterDictionaryWhereInput | boolean
    connect?: ParameterDictionaryWhereUniqueInput
    update?: XOR<XOR<ParameterDictionaryUpdateToOneWithWhereWithoutParametersInput, ParameterDictionaryUpdateWithoutParametersInput>, ParameterDictionaryUncheckedUpdateWithoutParametersInput>
  }

  export type ResultUpdateOneWithoutParametersNestedInput = {
    create?: XOR<ResultCreateWithoutParametersInput, ResultUncheckedCreateWithoutParametersInput>
    connectOrCreate?: ResultCreateOrConnectWithoutParametersInput
    upsert?: ResultUpsertWithoutParametersInput
    disconnect?: ResultWhereInput | boolean
    delete?: ResultWhereInput | boolean
    connect?: ResultWhereUniqueInput
    update?: XOR<XOR<ResultUpdateToOneWithWhereWithoutParametersInput, ResultUpdateWithoutParametersInput>, ResultUncheckedUpdateWithoutParametersInput>
  }

  export type HistogramResultCreateNestedManyWithoutResultInput = {
    create?: XOR<HistogramResultCreateWithoutResultInput, HistogramResultUncheckedCreateWithoutResultInput> | HistogramResultCreateWithoutResultInput[] | HistogramResultUncheckedCreateWithoutResultInput[]
    connectOrCreate?: HistogramResultCreateOrConnectWithoutResultInput | HistogramResultCreateOrConnectWithoutResultInput[]
    createMany?: HistogramResultCreateManyResultInputEnvelope
    connect?: HistogramResultWhereUniqueInput | HistogramResultWhereUniqueInput[]
  }

  export type ParameterCreateNestedManyWithoutResultInput = {
    create?: XOR<ParameterCreateWithoutResultInput, ParameterUncheckedCreateWithoutResultInput> | ParameterCreateWithoutResultInput[] | ParameterUncheckedCreateWithoutResultInput[]
    connectOrCreate?: ParameterCreateOrConnectWithoutResultInput | ParameterCreateOrConnectWithoutResultInput[]
    createMany?: ParameterCreateManyResultInputEnvelope
    connect?: ParameterWhereUniqueInput | ParameterWhereUniqueInput[]
  }

  export type ResultSendCreateNestedManyWithoutResultInput = {
    create?: XOR<ResultSendCreateWithoutResultInput, ResultSendUncheckedCreateWithoutResultInput> | ResultSendCreateWithoutResultInput[] | ResultSendUncheckedCreateWithoutResultInput[]
    connectOrCreate?: ResultSendCreateOrConnectWithoutResultInput | ResultSendCreateOrConnectWithoutResultInput[]
    createMany?: ResultSendCreateManyResultInputEnvelope
    connect?: ResultSendWhereUniqueInput | ResultSendWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutCreatedResultsInput = {
    create?: XOR<UserCreateWithoutCreatedResultsInput, UserUncheckedCreateWithoutCreatedResultsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedResultsInput
    connect?: UserWhereUniqueInput
  }

  export type HistogramResultUncheckedCreateNestedManyWithoutResultInput = {
    create?: XOR<HistogramResultCreateWithoutResultInput, HistogramResultUncheckedCreateWithoutResultInput> | HistogramResultCreateWithoutResultInput[] | HistogramResultUncheckedCreateWithoutResultInput[]
    connectOrCreate?: HistogramResultCreateOrConnectWithoutResultInput | HistogramResultCreateOrConnectWithoutResultInput[]
    createMany?: HistogramResultCreateManyResultInputEnvelope
    connect?: HistogramResultWhereUniqueInput | HistogramResultWhereUniqueInput[]
  }

  export type ParameterUncheckedCreateNestedManyWithoutResultInput = {
    create?: XOR<ParameterCreateWithoutResultInput, ParameterUncheckedCreateWithoutResultInput> | ParameterCreateWithoutResultInput[] | ParameterUncheckedCreateWithoutResultInput[]
    connectOrCreate?: ParameterCreateOrConnectWithoutResultInput | ParameterCreateOrConnectWithoutResultInput[]
    createMany?: ParameterCreateManyResultInputEnvelope
    connect?: ParameterWhereUniqueInput | ParameterWhereUniqueInput[]
  }

  export type ResultSendUncheckedCreateNestedManyWithoutResultInput = {
    create?: XOR<ResultSendCreateWithoutResultInput, ResultSendUncheckedCreateWithoutResultInput> | ResultSendCreateWithoutResultInput[] | ResultSendUncheckedCreateWithoutResultInput[]
    connectOrCreate?: ResultSendCreateOrConnectWithoutResultInput | ResultSendCreateOrConnectWithoutResultInput[]
    createMany?: ResultSendCreateManyResultInputEnvelope
    connect?: ResultSendWhereUniqueInput | ResultSendWhereUniqueInput[]
  }

  export type HistogramResultUpdateManyWithoutResultNestedInput = {
    create?: XOR<HistogramResultCreateWithoutResultInput, HistogramResultUncheckedCreateWithoutResultInput> | HistogramResultCreateWithoutResultInput[] | HistogramResultUncheckedCreateWithoutResultInput[]
    connectOrCreate?: HistogramResultCreateOrConnectWithoutResultInput | HistogramResultCreateOrConnectWithoutResultInput[]
    upsert?: HistogramResultUpsertWithWhereUniqueWithoutResultInput | HistogramResultUpsertWithWhereUniqueWithoutResultInput[]
    createMany?: HistogramResultCreateManyResultInputEnvelope
    set?: HistogramResultWhereUniqueInput | HistogramResultWhereUniqueInput[]
    disconnect?: HistogramResultWhereUniqueInput | HistogramResultWhereUniqueInput[]
    delete?: HistogramResultWhereUniqueInput | HistogramResultWhereUniqueInput[]
    connect?: HistogramResultWhereUniqueInput | HistogramResultWhereUniqueInput[]
    update?: HistogramResultUpdateWithWhereUniqueWithoutResultInput | HistogramResultUpdateWithWhereUniqueWithoutResultInput[]
    updateMany?: HistogramResultUpdateManyWithWhereWithoutResultInput | HistogramResultUpdateManyWithWhereWithoutResultInput[]
    deleteMany?: HistogramResultScalarWhereInput | HistogramResultScalarWhereInput[]
  }

  export type ParameterUpdateManyWithoutResultNestedInput = {
    create?: XOR<ParameterCreateWithoutResultInput, ParameterUncheckedCreateWithoutResultInput> | ParameterCreateWithoutResultInput[] | ParameterUncheckedCreateWithoutResultInput[]
    connectOrCreate?: ParameterCreateOrConnectWithoutResultInput | ParameterCreateOrConnectWithoutResultInput[]
    upsert?: ParameterUpsertWithWhereUniqueWithoutResultInput | ParameterUpsertWithWhereUniqueWithoutResultInput[]
    createMany?: ParameterCreateManyResultInputEnvelope
    set?: ParameterWhereUniqueInput | ParameterWhereUniqueInput[]
    disconnect?: ParameterWhereUniqueInput | ParameterWhereUniqueInput[]
    delete?: ParameterWhereUniqueInput | ParameterWhereUniqueInput[]
    connect?: ParameterWhereUniqueInput | ParameterWhereUniqueInput[]
    update?: ParameterUpdateWithWhereUniqueWithoutResultInput | ParameterUpdateWithWhereUniqueWithoutResultInput[]
    updateMany?: ParameterUpdateManyWithWhereWithoutResultInput | ParameterUpdateManyWithWhereWithoutResultInput[]
    deleteMany?: ParameterScalarWhereInput | ParameterScalarWhereInput[]
  }

  export type ResultSendUpdateManyWithoutResultNestedInput = {
    create?: XOR<ResultSendCreateWithoutResultInput, ResultSendUncheckedCreateWithoutResultInput> | ResultSendCreateWithoutResultInput[] | ResultSendUncheckedCreateWithoutResultInput[]
    connectOrCreate?: ResultSendCreateOrConnectWithoutResultInput | ResultSendCreateOrConnectWithoutResultInput[]
    upsert?: ResultSendUpsertWithWhereUniqueWithoutResultInput | ResultSendUpsertWithWhereUniqueWithoutResultInput[]
    createMany?: ResultSendCreateManyResultInputEnvelope
    set?: ResultSendWhereUniqueInput | ResultSendWhereUniqueInput[]
    disconnect?: ResultSendWhereUniqueInput | ResultSendWhereUniqueInput[]
    delete?: ResultSendWhereUniqueInput | ResultSendWhereUniqueInput[]
    connect?: ResultSendWhereUniqueInput | ResultSendWhereUniqueInput[]
    update?: ResultSendUpdateWithWhereUniqueWithoutResultInput | ResultSendUpdateWithWhereUniqueWithoutResultInput[]
    updateMany?: ResultSendUpdateManyWithWhereWithoutResultInput | ResultSendUpdateManyWithWhereWithoutResultInput[]
    deleteMany?: ResultSendScalarWhereInput | ResultSendScalarWhereInput[]
  }

  export type UserUpdateOneWithoutCreatedResultsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedResultsInput, UserUncheckedCreateWithoutCreatedResultsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedResultsInput
    upsert?: UserUpsertWithoutCreatedResultsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedResultsInput, UserUpdateWithoutCreatedResultsInput>, UserUncheckedUpdateWithoutCreatedResultsInput>
  }

  export type HistogramResultUncheckedUpdateManyWithoutResultNestedInput = {
    create?: XOR<HistogramResultCreateWithoutResultInput, HistogramResultUncheckedCreateWithoutResultInput> | HistogramResultCreateWithoutResultInput[] | HistogramResultUncheckedCreateWithoutResultInput[]
    connectOrCreate?: HistogramResultCreateOrConnectWithoutResultInput | HistogramResultCreateOrConnectWithoutResultInput[]
    upsert?: HistogramResultUpsertWithWhereUniqueWithoutResultInput | HistogramResultUpsertWithWhereUniqueWithoutResultInput[]
    createMany?: HistogramResultCreateManyResultInputEnvelope
    set?: HistogramResultWhereUniqueInput | HistogramResultWhereUniqueInput[]
    disconnect?: HistogramResultWhereUniqueInput | HistogramResultWhereUniqueInput[]
    delete?: HistogramResultWhereUniqueInput | HistogramResultWhereUniqueInput[]
    connect?: HistogramResultWhereUniqueInput | HistogramResultWhereUniqueInput[]
    update?: HistogramResultUpdateWithWhereUniqueWithoutResultInput | HistogramResultUpdateWithWhereUniqueWithoutResultInput[]
    updateMany?: HistogramResultUpdateManyWithWhereWithoutResultInput | HistogramResultUpdateManyWithWhereWithoutResultInput[]
    deleteMany?: HistogramResultScalarWhereInput | HistogramResultScalarWhereInput[]
  }

  export type ParameterUncheckedUpdateManyWithoutResultNestedInput = {
    create?: XOR<ParameterCreateWithoutResultInput, ParameterUncheckedCreateWithoutResultInput> | ParameterCreateWithoutResultInput[] | ParameterUncheckedCreateWithoutResultInput[]
    connectOrCreate?: ParameterCreateOrConnectWithoutResultInput | ParameterCreateOrConnectWithoutResultInput[]
    upsert?: ParameterUpsertWithWhereUniqueWithoutResultInput | ParameterUpsertWithWhereUniqueWithoutResultInput[]
    createMany?: ParameterCreateManyResultInputEnvelope
    set?: ParameterWhereUniqueInput | ParameterWhereUniqueInput[]
    disconnect?: ParameterWhereUniqueInput | ParameterWhereUniqueInput[]
    delete?: ParameterWhereUniqueInput | ParameterWhereUniqueInput[]
    connect?: ParameterWhereUniqueInput | ParameterWhereUniqueInput[]
    update?: ParameterUpdateWithWhereUniqueWithoutResultInput | ParameterUpdateWithWhereUniqueWithoutResultInput[]
    updateMany?: ParameterUpdateManyWithWhereWithoutResultInput | ParameterUpdateManyWithWhereWithoutResultInput[]
    deleteMany?: ParameterScalarWhereInput | ParameterScalarWhereInput[]
  }

  export type ResultSendUncheckedUpdateManyWithoutResultNestedInput = {
    create?: XOR<ResultSendCreateWithoutResultInput, ResultSendUncheckedCreateWithoutResultInput> | ResultSendCreateWithoutResultInput[] | ResultSendUncheckedCreateWithoutResultInput[]
    connectOrCreate?: ResultSendCreateOrConnectWithoutResultInput | ResultSendCreateOrConnectWithoutResultInput[]
    upsert?: ResultSendUpsertWithWhereUniqueWithoutResultInput | ResultSendUpsertWithWhereUniqueWithoutResultInput[]
    createMany?: ResultSendCreateManyResultInputEnvelope
    set?: ResultSendWhereUniqueInput | ResultSendWhereUniqueInput[]
    disconnect?: ResultSendWhereUniqueInput | ResultSendWhereUniqueInput[]
    delete?: ResultSendWhereUniqueInput | ResultSendWhereUniqueInput[]
    connect?: ResultSendWhereUniqueInput | ResultSendWhereUniqueInput[]
    update?: ResultSendUpdateWithWhereUniqueWithoutResultInput | ResultSendUpdateWithWhereUniqueWithoutResultInput[]
    updateMany?: ResultSendUpdateManyWithWhereWithoutResultInput | ResultSendUpdateManyWithWhereWithoutResultInput[]
    deleteMany?: ResultSendScalarWhereInput | ResultSendScalarWhereInput[]
  }

  export type SystemParameterCreateNestedOneWithoutParameterDictionariesInput = {
    create?: XOR<SystemParameterCreateWithoutParameterDictionariesInput, SystemParameterUncheckedCreateWithoutParameterDictionariesInput>
    connectOrCreate?: SystemParameterCreateOrConnectWithoutParameterDictionariesInput
    connect?: SystemParameterWhereUniqueInput
  }

  export type ParameterCreateNestedManyWithoutParameterDictionaryInput = {
    create?: XOR<ParameterCreateWithoutParameterDictionaryInput, ParameterUncheckedCreateWithoutParameterDictionaryInput> | ParameterCreateWithoutParameterDictionaryInput[] | ParameterUncheckedCreateWithoutParameterDictionaryInput[]
    connectOrCreate?: ParameterCreateOrConnectWithoutParameterDictionaryInput | ParameterCreateOrConnectWithoutParameterDictionaryInput[]
    createMany?: ParameterCreateManyParameterDictionaryInputEnvelope
    connect?: ParameterWhereUniqueInput | ParameterWhereUniqueInput[]
  }

  export type ParameterUncheckedCreateNestedManyWithoutParameterDictionaryInput = {
    create?: XOR<ParameterCreateWithoutParameterDictionaryInput, ParameterUncheckedCreateWithoutParameterDictionaryInput> | ParameterCreateWithoutParameterDictionaryInput[] | ParameterUncheckedCreateWithoutParameterDictionaryInput[]
    connectOrCreate?: ParameterCreateOrConnectWithoutParameterDictionaryInput | ParameterCreateOrConnectWithoutParameterDictionaryInput[]
    createMany?: ParameterCreateManyParameterDictionaryInputEnvelope
    connect?: ParameterWhereUniqueInput | ParameterWhereUniqueInput[]
  }

  export type SystemParameterUpdateOneWithoutParameterDictionariesNestedInput = {
    create?: XOR<SystemParameterCreateWithoutParameterDictionariesInput, SystemParameterUncheckedCreateWithoutParameterDictionariesInput>
    connectOrCreate?: SystemParameterCreateOrConnectWithoutParameterDictionariesInput
    upsert?: SystemParameterUpsertWithoutParameterDictionariesInput
    disconnect?: SystemParameterWhereInput | boolean
    delete?: SystemParameterWhereInput | boolean
    connect?: SystemParameterWhereUniqueInput
    update?: XOR<XOR<SystemParameterUpdateToOneWithWhereWithoutParameterDictionariesInput, SystemParameterUpdateWithoutParameterDictionariesInput>, SystemParameterUncheckedUpdateWithoutParameterDictionariesInput>
  }

  export type ParameterUpdateManyWithoutParameterDictionaryNestedInput = {
    create?: XOR<ParameterCreateWithoutParameterDictionaryInput, ParameterUncheckedCreateWithoutParameterDictionaryInput> | ParameterCreateWithoutParameterDictionaryInput[] | ParameterUncheckedCreateWithoutParameterDictionaryInput[]
    connectOrCreate?: ParameterCreateOrConnectWithoutParameterDictionaryInput | ParameterCreateOrConnectWithoutParameterDictionaryInput[]
    upsert?: ParameterUpsertWithWhereUniqueWithoutParameterDictionaryInput | ParameterUpsertWithWhereUniqueWithoutParameterDictionaryInput[]
    createMany?: ParameterCreateManyParameterDictionaryInputEnvelope
    set?: ParameterWhereUniqueInput | ParameterWhereUniqueInput[]
    disconnect?: ParameterWhereUniqueInput | ParameterWhereUniqueInput[]
    delete?: ParameterWhereUniqueInput | ParameterWhereUniqueInput[]
    connect?: ParameterWhereUniqueInput | ParameterWhereUniqueInput[]
    update?: ParameterUpdateWithWhereUniqueWithoutParameterDictionaryInput | ParameterUpdateWithWhereUniqueWithoutParameterDictionaryInput[]
    updateMany?: ParameterUpdateManyWithWhereWithoutParameterDictionaryInput | ParameterUpdateManyWithWhereWithoutParameterDictionaryInput[]
    deleteMany?: ParameterScalarWhereInput | ParameterScalarWhereInput[]
  }

  export type ParameterUncheckedUpdateManyWithoutParameterDictionaryNestedInput = {
    create?: XOR<ParameterCreateWithoutParameterDictionaryInput, ParameterUncheckedCreateWithoutParameterDictionaryInput> | ParameterCreateWithoutParameterDictionaryInput[] | ParameterUncheckedCreateWithoutParameterDictionaryInput[]
    connectOrCreate?: ParameterCreateOrConnectWithoutParameterDictionaryInput | ParameterCreateOrConnectWithoutParameterDictionaryInput[]
    upsert?: ParameterUpsertWithWhereUniqueWithoutParameterDictionaryInput | ParameterUpsertWithWhereUniqueWithoutParameterDictionaryInput[]
    createMany?: ParameterCreateManyParameterDictionaryInputEnvelope
    set?: ParameterWhereUniqueInput | ParameterWhereUniqueInput[]
    disconnect?: ParameterWhereUniqueInput | ParameterWhereUniqueInput[]
    delete?: ParameterWhereUniqueInput | ParameterWhereUniqueInput[]
    connect?: ParameterWhereUniqueInput | ParameterWhereUniqueInput[]
    update?: ParameterUpdateWithWhereUniqueWithoutParameterDictionaryInput | ParameterUpdateWithWhereUniqueWithoutParameterDictionaryInput[]
    updateMany?: ParameterUpdateManyWithWhereWithoutParameterDictionaryInput | ParameterUpdateManyWithWhereWithoutParameterDictionaryInput[]
    deleteMany?: ParameterScalarWhereInput | ParameterScalarWhereInput[]
  }

  export type ResultCreateNestedOneWithoutResultSendsInput = {
    create?: XOR<ResultCreateWithoutResultSendsInput, ResultUncheckedCreateWithoutResultSendsInput>
    connectOrCreate?: ResultCreateOrConnectWithoutResultSendsInput
    connect?: ResultWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutResultSendsInput = {
    create?: XOR<UserCreateWithoutResultSendsInput, UserUncheckedCreateWithoutResultSendsInput>
    connectOrCreate?: UserCreateOrConnectWithoutResultSendsInput
    connect?: UserWhereUniqueInput
  }

  export type ResultUpdateOneWithoutResultSendsNestedInput = {
    create?: XOR<ResultCreateWithoutResultSendsInput, ResultUncheckedCreateWithoutResultSendsInput>
    connectOrCreate?: ResultCreateOrConnectWithoutResultSendsInput
    upsert?: ResultUpsertWithoutResultSendsInput
    disconnect?: ResultWhereInput | boolean
    delete?: ResultWhereInput | boolean
    connect?: ResultWhereUniqueInput
    update?: XOR<XOR<ResultUpdateToOneWithWhereWithoutResultSendsInput, ResultUpdateWithoutResultSendsInput>, ResultUncheckedUpdateWithoutResultSendsInput>
  }

  export type UserUpdateOneWithoutResultSendsNestedInput = {
    create?: XOR<UserCreateWithoutResultSendsInput, UserUncheckedCreateWithoutResultSendsInput>
    connectOrCreate?: UserCreateOrConnectWithoutResultSendsInput
    upsert?: UserUpsertWithoutResultSendsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutResultSendsInput, UserUpdateWithoutResultSendsInput>, UserUncheckedUpdateWithoutResultSendsInput>
  }

  export type ParameterDictionaryCreateNestedManyWithoutSystemParameterInput = {
    create?: XOR<ParameterDictionaryCreateWithoutSystemParameterInput, ParameterDictionaryUncheckedCreateWithoutSystemParameterInput> | ParameterDictionaryCreateWithoutSystemParameterInput[] | ParameterDictionaryUncheckedCreateWithoutSystemParameterInput[]
    connectOrCreate?: ParameterDictionaryCreateOrConnectWithoutSystemParameterInput | ParameterDictionaryCreateOrConnectWithoutSystemParameterInput[]
    createMany?: ParameterDictionaryCreateManySystemParameterInputEnvelope
    connect?: ParameterDictionaryWhereUniqueInput | ParameterDictionaryWhereUniqueInput[]
  }

  export type ParameterDictionaryUncheckedCreateNestedManyWithoutSystemParameterInput = {
    create?: XOR<ParameterDictionaryCreateWithoutSystemParameterInput, ParameterDictionaryUncheckedCreateWithoutSystemParameterInput> | ParameterDictionaryCreateWithoutSystemParameterInput[] | ParameterDictionaryUncheckedCreateWithoutSystemParameterInput[]
    connectOrCreate?: ParameterDictionaryCreateOrConnectWithoutSystemParameterInput | ParameterDictionaryCreateOrConnectWithoutSystemParameterInput[]
    createMany?: ParameterDictionaryCreateManySystemParameterInputEnvelope
    connect?: ParameterDictionaryWhereUniqueInput | ParameterDictionaryWhereUniqueInput[]
  }

  export type ParameterDictionaryUpdateManyWithoutSystemParameterNestedInput = {
    create?: XOR<ParameterDictionaryCreateWithoutSystemParameterInput, ParameterDictionaryUncheckedCreateWithoutSystemParameterInput> | ParameterDictionaryCreateWithoutSystemParameterInput[] | ParameterDictionaryUncheckedCreateWithoutSystemParameterInput[]
    connectOrCreate?: ParameterDictionaryCreateOrConnectWithoutSystemParameterInput | ParameterDictionaryCreateOrConnectWithoutSystemParameterInput[]
    upsert?: ParameterDictionaryUpsertWithWhereUniqueWithoutSystemParameterInput | ParameterDictionaryUpsertWithWhereUniqueWithoutSystemParameterInput[]
    createMany?: ParameterDictionaryCreateManySystemParameterInputEnvelope
    set?: ParameterDictionaryWhereUniqueInput | ParameterDictionaryWhereUniqueInput[]
    disconnect?: ParameterDictionaryWhereUniqueInput | ParameterDictionaryWhereUniqueInput[]
    delete?: ParameterDictionaryWhereUniqueInput | ParameterDictionaryWhereUniqueInput[]
    connect?: ParameterDictionaryWhereUniqueInput | ParameterDictionaryWhereUniqueInput[]
    update?: ParameterDictionaryUpdateWithWhereUniqueWithoutSystemParameterInput | ParameterDictionaryUpdateWithWhereUniqueWithoutSystemParameterInput[]
    updateMany?: ParameterDictionaryUpdateManyWithWhereWithoutSystemParameterInput | ParameterDictionaryUpdateManyWithWhereWithoutSystemParameterInput[]
    deleteMany?: ParameterDictionaryScalarWhereInput | ParameterDictionaryScalarWhereInput[]
  }

  export type ParameterDictionaryUncheckedUpdateManyWithoutSystemParameterNestedInput = {
    create?: XOR<ParameterDictionaryCreateWithoutSystemParameterInput, ParameterDictionaryUncheckedCreateWithoutSystemParameterInput> | ParameterDictionaryCreateWithoutSystemParameterInput[] | ParameterDictionaryUncheckedCreateWithoutSystemParameterInput[]
    connectOrCreate?: ParameterDictionaryCreateOrConnectWithoutSystemParameterInput | ParameterDictionaryCreateOrConnectWithoutSystemParameterInput[]
    upsert?: ParameterDictionaryUpsertWithWhereUniqueWithoutSystemParameterInput | ParameterDictionaryUpsertWithWhereUniqueWithoutSystemParameterInput[]
    createMany?: ParameterDictionaryCreateManySystemParameterInputEnvelope
    set?: ParameterDictionaryWhereUniqueInput | ParameterDictionaryWhereUniqueInput[]
    disconnect?: ParameterDictionaryWhereUniqueInput | ParameterDictionaryWhereUniqueInput[]
    delete?: ParameterDictionaryWhereUniqueInput | ParameterDictionaryWhereUniqueInput[]
    connect?: ParameterDictionaryWhereUniqueInput | ParameterDictionaryWhereUniqueInput[]
    update?: ParameterDictionaryUpdateWithWhereUniqueWithoutSystemParameterInput | ParameterDictionaryUpdateWithWhereUniqueWithoutSystemParameterInput[]
    updateMany?: ParameterDictionaryUpdateManyWithWhereWithoutSystemParameterInput | ParameterDictionaryUpdateManyWithWhereWithoutSystemParameterInput[]
    deleteMany?: ParameterDictionaryScalarWhereInput | ParameterDictionaryScalarWhereInput[]
  }

  export type ResultSendCreateNestedManyWithoutUserInput = {
    create?: XOR<ResultSendCreateWithoutUserInput, ResultSendUncheckedCreateWithoutUserInput> | ResultSendCreateWithoutUserInput[] | ResultSendUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResultSendCreateOrConnectWithoutUserInput | ResultSendCreateOrConnectWithoutUserInput[]
    createMany?: ResultSendCreateManyUserInputEnvelope
    connect?: ResultSendWhereUniqueInput | ResultSendWhereUniqueInput[]
  }

  export type ResultCreateNestedManyWithoutUserInput = {
    create?: XOR<ResultCreateWithoutUserInput, ResultUncheckedCreateWithoutUserInput> | ResultCreateWithoutUserInput[] | ResultUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResultCreateOrConnectWithoutUserInput | ResultCreateOrConnectWithoutUserInput[]
    createMany?: ResultCreateManyUserInputEnvelope
    connect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
  }

  export type ResultSendUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ResultSendCreateWithoutUserInput, ResultSendUncheckedCreateWithoutUserInput> | ResultSendCreateWithoutUserInput[] | ResultSendUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResultSendCreateOrConnectWithoutUserInput | ResultSendCreateOrConnectWithoutUserInput[]
    createMany?: ResultSendCreateManyUserInputEnvelope
    connect?: ResultSendWhereUniqueInput | ResultSendWhereUniqueInput[]
  }

  export type ResultUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ResultCreateWithoutUserInput, ResultUncheckedCreateWithoutUserInput> | ResultCreateWithoutUserInput[] | ResultUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResultCreateOrConnectWithoutUserInput | ResultCreateOrConnectWithoutUserInput[]
    createMany?: ResultCreateManyUserInputEnvelope
    connect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
  }

  export type ResultSendUpdateManyWithoutUserNestedInput = {
    create?: XOR<ResultSendCreateWithoutUserInput, ResultSendUncheckedCreateWithoutUserInput> | ResultSendCreateWithoutUserInput[] | ResultSendUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResultSendCreateOrConnectWithoutUserInput | ResultSendCreateOrConnectWithoutUserInput[]
    upsert?: ResultSendUpsertWithWhereUniqueWithoutUserInput | ResultSendUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ResultSendCreateManyUserInputEnvelope
    set?: ResultSendWhereUniqueInput | ResultSendWhereUniqueInput[]
    disconnect?: ResultSendWhereUniqueInput | ResultSendWhereUniqueInput[]
    delete?: ResultSendWhereUniqueInput | ResultSendWhereUniqueInput[]
    connect?: ResultSendWhereUniqueInput | ResultSendWhereUniqueInput[]
    update?: ResultSendUpdateWithWhereUniqueWithoutUserInput | ResultSendUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ResultSendUpdateManyWithWhereWithoutUserInput | ResultSendUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ResultSendScalarWhereInput | ResultSendScalarWhereInput[]
  }

  export type ResultUpdateManyWithoutUserNestedInput = {
    create?: XOR<ResultCreateWithoutUserInput, ResultUncheckedCreateWithoutUserInput> | ResultCreateWithoutUserInput[] | ResultUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResultCreateOrConnectWithoutUserInput | ResultCreateOrConnectWithoutUserInput[]
    upsert?: ResultUpsertWithWhereUniqueWithoutUserInput | ResultUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ResultCreateManyUserInputEnvelope
    set?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    disconnect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    delete?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    connect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    update?: ResultUpdateWithWhereUniqueWithoutUserInput | ResultUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ResultUpdateManyWithWhereWithoutUserInput | ResultUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ResultScalarWhereInput | ResultScalarWhereInput[]
  }

  export type ResultSendUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ResultSendCreateWithoutUserInput, ResultSendUncheckedCreateWithoutUserInput> | ResultSendCreateWithoutUserInput[] | ResultSendUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResultSendCreateOrConnectWithoutUserInput | ResultSendCreateOrConnectWithoutUserInput[]
    upsert?: ResultSendUpsertWithWhereUniqueWithoutUserInput | ResultSendUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ResultSendCreateManyUserInputEnvelope
    set?: ResultSendWhereUniqueInput | ResultSendWhereUniqueInput[]
    disconnect?: ResultSendWhereUniqueInput | ResultSendWhereUniqueInput[]
    delete?: ResultSendWhereUniqueInput | ResultSendWhereUniqueInput[]
    connect?: ResultSendWhereUniqueInput | ResultSendWhereUniqueInput[]
    update?: ResultSendUpdateWithWhereUniqueWithoutUserInput | ResultSendUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ResultSendUpdateManyWithWhereWithoutUserInput | ResultSendUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ResultSendScalarWhereInput | ResultSendScalarWhereInput[]
  }

  export type ResultUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ResultCreateWithoutUserInput, ResultUncheckedCreateWithoutUserInput> | ResultCreateWithoutUserInput[] | ResultUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResultCreateOrConnectWithoutUserInput | ResultCreateOrConnectWithoutUserInput[]
    upsert?: ResultUpsertWithWhereUniqueWithoutUserInput | ResultUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ResultCreateManyUserInputEnvelope
    set?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    disconnect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    delete?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    connect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    update?: ResultUpdateWithWhereUniqueWithoutUserInput | ResultUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ResultUpdateManyWithWhereWithoutUserInput | ResultUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ResultScalarWhereInput | ResultScalarWhereInput[]
  }

  export type EquipmentCreateNestedOneWithoutEquipmentConfigurationInput = {
    create?: XOR<EquipmentCreateWithoutEquipmentConfigurationInput, EquipmentUncheckedCreateWithoutEquipmentConfigurationInput>
    connectOrCreate?: EquipmentCreateOrConnectWithoutEquipmentConfigurationInput
    connect?: EquipmentWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EquipmentUpdateOneRequiredWithoutEquipmentConfigurationNestedInput = {
    create?: XOR<EquipmentCreateWithoutEquipmentConfigurationInput, EquipmentUncheckedCreateWithoutEquipmentConfigurationInput>
    connectOrCreate?: EquipmentCreateOrConnectWithoutEquipmentConfigurationInput
    upsert?: EquipmentUpsertWithoutEquipmentConfigurationInput
    connect?: EquipmentWhereUniqueInput
    update?: XOR<XOR<EquipmentUpdateToOneWithWhereWithoutEquipmentConfigurationInput, EquipmentUpdateWithoutEquipmentConfigurationInput>, EquipmentUncheckedUpdateWithoutEquipmentConfigurationInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EquipmentProfileCreateWithoutCommunicationProfileInput = {
    id: bigint | number
    name?: string | null
    active?: boolean | null
    communication_type?: string | null
    equipments?: EquipmentCreateNestedManyWithoutEquipmentProfileInput
  }

  export type EquipmentProfileUncheckedCreateWithoutCommunicationProfileInput = {
    id: bigint | number
    name?: string | null
    active?: boolean | null
    communication_type?: string | null
    equipments?: EquipmentUncheckedCreateNestedManyWithoutEquipmentProfileInput
  }

  export type EquipmentProfileCreateOrConnectWithoutCommunicationProfileInput = {
    where: EquipmentProfileWhereUniqueInput
    create: XOR<EquipmentProfileCreateWithoutCommunicationProfileInput, EquipmentProfileUncheckedCreateWithoutCommunicationProfileInput>
  }

  export type EquipmentProfileCreateManyCommunicationProfileInputEnvelope = {
    data: EquipmentProfileCreateManyCommunicationProfileInput | EquipmentProfileCreateManyCommunicationProfileInput[]
    skipDuplicates?: boolean
  }

  export type EquipmentProfileUpsertWithWhereUniqueWithoutCommunicationProfileInput = {
    where: EquipmentProfileWhereUniqueInput
    update: XOR<EquipmentProfileUpdateWithoutCommunicationProfileInput, EquipmentProfileUncheckedUpdateWithoutCommunicationProfileInput>
    create: XOR<EquipmentProfileCreateWithoutCommunicationProfileInput, EquipmentProfileUncheckedCreateWithoutCommunicationProfileInput>
  }

  export type EquipmentProfileUpdateWithWhereUniqueWithoutCommunicationProfileInput = {
    where: EquipmentProfileWhereUniqueInput
    data: XOR<EquipmentProfileUpdateWithoutCommunicationProfileInput, EquipmentProfileUncheckedUpdateWithoutCommunicationProfileInput>
  }

  export type EquipmentProfileUpdateManyWithWhereWithoutCommunicationProfileInput = {
    where: EquipmentProfileScalarWhereInput
    data: XOR<EquipmentProfileUpdateManyMutationInput, EquipmentProfileUncheckedUpdateManyWithoutCommunicationProfileInput>
  }

  export type EquipmentProfileScalarWhereInput = {
    AND?: EquipmentProfileScalarWhereInput | EquipmentProfileScalarWhereInput[]
    OR?: EquipmentProfileScalarWhereInput[]
    NOT?: EquipmentProfileScalarWhereInput | EquipmentProfileScalarWhereInput[]
    id?: BigIntFilter<"EquipmentProfile"> | bigint | number
    communication_profile?: StringNullableFilter<"EquipmentProfile"> | string | null
    name?: StringNullableFilter<"EquipmentProfile"> | string | null
    active?: BoolNullableFilter<"EquipmentProfile"> | boolean | null
    communication_type?: StringNullableFilter<"EquipmentProfile"> | string | null
  }

  export type EquipmentCreateWithoutDirectoryHistorialsInput = {
    id: bigint | number
    name?: string | null
    created_at?: Date | string | null
    modified_at?: Date | string | null
    last_connection?: Date | string | null
    connection_status?: string | null
    active?: boolean | null
    equipmentProfile?: EquipmentProfileCreateNestedOneWithoutEquipmentsInput
    parameters?: ParameterCreateNestedManyWithoutEquipmentInput
    EquipmentConfiguration?: EquipmentConfigurationCreateNestedManyWithoutEquipmentInput
  }

  export type EquipmentUncheckedCreateWithoutDirectoryHistorialsInput = {
    id: bigint | number
    profile_id?: bigint | number | null
    name?: string | null
    created_at?: Date | string | null
    modified_at?: Date | string | null
    last_connection?: Date | string | null
    connection_status?: string | null
    active?: boolean | null
    parameters?: ParameterUncheckedCreateNestedManyWithoutEquipmentInput
    EquipmentConfiguration?: EquipmentConfigurationUncheckedCreateNestedManyWithoutEquipmentInput
  }

  export type EquipmentCreateOrConnectWithoutDirectoryHistorialsInput = {
    where: EquipmentWhereUniqueInput
    create: XOR<EquipmentCreateWithoutDirectoryHistorialsInput, EquipmentUncheckedCreateWithoutDirectoryHistorialsInput>
  }

  export type EquipmentUpsertWithoutDirectoryHistorialsInput = {
    update: XOR<EquipmentUpdateWithoutDirectoryHistorialsInput, EquipmentUncheckedUpdateWithoutDirectoryHistorialsInput>
    create: XOR<EquipmentCreateWithoutDirectoryHistorialsInput, EquipmentUncheckedCreateWithoutDirectoryHistorialsInput>
    where?: EquipmentWhereInput
  }

  export type EquipmentUpdateToOneWithWhereWithoutDirectoryHistorialsInput = {
    where?: EquipmentWhereInput
    data: XOR<EquipmentUpdateWithoutDirectoryHistorialsInput, EquipmentUncheckedUpdateWithoutDirectoryHistorialsInput>
  }

  export type EquipmentUpdateWithoutDirectoryHistorialsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_connection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    connection_status?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    equipmentProfile?: EquipmentProfileUpdateOneWithoutEquipmentsNestedInput
    parameters?: ParameterUpdateManyWithoutEquipmentNestedInput
    EquipmentConfiguration?: EquipmentConfigurationUpdateManyWithoutEquipmentNestedInput
  }

  export type EquipmentUncheckedUpdateWithoutDirectoryHistorialsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    profile_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_connection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    connection_status?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    parameters?: ParameterUncheckedUpdateManyWithoutEquipmentNestedInput
    EquipmentConfiguration?: EquipmentConfigurationUncheckedUpdateManyWithoutEquipmentNestedInput
  }

  export type CommunicationProfilesCreateWithoutEquipmentProfilesInput = {
    id: string
    checksum_regex?: string | null
    type?: string | null
  }

  export type CommunicationProfilesUncheckedCreateWithoutEquipmentProfilesInput = {
    id: string
    checksum_regex?: string | null
    type?: string | null
  }

  export type CommunicationProfilesCreateOrConnectWithoutEquipmentProfilesInput = {
    where: CommunicationProfilesWhereUniqueInput
    create: XOR<CommunicationProfilesCreateWithoutEquipmentProfilesInput, CommunicationProfilesUncheckedCreateWithoutEquipmentProfilesInput>
  }

  export type EquipmentCreateWithoutEquipmentProfileInput = {
    id: bigint | number
    name?: string | null
    created_at?: Date | string | null
    modified_at?: Date | string | null
    last_connection?: Date | string | null
    connection_status?: string | null
    active?: boolean | null
    directoryHistorials?: DirectoryHistorialCreateNestedManyWithoutEquipmentInput
    parameters?: ParameterCreateNestedManyWithoutEquipmentInput
    EquipmentConfiguration?: EquipmentConfigurationCreateNestedManyWithoutEquipmentInput
  }

  export type EquipmentUncheckedCreateWithoutEquipmentProfileInput = {
    id: bigint | number
    name?: string | null
    created_at?: Date | string | null
    modified_at?: Date | string | null
    last_connection?: Date | string | null
    connection_status?: string | null
    active?: boolean | null
    directoryHistorials?: DirectoryHistorialUncheckedCreateNestedManyWithoutEquipmentInput
    parameters?: ParameterUncheckedCreateNestedManyWithoutEquipmentInput
    EquipmentConfiguration?: EquipmentConfigurationUncheckedCreateNestedManyWithoutEquipmentInput
  }

  export type EquipmentCreateOrConnectWithoutEquipmentProfileInput = {
    where: EquipmentWhereUniqueInput
    create: XOR<EquipmentCreateWithoutEquipmentProfileInput, EquipmentUncheckedCreateWithoutEquipmentProfileInput>
  }

  export type EquipmentCreateManyEquipmentProfileInputEnvelope = {
    data: EquipmentCreateManyEquipmentProfileInput | EquipmentCreateManyEquipmentProfileInput[]
    skipDuplicates?: boolean
  }

  export type CommunicationProfilesUpsertWithoutEquipmentProfilesInput = {
    update: XOR<CommunicationProfilesUpdateWithoutEquipmentProfilesInput, CommunicationProfilesUncheckedUpdateWithoutEquipmentProfilesInput>
    create: XOR<CommunicationProfilesCreateWithoutEquipmentProfilesInput, CommunicationProfilesUncheckedCreateWithoutEquipmentProfilesInput>
    where?: CommunicationProfilesWhereInput
  }

  export type CommunicationProfilesUpdateToOneWithWhereWithoutEquipmentProfilesInput = {
    where?: CommunicationProfilesWhereInput
    data: XOR<CommunicationProfilesUpdateWithoutEquipmentProfilesInput, CommunicationProfilesUncheckedUpdateWithoutEquipmentProfilesInput>
  }

  export type CommunicationProfilesUpdateWithoutEquipmentProfilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    checksum_regex?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommunicationProfilesUncheckedUpdateWithoutEquipmentProfilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    checksum_regex?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EquipmentUpsertWithWhereUniqueWithoutEquipmentProfileInput = {
    where: EquipmentWhereUniqueInput
    update: XOR<EquipmentUpdateWithoutEquipmentProfileInput, EquipmentUncheckedUpdateWithoutEquipmentProfileInput>
    create: XOR<EquipmentCreateWithoutEquipmentProfileInput, EquipmentUncheckedCreateWithoutEquipmentProfileInput>
  }

  export type EquipmentUpdateWithWhereUniqueWithoutEquipmentProfileInput = {
    where: EquipmentWhereUniqueInput
    data: XOR<EquipmentUpdateWithoutEquipmentProfileInput, EquipmentUncheckedUpdateWithoutEquipmentProfileInput>
  }

  export type EquipmentUpdateManyWithWhereWithoutEquipmentProfileInput = {
    where: EquipmentScalarWhereInput
    data: XOR<EquipmentUpdateManyMutationInput, EquipmentUncheckedUpdateManyWithoutEquipmentProfileInput>
  }

  export type EquipmentScalarWhereInput = {
    AND?: EquipmentScalarWhereInput | EquipmentScalarWhereInput[]
    OR?: EquipmentScalarWhereInput[]
    NOT?: EquipmentScalarWhereInput | EquipmentScalarWhereInput[]
    id?: BigIntFilter<"Equipment"> | bigint | number
    profile_id?: BigIntNullableFilter<"Equipment"> | bigint | number | null
    name?: StringNullableFilter<"Equipment"> | string | null
    created_at?: DateTimeNullableFilter<"Equipment"> | Date | string | null
    modified_at?: DateTimeNullableFilter<"Equipment"> | Date | string | null
    last_connection?: DateTimeNullableFilter<"Equipment"> | Date | string | null
    connection_status?: StringNullableFilter<"Equipment"> | string | null
    active?: BoolNullableFilter<"Equipment"> | boolean | null
  }

  export type DirectoryHistorialCreateWithoutEquipmentInput = {
    id: bigint | number
    filename?: string | null
    filepath?: string | null
    modified_at?: bigint | number | null
  }

  export type DirectoryHistorialUncheckedCreateWithoutEquipmentInput = {
    id: bigint | number
    filename?: string | null
    filepath?: string | null
    modified_at?: bigint | number | null
  }

  export type DirectoryHistorialCreateOrConnectWithoutEquipmentInput = {
    where: DirectoryHistorialWhereUniqueInput
    create: XOR<DirectoryHistorialCreateWithoutEquipmentInput, DirectoryHistorialUncheckedCreateWithoutEquipmentInput>
  }

  export type DirectoryHistorialCreateManyEquipmentInputEnvelope = {
    data: DirectoryHistorialCreateManyEquipmentInput | DirectoryHistorialCreateManyEquipmentInput[]
    skipDuplicates?: boolean
  }

  export type EquipmentProfileCreateWithoutEquipmentsInput = {
    id: bigint | number
    name?: string | null
    active?: boolean | null
    communication_type?: string | null
    communicationProfile?: CommunicationProfilesCreateNestedOneWithoutEquipmentProfilesInput
  }

  export type EquipmentProfileUncheckedCreateWithoutEquipmentsInput = {
    id: bigint | number
    communication_profile?: string | null
    name?: string | null
    active?: boolean | null
    communication_type?: string | null
  }

  export type EquipmentProfileCreateOrConnectWithoutEquipmentsInput = {
    where: EquipmentProfileWhereUniqueInput
    create: XOR<EquipmentProfileCreateWithoutEquipmentsInput, EquipmentProfileUncheckedCreateWithoutEquipmentsInput>
  }

  export type ParameterCreateWithoutEquipmentInput = {
    id: bigint | number
    description?: string | null
    value?: string | null
    unit_measurement?: string | null
    max_range?: string | null
    min_range?: string | null
    created_at?: Date | string | null
    active?: boolean | null
    parameterDictionary?: ParameterDictionaryCreateNestedOneWithoutParametersInput
    result?: ResultCreateNestedOneWithoutParametersInput
  }

  export type ParameterUncheckedCreateWithoutEquipmentInput = {
    id: bigint | number
    result_folio?: string | null
    parameter_dictionary_id?: bigint | number | null
    description?: string | null
    value?: string | null
    unit_measurement?: string | null
    max_range?: string | null
    min_range?: string | null
    created_at?: Date | string | null
    active?: boolean | null
  }

  export type ParameterCreateOrConnectWithoutEquipmentInput = {
    where: ParameterWhereUniqueInput
    create: XOR<ParameterCreateWithoutEquipmentInput, ParameterUncheckedCreateWithoutEquipmentInput>
  }

  export type ParameterCreateManyEquipmentInputEnvelope = {
    data: ParameterCreateManyEquipmentInput | ParameterCreateManyEquipmentInput[]
    skipDuplicates?: boolean
  }

  export type EquipmentConfigurationCreateWithoutEquipmentInput = {
    port: string
    ip_address: string
    baud_rate: number
    mac_address: string
    remote_directory: string
  }

  export type EquipmentConfigurationUncheckedCreateWithoutEquipmentInput = {
    port: string
    ip_address: string
    baud_rate: number
    mac_address: string
    remote_directory: string
  }

  export type EquipmentConfigurationCreateOrConnectWithoutEquipmentInput = {
    where: EquipmentConfigurationWhereUniqueInput
    create: XOR<EquipmentConfigurationCreateWithoutEquipmentInput, EquipmentConfigurationUncheckedCreateWithoutEquipmentInput>
  }

  export type EquipmentConfigurationCreateManyEquipmentInputEnvelope = {
    data: EquipmentConfigurationCreateManyEquipmentInput | EquipmentConfigurationCreateManyEquipmentInput[]
    skipDuplicates?: boolean
  }

  export type DirectoryHistorialUpsertWithWhereUniqueWithoutEquipmentInput = {
    where: DirectoryHistorialWhereUniqueInput
    update: XOR<DirectoryHistorialUpdateWithoutEquipmentInput, DirectoryHistorialUncheckedUpdateWithoutEquipmentInput>
    create: XOR<DirectoryHistorialCreateWithoutEquipmentInput, DirectoryHistorialUncheckedCreateWithoutEquipmentInput>
  }

  export type DirectoryHistorialUpdateWithWhereUniqueWithoutEquipmentInput = {
    where: DirectoryHistorialWhereUniqueInput
    data: XOR<DirectoryHistorialUpdateWithoutEquipmentInput, DirectoryHistorialUncheckedUpdateWithoutEquipmentInput>
  }

  export type DirectoryHistorialUpdateManyWithWhereWithoutEquipmentInput = {
    where: DirectoryHistorialScalarWhereInput
    data: XOR<DirectoryHistorialUpdateManyMutationInput, DirectoryHistorialUncheckedUpdateManyWithoutEquipmentInput>
  }

  export type DirectoryHistorialScalarWhereInput = {
    AND?: DirectoryHistorialScalarWhereInput | DirectoryHistorialScalarWhereInput[]
    OR?: DirectoryHistorialScalarWhereInput[]
    NOT?: DirectoryHistorialScalarWhereInput | DirectoryHistorialScalarWhereInput[]
    id?: BigIntFilter<"DirectoryHistorial"> | bigint | number
    equipment_id?: BigIntNullableFilter<"DirectoryHistorial"> | bigint | number | null
    filename?: StringNullableFilter<"DirectoryHistorial"> | string | null
    filepath?: StringNullableFilter<"DirectoryHistorial"> | string | null
    modified_at?: BigIntNullableFilter<"DirectoryHistorial"> | bigint | number | null
  }

  export type EquipmentProfileUpsertWithoutEquipmentsInput = {
    update: XOR<EquipmentProfileUpdateWithoutEquipmentsInput, EquipmentProfileUncheckedUpdateWithoutEquipmentsInput>
    create: XOR<EquipmentProfileCreateWithoutEquipmentsInput, EquipmentProfileUncheckedCreateWithoutEquipmentsInput>
    where?: EquipmentProfileWhereInput
  }

  export type EquipmentProfileUpdateToOneWithWhereWithoutEquipmentsInput = {
    where?: EquipmentProfileWhereInput
    data: XOR<EquipmentProfileUpdateWithoutEquipmentsInput, EquipmentProfileUncheckedUpdateWithoutEquipmentsInput>
  }

  export type EquipmentProfileUpdateWithoutEquipmentsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    communication_type?: NullableStringFieldUpdateOperationsInput | string | null
    communicationProfile?: CommunicationProfilesUpdateOneWithoutEquipmentProfilesNestedInput
  }

  export type EquipmentProfileUncheckedUpdateWithoutEquipmentsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    communication_profile?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    communication_type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ParameterUpsertWithWhereUniqueWithoutEquipmentInput = {
    where: ParameterWhereUniqueInput
    update: XOR<ParameterUpdateWithoutEquipmentInput, ParameterUncheckedUpdateWithoutEquipmentInput>
    create: XOR<ParameterCreateWithoutEquipmentInput, ParameterUncheckedCreateWithoutEquipmentInput>
  }

  export type ParameterUpdateWithWhereUniqueWithoutEquipmentInput = {
    where: ParameterWhereUniqueInput
    data: XOR<ParameterUpdateWithoutEquipmentInput, ParameterUncheckedUpdateWithoutEquipmentInput>
  }

  export type ParameterUpdateManyWithWhereWithoutEquipmentInput = {
    where: ParameterScalarWhereInput
    data: XOR<ParameterUpdateManyMutationInput, ParameterUncheckedUpdateManyWithoutEquipmentInput>
  }

  export type ParameterScalarWhereInput = {
    AND?: ParameterScalarWhereInput | ParameterScalarWhereInput[]
    OR?: ParameterScalarWhereInput[]
    NOT?: ParameterScalarWhereInput | ParameterScalarWhereInput[]
    id?: BigIntFilter<"Parameter"> | bigint | number
    result_folio?: StringNullableFilter<"Parameter"> | string | null
    equipment_id?: BigIntNullableFilter<"Parameter"> | bigint | number | null
    parameter_dictionary_id?: BigIntNullableFilter<"Parameter"> | bigint | number | null
    description?: StringNullableFilter<"Parameter"> | string | null
    value?: StringNullableFilter<"Parameter"> | string | null
    unit_measurement?: StringNullableFilter<"Parameter"> | string | null
    max_range?: StringNullableFilter<"Parameter"> | string | null
    min_range?: StringNullableFilter<"Parameter"> | string | null
    created_at?: DateTimeNullableFilter<"Parameter"> | Date | string | null
    active?: BoolNullableFilter<"Parameter"> | boolean | null
  }

  export type EquipmentConfigurationUpsertWithWhereUniqueWithoutEquipmentInput = {
    where: EquipmentConfigurationWhereUniqueInput
    update: XOR<EquipmentConfigurationUpdateWithoutEquipmentInput, EquipmentConfigurationUncheckedUpdateWithoutEquipmentInput>
    create: XOR<EquipmentConfigurationCreateWithoutEquipmentInput, EquipmentConfigurationUncheckedCreateWithoutEquipmentInput>
  }

  export type EquipmentConfigurationUpdateWithWhereUniqueWithoutEquipmentInput = {
    where: EquipmentConfigurationWhereUniqueInput
    data: XOR<EquipmentConfigurationUpdateWithoutEquipmentInput, EquipmentConfigurationUncheckedUpdateWithoutEquipmentInput>
  }

  export type EquipmentConfigurationUpdateManyWithWhereWithoutEquipmentInput = {
    where: EquipmentConfigurationScalarWhereInput
    data: XOR<EquipmentConfigurationUpdateManyMutationInput, EquipmentConfigurationUncheckedUpdateManyWithoutEquipmentInput>
  }

  export type EquipmentConfigurationScalarWhereInput = {
    AND?: EquipmentConfigurationScalarWhereInput | EquipmentConfigurationScalarWhereInput[]
    OR?: EquipmentConfigurationScalarWhereInput[]
    NOT?: EquipmentConfigurationScalarWhereInput | EquipmentConfigurationScalarWhereInput[]
    equipment_id?: BigIntFilter<"EquipmentConfiguration"> | bigint | number
    port?: StringFilter<"EquipmentConfiguration"> | string
    ip_address?: StringFilter<"EquipmentConfiguration"> | string
    baud_rate?: IntFilter<"EquipmentConfiguration"> | number
    mac_address?: StringFilter<"EquipmentConfiguration"> | string
    remote_directory?: StringFilter<"EquipmentConfiguration"> | string
  }

  export type ResultCreateWithoutHistogramResultsInput = {
    folio: string
    sample_id?: string | null
    created_at?: Date | string | null
    last_modified_at?: Date | string | null
    active?: boolean | null
    parameters?: ParameterCreateNestedManyWithoutResultInput
    resultSends?: ResultSendCreateNestedManyWithoutResultInput
    user?: UserCreateNestedOneWithoutCreatedResultsInput
  }

  export type ResultUncheckedCreateWithoutHistogramResultsInput = {
    folio: string
    created_by?: bigint | number | null
    sample_id?: string | null
    created_at?: Date | string | null
    last_modified_at?: Date | string | null
    active?: boolean | null
    parameters?: ParameterUncheckedCreateNestedManyWithoutResultInput
    resultSends?: ResultSendUncheckedCreateNestedManyWithoutResultInput
  }

  export type ResultCreateOrConnectWithoutHistogramResultsInput = {
    where: ResultWhereUniqueInput
    create: XOR<ResultCreateWithoutHistogramResultsInput, ResultUncheckedCreateWithoutHistogramResultsInput>
  }

  export type ResultUpsertWithoutHistogramResultsInput = {
    update: XOR<ResultUpdateWithoutHistogramResultsInput, ResultUncheckedUpdateWithoutHistogramResultsInput>
    create: XOR<ResultCreateWithoutHistogramResultsInput, ResultUncheckedCreateWithoutHistogramResultsInput>
    where?: ResultWhereInput
  }

  export type ResultUpdateToOneWithWhereWithoutHistogramResultsInput = {
    where?: ResultWhereInput
    data: XOR<ResultUpdateWithoutHistogramResultsInput, ResultUncheckedUpdateWithoutHistogramResultsInput>
  }

  export type ResultUpdateWithoutHistogramResultsInput = {
    folio?: StringFieldUpdateOperationsInput | string
    sample_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    parameters?: ParameterUpdateManyWithoutResultNestedInput
    resultSends?: ResultSendUpdateManyWithoutResultNestedInput
    user?: UserUpdateOneWithoutCreatedResultsNestedInput
  }

  export type ResultUncheckedUpdateWithoutHistogramResultsInput = {
    folio?: StringFieldUpdateOperationsInput | string
    created_by?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    sample_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    parameters?: ParameterUncheckedUpdateManyWithoutResultNestedInput
    resultSends?: ResultSendUncheckedUpdateManyWithoutResultNestedInput
  }

  export type EquipmentCreateWithoutParametersInput = {
    id: bigint | number
    name?: string | null
    created_at?: Date | string | null
    modified_at?: Date | string | null
    last_connection?: Date | string | null
    connection_status?: string | null
    active?: boolean | null
    directoryHistorials?: DirectoryHistorialCreateNestedManyWithoutEquipmentInput
    equipmentProfile?: EquipmentProfileCreateNestedOneWithoutEquipmentsInput
    EquipmentConfiguration?: EquipmentConfigurationCreateNestedManyWithoutEquipmentInput
  }

  export type EquipmentUncheckedCreateWithoutParametersInput = {
    id: bigint | number
    profile_id?: bigint | number | null
    name?: string | null
    created_at?: Date | string | null
    modified_at?: Date | string | null
    last_connection?: Date | string | null
    connection_status?: string | null
    active?: boolean | null
    directoryHistorials?: DirectoryHistorialUncheckedCreateNestedManyWithoutEquipmentInput
    EquipmentConfiguration?: EquipmentConfigurationUncheckedCreateNestedManyWithoutEquipmentInput
  }

  export type EquipmentCreateOrConnectWithoutParametersInput = {
    where: EquipmentWhereUniqueInput
    create: XOR<EquipmentCreateWithoutParametersInput, EquipmentUncheckedCreateWithoutParametersInput>
  }

  export type ParameterDictionaryCreateWithoutParametersInput = {
    id: bigint | number
    parameter_description?: string | null
    systemParameter?: SystemParameterCreateNestedOneWithoutParameterDictionariesInput
  }

  export type ParameterDictionaryUncheckedCreateWithoutParametersInput = {
    id: bigint | number
    system_parameter_id?: bigint | number | null
    parameter_description?: string | null
  }

  export type ParameterDictionaryCreateOrConnectWithoutParametersInput = {
    where: ParameterDictionaryWhereUniqueInput
    create: XOR<ParameterDictionaryCreateWithoutParametersInput, ParameterDictionaryUncheckedCreateWithoutParametersInput>
  }

  export type ResultCreateWithoutParametersInput = {
    folio: string
    sample_id?: string | null
    created_at?: Date | string | null
    last_modified_at?: Date | string | null
    active?: boolean | null
    histogramResults?: HistogramResultCreateNestedManyWithoutResultInput
    resultSends?: ResultSendCreateNestedManyWithoutResultInput
    user?: UserCreateNestedOneWithoutCreatedResultsInput
  }

  export type ResultUncheckedCreateWithoutParametersInput = {
    folio: string
    created_by?: bigint | number | null
    sample_id?: string | null
    created_at?: Date | string | null
    last_modified_at?: Date | string | null
    active?: boolean | null
    histogramResults?: HistogramResultUncheckedCreateNestedManyWithoutResultInput
    resultSends?: ResultSendUncheckedCreateNestedManyWithoutResultInput
  }

  export type ResultCreateOrConnectWithoutParametersInput = {
    where: ResultWhereUniqueInput
    create: XOR<ResultCreateWithoutParametersInput, ResultUncheckedCreateWithoutParametersInput>
  }

  export type EquipmentUpsertWithoutParametersInput = {
    update: XOR<EquipmentUpdateWithoutParametersInput, EquipmentUncheckedUpdateWithoutParametersInput>
    create: XOR<EquipmentCreateWithoutParametersInput, EquipmentUncheckedCreateWithoutParametersInput>
    where?: EquipmentWhereInput
  }

  export type EquipmentUpdateToOneWithWhereWithoutParametersInput = {
    where?: EquipmentWhereInput
    data: XOR<EquipmentUpdateWithoutParametersInput, EquipmentUncheckedUpdateWithoutParametersInput>
  }

  export type EquipmentUpdateWithoutParametersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_connection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    connection_status?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    directoryHistorials?: DirectoryHistorialUpdateManyWithoutEquipmentNestedInput
    equipmentProfile?: EquipmentProfileUpdateOneWithoutEquipmentsNestedInput
    EquipmentConfiguration?: EquipmentConfigurationUpdateManyWithoutEquipmentNestedInput
  }

  export type EquipmentUncheckedUpdateWithoutParametersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    profile_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_connection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    connection_status?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    directoryHistorials?: DirectoryHistorialUncheckedUpdateManyWithoutEquipmentNestedInput
    EquipmentConfiguration?: EquipmentConfigurationUncheckedUpdateManyWithoutEquipmentNestedInput
  }

  export type ParameterDictionaryUpsertWithoutParametersInput = {
    update: XOR<ParameterDictionaryUpdateWithoutParametersInput, ParameterDictionaryUncheckedUpdateWithoutParametersInput>
    create: XOR<ParameterDictionaryCreateWithoutParametersInput, ParameterDictionaryUncheckedCreateWithoutParametersInput>
    where?: ParameterDictionaryWhereInput
  }

  export type ParameterDictionaryUpdateToOneWithWhereWithoutParametersInput = {
    where?: ParameterDictionaryWhereInput
    data: XOR<ParameterDictionaryUpdateWithoutParametersInput, ParameterDictionaryUncheckedUpdateWithoutParametersInput>
  }

  export type ParameterDictionaryUpdateWithoutParametersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    parameter_description?: NullableStringFieldUpdateOperationsInput | string | null
    systemParameter?: SystemParameterUpdateOneWithoutParameterDictionariesNestedInput
  }

  export type ParameterDictionaryUncheckedUpdateWithoutParametersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    system_parameter_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    parameter_description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ResultUpsertWithoutParametersInput = {
    update: XOR<ResultUpdateWithoutParametersInput, ResultUncheckedUpdateWithoutParametersInput>
    create: XOR<ResultCreateWithoutParametersInput, ResultUncheckedCreateWithoutParametersInput>
    where?: ResultWhereInput
  }

  export type ResultUpdateToOneWithWhereWithoutParametersInput = {
    where?: ResultWhereInput
    data: XOR<ResultUpdateWithoutParametersInput, ResultUncheckedUpdateWithoutParametersInput>
  }

  export type ResultUpdateWithoutParametersInput = {
    folio?: StringFieldUpdateOperationsInput | string
    sample_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    histogramResults?: HistogramResultUpdateManyWithoutResultNestedInput
    resultSends?: ResultSendUpdateManyWithoutResultNestedInput
    user?: UserUpdateOneWithoutCreatedResultsNestedInput
  }

  export type ResultUncheckedUpdateWithoutParametersInput = {
    folio?: StringFieldUpdateOperationsInput | string
    created_by?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    sample_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    histogramResults?: HistogramResultUncheckedUpdateManyWithoutResultNestedInput
    resultSends?: ResultSendUncheckedUpdateManyWithoutResultNestedInput
  }

  export type HistogramResultCreateWithoutResultInput = {
    id: bigint | number
    description?: string | null
    value?: string | null
    created_at?: Date | string | null
    active?: boolean | null
  }

  export type HistogramResultUncheckedCreateWithoutResultInput = {
    id: bigint | number
    description?: string | null
    value?: string | null
    created_at?: Date | string | null
    active?: boolean | null
  }

  export type HistogramResultCreateOrConnectWithoutResultInput = {
    where: HistogramResultWhereUniqueInput
    create: XOR<HistogramResultCreateWithoutResultInput, HistogramResultUncheckedCreateWithoutResultInput>
  }

  export type HistogramResultCreateManyResultInputEnvelope = {
    data: HistogramResultCreateManyResultInput | HistogramResultCreateManyResultInput[]
    skipDuplicates?: boolean
  }

  export type ParameterCreateWithoutResultInput = {
    id: bigint | number
    description?: string | null
    value?: string | null
    unit_measurement?: string | null
    max_range?: string | null
    min_range?: string | null
    created_at?: Date | string | null
    active?: boolean | null
    equipment?: EquipmentCreateNestedOneWithoutParametersInput
    parameterDictionary?: ParameterDictionaryCreateNestedOneWithoutParametersInput
  }

  export type ParameterUncheckedCreateWithoutResultInput = {
    id: bigint | number
    equipment_id?: bigint | number | null
    parameter_dictionary_id?: bigint | number | null
    description?: string | null
    value?: string | null
    unit_measurement?: string | null
    max_range?: string | null
    min_range?: string | null
    created_at?: Date | string | null
    active?: boolean | null
  }

  export type ParameterCreateOrConnectWithoutResultInput = {
    where: ParameterWhereUniqueInput
    create: XOR<ParameterCreateWithoutResultInput, ParameterUncheckedCreateWithoutResultInput>
  }

  export type ParameterCreateManyResultInputEnvelope = {
    data: ParameterCreateManyResultInput | ParameterCreateManyResultInput[]
    skipDuplicates?: boolean
  }

  export type ResultSendCreateWithoutResultInput = {
    id: bigint | number
    send_at?: Date | string | null
    status?: string | null
    payload?: NullableJsonNullValueInput | InputJsonValue
    response?: NullableJsonNullValueInput | InputJsonValue
    user?: UserCreateNestedOneWithoutResultSendsInput
  }

  export type ResultSendUncheckedCreateWithoutResultInput = {
    id: bigint | number
    send_by?: bigint | number | null
    send_at?: Date | string | null
    status?: string | null
    payload?: NullableJsonNullValueInput | InputJsonValue
    response?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ResultSendCreateOrConnectWithoutResultInput = {
    where: ResultSendWhereUniqueInput
    create: XOR<ResultSendCreateWithoutResultInput, ResultSendUncheckedCreateWithoutResultInput>
  }

  export type ResultSendCreateManyResultInputEnvelope = {
    data: ResultSendCreateManyResultInput | ResultSendCreateManyResultInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutCreatedResultsInput = {
    id: bigint | number
    username?: string | null
    password?: string | null
    resultSends?: ResultSendCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCreatedResultsInput = {
    id: bigint | number
    username?: string | null
    password?: string | null
    resultSends?: ResultSendUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCreatedResultsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedResultsInput, UserUncheckedCreateWithoutCreatedResultsInput>
  }

  export type HistogramResultUpsertWithWhereUniqueWithoutResultInput = {
    where: HistogramResultWhereUniqueInput
    update: XOR<HistogramResultUpdateWithoutResultInput, HistogramResultUncheckedUpdateWithoutResultInput>
    create: XOR<HistogramResultCreateWithoutResultInput, HistogramResultUncheckedCreateWithoutResultInput>
  }

  export type HistogramResultUpdateWithWhereUniqueWithoutResultInput = {
    where: HistogramResultWhereUniqueInput
    data: XOR<HistogramResultUpdateWithoutResultInput, HistogramResultUncheckedUpdateWithoutResultInput>
  }

  export type HistogramResultUpdateManyWithWhereWithoutResultInput = {
    where: HistogramResultScalarWhereInput
    data: XOR<HistogramResultUpdateManyMutationInput, HistogramResultUncheckedUpdateManyWithoutResultInput>
  }

  export type HistogramResultScalarWhereInput = {
    AND?: HistogramResultScalarWhereInput | HistogramResultScalarWhereInput[]
    OR?: HistogramResultScalarWhereInput[]
    NOT?: HistogramResultScalarWhereInput | HistogramResultScalarWhereInput[]
    id?: BigIntFilter<"HistogramResult"> | bigint | number
    result_folio?: StringNullableFilter<"HistogramResult"> | string | null
    description?: StringNullableFilter<"HistogramResult"> | string | null
    value?: StringNullableFilter<"HistogramResult"> | string | null
    created_at?: DateTimeNullableFilter<"HistogramResult"> | Date | string | null
    active?: BoolNullableFilter<"HistogramResult"> | boolean | null
  }

  export type ParameterUpsertWithWhereUniqueWithoutResultInput = {
    where: ParameterWhereUniqueInput
    update: XOR<ParameterUpdateWithoutResultInput, ParameterUncheckedUpdateWithoutResultInput>
    create: XOR<ParameterCreateWithoutResultInput, ParameterUncheckedCreateWithoutResultInput>
  }

  export type ParameterUpdateWithWhereUniqueWithoutResultInput = {
    where: ParameterWhereUniqueInput
    data: XOR<ParameterUpdateWithoutResultInput, ParameterUncheckedUpdateWithoutResultInput>
  }

  export type ParameterUpdateManyWithWhereWithoutResultInput = {
    where: ParameterScalarWhereInput
    data: XOR<ParameterUpdateManyMutationInput, ParameterUncheckedUpdateManyWithoutResultInput>
  }

  export type ResultSendUpsertWithWhereUniqueWithoutResultInput = {
    where: ResultSendWhereUniqueInput
    update: XOR<ResultSendUpdateWithoutResultInput, ResultSendUncheckedUpdateWithoutResultInput>
    create: XOR<ResultSendCreateWithoutResultInput, ResultSendUncheckedCreateWithoutResultInput>
  }

  export type ResultSendUpdateWithWhereUniqueWithoutResultInput = {
    where: ResultSendWhereUniqueInput
    data: XOR<ResultSendUpdateWithoutResultInput, ResultSendUncheckedUpdateWithoutResultInput>
  }

  export type ResultSendUpdateManyWithWhereWithoutResultInput = {
    where: ResultSendScalarWhereInput
    data: XOR<ResultSendUpdateManyMutationInput, ResultSendUncheckedUpdateManyWithoutResultInput>
  }

  export type ResultSendScalarWhereInput = {
    AND?: ResultSendScalarWhereInput | ResultSendScalarWhereInput[]
    OR?: ResultSendScalarWhereInput[]
    NOT?: ResultSendScalarWhereInput | ResultSendScalarWhereInput[]
    id?: BigIntFilter<"ResultSend"> | bigint | number
    result_folio?: StringNullableFilter<"ResultSend"> | string | null
    send_by?: BigIntNullableFilter<"ResultSend"> | bigint | number | null
    send_at?: DateTimeNullableFilter<"ResultSend"> | Date | string | null
    status?: StringNullableFilter<"ResultSend"> | string | null
    payload?: JsonNullableFilter<"ResultSend">
    response?: JsonNullableFilter<"ResultSend">
  }

  export type UserUpsertWithoutCreatedResultsInput = {
    update: XOR<UserUpdateWithoutCreatedResultsInput, UserUncheckedUpdateWithoutCreatedResultsInput>
    create: XOR<UserCreateWithoutCreatedResultsInput, UserUncheckedCreateWithoutCreatedResultsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedResultsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedResultsInput, UserUncheckedUpdateWithoutCreatedResultsInput>
  }

  export type UserUpdateWithoutCreatedResultsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    resultSends?: ResultSendUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedResultsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    resultSends?: ResultSendUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SystemParameterCreateWithoutParameterDictionariesInput = {
    id: bigint | number
    value?: string | null
  }

  export type SystemParameterUncheckedCreateWithoutParameterDictionariesInput = {
    id: bigint | number
    value?: string | null
  }

  export type SystemParameterCreateOrConnectWithoutParameterDictionariesInput = {
    where: SystemParameterWhereUniqueInput
    create: XOR<SystemParameterCreateWithoutParameterDictionariesInput, SystemParameterUncheckedCreateWithoutParameterDictionariesInput>
  }

  export type ParameterCreateWithoutParameterDictionaryInput = {
    id: bigint | number
    description?: string | null
    value?: string | null
    unit_measurement?: string | null
    max_range?: string | null
    min_range?: string | null
    created_at?: Date | string | null
    active?: boolean | null
    equipment?: EquipmentCreateNestedOneWithoutParametersInput
    result?: ResultCreateNestedOneWithoutParametersInput
  }

  export type ParameterUncheckedCreateWithoutParameterDictionaryInput = {
    id: bigint | number
    result_folio?: string | null
    equipment_id?: bigint | number | null
    description?: string | null
    value?: string | null
    unit_measurement?: string | null
    max_range?: string | null
    min_range?: string | null
    created_at?: Date | string | null
    active?: boolean | null
  }

  export type ParameterCreateOrConnectWithoutParameterDictionaryInput = {
    where: ParameterWhereUniqueInput
    create: XOR<ParameterCreateWithoutParameterDictionaryInput, ParameterUncheckedCreateWithoutParameterDictionaryInput>
  }

  export type ParameterCreateManyParameterDictionaryInputEnvelope = {
    data: ParameterCreateManyParameterDictionaryInput | ParameterCreateManyParameterDictionaryInput[]
    skipDuplicates?: boolean
  }

  export type SystemParameterUpsertWithoutParameterDictionariesInput = {
    update: XOR<SystemParameterUpdateWithoutParameterDictionariesInput, SystemParameterUncheckedUpdateWithoutParameterDictionariesInput>
    create: XOR<SystemParameterCreateWithoutParameterDictionariesInput, SystemParameterUncheckedCreateWithoutParameterDictionariesInput>
    where?: SystemParameterWhereInput
  }

  export type SystemParameterUpdateToOneWithWhereWithoutParameterDictionariesInput = {
    where?: SystemParameterWhereInput
    data: XOR<SystemParameterUpdateWithoutParameterDictionariesInput, SystemParameterUncheckedUpdateWithoutParameterDictionariesInput>
  }

  export type SystemParameterUpdateWithoutParameterDictionariesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    value?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SystemParameterUncheckedUpdateWithoutParameterDictionariesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    value?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ParameterUpsertWithWhereUniqueWithoutParameterDictionaryInput = {
    where: ParameterWhereUniqueInput
    update: XOR<ParameterUpdateWithoutParameterDictionaryInput, ParameterUncheckedUpdateWithoutParameterDictionaryInput>
    create: XOR<ParameterCreateWithoutParameterDictionaryInput, ParameterUncheckedCreateWithoutParameterDictionaryInput>
  }

  export type ParameterUpdateWithWhereUniqueWithoutParameterDictionaryInput = {
    where: ParameterWhereUniqueInput
    data: XOR<ParameterUpdateWithoutParameterDictionaryInput, ParameterUncheckedUpdateWithoutParameterDictionaryInput>
  }

  export type ParameterUpdateManyWithWhereWithoutParameterDictionaryInput = {
    where: ParameterScalarWhereInput
    data: XOR<ParameterUpdateManyMutationInput, ParameterUncheckedUpdateManyWithoutParameterDictionaryInput>
  }

  export type ResultCreateWithoutResultSendsInput = {
    folio: string
    sample_id?: string | null
    created_at?: Date | string | null
    last_modified_at?: Date | string | null
    active?: boolean | null
    histogramResults?: HistogramResultCreateNestedManyWithoutResultInput
    parameters?: ParameterCreateNestedManyWithoutResultInput
    user?: UserCreateNestedOneWithoutCreatedResultsInput
  }

  export type ResultUncheckedCreateWithoutResultSendsInput = {
    folio: string
    created_by?: bigint | number | null
    sample_id?: string | null
    created_at?: Date | string | null
    last_modified_at?: Date | string | null
    active?: boolean | null
    histogramResults?: HistogramResultUncheckedCreateNestedManyWithoutResultInput
    parameters?: ParameterUncheckedCreateNestedManyWithoutResultInput
  }

  export type ResultCreateOrConnectWithoutResultSendsInput = {
    where: ResultWhereUniqueInput
    create: XOR<ResultCreateWithoutResultSendsInput, ResultUncheckedCreateWithoutResultSendsInput>
  }

  export type UserCreateWithoutResultSendsInput = {
    id: bigint | number
    username?: string | null
    password?: string | null
    createdResults?: ResultCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutResultSendsInput = {
    id: bigint | number
    username?: string | null
    password?: string | null
    createdResults?: ResultUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutResultSendsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutResultSendsInput, UserUncheckedCreateWithoutResultSendsInput>
  }

  export type ResultUpsertWithoutResultSendsInput = {
    update: XOR<ResultUpdateWithoutResultSendsInput, ResultUncheckedUpdateWithoutResultSendsInput>
    create: XOR<ResultCreateWithoutResultSendsInput, ResultUncheckedCreateWithoutResultSendsInput>
    where?: ResultWhereInput
  }

  export type ResultUpdateToOneWithWhereWithoutResultSendsInput = {
    where?: ResultWhereInput
    data: XOR<ResultUpdateWithoutResultSendsInput, ResultUncheckedUpdateWithoutResultSendsInput>
  }

  export type ResultUpdateWithoutResultSendsInput = {
    folio?: StringFieldUpdateOperationsInput | string
    sample_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    histogramResults?: HistogramResultUpdateManyWithoutResultNestedInput
    parameters?: ParameterUpdateManyWithoutResultNestedInput
    user?: UserUpdateOneWithoutCreatedResultsNestedInput
  }

  export type ResultUncheckedUpdateWithoutResultSendsInput = {
    folio?: StringFieldUpdateOperationsInput | string
    created_by?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    sample_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    histogramResults?: HistogramResultUncheckedUpdateManyWithoutResultNestedInput
    parameters?: ParameterUncheckedUpdateManyWithoutResultNestedInput
  }

  export type UserUpsertWithoutResultSendsInput = {
    update: XOR<UserUpdateWithoutResultSendsInput, UserUncheckedUpdateWithoutResultSendsInput>
    create: XOR<UserCreateWithoutResultSendsInput, UserUncheckedCreateWithoutResultSendsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutResultSendsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutResultSendsInput, UserUncheckedUpdateWithoutResultSendsInput>
  }

  export type UserUpdateWithoutResultSendsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdResults?: ResultUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutResultSendsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdResults?: ResultUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ParameterDictionaryCreateWithoutSystemParameterInput = {
    id: bigint | number
    parameter_description?: string | null
    parameters?: ParameterCreateNestedManyWithoutParameterDictionaryInput
  }

  export type ParameterDictionaryUncheckedCreateWithoutSystemParameterInput = {
    id: bigint | number
    parameter_description?: string | null
    parameters?: ParameterUncheckedCreateNestedManyWithoutParameterDictionaryInput
  }

  export type ParameterDictionaryCreateOrConnectWithoutSystemParameterInput = {
    where: ParameterDictionaryWhereUniqueInput
    create: XOR<ParameterDictionaryCreateWithoutSystemParameterInput, ParameterDictionaryUncheckedCreateWithoutSystemParameterInput>
  }

  export type ParameterDictionaryCreateManySystemParameterInputEnvelope = {
    data: ParameterDictionaryCreateManySystemParameterInput | ParameterDictionaryCreateManySystemParameterInput[]
    skipDuplicates?: boolean
  }

  export type ParameterDictionaryUpsertWithWhereUniqueWithoutSystemParameterInput = {
    where: ParameterDictionaryWhereUniqueInput
    update: XOR<ParameterDictionaryUpdateWithoutSystemParameterInput, ParameterDictionaryUncheckedUpdateWithoutSystemParameterInput>
    create: XOR<ParameterDictionaryCreateWithoutSystemParameterInput, ParameterDictionaryUncheckedCreateWithoutSystemParameterInput>
  }

  export type ParameterDictionaryUpdateWithWhereUniqueWithoutSystemParameterInput = {
    where: ParameterDictionaryWhereUniqueInput
    data: XOR<ParameterDictionaryUpdateWithoutSystemParameterInput, ParameterDictionaryUncheckedUpdateWithoutSystemParameterInput>
  }

  export type ParameterDictionaryUpdateManyWithWhereWithoutSystemParameterInput = {
    where: ParameterDictionaryScalarWhereInput
    data: XOR<ParameterDictionaryUpdateManyMutationInput, ParameterDictionaryUncheckedUpdateManyWithoutSystemParameterInput>
  }

  export type ParameterDictionaryScalarWhereInput = {
    AND?: ParameterDictionaryScalarWhereInput | ParameterDictionaryScalarWhereInput[]
    OR?: ParameterDictionaryScalarWhereInput[]
    NOT?: ParameterDictionaryScalarWhereInput | ParameterDictionaryScalarWhereInput[]
    id?: BigIntFilter<"ParameterDictionary"> | bigint | number
    system_parameter_id?: BigIntNullableFilter<"ParameterDictionary"> | bigint | number | null
    parameter_description?: StringNullableFilter<"ParameterDictionary"> | string | null
  }

  export type ResultSendCreateWithoutUserInput = {
    id: bigint | number
    send_at?: Date | string | null
    status?: string | null
    payload?: NullableJsonNullValueInput | InputJsonValue
    response?: NullableJsonNullValueInput | InputJsonValue
    result?: ResultCreateNestedOneWithoutResultSendsInput
  }

  export type ResultSendUncheckedCreateWithoutUserInput = {
    id: bigint | number
    result_folio?: string | null
    send_at?: Date | string | null
    status?: string | null
    payload?: NullableJsonNullValueInput | InputJsonValue
    response?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ResultSendCreateOrConnectWithoutUserInput = {
    where: ResultSendWhereUniqueInput
    create: XOR<ResultSendCreateWithoutUserInput, ResultSendUncheckedCreateWithoutUserInput>
  }

  export type ResultSendCreateManyUserInputEnvelope = {
    data: ResultSendCreateManyUserInput | ResultSendCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ResultCreateWithoutUserInput = {
    folio: string
    sample_id?: string | null
    created_at?: Date | string | null
    last_modified_at?: Date | string | null
    active?: boolean | null
    histogramResults?: HistogramResultCreateNestedManyWithoutResultInput
    parameters?: ParameterCreateNestedManyWithoutResultInput
    resultSends?: ResultSendCreateNestedManyWithoutResultInput
  }

  export type ResultUncheckedCreateWithoutUserInput = {
    folio: string
    sample_id?: string | null
    created_at?: Date | string | null
    last_modified_at?: Date | string | null
    active?: boolean | null
    histogramResults?: HistogramResultUncheckedCreateNestedManyWithoutResultInput
    parameters?: ParameterUncheckedCreateNestedManyWithoutResultInput
    resultSends?: ResultSendUncheckedCreateNestedManyWithoutResultInput
  }

  export type ResultCreateOrConnectWithoutUserInput = {
    where: ResultWhereUniqueInput
    create: XOR<ResultCreateWithoutUserInput, ResultUncheckedCreateWithoutUserInput>
  }

  export type ResultCreateManyUserInputEnvelope = {
    data: ResultCreateManyUserInput | ResultCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ResultSendUpsertWithWhereUniqueWithoutUserInput = {
    where: ResultSendWhereUniqueInput
    update: XOR<ResultSendUpdateWithoutUserInput, ResultSendUncheckedUpdateWithoutUserInput>
    create: XOR<ResultSendCreateWithoutUserInput, ResultSendUncheckedCreateWithoutUserInput>
  }

  export type ResultSendUpdateWithWhereUniqueWithoutUserInput = {
    where: ResultSendWhereUniqueInput
    data: XOR<ResultSendUpdateWithoutUserInput, ResultSendUncheckedUpdateWithoutUserInput>
  }

  export type ResultSendUpdateManyWithWhereWithoutUserInput = {
    where: ResultSendScalarWhereInput
    data: XOR<ResultSendUpdateManyMutationInput, ResultSendUncheckedUpdateManyWithoutUserInput>
  }

  export type ResultUpsertWithWhereUniqueWithoutUserInput = {
    where: ResultWhereUniqueInput
    update: XOR<ResultUpdateWithoutUserInput, ResultUncheckedUpdateWithoutUserInput>
    create: XOR<ResultCreateWithoutUserInput, ResultUncheckedCreateWithoutUserInput>
  }

  export type ResultUpdateWithWhereUniqueWithoutUserInput = {
    where: ResultWhereUniqueInput
    data: XOR<ResultUpdateWithoutUserInput, ResultUncheckedUpdateWithoutUserInput>
  }

  export type ResultUpdateManyWithWhereWithoutUserInput = {
    where: ResultScalarWhereInput
    data: XOR<ResultUpdateManyMutationInput, ResultUncheckedUpdateManyWithoutUserInput>
  }

  export type ResultScalarWhereInput = {
    AND?: ResultScalarWhereInput | ResultScalarWhereInput[]
    OR?: ResultScalarWhereInput[]
    NOT?: ResultScalarWhereInput | ResultScalarWhereInput[]
    folio?: StringFilter<"Result"> | string
    created_by?: BigIntNullableFilter<"Result"> | bigint | number | null
    sample_id?: StringNullableFilter<"Result"> | string | null
    created_at?: DateTimeNullableFilter<"Result"> | Date | string | null
    last_modified_at?: DateTimeNullableFilter<"Result"> | Date | string | null
    active?: BoolNullableFilter<"Result"> | boolean | null
  }

  export type EquipmentCreateWithoutEquipmentConfigurationInput = {
    id: bigint | number
    name?: string | null
    created_at?: Date | string | null
    modified_at?: Date | string | null
    last_connection?: Date | string | null
    connection_status?: string | null
    active?: boolean | null
    directoryHistorials?: DirectoryHistorialCreateNestedManyWithoutEquipmentInput
    equipmentProfile?: EquipmentProfileCreateNestedOneWithoutEquipmentsInput
    parameters?: ParameterCreateNestedManyWithoutEquipmentInput
  }

  export type EquipmentUncheckedCreateWithoutEquipmentConfigurationInput = {
    id: bigint | number
    profile_id?: bigint | number | null
    name?: string | null
    created_at?: Date | string | null
    modified_at?: Date | string | null
    last_connection?: Date | string | null
    connection_status?: string | null
    active?: boolean | null
    directoryHistorials?: DirectoryHistorialUncheckedCreateNestedManyWithoutEquipmentInput
    parameters?: ParameterUncheckedCreateNestedManyWithoutEquipmentInput
  }

  export type EquipmentCreateOrConnectWithoutEquipmentConfigurationInput = {
    where: EquipmentWhereUniqueInput
    create: XOR<EquipmentCreateWithoutEquipmentConfigurationInput, EquipmentUncheckedCreateWithoutEquipmentConfigurationInput>
  }

  export type EquipmentUpsertWithoutEquipmentConfigurationInput = {
    update: XOR<EquipmentUpdateWithoutEquipmentConfigurationInput, EquipmentUncheckedUpdateWithoutEquipmentConfigurationInput>
    create: XOR<EquipmentCreateWithoutEquipmentConfigurationInput, EquipmentUncheckedCreateWithoutEquipmentConfigurationInput>
    where?: EquipmentWhereInput
  }

  export type EquipmentUpdateToOneWithWhereWithoutEquipmentConfigurationInput = {
    where?: EquipmentWhereInput
    data: XOR<EquipmentUpdateWithoutEquipmentConfigurationInput, EquipmentUncheckedUpdateWithoutEquipmentConfigurationInput>
  }

  export type EquipmentUpdateWithoutEquipmentConfigurationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_connection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    connection_status?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    directoryHistorials?: DirectoryHistorialUpdateManyWithoutEquipmentNestedInput
    equipmentProfile?: EquipmentProfileUpdateOneWithoutEquipmentsNestedInput
    parameters?: ParameterUpdateManyWithoutEquipmentNestedInput
  }

  export type EquipmentUncheckedUpdateWithoutEquipmentConfigurationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    profile_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_connection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    connection_status?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    directoryHistorials?: DirectoryHistorialUncheckedUpdateManyWithoutEquipmentNestedInput
    parameters?: ParameterUncheckedUpdateManyWithoutEquipmentNestedInput
  }

  export type EquipmentProfileCreateManyCommunicationProfileInput = {
    id: bigint | number
    name?: string | null
    active?: boolean | null
    communication_type?: string | null
  }

  export type EquipmentProfileUpdateWithoutCommunicationProfileInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    communication_type?: NullableStringFieldUpdateOperationsInput | string | null
    equipments?: EquipmentUpdateManyWithoutEquipmentProfileNestedInput
  }

  export type EquipmentProfileUncheckedUpdateWithoutCommunicationProfileInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    communication_type?: NullableStringFieldUpdateOperationsInput | string | null
    equipments?: EquipmentUncheckedUpdateManyWithoutEquipmentProfileNestedInput
  }

  export type EquipmentProfileUncheckedUpdateManyWithoutCommunicationProfileInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    communication_type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EquipmentCreateManyEquipmentProfileInput = {
    id: bigint | number
    name?: string | null
    created_at?: Date | string | null
    modified_at?: Date | string | null
    last_connection?: Date | string | null
    connection_status?: string | null
    active?: boolean | null
  }

  export type EquipmentUpdateWithoutEquipmentProfileInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_connection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    connection_status?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    directoryHistorials?: DirectoryHistorialUpdateManyWithoutEquipmentNestedInput
    parameters?: ParameterUpdateManyWithoutEquipmentNestedInput
    EquipmentConfiguration?: EquipmentConfigurationUpdateManyWithoutEquipmentNestedInput
  }

  export type EquipmentUncheckedUpdateWithoutEquipmentProfileInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_connection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    connection_status?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    directoryHistorials?: DirectoryHistorialUncheckedUpdateManyWithoutEquipmentNestedInput
    parameters?: ParameterUncheckedUpdateManyWithoutEquipmentNestedInput
    EquipmentConfiguration?: EquipmentConfigurationUncheckedUpdateManyWithoutEquipmentNestedInput
  }

  export type EquipmentUncheckedUpdateManyWithoutEquipmentProfileInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_connection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    connection_status?: NullableStringFieldUpdateOperationsInput | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type DirectoryHistorialCreateManyEquipmentInput = {
    id: bigint | number
    filename?: string | null
    filepath?: string | null
    modified_at?: bigint | number | null
  }

  export type ParameterCreateManyEquipmentInput = {
    id: bigint | number
    result_folio?: string | null
    parameter_dictionary_id?: bigint | number | null
    description?: string | null
    value?: string | null
    unit_measurement?: string | null
    max_range?: string | null
    min_range?: string | null
    created_at?: Date | string | null
    active?: boolean | null
  }

  export type EquipmentConfigurationCreateManyEquipmentInput = {
    port: string
    ip_address: string
    baud_rate: number
    mac_address: string
    remote_directory: string
  }

  export type DirectoryHistorialUpdateWithoutEquipmentInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    filename?: NullableStringFieldUpdateOperationsInput | string | null
    filepath?: NullableStringFieldUpdateOperationsInput | string | null
    modified_at?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type DirectoryHistorialUncheckedUpdateWithoutEquipmentInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    filename?: NullableStringFieldUpdateOperationsInput | string | null
    filepath?: NullableStringFieldUpdateOperationsInput | string | null
    modified_at?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type DirectoryHistorialUncheckedUpdateManyWithoutEquipmentInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    filename?: NullableStringFieldUpdateOperationsInput | string | null
    filepath?: NullableStringFieldUpdateOperationsInput | string | null
    modified_at?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type ParameterUpdateWithoutEquipmentInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    unit_measurement?: NullableStringFieldUpdateOperationsInput | string | null
    max_range?: NullableStringFieldUpdateOperationsInput | string | null
    min_range?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    parameterDictionary?: ParameterDictionaryUpdateOneWithoutParametersNestedInput
    result?: ResultUpdateOneWithoutParametersNestedInput
  }

  export type ParameterUncheckedUpdateWithoutEquipmentInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    result_folio?: NullableStringFieldUpdateOperationsInput | string | null
    parameter_dictionary_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    unit_measurement?: NullableStringFieldUpdateOperationsInput | string | null
    max_range?: NullableStringFieldUpdateOperationsInput | string | null
    min_range?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ParameterUncheckedUpdateManyWithoutEquipmentInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    result_folio?: NullableStringFieldUpdateOperationsInput | string | null
    parameter_dictionary_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    unit_measurement?: NullableStringFieldUpdateOperationsInput | string | null
    max_range?: NullableStringFieldUpdateOperationsInput | string | null
    min_range?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type EquipmentConfigurationUpdateWithoutEquipmentInput = {
    port?: StringFieldUpdateOperationsInput | string
    ip_address?: StringFieldUpdateOperationsInput | string
    baud_rate?: IntFieldUpdateOperationsInput | number
    mac_address?: StringFieldUpdateOperationsInput | string
    remote_directory?: StringFieldUpdateOperationsInput | string
  }

  export type EquipmentConfigurationUncheckedUpdateWithoutEquipmentInput = {
    port?: StringFieldUpdateOperationsInput | string
    ip_address?: StringFieldUpdateOperationsInput | string
    baud_rate?: IntFieldUpdateOperationsInput | number
    mac_address?: StringFieldUpdateOperationsInput | string
    remote_directory?: StringFieldUpdateOperationsInput | string
  }

  export type EquipmentConfigurationUncheckedUpdateManyWithoutEquipmentInput = {
    port?: StringFieldUpdateOperationsInput | string
    ip_address?: StringFieldUpdateOperationsInput | string
    baud_rate?: IntFieldUpdateOperationsInput | number
    mac_address?: StringFieldUpdateOperationsInput | string
    remote_directory?: StringFieldUpdateOperationsInput | string
  }

  export type HistogramResultCreateManyResultInput = {
    id: bigint | number
    description?: string | null
    value?: string | null
    created_at?: Date | string | null
    active?: boolean | null
  }

  export type ParameterCreateManyResultInput = {
    id: bigint | number
    equipment_id?: bigint | number | null
    parameter_dictionary_id?: bigint | number | null
    description?: string | null
    value?: string | null
    unit_measurement?: string | null
    max_range?: string | null
    min_range?: string | null
    created_at?: Date | string | null
    active?: boolean | null
  }

  export type ResultSendCreateManyResultInput = {
    id: bigint | number
    send_by?: bigint | number | null
    send_at?: Date | string | null
    status?: string | null
    payload?: NullableJsonNullValueInput | InputJsonValue
    response?: NullableJsonNullValueInput | InputJsonValue
  }

  export type HistogramResultUpdateWithoutResultInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type HistogramResultUncheckedUpdateWithoutResultInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type HistogramResultUncheckedUpdateManyWithoutResultInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ParameterUpdateWithoutResultInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    unit_measurement?: NullableStringFieldUpdateOperationsInput | string | null
    max_range?: NullableStringFieldUpdateOperationsInput | string | null
    min_range?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    equipment?: EquipmentUpdateOneWithoutParametersNestedInput
    parameterDictionary?: ParameterDictionaryUpdateOneWithoutParametersNestedInput
  }

  export type ParameterUncheckedUpdateWithoutResultInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    equipment_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    parameter_dictionary_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    unit_measurement?: NullableStringFieldUpdateOperationsInput | string | null
    max_range?: NullableStringFieldUpdateOperationsInput | string | null
    min_range?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ParameterUncheckedUpdateManyWithoutResultInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    equipment_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    parameter_dictionary_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    unit_measurement?: NullableStringFieldUpdateOperationsInput | string | null
    max_range?: NullableStringFieldUpdateOperationsInput | string | null
    min_range?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ResultSendUpdateWithoutResultInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    send_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: NullableJsonNullValueInput | InputJsonValue
    response?: NullableJsonNullValueInput | InputJsonValue
    user?: UserUpdateOneWithoutResultSendsNestedInput
  }

  export type ResultSendUncheckedUpdateWithoutResultInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    send_by?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    send_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: NullableJsonNullValueInput | InputJsonValue
    response?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ResultSendUncheckedUpdateManyWithoutResultInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    send_by?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    send_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: NullableJsonNullValueInput | InputJsonValue
    response?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ParameterCreateManyParameterDictionaryInput = {
    id: bigint | number
    result_folio?: string | null
    equipment_id?: bigint | number | null
    description?: string | null
    value?: string | null
    unit_measurement?: string | null
    max_range?: string | null
    min_range?: string | null
    created_at?: Date | string | null
    active?: boolean | null
  }

  export type ParameterUpdateWithoutParameterDictionaryInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    unit_measurement?: NullableStringFieldUpdateOperationsInput | string | null
    max_range?: NullableStringFieldUpdateOperationsInput | string | null
    min_range?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    equipment?: EquipmentUpdateOneWithoutParametersNestedInput
    result?: ResultUpdateOneWithoutParametersNestedInput
  }

  export type ParameterUncheckedUpdateWithoutParameterDictionaryInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    result_folio?: NullableStringFieldUpdateOperationsInput | string | null
    equipment_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    unit_measurement?: NullableStringFieldUpdateOperationsInput | string | null
    max_range?: NullableStringFieldUpdateOperationsInput | string | null
    min_range?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ParameterUncheckedUpdateManyWithoutParameterDictionaryInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    result_folio?: NullableStringFieldUpdateOperationsInput | string | null
    equipment_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    unit_measurement?: NullableStringFieldUpdateOperationsInput | string | null
    max_range?: NullableStringFieldUpdateOperationsInput | string | null
    min_range?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ParameterDictionaryCreateManySystemParameterInput = {
    id: bigint | number
    parameter_description?: string | null
  }

  export type ParameterDictionaryUpdateWithoutSystemParameterInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    parameter_description?: NullableStringFieldUpdateOperationsInput | string | null
    parameters?: ParameterUpdateManyWithoutParameterDictionaryNestedInput
  }

  export type ParameterDictionaryUncheckedUpdateWithoutSystemParameterInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    parameter_description?: NullableStringFieldUpdateOperationsInput | string | null
    parameters?: ParameterUncheckedUpdateManyWithoutParameterDictionaryNestedInput
  }

  export type ParameterDictionaryUncheckedUpdateManyWithoutSystemParameterInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    parameter_description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ResultSendCreateManyUserInput = {
    id: bigint | number
    result_folio?: string | null
    send_at?: Date | string | null
    status?: string | null
    payload?: NullableJsonNullValueInput | InputJsonValue
    response?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ResultCreateManyUserInput = {
    folio: string
    sample_id?: string | null
    created_at?: Date | string | null
    last_modified_at?: Date | string | null
    active?: boolean | null
  }

  export type ResultSendUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    send_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: NullableJsonNullValueInput | InputJsonValue
    response?: NullableJsonNullValueInput | InputJsonValue
    result?: ResultUpdateOneWithoutResultSendsNestedInput
  }

  export type ResultSendUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    result_folio?: NullableStringFieldUpdateOperationsInput | string | null
    send_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: NullableJsonNullValueInput | InputJsonValue
    response?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ResultSendUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    result_folio?: NullableStringFieldUpdateOperationsInput | string | null
    send_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: NullableJsonNullValueInput | InputJsonValue
    response?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ResultUpdateWithoutUserInput = {
    folio?: StringFieldUpdateOperationsInput | string
    sample_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    histogramResults?: HistogramResultUpdateManyWithoutResultNestedInput
    parameters?: ParameterUpdateManyWithoutResultNestedInput
    resultSends?: ResultSendUpdateManyWithoutResultNestedInput
  }

  export type ResultUncheckedUpdateWithoutUserInput = {
    folio?: StringFieldUpdateOperationsInput | string
    sample_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    histogramResults?: HistogramResultUncheckedUpdateManyWithoutResultNestedInput
    parameters?: ParameterUncheckedUpdateManyWithoutResultNestedInput
    resultSends?: ResultSendUncheckedUpdateManyWithoutResultNestedInput
  }

  export type ResultUncheckedUpdateManyWithoutUserInput = {
    folio?: StringFieldUpdateOperationsInput | string
    sample_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    active?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}