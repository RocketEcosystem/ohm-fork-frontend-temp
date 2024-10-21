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
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface ITreasuryExtenderInterface extends ethers.utils.Interface {
  functions: {
    "getAllocatorAllocated(uint256)": FunctionFragment;
    "getAllocatorByID(uint256)": FunctionFragment;
    "getAllocatorLimits(uint256)": FunctionFragment;
    "getAllocatorPerformance(uint256)": FunctionFragment;
    "getTotalAllocatorCount()": FunctionFragment;
    "registerDeposit(address)": FunctionFragment;
    "report(uint256,uint128,uint128)": FunctionFragment;
    "requestFundsFromTreasury(uint256,uint256)": FunctionFragment;
    "returnFundsToTreasury(uint256,uint256)": FunctionFragment;
    "returnRewardsToTreasury(uint256,address,uint256)": FunctionFragment;
    "setAllocatorLimits(uint256,(uint128,uint128))": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getAllocatorAllocated",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllocatorByID",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllocatorLimits",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllocatorPerformance",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalAllocatorCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "registerDeposit",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "report",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "requestFundsFromTreasury",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "returnFundsToTreasury",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "returnRewardsToTreasury",
    values: [BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setAllocatorLimits",
    values: [BigNumberish, { allocated: BigNumberish; loss: BigNumberish }]
  ): string;

  decodeFunctionResult(
    functionFragment: "getAllocatorAllocated",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllocatorByID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllocatorLimits",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllocatorPerformance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalAllocatorCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerDeposit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "report", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "requestFundsFromTreasury",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "returnFundsToTreasury",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "returnRewardsToTreasury",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAllocatorLimits",
    data: BytesLike
  ): Result;

  events: {
    "AllocatorFunded(uint256,uint256,uint256)": EventFragment;
    "AllocatorLimitsChanged(uint256,uint128,uint128)": EventFragment;
    "AllocatorReportedGain(uint256,uint128)": EventFragment;
    "AllocatorReportedLoss(uint256,uint128)": EventFragment;
    "AllocatorReportedMigration(uint256)": EventFragment;
    "AllocatorRewardsWithdrawal(address,uint256,uint256)": EventFragment;
    "AllocatorWithdrawal(uint256,uint256,uint256)": EventFragment;
    "NewDepositRegistered(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AllocatorFunded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AllocatorLimitsChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AllocatorReportedGain"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AllocatorReportedLoss"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AllocatorReportedMigration"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AllocatorRewardsWithdrawal"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AllocatorWithdrawal"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewDepositRegistered"): EventFragment;
}

export type AllocatorFundedEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber] & {
    id: BigNumber;
    amount: BigNumber;
    value: BigNumber;
  }
>;

export type AllocatorLimitsChangedEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber] & {
    id: BigNumber;
    allocationLimit: BigNumber;
    lossLimit: BigNumber;
  }
>;

export type AllocatorReportedGainEvent = TypedEvent<
  [BigNumber, BigNumber] & { id: BigNumber; gain: BigNumber }
>;

export type AllocatorReportedLossEvent = TypedEvent<
  [BigNumber, BigNumber] & { id: BigNumber; loss: BigNumber }
>;

export type AllocatorReportedMigrationEvent = TypedEvent<
  [BigNumber] & { id: BigNumber }
>;

export type AllocatorRewardsWithdrawalEvent = TypedEvent<
  [string, BigNumber, BigNumber] & {
    allocator: string;
    amount: BigNumber;
    value: BigNumber;
  }
>;

export type AllocatorWithdrawalEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber] & {
    id: BigNumber;
    amount: BigNumber;
    value: BigNumber;
  }
>;

export type NewDepositRegisteredEvent = TypedEvent<
  [string, string, BigNumber] & {
    allocator: string;
    token: string;
    id: BigNumber;
  }
>;

export class ITreasuryExtender extends BaseContract {
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

  interface: ITreasuryExtenderInterface;

