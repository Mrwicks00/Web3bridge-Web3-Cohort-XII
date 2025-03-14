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
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../common";

export interface CrowdFundingInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "campaignContributions"
      | "campaignCounter"
      | "campaigns"
      | "contribute"
      | "createCampaign"
      | "owner"
      | "refundBackers"
      | "token"
      | "withdraw"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "CampaignCreated"
      | "ContributionMade"
      | "FundsWithdrawn"
      | "RefundIssued"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "campaignContributions",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "campaignCounter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "campaigns",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "contribute",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createCampaign",
    values: [string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "refundBackers",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "campaignContributions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "campaignCounter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "campaigns", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "contribute", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createCampaign",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "refundBackers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
}

export namespace CampaignCreatedEvent {
  export type InputTuple = [
    id: BigNumberish,
    name: string,
    goal: BigNumberish,
    deadline: BigNumberish,
    creator: AddressLike
  ];
  export type OutputTuple = [
    id: bigint,
    name: string,
    goal: bigint,
    deadline: bigint,
    creator: string
  ];
  export interface OutputObject {
    id: bigint;
    name: string;
    goal: bigint;
    deadline: bigint;
    creator: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ContributionMadeEvent {
  export type InputTuple = [
    id: BigNumberish,
    contributor: AddressLike,
    amount: BigNumberish
  ];
  export type OutputTuple = [id: bigint, contributor: string, amount: bigint];
  export interface OutputObject {
    id: bigint;
    contributor: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace FundsWithdrawnEvent {
  export type InputTuple = [id: BigNumberish, amount: BigNumberish];
  export type OutputTuple = [id: bigint, amount: bigint];
  export interface OutputObject {
    id: bigint;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RefundIssuedEvent {
  export type InputTuple = [
    id: BigNumberish,
    contributor: AddressLike,
    amount: BigNumberish
  ];
  export type OutputTuple = [id: bigint, contributor: string, amount: bigint];
  export interface OutputObject {
    id: bigint;
    contributor: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface CrowdFunding extends BaseContract {
  connect(runner?: ContractRunner | null): CrowdFunding;
  waitForDeployment(): Promise<this>;

  interface: CrowdFundingInterface;

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

  campaignContributions: TypedContractMethod<
    [arg0: BigNumberish, arg1: AddressLike],
    [bigint],
    "view"
  >;

  campaignCounter: TypedContractMethod<[], [bigint], "view">;

  campaigns: TypedContractMethod<
    [arg0: BigNumberish],
    [
      [string, string, bigint, bigint, bigint, string, boolean] & {
        name: string;
        description: string;
        goal: bigint;
        deadline: bigint;
        amountRaised: bigint;
        creator: string;
        withdrawn: boolean;
      }
    ],
    "view"
  >;

  contribute: TypedContractMethod<
    [_id: BigNumberish, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  createCampaign: TypedContractMethod<
    [
      _name: string,
      _description: string,
      _goal: BigNumberish,
      _duration: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  refundBackers: TypedContractMethod<[_id: BigNumberish], [void], "nonpayable">;

  token: TypedContractMethod<[], [string], "view">;

  withdraw: TypedContractMethod<[_id: BigNumberish], [void], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "campaignContributions"
  ): TypedContractMethod<
    [arg0: BigNumberish, arg1: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "campaignCounter"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "campaigns"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [
      [string, string, bigint, bigint, bigint, string, boolean] & {
        name: string;
        description: string;
        goal: bigint;
        deadline: bigint;
        amountRaised: bigint;
        creator: string;
        withdrawn: boolean;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "contribute"
  ): TypedContractMethod<
    [_id: BigNumberish, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "createCampaign"
  ): TypedContractMethod<
    [
      _name: string,
      _description: string,
      _goal: BigNumberish,
      _duration: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "refundBackers"
  ): TypedContractMethod<[_id: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "token"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "withdraw"
  ): TypedContractMethod<[_id: BigNumberish], [void], "nonpayable">;

  getEvent(
    key: "CampaignCreated"
  ): TypedContractEvent<
    CampaignCreatedEvent.InputTuple,
    CampaignCreatedEvent.OutputTuple,
    CampaignCreatedEvent.OutputObject
  >;
  getEvent(
    key: "ContributionMade"
  ): TypedContractEvent<
    ContributionMadeEvent.InputTuple,
    ContributionMadeEvent.OutputTuple,
    ContributionMadeEvent.OutputObject
  >;
  getEvent(
    key: "FundsWithdrawn"
  ): TypedContractEvent<
    FundsWithdrawnEvent.InputTuple,
    FundsWithdrawnEvent.OutputTuple,
    FundsWithdrawnEvent.OutputObject
  >;
  getEvent(
    key: "RefundIssued"
  ): TypedContractEvent<
    RefundIssuedEvent.InputTuple,
    RefundIssuedEvent.OutputTuple,
    RefundIssuedEvent.OutputObject
  >;

  filters: {
    "CampaignCreated(uint256,string,uint256,uint256,address)": TypedContractEvent<
      CampaignCreatedEvent.InputTuple,
      CampaignCreatedEvent.OutputTuple,
      CampaignCreatedEvent.OutputObject
    >;
    CampaignCreated: TypedContractEvent<
      CampaignCreatedEvent.InputTuple,
      CampaignCreatedEvent.OutputTuple,
      CampaignCreatedEvent.OutputObject
    >;

    "ContributionMade(uint256,address,uint256)": TypedContractEvent<
      ContributionMadeEvent.InputTuple,
      ContributionMadeEvent.OutputTuple,
      ContributionMadeEvent.OutputObject
    >;
    ContributionMade: TypedContractEvent<
      ContributionMadeEvent.InputTuple,
      ContributionMadeEvent.OutputTuple,
      ContributionMadeEvent.OutputObject
    >;

    "FundsWithdrawn(uint256,uint256)": TypedContractEvent<
      FundsWithdrawnEvent.InputTuple,
      FundsWithdrawnEvent.OutputTuple,
      FundsWithdrawnEvent.OutputObject
    >;
    FundsWithdrawn: TypedContractEvent<
      FundsWithdrawnEvent.InputTuple,
      FundsWithdrawnEvent.OutputTuple,
      FundsWithdrawnEvent.OutputObject
    >;

    "RefundIssued(uint256,address,uint256)": TypedContractEvent<
      RefundIssuedEvent.InputTuple,
      RefundIssuedEvent.OutputTuple,
      RefundIssuedEvent.OutputObject
    >;
    RefundIssued: TypedContractEvent<
      RefundIssuedEvent.InputTuple,
      RefundIssuedEvent.OutputTuple,
      RefundIssuedEvent.OutputObject
    >;
  };
}
