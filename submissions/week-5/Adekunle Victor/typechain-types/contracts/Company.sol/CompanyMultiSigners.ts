/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export interface CompanyMultiSignersInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "boardMembers"
      | "budgetCount"
      | "budgets"
      | "createBudget"
      | "depositFunds"
      | "getContractBalance"
      | "getSignedCount"
      | "isBoardMember"
      | "releaseFunds"
      | "requiredSignatures"
      | "signBudget"
      | "signed"
      | "token"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "boardMembers",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "budgetCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "budgets",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createBudget",
    values: [string, string, BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "depositFunds",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getContractBalance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getSignedCount",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isBoardMember",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "releaseFunds",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "requiredSignatures",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "signBudget",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "signed",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "boardMembers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "budgetCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "budgets", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createBudget",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "depositFunds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getContractBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSignedCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isBoardMember",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "releaseFunds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requiredSignatures",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "signBudget", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "signed", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
}

export interface CompanyMultiSigners extends BaseContract {
  connect(runner?: ContractRunner | null): CompanyMultiSigners;
  waitForDeployment(): Promise<this>;

  interface: CompanyMultiSignersInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  boardMembers: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  budgetCount: TypedContractMethod<[], [bigint], "view">;

  budgets: TypedContractMethod<
    [arg0: BigNumberish],
    [
      [string, string, bigint, bigint, boolean, string] & {
        name: string;
        description: string;
        amount: bigint;
        signedCount: bigint;
        isReleased: boolean;
        recipient: string;
      }
    ],
    "view"
  >;

  createBudget: TypedContractMethod<
    [
      _name: string,
      _description: string,
      _amount: BigNumberish,
      _recipient: AddressLike
    ],
    [void],
    "nonpayable"
  >;

  depositFunds: TypedContractMethod<
    [amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  getContractBalance: TypedContractMethod<[], [bigint], "view">;

  getSignedCount: TypedContractMethod<
    [budgetId: BigNumberish],
    [bigint],
    "view"
  >;

  isBoardMember: TypedContractMethod<[arg0: AddressLike], [boolean], "view">;

  releaseFunds: TypedContractMethod<
    [budgetId: BigNumberish],
    [void],
    "nonpayable"
  >;

  requiredSignatures: TypedContractMethod<[], [bigint], "view">;

  signBudget: TypedContractMethod<
    [budgetId: BigNumberish],
    [void],
    "nonpayable"
  >;

  signed: TypedContractMethod<
    [arg0: BigNumberish, arg1: AddressLike],
    [boolean],
    "view"
  >;

  token: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "boardMembers"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "budgetCount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "budgets"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [
      [string, string, bigint, bigint, boolean, string] & {
        name: string;
        description: string;
        amount: bigint;
        signedCount: bigint;
        isReleased: boolean;
        recipient: string;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "createBudget"
  ): TypedContractMethod<
    [
      _name: string,
      _description: string,
      _amount: BigNumberish,
      _recipient: AddressLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "depositFunds"
  ): TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "getContractBalance"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getSignedCount"
  ): TypedContractMethod<[budgetId: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "isBoardMember"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "releaseFunds"
  ): TypedContractMethod<[budgetId: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "requiredSignatures"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "signBudget"
  ): TypedContractMethod<[budgetId: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "signed"
  ): TypedContractMethod<
    [arg0: BigNumberish, arg1: AddressLike],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "token"
  ): TypedContractMethod<[], [string], "view">;

  filters: {};
}