  functions: {
    getAllocatorAllocated(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getAllocatorByID(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getAllocatorLimits(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [[BigNumber, BigNumber] & { allocated: BigNumber; loss: BigNumber }]
    >;

    getAllocatorPerformance(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[[BigNumber, BigNumber] & { gain: BigNumber; loss: BigNumber }]>;

    getTotalAllocatorCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    registerDeposit(
      newAllocator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    report(
      id: BigNumberish,
      gain: BigNumberish,
      loss: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    requestFundsFromTreasury(
      id: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    returnFundsToTreasury(
      id: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    returnRewardsToTreasury(
      id: BigNumberish,
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setAllocatorLimits(
      id: BigNumberish,
      limits: { allocated: BigNumberish; loss: BigNumberish },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  getAllocatorAllocated(
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getAllocatorByID(
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getAllocatorLimits(
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { allocated: BigNumber; loss: BigNumber }
  >;

  getAllocatorPerformance(
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber] & { gain: BigNumber; loss: BigNumber }>;

  getTotalAllocatorCount(overrides?: CallOverrides): Promise<BigNumber>;

  registerDeposit(
    newAllocator: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  report(
    id: BigNumberish,
    gain: BigNumberish,
    loss: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  requestFundsFromTreasury(
    id: BigNumberish,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  returnFundsToTreasury(
    id: BigNumberish,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  returnRewardsToTreasury(
    id: BigNumberish,
    token: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setAllocatorLimits(
    id: BigNumberish,
    limits: { allocated: BigNumberish; loss: BigNumberish },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getAllocatorAllocated(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAllocatorByID(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getAllocatorLimits(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { allocated: BigNumber; loss: BigNumber }
    >;

    getAllocatorPerformance(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { gain: BigNumber; loss: BigNumber }>;

    getTotalAllocatorCount(overrides?: CallOverrides): Promise<BigNumber>;

    registerDeposit(
      newAllocator: string,
      overrides?: CallOverrides
    ): Promise<void>;

    report(
      id: BigNumberish,
      gain: BigNumberish,
      loss: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    requestFundsFromTreasury(
      id: BigNumberish,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    returnFundsToTreasury(
      id: BigNumberish,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    returnRewardsToTreasury(
      id: BigNumberish,
      token: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setAllocatorLimits(
      id: BigNumberish,
      limits: { allocated: BigNumberish; loss: BigNumberish },
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AllocatorFunded(uint256,uint256,uint256)"(
      id?: null,
      amount?: null,
      value?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, BigNumber],
      { id: BigNumber; amount: BigNumber; value: BigNumber }
    >;

    AllocatorFunded(
      id?: null,
      amount?: null,
      value?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, BigNumber],
      { id: BigNumber; amount: BigNumber; value: BigNumber }
    >;

    "AllocatorLimitsChanged(uint256,uint128,uint128)"(
      id?: null,
      allocationLimit?: null,
      lossLimit?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, BigNumber],
      { id: BigNumber; allocationLimit: BigNumber; lossLimit: BigNumber }
    >;

    AllocatorLimitsChanged(
      id?: null,
      allocationLimit?: null,
      lossLimit?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, BigNumber],
      { id: BigNumber; allocationLimit: BigNumber; lossLimit: BigNumber }
    >;

    "AllocatorReportedGain(uint256,uint128)"(
      id?: null,
      gain?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber],
      { id: BigNumber; gain: BigNumber }
    >;

    AllocatorReportedGain(
      id?: null,
      gain?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber],
      { id: BigNumber; gain: BigNumber }
    >;

    "AllocatorReportedLoss(uint256,uint128)"(
      id?: null,
      loss?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber],
      { id: BigNumber; loss: BigNumber }
    >;

    AllocatorReportedLoss(
      id?: null,
      loss?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber],
      { id: BigNumber; loss: BigNumber }
    >;

    "AllocatorReportedMigration(uint256)"(
      id?: null
    ): TypedEventFilter<[BigNumber], { id: BigNumber }>;

    AllocatorReportedMigration(
      id?: null
    ): TypedEventFilter<[BigNumber], { id: BigNumber }>;

    "AllocatorRewardsWithdrawal(address,uint256,uint256)"(
      allocator?: null,
      amount?: null,
      value?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { allocator: string; amount: BigNumber; value: BigNumber }
    >;

    AllocatorRewardsWithdrawal(
      allocator?: null,
      amount?: null,
      value?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { allocator: string; amount: BigNumber; value: BigNumber }
    >;

    "AllocatorWithdrawal(uint256,uint256,uint256)"(
      id?: null,
      amount?: null,
      value?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, BigNumber],
      { id: BigNumber; amount: BigNumber; value: BigNumber }
    >;

    AllocatorWithdrawal(
      id?: null,
      amount?: null,
      value?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, BigNumber],
      { id: BigNumber; amount: BigNumber; value: BigNumber }
    >;

    "NewDepositRegistered(address,address,uint256)"(
      allocator?: null,
      token?: null,
      id?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { allocator: string; token: string; id: BigNumber }
    >;

    NewDepositRegistered(
      allocator?: null,
      token?: null,
      id?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { allocator: string; token: string; id: BigNumber }
    >;
  };

  estimateGas: {
    getAllocatorAllocated(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAllocatorByID(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAllocatorLimits(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAllocatorPerformance(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotalAllocatorCount(overrides?: CallOverrides): Promise<BigNumber>;

    registerDeposit(
      newAllocator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    report(
      id: BigNumberish,
      gain: BigNumberish,
      loss: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    requestFundsFromTreasury(
      id: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    returnFundsToTreasury(
      id: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    returnRewardsToTreasury(
      id: BigNumberish,
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setAllocatorLimits(
      id: BigNumberish,
      limits: { allocated: BigNumberish; loss: BigNumberish },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getAllocatorAllocated(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAllocatorByID(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAllocatorLimits(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAllocatorPerformance(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTotalAllocatorCount(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    registerDeposit(
      newAllocator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    report(
      id: BigNumberish,
      gain: BigNumberish,
      loss: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    requestFundsFromTreasury(
      id: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    returnFundsToTreasury(
      id: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    returnRewardsToTreasury(
      id: BigNumberish,
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setAllocatorLimits(
      id: BigNumberish,
      limits: { allocated: BigNumberish; loss: BigNumberish },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
