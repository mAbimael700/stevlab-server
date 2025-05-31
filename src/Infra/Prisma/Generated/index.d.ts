
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
    Result: 'Result'
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
      modelProps: "communicationProfiles" | "directoryHistorial" | "equipmentProfile" | "equipment" | "histogramResult" | "parameter" | "result"
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
    equipment_profiles: number
  }

  export type CommunicationProfilesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipment_profiles?: boolean | CommunicationProfilesCountOutputTypeCountEquipment_profilesArgs
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
  export type CommunicationProfilesCountOutputTypeCountEquipment_profilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    directory_historials: number
    parameters: number
  }

  export type EquipmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    directory_historials?: boolean | EquipmentCountOutputTypeCountDirectory_historialsArgs
    parameters?: boolean | EquipmentCountOutputTypeCountParametersArgs
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
  export type EquipmentCountOutputTypeCountDirectory_historialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DirectoryHistorialWhereInput
  }

  /**
   * EquipmentCountOutputType without action
   */
  export type EquipmentCountOutputTypeCountParametersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParameterWhereInput
  }


  /**
   * Count Type ResultCountOutputType
   */

  export type ResultCountOutputType = {
    histogram_results: number
    parameters: number
  }

  export type ResultCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    histogram_results?: boolean | ResultCountOutputTypeCountHistogram_resultsArgs
    parameters?: boolean | ResultCountOutputTypeCountParametersArgs
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
  export type ResultCountOutputTypeCountHistogram_resultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistogramResultWhereInput
  }

  /**
   * ResultCountOutputType without action
   */
  export type ResultCountOutputTypeCountParametersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParameterWhereInput
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
    name: string | null
    checksum_regex: string | null
    type: string | null
  }

  export type CommunicationProfilesMaxAggregateOutputType = {
    id: string | null
    name: string | null
    checksum_regex: string | null
    type: string | null
  }

  export type CommunicationProfilesCountAggregateOutputType = {
    id: number
    name: number
    checksum_regex: number
    type: number
    _all: number
  }


  export type CommunicationProfilesMinAggregateInputType = {
    id?: true
    name?: true
    checksum_regex?: true
    type?: true
  }

  export type CommunicationProfilesMaxAggregateInputType = {
    id?: true
    name?: true
    checksum_regex?: true
    type?: true
  }

  export type CommunicationProfilesCountAggregateInputType = {
    id?: true
    name?: true
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
    name: string | null
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
    name?: boolean
    checksum_regex?: boolean
    type?: boolean
    equipment_profiles?: boolean | CommunicationProfiles$equipment_profilesArgs<ExtArgs>
    _count?: boolean | CommunicationProfilesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["communicationProfiles"]>

  export type CommunicationProfilesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    checksum_regex?: boolean
    type?: boolean
  }, ExtArgs["result"]["communicationProfiles"]>

  export type CommunicationProfilesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    checksum_regex?: boolean
    type?: boolean
  }, ExtArgs["result"]["communicationProfiles"]>

  export type CommunicationProfilesSelectScalar = {
    id?: boolean
    name?: boolean
    checksum_regex?: boolean
    type?: boolean
  }

  export type CommunicationProfilesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "checksum_regex" | "type", ExtArgs["result"]["communicationProfiles"]>
  export type CommunicationProfilesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipment_profiles?: boolean | CommunicationProfiles$equipment_profilesArgs<ExtArgs>
    _count?: boolean | CommunicationProfilesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CommunicationProfilesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CommunicationProfilesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CommunicationProfilesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CommunicationProfiles"
    objects: {
      equipment_profiles: Prisma.$EquipmentProfilePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
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
    equipment_profiles<T extends CommunicationProfiles$equipment_profilesArgs<ExtArgs> = {}>(args?: Subset<T, CommunicationProfiles$equipment_profilesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly name: FieldRef<"CommunicationProfiles", 'String'>
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
   * CommunicationProfiles.equipment_profiles
   */
  export type CommunicationProfiles$equipment_profilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    equipments?: boolean | DirectoryHistorial$equipmentsArgs<ExtArgs>
  }, ExtArgs["result"]["directoryHistorial"]>

  export type DirectoryHistorialSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    equipment_id?: boolean
    filename?: boolean
    filepath?: boolean
    modified_at?: boolean
    equipments?: boolean | DirectoryHistorial$equipmentsArgs<ExtArgs>
  }, ExtArgs["result"]["directoryHistorial"]>

  export type DirectoryHistorialSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    equipment_id?: boolean
    filename?: boolean
    filepath?: boolean
    modified_at?: boolean
    equipments?: boolean | DirectoryHistorial$equipmentsArgs<ExtArgs>
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
    equipments?: boolean | DirectoryHistorial$equipmentsArgs<ExtArgs>
  }
  export type DirectoryHistorialIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipments?: boolean | DirectoryHistorial$equipmentsArgs<ExtArgs>
  }
  export type DirectoryHistorialIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipments?: boolean | DirectoryHistorial$equipmentsArgs<ExtArgs>
  }

  export type $DirectoryHistorialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DirectoryHistorial"
    objects: {
      equipments: Prisma.$EquipmentPayload<ExtArgs> | null
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
    equipments<T extends DirectoryHistorial$equipmentsArgs<ExtArgs> = {}>(args?: Subset<T, DirectoryHistorial$equipmentsArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * DirectoryHistorial.equipments
   */
  export type DirectoryHistorial$equipmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  }

  export type EquipmentProfileMaxAggregateOutputType = {
    id: bigint | null
    communication_profile: string | null
    name: string | null
  }

  export type EquipmentProfileCountAggregateOutputType = {
    id: number
    communication_profile: number
    name: number
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
  }

  export type EquipmentProfileMaxAggregateInputType = {
    id?: true
    communication_profile?: true
    name?: true
  }

  export type EquipmentProfileCountAggregateInputType = {
    id?: true
    communication_profile?: true
    name?: true
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
    communication_profiles?: boolean | EquipmentProfile$communication_profilesArgs<ExtArgs>
    equipments?: boolean | EquipmentProfile$equipmentsArgs<ExtArgs>
    _count?: boolean | EquipmentProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipmentProfile"]>

  export type EquipmentProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    communication_profile?: boolean
    name?: boolean
    communication_profiles?: boolean | EquipmentProfile$communication_profilesArgs<ExtArgs>
  }, ExtArgs["result"]["equipmentProfile"]>

  export type EquipmentProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    communication_profile?: boolean
    name?: boolean
    communication_profiles?: boolean | EquipmentProfile$communication_profilesArgs<ExtArgs>
  }, ExtArgs["result"]["equipmentProfile"]>

  export type EquipmentProfileSelectScalar = {
    id?: boolean
    communication_profile?: boolean
    name?: boolean
  }

  export type EquipmentProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "communication_profile" | "name", ExtArgs["result"]["equipmentProfile"]>
  export type EquipmentProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    communication_profiles?: boolean | EquipmentProfile$communication_profilesArgs<ExtArgs>
    equipments?: boolean | EquipmentProfile$equipmentsArgs<ExtArgs>
    _count?: boolean | EquipmentProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EquipmentProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    communication_profiles?: boolean | EquipmentProfile$communication_profilesArgs<ExtArgs>
  }
  export type EquipmentProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    communication_profiles?: boolean | EquipmentProfile$communication_profilesArgs<ExtArgs>
  }

  export type $EquipmentProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EquipmentProfile"
    objects: {
      communication_profiles: Prisma.$CommunicationProfilesPayload<ExtArgs> | null
      equipments: Prisma.$EquipmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      communication_profile: string | null
      name: string | null
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
    communication_profiles<T extends EquipmentProfile$communication_profilesArgs<ExtArgs> = {}>(args?: Subset<T, EquipmentProfile$communication_profilesArgs<ExtArgs>>): Prisma__CommunicationProfilesClient<$Result.GetResult<Prisma.$CommunicationProfilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * EquipmentProfile.communication_profiles
   */
  export type EquipmentProfile$communication_profilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  }

  export type EquipmentMaxAggregateOutputType = {
    id: bigint | null
    profile_id: bigint | null
    name: string | null
    created_at: Date | null
    modified_at: Date | null
    last_connection: Date | null
    connection_status: string | null
  }

  export type EquipmentCountAggregateOutputType = {
    id: number
    profile_id: number
    name: number
    created_at: number
    modified_at: number
    last_connection: number
    connection_status: number
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
  }

  export type EquipmentMaxAggregateInputType = {
    id?: true
    profile_id?: true
    name?: true
    created_at?: true
    modified_at?: true
    last_connection?: true
    connection_status?: true
  }

  export type EquipmentCountAggregateInputType = {
    id?: true
    profile_id?: true
    name?: true
    created_at?: true
    modified_at?: true
    last_connection?: true
    connection_status?: true
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
    directory_historials?: boolean | Equipment$directory_historialsArgs<ExtArgs>
    equipment_profiles?: boolean | Equipment$equipment_profilesArgs<ExtArgs>
    parameters?: boolean | Equipment$parametersArgs<ExtArgs>
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
    equipment_profiles?: boolean | Equipment$equipment_profilesArgs<ExtArgs>
  }, ExtArgs["result"]["equipment"]>

  export type EquipmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profile_id?: boolean
    name?: boolean
    created_at?: boolean
    modified_at?: boolean
    last_connection?: boolean
    connection_status?: boolean
    equipment_profiles?: boolean | Equipment$equipment_profilesArgs<ExtArgs>
  }, ExtArgs["result"]["equipment"]>

  export type EquipmentSelectScalar = {
    id?: boolean
    profile_id?: boolean
    name?: boolean
    created_at?: boolean
    modified_at?: boolean
    last_connection?: boolean
    connection_status?: boolean
  }

  export type EquipmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "profile_id" | "name" | "created_at" | "modified_at" | "last_connection" | "connection_status", ExtArgs["result"]["equipment"]>
  export type EquipmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    directory_historials?: boolean | Equipment$directory_historialsArgs<ExtArgs>
    equipment_profiles?: boolean | Equipment$equipment_profilesArgs<ExtArgs>
    parameters?: boolean | Equipment$parametersArgs<ExtArgs>
    _count?: boolean | EquipmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EquipmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipment_profiles?: boolean | Equipment$equipment_profilesArgs<ExtArgs>
  }
  export type EquipmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipment_profiles?: boolean | Equipment$equipment_profilesArgs<ExtArgs>
  }

  export type $EquipmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Equipment"
    objects: {
      directory_historials: Prisma.$DirectoryHistorialPayload<ExtArgs>[]
      equipment_profiles: Prisma.$EquipmentProfilePayload<ExtArgs> | null
      parameters: Prisma.$ParameterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      profile_id: bigint | null
      name: string | null
      created_at: Date | null
      modified_at: Date | null
      last_connection: Date | null
      connection_status: string | null
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
    directory_historials<T extends Equipment$directory_historialsArgs<ExtArgs> = {}>(args?: Subset<T, Equipment$directory_historialsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DirectoryHistorialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    equipment_profiles<T extends Equipment$equipment_profilesArgs<ExtArgs> = {}>(args?: Subset<T, Equipment$equipment_profilesArgs<ExtArgs>>): Prisma__EquipmentProfileClient<$Result.GetResult<Prisma.$EquipmentProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    parameters<T extends Equipment$parametersArgs<ExtArgs> = {}>(args?: Subset<T, Equipment$parametersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParameterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Equipment.directory_historials
   */
  export type Equipment$directory_historialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Equipment.equipment_profiles
   */
  export type Equipment$equipment_profilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  }

  export type HistogramResultMaxAggregateOutputType = {
    id: bigint | null
    result_folio: string | null
    description: string | null
    value: string | null
  }

  export type HistogramResultCountAggregateOutputType = {
    id: number
    result_folio: number
    description: number
    value: number
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
  }

  export type HistogramResultMaxAggregateInputType = {
    id?: true
    result_folio?: true
    description?: true
    value?: true
  }

  export type HistogramResultCountAggregateInputType = {
    id?: true
    result_folio?: true
    description?: true
    value?: true
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
    results?: boolean | HistogramResult$resultsArgs<ExtArgs>
  }, ExtArgs["result"]["histogramResult"]>

  export type HistogramResultSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    result_folio?: boolean
    description?: boolean
    value?: boolean
    results?: boolean | HistogramResult$resultsArgs<ExtArgs>
  }, ExtArgs["result"]["histogramResult"]>

  export type HistogramResultSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    result_folio?: boolean
    description?: boolean
    value?: boolean
    results?: boolean | HistogramResult$resultsArgs<ExtArgs>
  }, ExtArgs["result"]["histogramResult"]>

  export type HistogramResultSelectScalar = {
    id?: boolean
    result_folio?: boolean
    description?: boolean
    value?: boolean
  }

  export type HistogramResultOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "result_folio" | "description" | "value", ExtArgs["result"]["histogramResult"]>
  export type HistogramResultInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    results?: boolean | HistogramResult$resultsArgs<ExtArgs>
  }
  export type HistogramResultIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    results?: boolean | HistogramResult$resultsArgs<ExtArgs>
  }
  export type HistogramResultIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    results?: boolean | HistogramResult$resultsArgs<ExtArgs>
  }

  export type $HistogramResultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HistogramResult"
    objects: {
      results: Prisma.$ResultPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      result_folio: string | null
      description: string | null
      value: string | null
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
    results<T extends HistogramResult$resultsArgs<ExtArgs> = {}>(args?: Subset<T, HistogramResult$resultsArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * HistogramResult.results
   */
  export type HistogramResult$resultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  }

  export type ParameterSumAggregateOutputType = {
    id: bigint | null
    equipment_id: bigint | null
  }

  export type ParameterMinAggregateOutputType = {
    id: bigint | null
    result_folio: string | null
    equipment_id: bigint | null
    description: string | null
    value: string | null
    unit_measurement: string | null
    max_range: string | null
    min_range: string | null
    created_at: Date | null
    modified_at: Date | null
  }

  export type ParameterMaxAggregateOutputType = {
    id: bigint | null
    result_folio: string | null
    equipment_id: bigint | null
    description: string | null
    value: string | null
    unit_measurement: string | null
    max_range: string | null
    min_range: string | null
    created_at: Date | null
    modified_at: Date | null
  }

  export type ParameterCountAggregateOutputType = {
    id: number
    result_folio: number
    equipment_id: number
    description: number
    value: number
    unit_measurement: number
    max_range: number
    min_range: number
    created_at: number
    modified_at: number
    _all: number
  }


  export type ParameterAvgAggregateInputType = {
    id?: true
    equipment_id?: true
  }

  export type ParameterSumAggregateInputType = {
    id?: true
    equipment_id?: true
  }

  export type ParameterMinAggregateInputType = {
    id?: true
    result_folio?: true
    equipment_id?: true
    description?: true
    value?: true
    unit_measurement?: true
    max_range?: true
    min_range?: true
    created_at?: true
    modified_at?: true
  }

  export type ParameterMaxAggregateInputType = {
    id?: true
    result_folio?: true
    equipment_id?: true
    description?: true
    value?: true
    unit_measurement?: true
    max_range?: true
    min_range?: true
    created_at?: true
    modified_at?: true
  }

  export type ParameterCountAggregateInputType = {
    id?: true
    result_folio?: true
    equipment_id?: true
    description?: true
    value?: true
    unit_measurement?: true
    max_range?: true
    min_range?: true
    created_at?: true
    modified_at?: true
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
    description: string | null
    value: string | null
    unit_measurement: string | null
    max_range: string | null
    min_range: string | null
    created_at: Date | null
    modified_at: Date | null
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
    description?: boolean
    value?: boolean
    unit_measurement?: boolean
    max_range?: boolean
    min_range?: boolean
    created_at?: boolean
    modified_at?: boolean
    equipments?: boolean | Parameter$equipmentsArgs<ExtArgs>
    results?: boolean | Parameter$resultsArgs<ExtArgs>
  }, ExtArgs["result"]["parameter"]>

  export type ParameterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    result_folio?: boolean
    equipment_id?: boolean
    description?: boolean
    value?: boolean
    unit_measurement?: boolean
    max_range?: boolean
    min_range?: boolean
    created_at?: boolean
    modified_at?: boolean
    equipments?: boolean | Parameter$equipmentsArgs<ExtArgs>
    results?: boolean | Parameter$resultsArgs<ExtArgs>
  }, ExtArgs["result"]["parameter"]>

  export type ParameterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    result_folio?: boolean
    equipment_id?: boolean
    description?: boolean
    value?: boolean
    unit_measurement?: boolean
    max_range?: boolean
    min_range?: boolean
    created_at?: boolean
    modified_at?: boolean
    equipments?: boolean | Parameter$equipmentsArgs<ExtArgs>
    results?: boolean | Parameter$resultsArgs<ExtArgs>
  }, ExtArgs["result"]["parameter"]>

  export type ParameterSelectScalar = {
    id?: boolean
    result_folio?: boolean
    equipment_id?: boolean
    description?: boolean
    value?: boolean
    unit_measurement?: boolean
    max_range?: boolean
    min_range?: boolean
    created_at?: boolean
    modified_at?: boolean
  }

  export type ParameterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "result_folio" | "equipment_id" | "description" | "value" | "unit_measurement" | "max_range" | "min_range" | "created_at" | "modified_at", ExtArgs["result"]["parameter"]>
  export type ParameterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipments?: boolean | Parameter$equipmentsArgs<ExtArgs>
    results?: boolean | Parameter$resultsArgs<ExtArgs>
  }
  export type ParameterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipments?: boolean | Parameter$equipmentsArgs<ExtArgs>
    results?: boolean | Parameter$resultsArgs<ExtArgs>
  }
  export type ParameterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipments?: boolean | Parameter$equipmentsArgs<ExtArgs>
    results?: boolean | Parameter$resultsArgs<ExtArgs>
  }

  export type $ParameterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Parameter"
    objects: {
      equipments: Prisma.$EquipmentPayload<ExtArgs> | null
      results: Prisma.$ResultPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      result_folio: string | null
      equipment_id: bigint | null
      description: string | null
      value: string | null
      unit_measurement: string | null
      max_range: string | null
      min_range: string | null
      created_at: Date | null
      modified_at: Date | null
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
    equipments<T extends Parameter$equipmentsArgs<ExtArgs> = {}>(args?: Subset<T, Parameter$equipmentsArgs<ExtArgs>>): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    results<T extends Parameter$resultsArgs<ExtArgs> = {}>(args?: Subset<T, Parameter$resultsArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly description: FieldRef<"Parameter", 'String'>
    readonly value: FieldRef<"Parameter", 'String'>
    readonly unit_measurement: FieldRef<"Parameter", 'String'>
    readonly max_range: FieldRef<"Parameter", 'String'>
    readonly min_range: FieldRef<"Parameter", 'String'>
    readonly created_at: FieldRef<"Parameter", 'DateTime'>
    readonly modified_at: FieldRef<"Parameter", 'DateTime'>
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
   * Parameter.equipments
   */
  export type Parameter$equipmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Parameter.results
   */
  export type Parameter$resultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    _min: ResultMinAggregateOutputType | null
    _max: ResultMaxAggregateOutputType | null
  }

  export type ResultMinAggregateOutputType = {
    folio: string | null
    sample_id: string | null
    pacient_name: string | null
    sex: string | null
    created_at: Date | null
    modified_at: Date | null
  }

  export type ResultMaxAggregateOutputType = {
    folio: string | null
    sample_id: string | null
    pacient_name: string | null
    sex: string | null
    created_at: Date | null
    modified_at: Date | null
  }

  export type ResultCountAggregateOutputType = {
    folio: number
    sample_id: number
    pacient_name: number
    sex: number
    created_at: number
    modified_at: number
    _all: number
  }


  export type ResultMinAggregateInputType = {
    folio?: true
    sample_id?: true
    pacient_name?: true
    sex?: true
    created_at?: true
    modified_at?: true
  }

  export type ResultMaxAggregateInputType = {
    folio?: true
    sample_id?: true
    pacient_name?: true
    sex?: true
    created_at?: true
    modified_at?: true
  }

  export type ResultCountAggregateInputType = {
    folio?: true
    sample_id?: true
    pacient_name?: true
    sex?: true
    created_at?: true
    modified_at?: true
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
    _min?: ResultMinAggregateInputType
    _max?: ResultMaxAggregateInputType
  }

  export type ResultGroupByOutputType = {
    folio: string
    sample_id: string | null
    pacient_name: string | null
    sex: string | null
    created_at: Date | null
    modified_at: Date | null
    _count: ResultCountAggregateOutputType | null
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
    sample_id?: boolean
    pacient_name?: boolean
    sex?: boolean
    created_at?: boolean
    modified_at?: boolean
    histogram_results?: boolean | Result$histogram_resultsArgs<ExtArgs>
    parameters?: boolean | Result$parametersArgs<ExtArgs>
    _count?: boolean | ResultCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["result"]>

  export type ResultSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    folio?: boolean
    sample_id?: boolean
    pacient_name?: boolean
    sex?: boolean
    created_at?: boolean
    modified_at?: boolean
  }, ExtArgs["result"]["result"]>

  export type ResultSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    folio?: boolean
    sample_id?: boolean
    pacient_name?: boolean
    sex?: boolean
    created_at?: boolean
    modified_at?: boolean
  }, ExtArgs["result"]["result"]>

  export type ResultSelectScalar = {
    folio?: boolean
    sample_id?: boolean
    pacient_name?: boolean
    sex?: boolean
    created_at?: boolean
    modified_at?: boolean
  }

  export type ResultOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"folio" | "sample_id" | "pacient_name" | "sex" | "created_at" | "modified_at", ExtArgs["result"]["result"]>
  export type ResultInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    histogram_results?: boolean | Result$histogram_resultsArgs<ExtArgs>
    parameters?: boolean | Result$parametersArgs<ExtArgs>
    _count?: boolean | ResultCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ResultIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ResultIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ResultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Result"
    objects: {
      histogram_results: Prisma.$HistogramResultPayload<ExtArgs>[]
      parameters: Prisma.$ParameterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      folio: string
      sample_id: string | null
      pacient_name: string | null
      sex: string | null
      created_at: Date | null
      modified_at: Date | null
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
    histogram_results<T extends Result$histogram_resultsArgs<ExtArgs> = {}>(args?: Subset<T, Result$histogram_resultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistogramResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    parameters<T extends Result$parametersArgs<ExtArgs> = {}>(args?: Subset<T, Result$parametersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParameterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly sample_id: FieldRef<"Result", 'String'>
    readonly pacient_name: FieldRef<"Result", 'String'>
    readonly sex: FieldRef<"Result", 'String'>
    readonly created_at: FieldRef<"Result", 'DateTime'>
    readonly modified_at: FieldRef<"Result", 'DateTime'>
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
   * Result.histogram_results
   */
  export type Result$histogram_resultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    name: 'name',
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
    name: 'name'
  };

  export type EquipmentProfileScalarFieldEnum = (typeof EquipmentProfileScalarFieldEnum)[keyof typeof EquipmentProfileScalarFieldEnum]


  export const EquipmentScalarFieldEnum: {
    id: 'id',
    profile_id: 'profile_id',
    name: 'name',
    created_at: 'created_at',
    modified_at: 'modified_at',
    last_connection: 'last_connection',
    connection_status: 'connection_status'
  };

  export type EquipmentScalarFieldEnum = (typeof EquipmentScalarFieldEnum)[keyof typeof EquipmentScalarFieldEnum]


  export const HistogramResultScalarFieldEnum: {
    id: 'id',
    result_folio: 'result_folio',
    description: 'description',
    value: 'value'
  };

  export type HistogramResultScalarFieldEnum = (typeof HistogramResultScalarFieldEnum)[keyof typeof HistogramResultScalarFieldEnum]


  export const ParameterScalarFieldEnum: {
    id: 'id',
    result_folio: 'result_folio',
    equipment_id: 'equipment_id',
    description: 'description',
    value: 'value',
    unit_measurement: 'unit_measurement',
    max_range: 'max_range',
    min_range: 'min_range',
    created_at: 'created_at',
    modified_at: 'modified_at'
  };

  export type ParameterScalarFieldEnum = (typeof ParameterScalarFieldEnum)[keyof typeof ParameterScalarFieldEnum]


  export const ResultScalarFieldEnum: {
    folio: 'folio',
    sample_id: 'sample_id',
    pacient_name: 'pacient_name',
    sex: 'sex',
    created_at: 'created_at',
    modified_at: 'modified_at'
  };

  export type ResultScalarFieldEnum = (typeof ResultScalarFieldEnum)[keyof typeof ResultScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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
    name?: StringNullableFilter<"CommunicationProfiles"> | string | null
    checksum_regex?: StringNullableFilter<"CommunicationProfiles"> | string | null
    type?: StringNullableFilter<"CommunicationProfiles"> | string | null
    equipment_profiles?: EquipmentProfileListRelationFilter
  }

  export type CommunicationProfilesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    checksum_regex?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    equipment_profiles?: EquipmentProfileOrderByRelationAggregateInput
  }

  export type CommunicationProfilesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommunicationProfilesWhereInput | CommunicationProfilesWhereInput[]
    OR?: CommunicationProfilesWhereInput[]
    NOT?: CommunicationProfilesWhereInput | CommunicationProfilesWhereInput[]
    name?: StringNullableFilter<"CommunicationProfiles"> | string | null
    checksum_regex?: StringNullableFilter<"CommunicationProfiles"> | string | null
    type?: StringNullableFilter<"CommunicationProfiles"> | string | null
    equipment_profiles?: EquipmentProfileListRelationFilter
  }, "id">

  export type CommunicationProfilesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
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
    name?: StringNullableWithAggregatesFilter<"CommunicationProfiles"> | string | null
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
    equipments?: XOR<EquipmentNullableScalarRelationFilter, EquipmentWhereInput> | null
  }

  export type DirectoryHistorialOrderByWithRelationInput = {
    id?: SortOrder
    equipment_id?: SortOrderInput | SortOrder
    filename?: SortOrderInput | SortOrder
    filepath?: SortOrderInput | SortOrder
    modified_at?: SortOrderInput | SortOrder
    equipments?: EquipmentOrderByWithRelationInput
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
    equipments?: XOR<EquipmentNullableScalarRelationFilter, EquipmentWhereInput> | null
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
    communication_profiles?: XOR<CommunicationProfilesNullableScalarRelationFilter, CommunicationProfilesWhereInput> | null
    equipments?: EquipmentListRelationFilter
  }

  export type EquipmentProfileOrderByWithRelationInput = {
    id?: SortOrder
    communication_profile?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    communication_profiles?: CommunicationProfilesOrderByWithRelationInput
    equipments?: EquipmentOrderByRelationAggregateInput
  }

  export type EquipmentProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: EquipmentProfileWhereInput | EquipmentProfileWhereInput[]
    OR?: EquipmentProfileWhereInput[]
    NOT?: EquipmentProfileWhereInput | EquipmentProfileWhereInput[]
    communication_profile?: StringNullableFilter<"EquipmentProfile"> | string | null
    name?: StringNullableFilter<"EquipmentProfile"> | string | null
    communication_profiles?: XOR<CommunicationProfilesNullableScalarRelationFilter, CommunicationProfilesWhereInput> | null
    equipments?: EquipmentListRelationFilter
  }, "id">

  export type EquipmentProfileOrderByWithAggregationInput = {
    id?: SortOrder
    communication_profile?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
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
    directory_historials?: DirectoryHistorialListRelationFilter
    equipment_profiles?: XOR<EquipmentProfileNullableScalarRelationFilter, EquipmentProfileWhereInput> | null
    parameters?: ParameterListRelationFilter
  }

  export type EquipmentOrderByWithRelationInput = {
    id?: SortOrder
    profile_id?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    modified_at?: SortOrderInput | SortOrder
    last_connection?: SortOrderInput | SortOrder
    connection_status?: SortOrderInput | SortOrder
    directory_historials?: DirectoryHistorialOrderByRelationAggregateInput
    equipment_profiles?: EquipmentProfileOrderByWithRelationInput
    parameters?: ParameterOrderByRelationAggregateInput
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
    directory_historials?: DirectoryHistorialListRelationFilter
    equipment_profiles?: XOR<EquipmentProfileNullableScalarRelationFilter, EquipmentProfileWhereInput> | null
    parameters?: ParameterListRelationFilter
  }, "id">

  export type EquipmentOrderByWithAggregationInput = {
    id?: SortOrder
    profile_id?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    modified_at?: SortOrderInput | SortOrder
    last_connection?: SortOrderInput | SortOrder
    connection_status?: SortOrderInput | SortOrder
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
  }

  export type HistogramResultWhereInput = {
    AND?: HistogramResultWhereInput | HistogramResultWhereInput[]
    OR?: HistogramResultWhereInput[]
    NOT?: HistogramResultWhereInput | HistogramResultWhereInput[]
    id?: BigIntFilter<"HistogramResult"> | bigint | number
    result_folio?: StringNullableFilter<"HistogramResult"> | string | null
    description?: StringNullableFilter<"HistogramResult"> | string | null
    value?: StringNullableFilter<"HistogramResult"> | string | null
    results?: XOR<ResultNullableScalarRelationFilter, ResultWhereInput> | null
  }

  export type HistogramResultOrderByWithRelationInput = {
    id?: SortOrder
    result_folio?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    value?: SortOrderInput | SortOrder
    results?: ResultOrderByWithRelationInput
  }

  export type HistogramResultWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: HistogramResultWhereInput | HistogramResultWhereInput[]
    OR?: HistogramResultWhereInput[]
    NOT?: HistogramResultWhereInput | HistogramResultWhereInput[]
    result_folio?: StringNullableFilter<"HistogramResult"> | string | null
    description?: StringNullableFilter<"HistogramResult"> | string | null
    value?: StringNullableFilter<"HistogramResult"> | string | null
    results?: XOR<ResultNullableScalarRelationFilter, ResultWhereInput> | null
  }, "id">

  export type HistogramResultOrderByWithAggregationInput = {
    id?: SortOrder
    result_folio?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    value?: SortOrderInput | SortOrder
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
  }

  export type ParameterWhereInput = {
    AND?: ParameterWhereInput | ParameterWhereInput[]
    OR?: ParameterWhereInput[]
    NOT?: ParameterWhereInput | ParameterWhereInput[]
    id?: BigIntFilter<"Parameter"> | bigint | number
    result_folio?: StringNullableFilter<"Parameter"> | string | null
    equipment_id?: BigIntNullableFilter<"Parameter"> | bigint | number | null
    description?: StringNullableFilter<"Parameter"> | string | null
    value?: StringNullableFilter<"Parameter"> | string | null
    unit_measurement?: StringNullableFilter<"Parameter"> | string | null
    max_range?: StringNullableFilter<"Parameter"> | string | null
    min_range?: StringNullableFilter<"Parameter"> | string | null
    created_at?: DateTimeNullableFilter<"Parameter"> | Date | string | null
    modified_at?: DateTimeNullableFilter<"Parameter"> | Date | string | null
    equipments?: XOR<EquipmentNullableScalarRelationFilter, EquipmentWhereInput> | null
    results?: XOR<ResultNullableScalarRelationFilter, ResultWhereInput> | null
  }

  export type ParameterOrderByWithRelationInput = {
    id?: SortOrder
    result_folio?: SortOrderInput | SortOrder
    equipment_id?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    value?: SortOrderInput | SortOrder
    unit_measurement?: SortOrderInput | SortOrder
    max_range?: SortOrderInput | SortOrder
    min_range?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    modified_at?: SortOrderInput | SortOrder
    equipments?: EquipmentOrderByWithRelationInput
    results?: ResultOrderByWithRelationInput
  }

  export type ParameterWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: ParameterWhereInput | ParameterWhereInput[]
    OR?: ParameterWhereInput[]
    NOT?: ParameterWhereInput | ParameterWhereInput[]
    result_folio?: StringNullableFilter<"Parameter"> | string | null
    equipment_id?: BigIntNullableFilter<"Parameter"> | bigint | number | null
    description?: StringNullableFilter<"Parameter"> | string | null
    value?: StringNullableFilter<"Parameter"> | string | null
    unit_measurement?: StringNullableFilter<"Parameter"> | string | null
    max_range?: StringNullableFilter<"Parameter"> | string | null
    min_range?: StringNullableFilter<"Parameter"> | string | null
    created_at?: DateTimeNullableFilter<"Parameter"> | Date | string | null
    modified_at?: DateTimeNullableFilter<"Parameter"> | Date | string | null
    equipments?: XOR<EquipmentNullableScalarRelationFilter, EquipmentWhereInput> | null
    results?: XOR<ResultNullableScalarRelationFilter, ResultWhereInput> | null
  }, "id">

  export type ParameterOrderByWithAggregationInput = {
    id?: SortOrder
    result_folio?: SortOrderInput | SortOrder
    equipment_id?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    value?: SortOrderInput | SortOrder
    unit_measurement?: SortOrderInput | SortOrder
    max_range?: SortOrderInput | SortOrder
    min_range?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    modified_at?: SortOrderInput | SortOrder
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
    description?: StringNullableWithAggregatesFilter<"Parameter"> | string | null
    value?: StringNullableWithAggregatesFilter<"Parameter"> | string | null
    unit_measurement?: StringNullableWithAggregatesFilter<"Parameter"> | string | null
    max_range?: StringNullableWithAggregatesFilter<"Parameter"> | string | null
    min_range?: StringNullableWithAggregatesFilter<"Parameter"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"Parameter"> | Date | string | null
    modified_at?: DateTimeNullableWithAggregatesFilter<"Parameter"> | Date | string | null
  }

  export type ResultWhereInput = {
    AND?: ResultWhereInput | ResultWhereInput[]
    OR?: ResultWhereInput[]
    NOT?: ResultWhereInput | ResultWhereInput[]
    folio?: StringFilter<"Result"> | string
    sample_id?: StringNullableFilter<"Result"> | string | null
    pacient_name?: StringNullableFilter<"Result"> | string | null
    sex?: StringNullableFilter<"Result"> | string | null
    created_at?: DateTimeNullableFilter<"Result"> | Date | string | null
    modified_at?: DateTimeNullableFilter<"Result"> | Date | string | null
    histogram_results?: HistogramResultListRelationFilter
    parameters?: ParameterListRelationFilter
  }

  export type ResultOrderByWithRelationInput = {
    folio?: SortOrder
    sample_id?: SortOrderInput | SortOrder
    pacient_name?: SortOrderInput | SortOrder
    sex?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    modified_at?: SortOrderInput | SortOrder
    histogram_results?: HistogramResultOrderByRelationAggregateInput
    parameters?: ParameterOrderByRelationAggregateInput
  }

  export type ResultWhereUniqueInput = Prisma.AtLeast<{
    folio?: string
    AND?: ResultWhereInput | ResultWhereInput[]
    OR?: ResultWhereInput[]
    NOT?: ResultWhereInput | ResultWhereInput[]
    sample_id?: StringNullableFilter<"Result"> | string | null
    pacient_name?: StringNullableFilter<"Result"> | string | null
    sex?: StringNullableFilter<"Result"> | string | null
    created_at?: DateTimeNullableFilter<"Result"> | Date | string | null
    modified_at?: DateTimeNullableFilter<"Result"> | Date | string | null
    histogram_results?: HistogramResultListRelationFilter
    parameters?: ParameterListRelationFilter
  }, "folio">

  export type ResultOrderByWithAggregationInput = {
    folio?: SortOrder
    sample_id?: SortOrderInput | SortOrder
    pacient_name?: SortOrderInput | SortOrder
    sex?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    modified_at?: SortOrderInput | SortOrder
    _count?: ResultCountOrderByAggregateInput
    _max?: ResultMaxOrderByAggregateInput
    _min?: ResultMinOrderByAggregateInput
  }

  export type ResultScalarWhereWithAggregatesInput = {
    AND?: ResultScalarWhereWithAggregatesInput | ResultScalarWhereWithAggregatesInput[]
    OR?: ResultScalarWhereWithAggregatesInput[]
    NOT?: ResultScalarWhereWithAggregatesInput | ResultScalarWhereWithAggregatesInput[]
    folio?: StringWithAggregatesFilter<"Result"> | string
    sample_id?: StringNullableWithAggregatesFilter<"Result"> | string | null
    pacient_name?: StringNullableWithAggregatesFilter<"Result"> | string | null
    sex?: StringNullableWithAggregatesFilter<"Result"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"Result"> | Date | string | null
    modified_at?: DateTimeNullableWithAggregatesFilter<"Result"> | Date | string | null
  }

  export type CommunicationProfilesCreateInput = {
    id: string
    name?: string | null
    checksum_regex?: string | null
    type?: string | null
    equipment_profiles?: EquipmentProfileCreateNestedManyWithoutCommunication_profilesInput
  }

  export type CommunicationProfilesUncheckedCreateInput = {
    id: string
    name?: string | null
    checksum_regex?: string | null
    type?: string | null
    equipment_profiles?: EquipmentProfileUncheckedCreateNestedManyWithoutCommunication_profilesInput
  }

  export type CommunicationProfilesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    checksum_regex?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    equipment_profiles?: EquipmentProfileUpdateManyWithoutCommunication_profilesNestedInput
  }

  export type CommunicationProfilesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    checksum_regex?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    equipment_profiles?: EquipmentProfileUncheckedUpdateManyWithoutCommunication_profilesNestedInput
  }

  export type CommunicationProfilesCreateManyInput = {
    id: string
    name?: string | null
    checksum_regex?: string | null
    type?: string | null
  }

  export type CommunicationProfilesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    checksum_regex?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommunicationProfilesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    checksum_regex?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DirectoryHistorialCreateInput = {
    id: bigint | number
    filename?: string | null
    filepath?: string | null
    modified_at?: bigint | number | null
    equipments?: EquipmentCreateNestedOneWithoutDirectory_historialsInput
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
    equipments?: EquipmentUpdateOneWithoutDirectory_historialsNestedInput
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
    communication_profiles?: CommunicationProfilesCreateNestedOneWithoutEquipment_profilesInput
    equipments?: EquipmentCreateNestedManyWithoutEquipment_profilesInput
  }

  export type EquipmentProfileUncheckedCreateInput = {
    id: bigint | number
    communication_profile?: string | null
    name?: string | null
    equipments?: EquipmentUncheckedCreateNestedManyWithoutEquipment_profilesInput
  }

  export type EquipmentProfileUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    communication_profiles?: CommunicationProfilesUpdateOneWithoutEquipment_profilesNestedInput
    equipments?: EquipmentUpdateManyWithoutEquipment_profilesNestedInput
  }

  export type EquipmentProfileUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    communication_profile?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    equipments?: EquipmentUncheckedUpdateManyWithoutEquipment_profilesNestedInput
  }

  export type EquipmentProfileCreateManyInput = {
    id: bigint | number
    communication_profile?: string | null
    name?: string | null
  }

  export type EquipmentProfileUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EquipmentProfileUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    communication_profile?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EquipmentCreateInput = {
    id: bigint | number
    name?: string | null
    created_at?: Date | string | null
    modified_at?: Date | string | null
    last_connection?: Date | string | null
    connection_status?: string | null
    directory_historials?: DirectoryHistorialCreateNestedManyWithoutEquipmentsInput
    equipment_profiles?: EquipmentProfileCreateNestedOneWithoutEquipmentsInput
    parameters?: ParameterCreateNestedManyWithoutEquipmentsInput
  }

  export type EquipmentUncheckedCreateInput = {
    id: bigint | number
    profile_id?: bigint | number | null
    name?: string | null
    created_at?: Date | string | null
    modified_at?: Date | string | null
    last_connection?: Date | string | null
    connection_status?: string | null
    directory_historials?: DirectoryHistorialUncheckedCreateNestedManyWithoutEquipmentsInput
    parameters?: ParameterUncheckedCreateNestedManyWithoutEquipmentsInput
  }

  export type EquipmentUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_connection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    connection_status?: NullableStringFieldUpdateOperationsInput | string | null
    directory_historials?: DirectoryHistorialUpdateManyWithoutEquipmentsNestedInput
    equipment_profiles?: EquipmentProfileUpdateOneWithoutEquipmentsNestedInput
    parameters?: ParameterUpdateManyWithoutEquipmentsNestedInput
  }

  export type EquipmentUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    profile_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_connection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    connection_status?: NullableStringFieldUpdateOperationsInput | string | null
    directory_historials?: DirectoryHistorialUncheckedUpdateManyWithoutEquipmentsNestedInput
    parameters?: ParameterUncheckedUpdateManyWithoutEquipmentsNestedInput
  }

  export type EquipmentCreateManyInput = {
    id: bigint | number
    profile_id?: bigint | number | null
    name?: string | null
    created_at?: Date | string | null
    modified_at?: Date | string | null
    last_connection?: Date | string | null
    connection_status?: string | null
  }

  export type EquipmentUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_connection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    connection_status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EquipmentUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    profile_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_connection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    connection_status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HistogramResultCreateInput = {
    id: bigint | number
    description?: string | null
    value?: string | null
    results?: ResultCreateNestedOneWithoutHistogram_resultsInput
  }

  export type HistogramResultUncheckedCreateInput = {
    id: bigint | number
    result_folio?: string | null
    description?: string | null
    value?: string | null
  }

  export type HistogramResultUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    results?: ResultUpdateOneWithoutHistogram_resultsNestedInput
  }

  export type HistogramResultUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    result_folio?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HistogramResultCreateManyInput = {
    id: bigint | number
    result_folio?: string | null
    description?: string | null
    value?: string | null
  }

  export type HistogramResultUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HistogramResultUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    result_folio?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ParameterCreateInput = {
    id: bigint | number
    description?: string | null
    value?: string | null
    unit_measurement?: string | null
    max_range?: string | null
    min_range?: string | null
    created_at?: Date | string | null
    modified_at?: Date | string | null
    equipments?: EquipmentCreateNestedOneWithoutParametersInput
    results?: ResultCreateNestedOneWithoutParametersInput
  }

  export type ParameterUncheckedCreateInput = {
    id: bigint | number
    result_folio?: string | null
    equipment_id?: bigint | number | null
    description?: string | null
    value?: string | null
    unit_measurement?: string | null
    max_range?: string | null
    min_range?: string | null
    created_at?: Date | string | null
    modified_at?: Date | string | null
  }

  export type ParameterUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    unit_measurement?: NullableStringFieldUpdateOperationsInput | string | null
    max_range?: NullableStringFieldUpdateOperationsInput | string | null
    min_range?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    equipments?: EquipmentUpdateOneWithoutParametersNestedInput
    results?: ResultUpdateOneWithoutParametersNestedInput
  }

  export type ParameterUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    result_folio?: NullableStringFieldUpdateOperationsInput | string | null
    equipment_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    unit_measurement?: NullableStringFieldUpdateOperationsInput | string | null
    max_range?: NullableStringFieldUpdateOperationsInput | string | null
    min_range?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ParameterCreateManyInput = {
    id: bigint | number
    result_folio?: string | null
    equipment_id?: bigint | number | null
    description?: string | null
    value?: string | null
    unit_measurement?: string | null
    max_range?: string | null
    min_range?: string | null
    created_at?: Date | string | null
    modified_at?: Date | string | null
  }

  export type ParameterUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    unit_measurement?: NullableStringFieldUpdateOperationsInput | string | null
    max_range?: NullableStringFieldUpdateOperationsInput | string | null
    min_range?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ParameterUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    result_folio?: NullableStringFieldUpdateOperationsInput | string | null
    equipment_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    unit_measurement?: NullableStringFieldUpdateOperationsInput | string | null
    max_range?: NullableStringFieldUpdateOperationsInput | string | null
    min_range?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ResultCreateInput = {
    folio: string
    sample_id?: string | null
    pacient_name?: string | null
    sex?: string | null
    created_at?: Date | string | null
    modified_at?: Date | string | null
    histogram_results?: HistogramResultCreateNestedManyWithoutResultsInput
    parameters?: ParameterCreateNestedManyWithoutResultsInput
  }

  export type ResultUncheckedCreateInput = {
    folio: string
    sample_id?: string | null
    pacient_name?: string | null
    sex?: string | null
    created_at?: Date | string | null
    modified_at?: Date | string | null
    histogram_results?: HistogramResultUncheckedCreateNestedManyWithoutResultsInput
    parameters?: ParameterUncheckedCreateNestedManyWithoutResultsInput
  }

  export type ResultUpdateInput = {
    folio?: StringFieldUpdateOperationsInput | string
    sample_id?: NullableStringFieldUpdateOperationsInput | string | null
    pacient_name?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    histogram_results?: HistogramResultUpdateManyWithoutResultsNestedInput
    parameters?: ParameterUpdateManyWithoutResultsNestedInput
  }

  export type ResultUncheckedUpdateInput = {
    folio?: StringFieldUpdateOperationsInput | string
    sample_id?: NullableStringFieldUpdateOperationsInput | string | null
    pacient_name?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    histogram_results?: HistogramResultUncheckedUpdateManyWithoutResultsNestedInput
    parameters?: ParameterUncheckedUpdateManyWithoutResultsNestedInput
  }

  export type ResultCreateManyInput = {
    folio: string
    sample_id?: string | null
    pacient_name?: string | null
    sex?: string | null
    created_at?: Date | string | null
    modified_at?: Date | string | null
  }

  export type ResultUpdateManyMutationInput = {
    folio?: StringFieldUpdateOperationsInput | string
    sample_id?: NullableStringFieldUpdateOperationsInput | string | null
    pacient_name?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ResultUncheckedUpdateManyInput = {
    folio?: StringFieldUpdateOperationsInput | string
    sample_id?: NullableStringFieldUpdateOperationsInput | string | null
    pacient_name?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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
    name?: SortOrder
    checksum_regex?: SortOrder
    type?: SortOrder
  }

  export type CommunicationProfilesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    checksum_regex?: SortOrder
    type?: SortOrder
  }

  export type CommunicationProfilesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
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
  }

  export type EquipmentProfileAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EquipmentProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    communication_profile?: SortOrder
    name?: SortOrder
  }

  export type EquipmentProfileMinOrderByAggregateInput = {
    id?: SortOrder
    communication_profile?: SortOrder
    name?: SortOrder
  }

  export type EquipmentProfileSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type DirectoryHistorialOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ParameterOrderByRelationAggregateInput = {
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
  }

  export type EquipmentMinOrderByAggregateInput = {
    id?: SortOrder
    profile_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
    last_connection?: SortOrder
    connection_status?: SortOrder
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
  }

  export type HistogramResultAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type HistogramResultMaxOrderByAggregateInput = {
    id?: SortOrder
    result_folio?: SortOrder
    description?: SortOrder
    value?: SortOrder
  }

  export type HistogramResultMinOrderByAggregateInput = {
    id?: SortOrder
    result_folio?: SortOrder
    description?: SortOrder
    value?: SortOrder
  }

  export type HistogramResultSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ParameterCountOrderByAggregateInput = {
    id?: SortOrder
    result_folio?: SortOrder
    equipment_id?: SortOrder
    description?: SortOrder
    value?: SortOrder
    unit_measurement?: SortOrder
    max_range?: SortOrder
    min_range?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
  }

  export type ParameterAvgOrderByAggregateInput = {
    id?: SortOrder
    equipment_id?: SortOrder
  }

  export type ParameterMaxOrderByAggregateInput = {
    id?: SortOrder
    result_folio?: SortOrder
    equipment_id?: SortOrder
    description?: SortOrder
    value?: SortOrder
    unit_measurement?: SortOrder
    max_range?: SortOrder
    min_range?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
  }

  export type ParameterMinOrderByAggregateInput = {
    id?: SortOrder
    result_folio?: SortOrder
    equipment_id?: SortOrder
    description?: SortOrder
    value?: SortOrder
    unit_measurement?: SortOrder
    max_range?: SortOrder
    min_range?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
  }

  export type ParameterSumOrderByAggregateInput = {
    id?: SortOrder
    equipment_id?: SortOrder
  }

  export type HistogramResultListRelationFilter = {
    every?: HistogramResultWhereInput
    some?: HistogramResultWhereInput
    none?: HistogramResultWhereInput
  }

  export type HistogramResultOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ResultCountOrderByAggregateInput = {
    folio?: SortOrder
    sample_id?: SortOrder
    pacient_name?: SortOrder
    sex?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
  }

  export type ResultMaxOrderByAggregateInput = {
    folio?: SortOrder
    sample_id?: SortOrder
    pacient_name?: SortOrder
    sex?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
  }

  export type ResultMinOrderByAggregateInput = {
    folio?: SortOrder
    sample_id?: SortOrder
    pacient_name?: SortOrder
    sex?: SortOrder
    created_at?: SortOrder
    modified_at?: SortOrder
  }

  export type EquipmentProfileCreateNestedManyWithoutCommunication_profilesInput = {
    create?: XOR<EquipmentProfileCreateWithoutCommunication_profilesInput, EquipmentProfileUncheckedCreateWithoutCommunication_profilesInput> | EquipmentProfileCreateWithoutCommunication_profilesInput[] | EquipmentProfileUncheckedCreateWithoutCommunication_profilesInput[]
    connectOrCreate?: EquipmentProfileCreateOrConnectWithoutCommunication_profilesInput | EquipmentProfileCreateOrConnectWithoutCommunication_profilesInput[]
    createMany?: EquipmentProfileCreateManyCommunication_profilesInputEnvelope
    connect?: EquipmentProfileWhereUniqueInput | EquipmentProfileWhereUniqueInput[]
  }

  export type EquipmentProfileUncheckedCreateNestedManyWithoutCommunication_profilesInput = {
    create?: XOR<EquipmentProfileCreateWithoutCommunication_profilesInput, EquipmentProfileUncheckedCreateWithoutCommunication_profilesInput> | EquipmentProfileCreateWithoutCommunication_profilesInput[] | EquipmentProfileUncheckedCreateWithoutCommunication_profilesInput[]
    connectOrCreate?: EquipmentProfileCreateOrConnectWithoutCommunication_profilesInput | EquipmentProfileCreateOrConnectWithoutCommunication_profilesInput[]
    createMany?: EquipmentProfileCreateManyCommunication_profilesInputEnvelope
    connect?: EquipmentProfileWhereUniqueInput | EquipmentProfileWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EquipmentProfileUpdateManyWithoutCommunication_profilesNestedInput = {
    create?: XOR<EquipmentProfileCreateWithoutCommunication_profilesInput, EquipmentProfileUncheckedCreateWithoutCommunication_profilesInput> | EquipmentProfileCreateWithoutCommunication_profilesInput[] | EquipmentProfileUncheckedCreateWithoutCommunication_profilesInput[]
    connectOrCreate?: EquipmentProfileCreateOrConnectWithoutCommunication_profilesInput | EquipmentProfileCreateOrConnectWithoutCommunication_profilesInput[]
    upsert?: EquipmentProfileUpsertWithWhereUniqueWithoutCommunication_profilesInput | EquipmentProfileUpsertWithWhereUniqueWithoutCommunication_profilesInput[]
    createMany?: EquipmentProfileCreateManyCommunication_profilesInputEnvelope
    set?: EquipmentProfileWhereUniqueInput | EquipmentProfileWhereUniqueInput[]
    disconnect?: EquipmentProfileWhereUniqueInput | EquipmentProfileWhereUniqueInput[]
    delete?: EquipmentProfileWhereUniqueInput | EquipmentProfileWhereUniqueInput[]
    connect?: EquipmentProfileWhereUniqueInput | EquipmentProfileWhereUniqueInput[]
    update?: EquipmentProfileUpdateWithWhereUniqueWithoutCommunication_profilesInput | EquipmentProfileUpdateWithWhereUniqueWithoutCommunication_profilesInput[]
    updateMany?: EquipmentProfileUpdateManyWithWhereWithoutCommunication_profilesInput | EquipmentProfileUpdateManyWithWhereWithoutCommunication_profilesInput[]
    deleteMany?: EquipmentProfileScalarWhereInput | EquipmentProfileScalarWhereInput[]
  }

  export type EquipmentProfileUncheckedUpdateManyWithoutCommunication_profilesNestedInput = {
    create?: XOR<EquipmentProfileCreateWithoutCommunication_profilesInput, EquipmentProfileUncheckedCreateWithoutCommunication_profilesInput> | EquipmentProfileCreateWithoutCommunication_profilesInput[] | EquipmentProfileUncheckedCreateWithoutCommunication_profilesInput[]
    connectOrCreate?: EquipmentProfileCreateOrConnectWithoutCommunication_profilesInput | EquipmentProfileCreateOrConnectWithoutCommunication_profilesInput[]
    upsert?: EquipmentProfileUpsertWithWhereUniqueWithoutCommunication_profilesInput | EquipmentProfileUpsertWithWhereUniqueWithoutCommunication_profilesInput[]
    createMany?: EquipmentProfileCreateManyCommunication_profilesInputEnvelope
    set?: EquipmentProfileWhereUniqueInput | EquipmentProfileWhereUniqueInput[]
    disconnect?: EquipmentProfileWhereUniqueInput | EquipmentProfileWhereUniqueInput[]
    delete?: EquipmentProfileWhereUniqueInput | EquipmentProfileWhereUniqueInput[]
    connect?: EquipmentProfileWhereUniqueInput | EquipmentProfileWhereUniqueInput[]
    update?: EquipmentProfileUpdateWithWhereUniqueWithoutCommunication_profilesInput | EquipmentProfileUpdateWithWhereUniqueWithoutCommunication_profilesInput[]
    updateMany?: EquipmentProfileUpdateManyWithWhereWithoutCommunication_profilesInput | EquipmentProfileUpdateManyWithWhereWithoutCommunication_profilesInput[]
    deleteMany?: EquipmentProfileScalarWhereInput | EquipmentProfileScalarWhereInput[]
  }

  export type EquipmentCreateNestedOneWithoutDirectory_historialsInput = {
    create?: XOR<EquipmentCreateWithoutDirectory_historialsInput, EquipmentUncheckedCreateWithoutDirectory_historialsInput>
    connectOrCreate?: EquipmentCreateOrConnectWithoutDirectory_historialsInput
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

  export type EquipmentUpdateOneWithoutDirectory_historialsNestedInput = {
    create?: XOR<EquipmentCreateWithoutDirectory_historialsInput, EquipmentUncheckedCreateWithoutDirectory_historialsInput>
    connectOrCreate?: EquipmentCreateOrConnectWithoutDirectory_historialsInput
    upsert?: EquipmentUpsertWithoutDirectory_historialsInput
    disconnect?: EquipmentWhereInput | boolean
    delete?: EquipmentWhereInput | boolean
    connect?: EquipmentWhereUniqueInput
    update?: XOR<XOR<EquipmentUpdateToOneWithWhereWithoutDirectory_historialsInput, EquipmentUpdateWithoutDirectory_historialsInput>, EquipmentUncheckedUpdateWithoutDirectory_historialsInput>
  }

  export type CommunicationProfilesCreateNestedOneWithoutEquipment_profilesInput = {
    create?: XOR<CommunicationProfilesCreateWithoutEquipment_profilesInput, CommunicationProfilesUncheckedCreateWithoutEquipment_profilesInput>
    connectOrCreate?: CommunicationProfilesCreateOrConnectWithoutEquipment_profilesInput
    connect?: CommunicationProfilesWhereUniqueInput
  }

  export type EquipmentCreateNestedManyWithoutEquipment_profilesInput = {
    create?: XOR<EquipmentCreateWithoutEquipment_profilesInput, EquipmentUncheckedCreateWithoutEquipment_profilesInput> | EquipmentCreateWithoutEquipment_profilesInput[] | EquipmentUncheckedCreateWithoutEquipment_profilesInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutEquipment_profilesInput | EquipmentCreateOrConnectWithoutEquipment_profilesInput[]
    createMany?: EquipmentCreateManyEquipment_profilesInputEnvelope
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
  }

  export type EquipmentUncheckedCreateNestedManyWithoutEquipment_profilesInput = {
    create?: XOR<EquipmentCreateWithoutEquipment_profilesInput, EquipmentUncheckedCreateWithoutEquipment_profilesInput> | EquipmentCreateWithoutEquipment_profilesInput[] | EquipmentUncheckedCreateWithoutEquipment_profilesInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutEquipment_profilesInput | EquipmentCreateOrConnectWithoutEquipment_profilesInput[]
    createMany?: EquipmentCreateManyEquipment_profilesInputEnvelope
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
  }

  export type CommunicationProfilesUpdateOneWithoutEquipment_profilesNestedInput = {
    create?: XOR<CommunicationProfilesCreateWithoutEquipment_profilesInput, CommunicationProfilesUncheckedCreateWithoutEquipment_profilesInput>
    connectOrCreate?: CommunicationProfilesCreateOrConnectWithoutEquipment_profilesInput
    upsert?: CommunicationProfilesUpsertWithoutEquipment_profilesInput
    disconnect?: CommunicationProfilesWhereInput | boolean
    delete?: CommunicationProfilesWhereInput | boolean
    connect?: CommunicationProfilesWhereUniqueInput
    update?: XOR<XOR<CommunicationProfilesUpdateToOneWithWhereWithoutEquipment_profilesInput, CommunicationProfilesUpdateWithoutEquipment_profilesInput>, CommunicationProfilesUncheckedUpdateWithoutEquipment_profilesInput>
  }

  export type EquipmentUpdateManyWithoutEquipment_profilesNestedInput = {
    create?: XOR<EquipmentCreateWithoutEquipment_profilesInput, EquipmentUncheckedCreateWithoutEquipment_profilesInput> | EquipmentCreateWithoutEquipment_profilesInput[] | EquipmentUncheckedCreateWithoutEquipment_profilesInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutEquipment_profilesInput | EquipmentCreateOrConnectWithoutEquipment_profilesInput[]
    upsert?: EquipmentUpsertWithWhereUniqueWithoutEquipment_profilesInput | EquipmentUpsertWithWhereUniqueWithoutEquipment_profilesInput[]
    createMany?: EquipmentCreateManyEquipment_profilesInputEnvelope
    set?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    disconnect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    delete?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    update?: EquipmentUpdateWithWhereUniqueWithoutEquipment_profilesInput | EquipmentUpdateWithWhereUniqueWithoutEquipment_profilesInput[]
    updateMany?: EquipmentUpdateManyWithWhereWithoutEquipment_profilesInput | EquipmentUpdateManyWithWhereWithoutEquipment_profilesInput[]
    deleteMany?: EquipmentScalarWhereInput | EquipmentScalarWhereInput[]
  }

  export type EquipmentUncheckedUpdateManyWithoutEquipment_profilesNestedInput = {
    create?: XOR<EquipmentCreateWithoutEquipment_profilesInput, EquipmentUncheckedCreateWithoutEquipment_profilesInput> | EquipmentCreateWithoutEquipment_profilesInput[] | EquipmentUncheckedCreateWithoutEquipment_profilesInput[]
    connectOrCreate?: EquipmentCreateOrConnectWithoutEquipment_profilesInput | EquipmentCreateOrConnectWithoutEquipment_profilesInput[]
    upsert?: EquipmentUpsertWithWhereUniqueWithoutEquipment_profilesInput | EquipmentUpsertWithWhereUniqueWithoutEquipment_profilesInput[]
    createMany?: EquipmentCreateManyEquipment_profilesInputEnvelope
    set?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    disconnect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    delete?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    connect?: EquipmentWhereUniqueInput | EquipmentWhereUniqueInput[]
    update?: EquipmentUpdateWithWhereUniqueWithoutEquipment_profilesInput | EquipmentUpdateWithWhereUniqueWithoutEquipment_profilesInput[]
    updateMany?: EquipmentUpdateManyWithWhereWithoutEquipment_profilesInput | EquipmentUpdateManyWithWhereWithoutEquipment_profilesInput[]
    deleteMany?: EquipmentScalarWhereInput | EquipmentScalarWhereInput[]
  }

  export type DirectoryHistorialCreateNestedManyWithoutEquipmentsInput = {
    create?: XOR<DirectoryHistorialCreateWithoutEquipmentsInput, DirectoryHistorialUncheckedCreateWithoutEquipmentsInput> | DirectoryHistorialCreateWithoutEquipmentsInput[] | DirectoryHistorialUncheckedCreateWithoutEquipmentsInput[]
    connectOrCreate?: DirectoryHistorialCreateOrConnectWithoutEquipmentsInput | DirectoryHistorialCreateOrConnectWithoutEquipmentsInput[]
    createMany?: DirectoryHistorialCreateManyEquipmentsInputEnvelope
    connect?: DirectoryHistorialWhereUniqueInput | DirectoryHistorialWhereUniqueInput[]
  }

  export type EquipmentProfileCreateNestedOneWithoutEquipmentsInput = {
    create?: XOR<EquipmentProfileCreateWithoutEquipmentsInput, EquipmentProfileUncheckedCreateWithoutEquipmentsInput>
    connectOrCreate?: EquipmentProfileCreateOrConnectWithoutEquipmentsInput
    connect?: EquipmentProfileWhereUniqueInput
  }

  export type ParameterCreateNestedManyWithoutEquipmentsInput = {
    create?: XOR<ParameterCreateWithoutEquipmentsInput, ParameterUncheckedCreateWithoutEquipmentsInput> | ParameterCreateWithoutEquipmentsInput[] | ParameterUncheckedCreateWithoutEquipmentsInput[]
    connectOrCreate?: ParameterCreateOrConnectWithoutEquipmentsInput | ParameterCreateOrConnectWithoutEquipmentsInput[]
    createMany?: ParameterCreateManyEquipmentsInputEnvelope
    connect?: ParameterWhereUniqueInput | ParameterWhereUniqueInput[]
  }

  export type DirectoryHistorialUncheckedCreateNestedManyWithoutEquipmentsInput = {
    create?: XOR<DirectoryHistorialCreateWithoutEquipmentsInput, DirectoryHistorialUncheckedCreateWithoutEquipmentsInput> | DirectoryHistorialCreateWithoutEquipmentsInput[] | DirectoryHistorialUncheckedCreateWithoutEquipmentsInput[]
    connectOrCreate?: DirectoryHistorialCreateOrConnectWithoutEquipmentsInput | DirectoryHistorialCreateOrConnectWithoutEquipmentsInput[]
    createMany?: DirectoryHistorialCreateManyEquipmentsInputEnvelope
    connect?: DirectoryHistorialWhereUniqueInput | DirectoryHistorialWhereUniqueInput[]
  }

  export type ParameterUncheckedCreateNestedManyWithoutEquipmentsInput = {
    create?: XOR<ParameterCreateWithoutEquipmentsInput, ParameterUncheckedCreateWithoutEquipmentsInput> | ParameterCreateWithoutEquipmentsInput[] | ParameterUncheckedCreateWithoutEquipmentsInput[]
    connectOrCreate?: ParameterCreateOrConnectWithoutEquipmentsInput | ParameterCreateOrConnectWithoutEquipmentsInput[]
    createMany?: ParameterCreateManyEquipmentsInputEnvelope
    connect?: ParameterWhereUniqueInput | ParameterWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DirectoryHistorialUpdateManyWithoutEquipmentsNestedInput = {
    create?: XOR<DirectoryHistorialCreateWithoutEquipmentsInput, DirectoryHistorialUncheckedCreateWithoutEquipmentsInput> | DirectoryHistorialCreateWithoutEquipmentsInput[] | DirectoryHistorialUncheckedCreateWithoutEquipmentsInput[]
    connectOrCreate?: DirectoryHistorialCreateOrConnectWithoutEquipmentsInput | DirectoryHistorialCreateOrConnectWithoutEquipmentsInput[]
    upsert?: DirectoryHistorialUpsertWithWhereUniqueWithoutEquipmentsInput | DirectoryHistorialUpsertWithWhereUniqueWithoutEquipmentsInput[]
    createMany?: DirectoryHistorialCreateManyEquipmentsInputEnvelope
    set?: DirectoryHistorialWhereUniqueInput | DirectoryHistorialWhereUniqueInput[]
    disconnect?: DirectoryHistorialWhereUniqueInput | DirectoryHistorialWhereUniqueInput[]
    delete?: DirectoryHistorialWhereUniqueInput | DirectoryHistorialWhereUniqueInput[]
    connect?: DirectoryHistorialWhereUniqueInput | DirectoryHistorialWhereUniqueInput[]
    update?: DirectoryHistorialUpdateWithWhereUniqueWithoutEquipmentsInput | DirectoryHistorialUpdateWithWhereUniqueWithoutEquipmentsInput[]
    updateMany?: DirectoryHistorialUpdateManyWithWhereWithoutEquipmentsInput | DirectoryHistorialUpdateManyWithWhereWithoutEquipmentsInput[]
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

  export type ParameterUpdateManyWithoutEquipmentsNestedInput = {
    create?: XOR<ParameterCreateWithoutEquipmentsInput, ParameterUncheckedCreateWithoutEquipmentsInput> | ParameterCreateWithoutEquipmentsInput[] | ParameterUncheckedCreateWithoutEquipmentsInput[]
    connectOrCreate?: ParameterCreateOrConnectWithoutEquipmentsInput | ParameterCreateOrConnectWithoutEquipmentsInput[]
    upsert?: ParameterUpsertWithWhereUniqueWithoutEquipmentsInput | ParameterUpsertWithWhereUniqueWithoutEquipmentsInput[]
    createMany?: ParameterCreateManyEquipmentsInputEnvelope
    set?: ParameterWhereUniqueInput | ParameterWhereUniqueInput[]
    disconnect?: ParameterWhereUniqueInput | ParameterWhereUniqueInput[]
    delete?: ParameterWhereUniqueInput | ParameterWhereUniqueInput[]
    connect?: ParameterWhereUniqueInput | ParameterWhereUniqueInput[]
    update?: ParameterUpdateWithWhereUniqueWithoutEquipmentsInput | ParameterUpdateWithWhereUniqueWithoutEquipmentsInput[]
    updateMany?: ParameterUpdateManyWithWhereWithoutEquipmentsInput | ParameterUpdateManyWithWhereWithoutEquipmentsInput[]
    deleteMany?: ParameterScalarWhereInput | ParameterScalarWhereInput[]
  }

  export type DirectoryHistorialUncheckedUpdateManyWithoutEquipmentsNestedInput = {
    create?: XOR<DirectoryHistorialCreateWithoutEquipmentsInput, DirectoryHistorialUncheckedCreateWithoutEquipmentsInput> | DirectoryHistorialCreateWithoutEquipmentsInput[] | DirectoryHistorialUncheckedCreateWithoutEquipmentsInput[]
    connectOrCreate?: DirectoryHistorialCreateOrConnectWithoutEquipmentsInput | DirectoryHistorialCreateOrConnectWithoutEquipmentsInput[]
    upsert?: DirectoryHistorialUpsertWithWhereUniqueWithoutEquipmentsInput | DirectoryHistorialUpsertWithWhereUniqueWithoutEquipmentsInput[]
    createMany?: DirectoryHistorialCreateManyEquipmentsInputEnvelope
    set?: DirectoryHistorialWhereUniqueInput | DirectoryHistorialWhereUniqueInput[]
    disconnect?: DirectoryHistorialWhereUniqueInput | DirectoryHistorialWhereUniqueInput[]
    delete?: DirectoryHistorialWhereUniqueInput | DirectoryHistorialWhereUniqueInput[]
    connect?: DirectoryHistorialWhereUniqueInput | DirectoryHistorialWhereUniqueInput[]
    update?: DirectoryHistorialUpdateWithWhereUniqueWithoutEquipmentsInput | DirectoryHistorialUpdateWithWhereUniqueWithoutEquipmentsInput[]
    updateMany?: DirectoryHistorialUpdateManyWithWhereWithoutEquipmentsInput | DirectoryHistorialUpdateManyWithWhereWithoutEquipmentsInput[]
    deleteMany?: DirectoryHistorialScalarWhereInput | DirectoryHistorialScalarWhereInput[]
  }

  export type ParameterUncheckedUpdateManyWithoutEquipmentsNestedInput = {
    create?: XOR<ParameterCreateWithoutEquipmentsInput, ParameterUncheckedCreateWithoutEquipmentsInput> | ParameterCreateWithoutEquipmentsInput[] | ParameterUncheckedCreateWithoutEquipmentsInput[]
    connectOrCreate?: ParameterCreateOrConnectWithoutEquipmentsInput | ParameterCreateOrConnectWithoutEquipmentsInput[]
    upsert?: ParameterUpsertWithWhereUniqueWithoutEquipmentsInput | ParameterUpsertWithWhereUniqueWithoutEquipmentsInput[]
    createMany?: ParameterCreateManyEquipmentsInputEnvelope
    set?: ParameterWhereUniqueInput | ParameterWhereUniqueInput[]
    disconnect?: ParameterWhereUniqueInput | ParameterWhereUniqueInput[]
    delete?: ParameterWhereUniqueInput | ParameterWhereUniqueInput[]
    connect?: ParameterWhereUniqueInput | ParameterWhereUniqueInput[]
    update?: ParameterUpdateWithWhereUniqueWithoutEquipmentsInput | ParameterUpdateWithWhereUniqueWithoutEquipmentsInput[]
    updateMany?: ParameterUpdateManyWithWhereWithoutEquipmentsInput | ParameterUpdateManyWithWhereWithoutEquipmentsInput[]
    deleteMany?: ParameterScalarWhereInput | ParameterScalarWhereInput[]
  }

  export type ResultCreateNestedOneWithoutHistogram_resultsInput = {
    create?: XOR<ResultCreateWithoutHistogram_resultsInput, ResultUncheckedCreateWithoutHistogram_resultsInput>
    connectOrCreate?: ResultCreateOrConnectWithoutHistogram_resultsInput
    connect?: ResultWhereUniqueInput
  }

  export type ResultUpdateOneWithoutHistogram_resultsNestedInput = {
    create?: XOR<ResultCreateWithoutHistogram_resultsInput, ResultUncheckedCreateWithoutHistogram_resultsInput>
    connectOrCreate?: ResultCreateOrConnectWithoutHistogram_resultsInput
    upsert?: ResultUpsertWithoutHistogram_resultsInput
    disconnect?: ResultWhereInput | boolean
    delete?: ResultWhereInput | boolean
    connect?: ResultWhereUniqueInput
    update?: XOR<XOR<ResultUpdateToOneWithWhereWithoutHistogram_resultsInput, ResultUpdateWithoutHistogram_resultsInput>, ResultUncheckedUpdateWithoutHistogram_resultsInput>
  }

  export type EquipmentCreateNestedOneWithoutParametersInput = {
    create?: XOR<EquipmentCreateWithoutParametersInput, EquipmentUncheckedCreateWithoutParametersInput>
    connectOrCreate?: EquipmentCreateOrConnectWithoutParametersInput
    connect?: EquipmentWhereUniqueInput
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

  export type ResultUpdateOneWithoutParametersNestedInput = {
    create?: XOR<ResultCreateWithoutParametersInput, ResultUncheckedCreateWithoutParametersInput>
    connectOrCreate?: ResultCreateOrConnectWithoutParametersInput
    upsert?: ResultUpsertWithoutParametersInput
    disconnect?: ResultWhereInput | boolean
    delete?: ResultWhereInput | boolean
    connect?: ResultWhereUniqueInput
    update?: XOR<XOR<ResultUpdateToOneWithWhereWithoutParametersInput, ResultUpdateWithoutParametersInput>, ResultUncheckedUpdateWithoutParametersInput>
  }

  export type HistogramResultCreateNestedManyWithoutResultsInput = {
    create?: XOR<HistogramResultCreateWithoutResultsInput, HistogramResultUncheckedCreateWithoutResultsInput> | HistogramResultCreateWithoutResultsInput[] | HistogramResultUncheckedCreateWithoutResultsInput[]
    connectOrCreate?: HistogramResultCreateOrConnectWithoutResultsInput | HistogramResultCreateOrConnectWithoutResultsInput[]
    createMany?: HistogramResultCreateManyResultsInputEnvelope
    connect?: HistogramResultWhereUniqueInput | HistogramResultWhereUniqueInput[]
  }

  export type ParameterCreateNestedManyWithoutResultsInput = {
    create?: XOR<ParameterCreateWithoutResultsInput, ParameterUncheckedCreateWithoutResultsInput> | ParameterCreateWithoutResultsInput[] | ParameterUncheckedCreateWithoutResultsInput[]
    connectOrCreate?: ParameterCreateOrConnectWithoutResultsInput | ParameterCreateOrConnectWithoutResultsInput[]
    createMany?: ParameterCreateManyResultsInputEnvelope
    connect?: ParameterWhereUniqueInput | ParameterWhereUniqueInput[]
  }

  export type HistogramResultUncheckedCreateNestedManyWithoutResultsInput = {
    create?: XOR<HistogramResultCreateWithoutResultsInput, HistogramResultUncheckedCreateWithoutResultsInput> | HistogramResultCreateWithoutResultsInput[] | HistogramResultUncheckedCreateWithoutResultsInput[]
    connectOrCreate?: HistogramResultCreateOrConnectWithoutResultsInput | HistogramResultCreateOrConnectWithoutResultsInput[]
    createMany?: HistogramResultCreateManyResultsInputEnvelope
    connect?: HistogramResultWhereUniqueInput | HistogramResultWhereUniqueInput[]
  }

  export type ParameterUncheckedCreateNestedManyWithoutResultsInput = {
    create?: XOR<ParameterCreateWithoutResultsInput, ParameterUncheckedCreateWithoutResultsInput> | ParameterCreateWithoutResultsInput[] | ParameterUncheckedCreateWithoutResultsInput[]
    connectOrCreate?: ParameterCreateOrConnectWithoutResultsInput | ParameterCreateOrConnectWithoutResultsInput[]
    createMany?: ParameterCreateManyResultsInputEnvelope
    connect?: ParameterWhereUniqueInput | ParameterWhereUniqueInput[]
  }

  export type HistogramResultUpdateManyWithoutResultsNestedInput = {
    create?: XOR<HistogramResultCreateWithoutResultsInput, HistogramResultUncheckedCreateWithoutResultsInput> | HistogramResultCreateWithoutResultsInput[] | HistogramResultUncheckedCreateWithoutResultsInput[]
    connectOrCreate?: HistogramResultCreateOrConnectWithoutResultsInput | HistogramResultCreateOrConnectWithoutResultsInput[]
    upsert?: HistogramResultUpsertWithWhereUniqueWithoutResultsInput | HistogramResultUpsertWithWhereUniqueWithoutResultsInput[]
    createMany?: HistogramResultCreateManyResultsInputEnvelope
    set?: HistogramResultWhereUniqueInput | HistogramResultWhereUniqueInput[]
    disconnect?: HistogramResultWhereUniqueInput | HistogramResultWhereUniqueInput[]
    delete?: HistogramResultWhereUniqueInput | HistogramResultWhereUniqueInput[]
    connect?: HistogramResultWhereUniqueInput | HistogramResultWhereUniqueInput[]
    update?: HistogramResultUpdateWithWhereUniqueWithoutResultsInput | HistogramResultUpdateWithWhereUniqueWithoutResultsInput[]
    updateMany?: HistogramResultUpdateManyWithWhereWithoutResultsInput | HistogramResultUpdateManyWithWhereWithoutResultsInput[]
    deleteMany?: HistogramResultScalarWhereInput | HistogramResultScalarWhereInput[]
  }

  export type ParameterUpdateManyWithoutResultsNestedInput = {
    create?: XOR<ParameterCreateWithoutResultsInput, ParameterUncheckedCreateWithoutResultsInput> | ParameterCreateWithoutResultsInput[] | ParameterUncheckedCreateWithoutResultsInput[]
    connectOrCreate?: ParameterCreateOrConnectWithoutResultsInput | ParameterCreateOrConnectWithoutResultsInput[]
    upsert?: ParameterUpsertWithWhereUniqueWithoutResultsInput | ParameterUpsertWithWhereUniqueWithoutResultsInput[]
    createMany?: ParameterCreateManyResultsInputEnvelope
    set?: ParameterWhereUniqueInput | ParameterWhereUniqueInput[]
    disconnect?: ParameterWhereUniqueInput | ParameterWhereUniqueInput[]
    delete?: ParameterWhereUniqueInput | ParameterWhereUniqueInput[]
    connect?: ParameterWhereUniqueInput | ParameterWhereUniqueInput[]
    update?: ParameterUpdateWithWhereUniqueWithoutResultsInput | ParameterUpdateWithWhereUniqueWithoutResultsInput[]
    updateMany?: ParameterUpdateManyWithWhereWithoutResultsInput | ParameterUpdateManyWithWhereWithoutResultsInput[]
    deleteMany?: ParameterScalarWhereInput | ParameterScalarWhereInput[]
  }

  export type HistogramResultUncheckedUpdateManyWithoutResultsNestedInput = {
    create?: XOR<HistogramResultCreateWithoutResultsInput, HistogramResultUncheckedCreateWithoutResultsInput> | HistogramResultCreateWithoutResultsInput[] | HistogramResultUncheckedCreateWithoutResultsInput[]
    connectOrCreate?: HistogramResultCreateOrConnectWithoutResultsInput | HistogramResultCreateOrConnectWithoutResultsInput[]
    upsert?: HistogramResultUpsertWithWhereUniqueWithoutResultsInput | HistogramResultUpsertWithWhereUniqueWithoutResultsInput[]
    createMany?: HistogramResultCreateManyResultsInputEnvelope
    set?: HistogramResultWhereUniqueInput | HistogramResultWhereUniqueInput[]
    disconnect?: HistogramResultWhereUniqueInput | HistogramResultWhereUniqueInput[]
    delete?: HistogramResultWhereUniqueInput | HistogramResultWhereUniqueInput[]
    connect?: HistogramResultWhereUniqueInput | HistogramResultWhereUniqueInput[]
    update?: HistogramResultUpdateWithWhereUniqueWithoutResultsInput | HistogramResultUpdateWithWhereUniqueWithoutResultsInput[]
    updateMany?: HistogramResultUpdateManyWithWhereWithoutResultsInput | HistogramResultUpdateManyWithWhereWithoutResultsInput[]
    deleteMany?: HistogramResultScalarWhereInput | HistogramResultScalarWhereInput[]
  }

  export type ParameterUncheckedUpdateManyWithoutResultsNestedInput = {
    create?: XOR<ParameterCreateWithoutResultsInput, ParameterUncheckedCreateWithoutResultsInput> | ParameterCreateWithoutResultsInput[] | ParameterUncheckedCreateWithoutResultsInput[]
    connectOrCreate?: ParameterCreateOrConnectWithoutResultsInput | ParameterCreateOrConnectWithoutResultsInput[]
    upsert?: ParameterUpsertWithWhereUniqueWithoutResultsInput | ParameterUpsertWithWhereUniqueWithoutResultsInput[]
    createMany?: ParameterCreateManyResultsInputEnvelope
    set?: ParameterWhereUniqueInput | ParameterWhereUniqueInput[]
    disconnect?: ParameterWhereUniqueInput | ParameterWhereUniqueInput[]
    delete?: ParameterWhereUniqueInput | ParameterWhereUniqueInput[]
    connect?: ParameterWhereUniqueInput | ParameterWhereUniqueInput[]
    update?: ParameterUpdateWithWhereUniqueWithoutResultsInput | ParameterUpdateWithWhereUniqueWithoutResultsInput[]
    updateMany?: ParameterUpdateManyWithWhereWithoutResultsInput | ParameterUpdateManyWithWhereWithoutResultsInput[]
    deleteMany?: ParameterScalarWhereInput | ParameterScalarWhereInput[]
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

  export type EquipmentProfileCreateWithoutCommunication_profilesInput = {
    id: bigint | number
    name?: string | null
    equipments?: EquipmentCreateNestedManyWithoutEquipment_profilesInput
  }

  export type EquipmentProfileUncheckedCreateWithoutCommunication_profilesInput = {
    id: bigint | number
    name?: string | null
    equipments?: EquipmentUncheckedCreateNestedManyWithoutEquipment_profilesInput
  }

  export type EquipmentProfileCreateOrConnectWithoutCommunication_profilesInput = {
    where: EquipmentProfileWhereUniqueInput
    create: XOR<EquipmentProfileCreateWithoutCommunication_profilesInput, EquipmentProfileUncheckedCreateWithoutCommunication_profilesInput>
  }

  export type EquipmentProfileCreateManyCommunication_profilesInputEnvelope = {
    data: EquipmentProfileCreateManyCommunication_profilesInput | EquipmentProfileCreateManyCommunication_profilesInput[]
    skipDuplicates?: boolean
  }

  export type EquipmentProfileUpsertWithWhereUniqueWithoutCommunication_profilesInput = {
    where: EquipmentProfileWhereUniqueInput
    update: XOR<EquipmentProfileUpdateWithoutCommunication_profilesInput, EquipmentProfileUncheckedUpdateWithoutCommunication_profilesInput>
    create: XOR<EquipmentProfileCreateWithoutCommunication_profilesInput, EquipmentProfileUncheckedCreateWithoutCommunication_profilesInput>
  }

  export type EquipmentProfileUpdateWithWhereUniqueWithoutCommunication_profilesInput = {
    where: EquipmentProfileWhereUniqueInput
    data: XOR<EquipmentProfileUpdateWithoutCommunication_profilesInput, EquipmentProfileUncheckedUpdateWithoutCommunication_profilesInput>
  }

  export type EquipmentProfileUpdateManyWithWhereWithoutCommunication_profilesInput = {
    where: EquipmentProfileScalarWhereInput
    data: XOR<EquipmentProfileUpdateManyMutationInput, EquipmentProfileUncheckedUpdateManyWithoutCommunication_profilesInput>
  }

  export type EquipmentProfileScalarWhereInput = {
    AND?: EquipmentProfileScalarWhereInput | EquipmentProfileScalarWhereInput[]
    OR?: EquipmentProfileScalarWhereInput[]
    NOT?: EquipmentProfileScalarWhereInput | EquipmentProfileScalarWhereInput[]
    id?: BigIntFilter<"EquipmentProfile"> | bigint | number
    communication_profile?: StringNullableFilter<"EquipmentProfile"> | string | null
    name?: StringNullableFilter<"EquipmentProfile"> | string | null
  }

  export type EquipmentCreateWithoutDirectory_historialsInput = {
    id: bigint | number
    name?: string | null
    created_at?: Date | string | null
    modified_at?: Date | string | null
    last_connection?: Date | string | null
    connection_status?: string | null
    equipment_profiles?: EquipmentProfileCreateNestedOneWithoutEquipmentsInput
    parameters?: ParameterCreateNestedManyWithoutEquipmentsInput
  }

  export type EquipmentUncheckedCreateWithoutDirectory_historialsInput = {
    id: bigint | number
    profile_id?: bigint | number | null
    name?: string | null
    created_at?: Date | string | null
    modified_at?: Date | string | null
    last_connection?: Date | string | null
    connection_status?: string | null
    parameters?: ParameterUncheckedCreateNestedManyWithoutEquipmentsInput
  }

  export type EquipmentCreateOrConnectWithoutDirectory_historialsInput = {
    where: EquipmentWhereUniqueInput
    create: XOR<EquipmentCreateWithoutDirectory_historialsInput, EquipmentUncheckedCreateWithoutDirectory_historialsInput>
  }

  export type EquipmentUpsertWithoutDirectory_historialsInput = {
    update: XOR<EquipmentUpdateWithoutDirectory_historialsInput, EquipmentUncheckedUpdateWithoutDirectory_historialsInput>
    create: XOR<EquipmentCreateWithoutDirectory_historialsInput, EquipmentUncheckedCreateWithoutDirectory_historialsInput>
    where?: EquipmentWhereInput
  }

  export type EquipmentUpdateToOneWithWhereWithoutDirectory_historialsInput = {
    where?: EquipmentWhereInput
    data: XOR<EquipmentUpdateWithoutDirectory_historialsInput, EquipmentUncheckedUpdateWithoutDirectory_historialsInput>
  }

  export type EquipmentUpdateWithoutDirectory_historialsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_connection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    connection_status?: NullableStringFieldUpdateOperationsInput | string | null
    equipment_profiles?: EquipmentProfileUpdateOneWithoutEquipmentsNestedInput
    parameters?: ParameterUpdateManyWithoutEquipmentsNestedInput
  }

  export type EquipmentUncheckedUpdateWithoutDirectory_historialsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    profile_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_connection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    connection_status?: NullableStringFieldUpdateOperationsInput | string | null
    parameters?: ParameterUncheckedUpdateManyWithoutEquipmentsNestedInput
  }

  export type CommunicationProfilesCreateWithoutEquipment_profilesInput = {
    id: string
    name?: string | null
    checksum_regex?: string | null
    type?: string | null
  }

  export type CommunicationProfilesUncheckedCreateWithoutEquipment_profilesInput = {
    id: string
    name?: string | null
    checksum_regex?: string | null
    type?: string | null
  }

  export type CommunicationProfilesCreateOrConnectWithoutEquipment_profilesInput = {
    where: CommunicationProfilesWhereUniqueInput
    create: XOR<CommunicationProfilesCreateWithoutEquipment_profilesInput, CommunicationProfilesUncheckedCreateWithoutEquipment_profilesInput>
  }

  export type EquipmentCreateWithoutEquipment_profilesInput = {
    id: bigint | number
    name?: string | null
    created_at?: Date | string | null
    modified_at?: Date | string | null
    last_connection?: Date | string | null
    connection_status?: string | null
    directory_historials?: DirectoryHistorialCreateNestedManyWithoutEquipmentsInput
    parameters?: ParameterCreateNestedManyWithoutEquipmentsInput
  }

  export type EquipmentUncheckedCreateWithoutEquipment_profilesInput = {
    id: bigint | number
    name?: string | null
    created_at?: Date | string | null
    modified_at?: Date | string | null
    last_connection?: Date | string | null
    connection_status?: string | null
    directory_historials?: DirectoryHistorialUncheckedCreateNestedManyWithoutEquipmentsInput
    parameters?: ParameterUncheckedCreateNestedManyWithoutEquipmentsInput
  }

  export type EquipmentCreateOrConnectWithoutEquipment_profilesInput = {
    where: EquipmentWhereUniqueInput
    create: XOR<EquipmentCreateWithoutEquipment_profilesInput, EquipmentUncheckedCreateWithoutEquipment_profilesInput>
  }

  export type EquipmentCreateManyEquipment_profilesInputEnvelope = {
    data: EquipmentCreateManyEquipment_profilesInput | EquipmentCreateManyEquipment_profilesInput[]
    skipDuplicates?: boolean
  }

  export type CommunicationProfilesUpsertWithoutEquipment_profilesInput = {
    update: XOR<CommunicationProfilesUpdateWithoutEquipment_profilesInput, CommunicationProfilesUncheckedUpdateWithoutEquipment_profilesInput>
    create: XOR<CommunicationProfilesCreateWithoutEquipment_profilesInput, CommunicationProfilesUncheckedCreateWithoutEquipment_profilesInput>
    where?: CommunicationProfilesWhereInput
  }

  export type CommunicationProfilesUpdateToOneWithWhereWithoutEquipment_profilesInput = {
    where?: CommunicationProfilesWhereInput
    data: XOR<CommunicationProfilesUpdateWithoutEquipment_profilesInput, CommunicationProfilesUncheckedUpdateWithoutEquipment_profilesInput>
  }

  export type CommunicationProfilesUpdateWithoutEquipment_profilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    checksum_regex?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommunicationProfilesUncheckedUpdateWithoutEquipment_profilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    checksum_regex?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EquipmentUpsertWithWhereUniqueWithoutEquipment_profilesInput = {
    where: EquipmentWhereUniqueInput
    update: XOR<EquipmentUpdateWithoutEquipment_profilesInput, EquipmentUncheckedUpdateWithoutEquipment_profilesInput>
    create: XOR<EquipmentCreateWithoutEquipment_profilesInput, EquipmentUncheckedCreateWithoutEquipment_profilesInput>
  }

  export type EquipmentUpdateWithWhereUniqueWithoutEquipment_profilesInput = {
    where: EquipmentWhereUniqueInput
    data: XOR<EquipmentUpdateWithoutEquipment_profilesInput, EquipmentUncheckedUpdateWithoutEquipment_profilesInput>
  }

  export type EquipmentUpdateManyWithWhereWithoutEquipment_profilesInput = {
    where: EquipmentScalarWhereInput
    data: XOR<EquipmentUpdateManyMutationInput, EquipmentUncheckedUpdateManyWithoutEquipment_profilesInput>
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
  }

  export type DirectoryHistorialCreateWithoutEquipmentsInput = {
    id: bigint | number
    filename?: string | null
    filepath?: string | null
    modified_at?: bigint | number | null
  }

  export type DirectoryHistorialUncheckedCreateWithoutEquipmentsInput = {
    id: bigint | number
    filename?: string | null
    filepath?: string | null
    modified_at?: bigint | number | null
  }

  export type DirectoryHistorialCreateOrConnectWithoutEquipmentsInput = {
    where: DirectoryHistorialWhereUniqueInput
    create: XOR<DirectoryHistorialCreateWithoutEquipmentsInput, DirectoryHistorialUncheckedCreateWithoutEquipmentsInput>
  }

  export type DirectoryHistorialCreateManyEquipmentsInputEnvelope = {
    data: DirectoryHistorialCreateManyEquipmentsInput | DirectoryHistorialCreateManyEquipmentsInput[]
    skipDuplicates?: boolean
  }

  export type EquipmentProfileCreateWithoutEquipmentsInput = {
    id: bigint | number
    name?: string | null
    communication_profiles?: CommunicationProfilesCreateNestedOneWithoutEquipment_profilesInput
  }

  export type EquipmentProfileUncheckedCreateWithoutEquipmentsInput = {
    id: bigint | number
    communication_profile?: string | null
    name?: string | null
  }

  export type EquipmentProfileCreateOrConnectWithoutEquipmentsInput = {
    where: EquipmentProfileWhereUniqueInput
    create: XOR<EquipmentProfileCreateWithoutEquipmentsInput, EquipmentProfileUncheckedCreateWithoutEquipmentsInput>
  }

  export type ParameterCreateWithoutEquipmentsInput = {
    id: bigint | number
    description?: string | null
    value?: string | null
    unit_measurement?: string | null
    max_range?: string | null
    min_range?: string | null
    created_at?: Date | string | null
    modified_at?: Date | string | null
    results?: ResultCreateNestedOneWithoutParametersInput
  }

  export type ParameterUncheckedCreateWithoutEquipmentsInput = {
    id: bigint | number
    result_folio?: string | null
    description?: string | null
    value?: string | null
    unit_measurement?: string | null
    max_range?: string | null
    min_range?: string | null
    created_at?: Date | string | null
    modified_at?: Date | string | null
  }

  export type ParameterCreateOrConnectWithoutEquipmentsInput = {
    where: ParameterWhereUniqueInput
    create: XOR<ParameterCreateWithoutEquipmentsInput, ParameterUncheckedCreateWithoutEquipmentsInput>
  }

  export type ParameterCreateManyEquipmentsInputEnvelope = {
    data: ParameterCreateManyEquipmentsInput | ParameterCreateManyEquipmentsInput[]
    skipDuplicates?: boolean
  }

  export type DirectoryHistorialUpsertWithWhereUniqueWithoutEquipmentsInput = {
    where: DirectoryHistorialWhereUniqueInput
    update: XOR<DirectoryHistorialUpdateWithoutEquipmentsInput, DirectoryHistorialUncheckedUpdateWithoutEquipmentsInput>
    create: XOR<DirectoryHistorialCreateWithoutEquipmentsInput, DirectoryHistorialUncheckedCreateWithoutEquipmentsInput>
  }

  export type DirectoryHistorialUpdateWithWhereUniqueWithoutEquipmentsInput = {
    where: DirectoryHistorialWhereUniqueInput
    data: XOR<DirectoryHistorialUpdateWithoutEquipmentsInput, DirectoryHistorialUncheckedUpdateWithoutEquipmentsInput>
  }

  export type DirectoryHistorialUpdateManyWithWhereWithoutEquipmentsInput = {
    where: DirectoryHistorialScalarWhereInput
    data: XOR<DirectoryHistorialUpdateManyMutationInput, DirectoryHistorialUncheckedUpdateManyWithoutEquipmentsInput>
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
    communication_profiles?: CommunicationProfilesUpdateOneWithoutEquipment_profilesNestedInput
  }

  export type EquipmentProfileUncheckedUpdateWithoutEquipmentsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    communication_profile?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ParameterUpsertWithWhereUniqueWithoutEquipmentsInput = {
    where: ParameterWhereUniqueInput
    update: XOR<ParameterUpdateWithoutEquipmentsInput, ParameterUncheckedUpdateWithoutEquipmentsInput>
    create: XOR<ParameterCreateWithoutEquipmentsInput, ParameterUncheckedCreateWithoutEquipmentsInput>
  }

  export type ParameterUpdateWithWhereUniqueWithoutEquipmentsInput = {
    where: ParameterWhereUniqueInput
    data: XOR<ParameterUpdateWithoutEquipmentsInput, ParameterUncheckedUpdateWithoutEquipmentsInput>
  }

  export type ParameterUpdateManyWithWhereWithoutEquipmentsInput = {
    where: ParameterScalarWhereInput
    data: XOR<ParameterUpdateManyMutationInput, ParameterUncheckedUpdateManyWithoutEquipmentsInput>
  }

  export type ParameterScalarWhereInput = {
    AND?: ParameterScalarWhereInput | ParameterScalarWhereInput[]
    OR?: ParameterScalarWhereInput[]
    NOT?: ParameterScalarWhereInput | ParameterScalarWhereInput[]
    id?: BigIntFilter<"Parameter"> | bigint | number
    result_folio?: StringNullableFilter<"Parameter"> | string | null
    equipment_id?: BigIntNullableFilter<"Parameter"> | bigint | number | null
    description?: StringNullableFilter<"Parameter"> | string | null
    value?: StringNullableFilter<"Parameter"> | string | null
    unit_measurement?: StringNullableFilter<"Parameter"> | string | null
    max_range?: StringNullableFilter<"Parameter"> | string | null
    min_range?: StringNullableFilter<"Parameter"> | string | null
    created_at?: DateTimeNullableFilter<"Parameter"> | Date | string | null
    modified_at?: DateTimeNullableFilter<"Parameter"> | Date | string | null
  }

  export type ResultCreateWithoutHistogram_resultsInput = {
    folio: string
    sample_id?: string | null
    pacient_name?: string | null
    sex?: string | null
    created_at?: Date | string | null
    modified_at?: Date | string | null
    parameters?: ParameterCreateNestedManyWithoutResultsInput
  }

  export type ResultUncheckedCreateWithoutHistogram_resultsInput = {
    folio: string
    sample_id?: string | null
    pacient_name?: string | null
    sex?: string | null
    created_at?: Date | string | null
    modified_at?: Date | string | null
    parameters?: ParameterUncheckedCreateNestedManyWithoutResultsInput
  }

  export type ResultCreateOrConnectWithoutHistogram_resultsInput = {
    where: ResultWhereUniqueInput
    create: XOR<ResultCreateWithoutHistogram_resultsInput, ResultUncheckedCreateWithoutHistogram_resultsInput>
  }

  export type ResultUpsertWithoutHistogram_resultsInput = {
    update: XOR<ResultUpdateWithoutHistogram_resultsInput, ResultUncheckedUpdateWithoutHistogram_resultsInput>
    create: XOR<ResultCreateWithoutHistogram_resultsInput, ResultUncheckedCreateWithoutHistogram_resultsInput>
    where?: ResultWhereInput
  }

  export type ResultUpdateToOneWithWhereWithoutHistogram_resultsInput = {
    where?: ResultWhereInput
    data: XOR<ResultUpdateWithoutHistogram_resultsInput, ResultUncheckedUpdateWithoutHistogram_resultsInput>
  }

  export type ResultUpdateWithoutHistogram_resultsInput = {
    folio?: StringFieldUpdateOperationsInput | string
    sample_id?: NullableStringFieldUpdateOperationsInput | string | null
    pacient_name?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parameters?: ParameterUpdateManyWithoutResultsNestedInput
  }

  export type ResultUncheckedUpdateWithoutHistogram_resultsInput = {
    folio?: StringFieldUpdateOperationsInput | string
    sample_id?: NullableStringFieldUpdateOperationsInput | string | null
    pacient_name?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parameters?: ParameterUncheckedUpdateManyWithoutResultsNestedInput
  }

  export type EquipmentCreateWithoutParametersInput = {
    id: bigint | number
    name?: string | null
    created_at?: Date | string | null
    modified_at?: Date | string | null
    last_connection?: Date | string | null
    connection_status?: string | null
    directory_historials?: DirectoryHistorialCreateNestedManyWithoutEquipmentsInput
    equipment_profiles?: EquipmentProfileCreateNestedOneWithoutEquipmentsInput
  }

  export type EquipmentUncheckedCreateWithoutParametersInput = {
    id: bigint | number
    profile_id?: bigint | number | null
    name?: string | null
    created_at?: Date | string | null
    modified_at?: Date | string | null
    last_connection?: Date | string | null
    connection_status?: string | null
    directory_historials?: DirectoryHistorialUncheckedCreateNestedManyWithoutEquipmentsInput
  }

  export type EquipmentCreateOrConnectWithoutParametersInput = {
    where: EquipmentWhereUniqueInput
    create: XOR<EquipmentCreateWithoutParametersInput, EquipmentUncheckedCreateWithoutParametersInput>
  }

  export type ResultCreateWithoutParametersInput = {
    folio: string
    sample_id?: string | null
    pacient_name?: string | null
    sex?: string | null
    created_at?: Date | string | null
    modified_at?: Date | string | null
    histogram_results?: HistogramResultCreateNestedManyWithoutResultsInput
  }

  export type ResultUncheckedCreateWithoutParametersInput = {
    folio: string
    sample_id?: string | null
    pacient_name?: string | null
    sex?: string | null
    created_at?: Date | string | null
    modified_at?: Date | string | null
    histogram_results?: HistogramResultUncheckedCreateNestedManyWithoutResultsInput
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
    directory_historials?: DirectoryHistorialUpdateManyWithoutEquipmentsNestedInput
    equipment_profiles?: EquipmentProfileUpdateOneWithoutEquipmentsNestedInput
  }

  export type EquipmentUncheckedUpdateWithoutParametersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    profile_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_connection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    connection_status?: NullableStringFieldUpdateOperationsInput | string | null
    directory_historials?: DirectoryHistorialUncheckedUpdateManyWithoutEquipmentsNestedInput
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
    pacient_name?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    histogram_results?: HistogramResultUpdateManyWithoutResultsNestedInput
  }

  export type ResultUncheckedUpdateWithoutParametersInput = {
    folio?: StringFieldUpdateOperationsInput | string
    sample_id?: NullableStringFieldUpdateOperationsInput | string | null
    pacient_name?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    histogram_results?: HistogramResultUncheckedUpdateManyWithoutResultsNestedInput
  }

  export type HistogramResultCreateWithoutResultsInput = {
    id: bigint | number
    description?: string | null
    value?: string | null
  }

  export type HistogramResultUncheckedCreateWithoutResultsInput = {
    id: bigint | number
    description?: string | null
    value?: string | null
  }

  export type HistogramResultCreateOrConnectWithoutResultsInput = {
    where: HistogramResultWhereUniqueInput
    create: XOR<HistogramResultCreateWithoutResultsInput, HistogramResultUncheckedCreateWithoutResultsInput>
  }

  export type HistogramResultCreateManyResultsInputEnvelope = {
    data: HistogramResultCreateManyResultsInput | HistogramResultCreateManyResultsInput[]
    skipDuplicates?: boolean
  }

  export type ParameterCreateWithoutResultsInput = {
    id: bigint | number
    description?: string | null
    value?: string | null
    unit_measurement?: string | null
    max_range?: string | null
    min_range?: string | null
    created_at?: Date | string | null
    modified_at?: Date | string | null
    equipments?: EquipmentCreateNestedOneWithoutParametersInput
  }

  export type ParameterUncheckedCreateWithoutResultsInput = {
    id: bigint | number
    equipment_id?: bigint | number | null
    description?: string | null
    value?: string | null
    unit_measurement?: string | null
    max_range?: string | null
    min_range?: string | null
    created_at?: Date | string | null
    modified_at?: Date | string | null
  }

  export type ParameterCreateOrConnectWithoutResultsInput = {
    where: ParameterWhereUniqueInput
    create: XOR<ParameterCreateWithoutResultsInput, ParameterUncheckedCreateWithoutResultsInput>
  }

  export type ParameterCreateManyResultsInputEnvelope = {
    data: ParameterCreateManyResultsInput | ParameterCreateManyResultsInput[]
    skipDuplicates?: boolean
  }

  export type HistogramResultUpsertWithWhereUniqueWithoutResultsInput = {
    where: HistogramResultWhereUniqueInput
    update: XOR<HistogramResultUpdateWithoutResultsInput, HistogramResultUncheckedUpdateWithoutResultsInput>
    create: XOR<HistogramResultCreateWithoutResultsInput, HistogramResultUncheckedCreateWithoutResultsInput>
  }

  export type HistogramResultUpdateWithWhereUniqueWithoutResultsInput = {
    where: HistogramResultWhereUniqueInput
    data: XOR<HistogramResultUpdateWithoutResultsInput, HistogramResultUncheckedUpdateWithoutResultsInput>
  }

  export type HistogramResultUpdateManyWithWhereWithoutResultsInput = {
    where: HistogramResultScalarWhereInput
    data: XOR<HistogramResultUpdateManyMutationInput, HistogramResultUncheckedUpdateManyWithoutResultsInput>
  }

  export type HistogramResultScalarWhereInput = {
    AND?: HistogramResultScalarWhereInput | HistogramResultScalarWhereInput[]
    OR?: HistogramResultScalarWhereInput[]
    NOT?: HistogramResultScalarWhereInput | HistogramResultScalarWhereInput[]
    id?: BigIntFilter<"HistogramResult"> | bigint | number
    result_folio?: StringNullableFilter<"HistogramResult"> | string | null
    description?: StringNullableFilter<"HistogramResult"> | string | null
    value?: StringNullableFilter<"HistogramResult"> | string | null
  }

  export type ParameterUpsertWithWhereUniqueWithoutResultsInput = {
    where: ParameterWhereUniqueInput
    update: XOR<ParameterUpdateWithoutResultsInput, ParameterUncheckedUpdateWithoutResultsInput>
    create: XOR<ParameterCreateWithoutResultsInput, ParameterUncheckedCreateWithoutResultsInput>
  }

  export type ParameterUpdateWithWhereUniqueWithoutResultsInput = {
    where: ParameterWhereUniqueInput
    data: XOR<ParameterUpdateWithoutResultsInput, ParameterUncheckedUpdateWithoutResultsInput>
  }

  export type ParameterUpdateManyWithWhereWithoutResultsInput = {
    where: ParameterScalarWhereInput
    data: XOR<ParameterUpdateManyMutationInput, ParameterUncheckedUpdateManyWithoutResultsInput>
  }

  export type EquipmentProfileCreateManyCommunication_profilesInput = {
    id: bigint | number
    name?: string | null
  }

  export type EquipmentProfileUpdateWithoutCommunication_profilesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    equipments?: EquipmentUpdateManyWithoutEquipment_profilesNestedInput
  }

  export type EquipmentProfileUncheckedUpdateWithoutCommunication_profilesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    equipments?: EquipmentUncheckedUpdateManyWithoutEquipment_profilesNestedInput
  }

  export type EquipmentProfileUncheckedUpdateManyWithoutCommunication_profilesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EquipmentCreateManyEquipment_profilesInput = {
    id: bigint | number
    name?: string | null
    created_at?: Date | string | null
    modified_at?: Date | string | null
    last_connection?: Date | string | null
    connection_status?: string | null
  }

  export type EquipmentUpdateWithoutEquipment_profilesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_connection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    connection_status?: NullableStringFieldUpdateOperationsInput | string | null
    directory_historials?: DirectoryHistorialUpdateManyWithoutEquipmentsNestedInput
    parameters?: ParameterUpdateManyWithoutEquipmentsNestedInput
  }

  export type EquipmentUncheckedUpdateWithoutEquipment_profilesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_connection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    connection_status?: NullableStringFieldUpdateOperationsInput | string | null
    directory_historials?: DirectoryHistorialUncheckedUpdateManyWithoutEquipmentsNestedInput
    parameters?: ParameterUncheckedUpdateManyWithoutEquipmentsNestedInput
  }

  export type EquipmentUncheckedUpdateManyWithoutEquipment_profilesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_connection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    connection_status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DirectoryHistorialCreateManyEquipmentsInput = {
    id: bigint | number
    filename?: string | null
    filepath?: string | null
    modified_at?: bigint | number | null
  }

  export type ParameterCreateManyEquipmentsInput = {
    id: bigint | number
    result_folio?: string | null
    description?: string | null
    value?: string | null
    unit_measurement?: string | null
    max_range?: string | null
    min_range?: string | null
    created_at?: Date | string | null
    modified_at?: Date | string | null
  }

  export type DirectoryHistorialUpdateWithoutEquipmentsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    filename?: NullableStringFieldUpdateOperationsInput | string | null
    filepath?: NullableStringFieldUpdateOperationsInput | string | null
    modified_at?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type DirectoryHistorialUncheckedUpdateWithoutEquipmentsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    filename?: NullableStringFieldUpdateOperationsInput | string | null
    filepath?: NullableStringFieldUpdateOperationsInput | string | null
    modified_at?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type DirectoryHistorialUncheckedUpdateManyWithoutEquipmentsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    filename?: NullableStringFieldUpdateOperationsInput | string | null
    filepath?: NullableStringFieldUpdateOperationsInput | string | null
    modified_at?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type ParameterUpdateWithoutEquipmentsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    unit_measurement?: NullableStringFieldUpdateOperationsInput | string | null
    max_range?: NullableStringFieldUpdateOperationsInput | string | null
    min_range?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    results?: ResultUpdateOneWithoutParametersNestedInput
  }

  export type ParameterUncheckedUpdateWithoutEquipmentsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    result_folio?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    unit_measurement?: NullableStringFieldUpdateOperationsInput | string | null
    max_range?: NullableStringFieldUpdateOperationsInput | string | null
    min_range?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ParameterUncheckedUpdateManyWithoutEquipmentsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    result_folio?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    unit_measurement?: NullableStringFieldUpdateOperationsInput | string | null
    max_range?: NullableStringFieldUpdateOperationsInput | string | null
    min_range?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type HistogramResultCreateManyResultsInput = {
    id: bigint | number
    description?: string | null
    value?: string | null
  }

  export type ParameterCreateManyResultsInput = {
    id: bigint | number
    equipment_id?: bigint | number | null
    description?: string | null
    value?: string | null
    unit_measurement?: string | null
    max_range?: string | null
    min_range?: string | null
    created_at?: Date | string | null
    modified_at?: Date | string | null
  }

  export type HistogramResultUpdateWithoutResultsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HistogramResultUncheckedUpdateWithoutResultsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HistogramResultUncheckedUpdateManyWithoutResultsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ParameterUpdateWithoutResultsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    unit_measurement?: NullableStringFieldUpdateOperationsInput | string | null
    max_range?: NullableStringFieldUpdateOperationsInput | string | null
    min_range?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    equipments?: EquipmentUpdateOneWithoutParametersNestedInput
  }

  export type ParameterUncheckedUpdateWithoutResultsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    equipment_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    unit_measurement?: NullableStringFieldUpdateOperationsInput | string | null
    max_range?: NullableStringFieldUpdateOperationsInput | string | null
    min_range?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ParameterUncheckedUpdateManyWithoutResultsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    equipment_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableStringFieldUpdateOperationsInput | string | null
    unit_measurement?: NullableStringFieldUpdateOperationsInput | string | null
    max_range?: NullableStringFieldUpdateOperationsInput | string | null
    min_range?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    modified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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