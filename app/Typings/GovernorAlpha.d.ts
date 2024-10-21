/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface GovernorAlphaInterface extends ethers.utils.Interface {
  functions: {
    "BALLOT_TYPEHASH()": FunctionFragment;
    "DOMAIN_TYPEHASH()": FunctionFragment;
    "__abdicate()": FunctionFragment;
    "__acceptAdmin()": FunctionFragment;
    "__executeSetTimelockPendingAdmin(address,uint256)": FunctionFragment;
    "__queueSetTimelockPendingAdmin(address,uint256)": FunctionFragment;
    "cancel(uint256)": FunctionFragment;
    "castVote(uint256,bool)": FunctionFragment;
    "castVoteBySig(uint256,bool,uint8,bytes32,bytes32)": FunctionFragment;
    "execute(uint256)": FunctionFragment;
    "gOHM()": FunctionFragment;
    "getActions(uint256)": FunctionFragment;
    "getReceipt(uint256,address)": FunctionFragment;
    "getVotesFromPercentOfsOHMSupply(uint256)": FunctionFragment;
    "guardian()": FunctionFragment;
    "latestProposalIds(address)": FunctionFragment;
    "name()": FunctionFragment;
    "proposalCount()": FunctionFragment;
    "proposalMaxOperations()": FunctionFragment;
    "proposalThresholdPercent()": FunctionFragment;
    "proposals(uint256)": FunctionFragment;
    "propose(address[],uint256[],string[],bytes[],string)": FunctionFragment;
    "queue(uint256)": FunctionFragment;
    "quorumPercent()": FunctionFragment;
    "sOHM()": FunctionFragment;
    "state(uint256)": FunctionFragment;
    "timelock()": FunctionFragment;
    "votingDelay()": FunctionFragment;
    "votingPeriod()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "BALLOT_TYPEHASH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "DOMAIN_TYPEHASH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "__abdicate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "__acceptAdmin",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "__executeSetTimelockPendingAdmin",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "__queueSetTimelockPendingAdmin",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "cancel",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "castVote",
    values: [BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "castVoteBySig",
    values: [BigNumberish, boolean, BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "execute",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "gOHM", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getActions",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getReceipt",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getVotesFromPercentOfsOHMSupply",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "guardian", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "latestProposalIds",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "proposalCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "proposalMaxOperations",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "proposalThresholdPercent",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "proposals",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "propose",
    values: [string[], BigNumberish[], string[], BytesLike[], string]
  ): string;
  encodeFunctionData(functionFragment: "queue", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "quorumPercent",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "sOHM", values?: undefined): string;
  encodeFunctionData(functionFragment: "state", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "timelock", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "votingDelay",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "votingPeriod",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "BALLOT_TYPEHASH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "DOMAIN_TYPEHASH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "__abdicate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "__acceptAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "__executeSetTimelockPendingAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "__queueSetTimelockPendingAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "cancel", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "castVote", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "castVoteBySig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "gOHM", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getActions", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getReceipt", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getVotesFromPercentOfsOHMSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "guardian", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "latestProposalIds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proposalCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proposalMaxOperations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proposalThresholdPercent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "proposals", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "propose", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "queue", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "quorumPercent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "sOHM", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "state", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "timelock", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "votingDelay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "votingPeriod",
    data: BytesLike
  ): Result;

  events: {
    "ProposalCanceled(uint256)": EventFragment;
    "ProposalCreated(uint256,address,address[],uint256[],string[],bytes[],uint256,uint256,string)": EventFragment;
    "ProposalExecuted(uint256)": EventFragment;
    "ProposalQueued(uint256,uint256)": EventFragment;
    "VoteCast(address,uint256,bool,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ProposalCanceled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProposalCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProposalExecuted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProposalQueued"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "VoteCast"): EventFragment;
}

export type ProposalCanceledEvent = TypedEvent<[BigNumber] & { id: BigNumber }>;

export type ProposalCreatedEvent = TypedEvent<
  [
    BigNumber,
    string,
    string[],
    BigNumber[],
    string[],
    string[],
    BigNumber,
    BigNumber,
    string
  ] & {
    id: BigNumber;
    proposer: string;
    targets: string[];
    values: BigNumber[];
    signatures: string[];
    calldatas: string[];
    startBlock: BigNumber;
    endBlock: BigNumber;
    description: string;
  }
>;

export type ProposalExecutedEvent = TypedEvent<[BigNumber] & { id: BigNumber }>;

export type ProposalQueuedEvent = TypedEvent<
  [BigNumber, BigNumber] & { id: BigNumber; eta: BigNumber }
>;

export type VoteCastEvent = TypedEvent<
  [string, BigNumber, boolean, BigNumber] & {
    voter: string;
    proposalId: BigNumber;
    support: boolean;
    votes: BigNumber;
  }
>;

export class GovernorAlpha extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: GovernorAlphaInterface;

  functions: {
    BALLOT_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;

    DOMAIN_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;

    __abdicate(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    __acceptAdmin(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    __executeSetTimelockPendingAdmin(
      newPendingAdmin: string,
      eta: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    __queueSetTimelockPendingAdmin(
      newPendingAdmin: string,
      eta: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    cancel(
      proposalId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    castVote(
      proposalId: BigNumberish,
      support: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    castVoteBySig(
      proposalId: BigNumberish,
      support: boolean,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    execute(
      proposalId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    gOHM(overrides?: CallOverrides): Promise<[string]>;

    getActions(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string[], BigNumber[], string[], string[]] & {
        targets: string[];
        values: BigNumber[];
        signatures: string[];
        calldatas: string[];
      }
    >;

    getReceipt(
      proposalId: BigNumberish,
      voter: string,
      overrides?: CallOverrides
    ): Promise<
      [
        [boolean, boolean, BigNumber] & {
          hasVoted: boolean;
          support: boolean;
          votes: BigNumber;
        }
      ]
    >;

    getVotesFromPercentOfsOHMSupply(
      percent: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { votes: BigNumber }>;

    guardian(overrides?: CallOverrides): Promise<[string]>;

    latestProposalIds(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    name(overrides?: CallOverrides): Promise<[string]>;

    proposalCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    proposalMaxOperations(overrides?: CallOverrides): Promise<[BigNumber]>;

    proposalThresholdPercent(overrides?: CallOverrides): Promise<[BigNumber]>;

    proposals(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        boolean
      ] & {
        id: BigNumber;
        proposer: string;
        eta: BigNumber;
        startBlock: BigNumber;
        endBlock: BigNumber;
        forVotes: BigNumber;
        againstVotes: BigNumber;
        thresholdAtStart: BigNumber;
        votesNeeded: BigNumber;
        canceled: boolean;
        executed: boolean;
      }
    >;

    propose(
      targets: string[],
      values: BigNumberish[],
      signatures: string[],
      calldatas: BytesLike[],
      description: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    queue(
      proposalId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    quorumPercent(overrides?: CallOverrides): Promise<[BigNumber]>;

    sOHM(overrides?: CallOverrides): Promise<[string]>;

    state(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number]>;

    timelock(overrides?: CallOverrides): Promise<[string]>;

    votingDelay(overrides?: CallOverrides): Promise<[BigNumber]>;

    votingPeriod(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  BALLOT_TYPEHASH(overrides?: CallOverrides): Promise<string>;

  DOMAIN_TYPEHASH(overrides?: CallOverrides): Promise<string>;

  __abdicate(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  __acceptAdmin(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  __executeSetTimelockPendingAdmin(
    newPendingAdmin: string,
    eta: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  __queueSetTimelockPendingAdmin(
    newPendingAdmin: string,
    eta: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  cancel(
    proposalId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  castVote(
    proposalId: BigNumberish,
    support: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  castVoteBySig(
    proposalId: BigNumberish,
    support: boolean,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  execute(
    proposalId: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  gOHM(overrides?: CallOverrides): Promise<string>;

  getActions(
    proposalId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string[], BigNumber[], string[], string[]] & {
      targets: string[];
      values: BigNumber[];
      signatures: string[];
      calldatas: string[];
    }
  >;

  getReceipt(
    proposalId: BigNumberish,
    voter: string,
    overrides?: CallOverrides
  ): Promise<
    [boolean, boolean, BigNumber] & {
      hasVoted: boolean;
      support: boolean;
      votes: BigNumber;
    }
  >;

  getVotesFromPercentOfsOHMSupply(
    percent: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  guardian(overrides?: CallOverrides): Promise<string>;

  latestProposalIds(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  name(overrides?: CallOverrides): Promise<string>;

  proposalCount(overrides?: CallOverrides): Promise<BigNumber>;

  proposalMaxOperations(overrides?: CallOverrides): Promise<BigNumber>;

  proposalThresholdPercent(overrides?: CallOverrides): Promise<BigNumber>;

  proposals(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      string,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      boolean,
      boolean
    ] & {
      id: BigNumber;
      proposer: string;
      eta: BigNumber;
      startBlock: BigNumber;
      endBlock: BigNumber;
      forVotes: BigNumber;
      againstVotes: BigNumber;
      thresholdAtStart: BigNumber;
      votesNeeded: BigNumber;
      canceled: boolean;
      executed: boolean;
    }
  >;

  propose(
    targets: string[],
    values: BigNumberish[],
    signatures: string[],
    calldatas: BytesLike[],
    description: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  queue(
    proposalId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  quorumPercent(overrides?: CallOverrides): Promise<BigNumber>;

  sOHM(overrides?: CallOverrides): Promise<string>;

  state(proposalId: BigNumberish, overrides?: CallOverrides): Promise<number>;

  timelock(overrides?: CallOverrides): Promise<string>;

  votingDelay(overrides?: CallOverrides): Promise<BigNumber>;

  votingPeriod(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    BALLOT_TYPEHASH(overrides?: CallOverrides): Promise<string>;

    DOMAIN_TYPEHASH(overrides?: CallOverrides): Promise<string>;

    __abdicate(overrides?: CallOverrides): Promise<void>;

    __acceptAdmin(overrides?: CallOverrides): Promise<void>;

    __executeSetTimelockPendingAdmin(
      newPendingAdmin: string,
      eta: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    __queueSetTimelockPendingAdmin(
      newPendingAdmin: string,
      eta: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    cancel(proposalId: BigNumberish, overrides?: CallOverrides): Promise<void>;

    castVote(
      proposalId: BigNumberish,
      support: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    castVoteBySig(
      proposalId: BigNumberish,
      support: boolean,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    execute(proposalId: BigNumberish, overrides?: CallOverrides): Promise<void>;

    gOHM(overrides?: CallOverrides): Promise<string>;

    getActions(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string[], BigNumber[], string[], string[]] & {
        targets: string[];
        values: BigNumber[];
        signatures: string[];
        calldatas: string[];
      }
    >;

    getReceipt(
      proposalId: BigNumberish,
      voter: string,
      overrides?: CallOverrides
    ): Promise<
      [boolean, boolean, BigNumber] & {
        hasVoted: boolean;
        support: boolean;
        votes: BigNumber;
      }
    >;

    getVotesFromPercentOfsOHMSupply(
      percent: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    guardian(overrides?: CallOverrides): Promise<string>;

    latestProposalIds(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<string>;

    proposalCount(overrides?: CallOverrides): Promise<BigNumber>;

    proposalMaxOperations(overrides?: CallOverrides): Promise<BigNumber>;

    proposalThresholdPercent(overrides?: CallOverrides): Promise<BigNumber>;

    proposals(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        boolean
      ] & {
        id: BigNumber;
        proposer: string;
        eta: BigNumber;
        startBlock: BigNumber;
        endBlock: BigNumber;
        forVotes: BigNumber;
        againstVotes: BigNumber;
        thresholdAtStart: BigNumber;
        votesNeeded: BigNumber;
        canceled: boolean;
        executed: boolean;
      }
    >;

    propose(
      targets: string[],
      values: BigNumberish[],
      signatures: string[],
      calldatas: BytesLike[],
      description: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    queue(proposalId: BigNumberish, overrides?: CallOverrides): Promise<void>;

    quorumPercent(overrides?: CallOverrides): Promise<BigNumber>;

    sOHM(overrides?: CallOverrides): Promise<string>;

    state(proposalId: BigNumberish, overrides?: CallOverrides): Promise<number>;

    timelock(overrides?: CallOverrides): Promise<string>;

    votingDelay(overrides?: CallOverrides): Promise<BigNumber>;

    votingPeriod(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "ProposalCanceled(uint256)"(
      id?: null
    ): TypedEventFilter<[BigNumber], { id: BigNumber }>;

    ProposalCanceled(
      id?: null
    ): TypedEventFilter<[BigNumber], { id: BigNumber }>;

    "ProposalCreated(uint256,address,address[],uint256[],string[],bytes[],uint256,uint256,string)"(
      id?: null,
      proposer?: null,
      targets?: null,
      values?: null,
      signatures?: null,
      calldatas?: null,
      startBlock?: null,
      endBlock?: null,
      description?: null
    ): TypedEventFilter<
      [
        BigNumber,
        string,
        string[],
        BigNumber[],
        string[],
        string[],
        BigNumber,
        BigNumber,
        string
      ],
      {
        id: BigNumber;
        proposer: string;
        targets: string[];
        values: BigNumber[];
        signatures: string[];
        calldatas: string[];
        startBlock: BigNumber;
        endBlock: BigNumber;
        description: string;
      }
    >;

    ProposalCreated(
      id?: null,
      proposer?: null,
      targets?: null,
      values?: null,
      signatures?: null,
      calldatas?: null,
      startBlock?: null,
      endBlock?: null,
      description?: null
    ): TypedEventFilter<
      [
        BigNumber,
        string,
        string[],
        BigNumber[],
        string[],
        string[],
        BigNumber,
        BigNumber,
        string
      ],
      {
        id: BigNumber;
        proposer: string;
        targets: string[];
        values: BigNumber[];
        signatures: string[];
        calldatas: string[];
        startBlock: BigNumber;
        endBlock: BigNumber;
        description: string;
      }
    >;

    "ProposalExecuted(uint256)"(
      id?: null
    ): TypedEventFilter<[BigNumber], { id: BigNumber }>;

    ProposalExecuted(
      id?: null
    ): TypedEventFilter<[BigNumber], { id: BigNumber }>;

    "ProposalQueued(uint256,uint256)"(
      id?: null,
      eta?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber],
      { id: BigNumber; eta: BigNumber }
    >;

    ProposalQueued(
      id?: null,
      eta?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber],
      { id: BigNumber; eta: BigNumber }
    >;

    "VoteCast(address,uint256,bool,uint256)"(
      voter?: null,
      proposalId?: null,
      support?: null,
      votes?: null
    ): TypedEventFilter<
      [string, BigNumber, boolean, BigNumber],
      {
        voter: string;
        proposalId: BigNumber;
        support: boolean;
        votes: BigNumber;
      }
    >;

    VoteCast(
      voter?: null,
      proposalId?: null,
      support?: null,
      votes?: null
    ): TypedEventFilter<
      [string, BigNumber, boolean, BigNumber],
      {
        voter: string;
        proposalId: BigNumber;
        support: boolean;
        votes: BigNumber;
      }
    >;
  };

  estimateGas: {
    BALLOT_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;

    DOMAIN_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;

    __abdicate(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    __acceptAdmin(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    __executeSetTimelockPendingAdmin(
      newPendingAdmin: string,
      eta: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    __queueSetTimelockPendingAdmin(
      newPendingAdmin: string,
      eta: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    cancel(
      proposalId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    castVote(
      proposalId: BigNumberish,
      support: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    castVoteBySig(
      proposalId: BigNumberish,
      support: boolean,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    execute(
      proposalId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    gOHM(overrides?: CallOverrides): Promise<BigNumber>;

    getActions(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getReceipt(
      proposalId: BigNumberish,
      voter: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getVotesFromPercentOfsOHMSupply(
      percent: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    guardian(overrides?: CallOverrides): Promise<BigNumber>;

    latestProposalIds(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    proposalCount(overrides?: CallOverrides): Promise<BigNumber>;

    proposalMaxOperations(overrides?: CallOverrides): Promise<BigNumber>;

    proposalThresholdPercent(overrides?: CallOverrides): Promise<BigNumber>;

    proposals(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    propose(
      targets: string[],
      values: BigNumberish[],
      signatures: string[],
      calldatas: BytesLike[],
      description: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    queue(
      proposalId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    quorumPercent(overrides?: CallOverrides): Promise<BigNumber>;

    sOHM(overrides?: CallOverrides): Promise<BigNumber>;

    state(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    timelock(overrides?: CallOverrides): Promise<BigNumber>;

    votingDelay(overrides?: CallOverrides): Promise<BigNumber>;

    votingPeriod(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    BALLOT_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    DOMAIN_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    __abdicate(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    __acceptAdmin(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    __executeSetTimelockPendingAdmin(
      newPendingAdmin: string,
      eta: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    __queueSetTimelockPendingAdmin(
      newPendingAdmin: string,
      eta: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    cancel(
      proposalId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    castVote(
      proposalId: BigNumberish,
      support: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    castVoteBySig(
      proposalId: BigNumberish,
      support: boolean,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    execute(
      proposalId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    gOHM(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getActions(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getReceipt(
      proposalId: BigNumberish,
      voter: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getVotesFromPercentOfsOHMSupply(
      percent: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    guardian(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    latestProposalIds(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proposalCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proposalMaxOperations(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    proposalThresholdPercent(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    proposals(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    propose(
      targets: string[],
      values: BigNumberish[],
      signatures: string[],
      calldatas: BytesLike[],
      description: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    queue(
      proposalId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    quorumPercent(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    sOHM(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    state(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    timelock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    votingDelay(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    votingPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
