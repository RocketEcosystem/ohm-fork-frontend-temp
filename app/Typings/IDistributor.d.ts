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

interface IDistributorInterface extends ethers.utils.Interface {
  functions: {
    "addPool(uint256,address)": FunctionFragment;
    "distribute()": FunctionFragment;
    "initialize_Distributor(address,address,address,address,uint256)": FunctionFragment;
    "nextRewardFor(address)": FunctionFragment;
    "removePool(uint256,address)": FunctionFragment;
    "retrieveBounty()": FunctionFragment;
    "setAdjustment(bool,uint256,uint256)": FunctionFragment;
    "setBounty(uint256)": FunctionFragment;
    "setPools(address[])": FunctionFragment;
    "triggerRebase()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addPool",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "distribute",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize_Distributor",
    values: [string, string, string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "nextRewardFor",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "removePool",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "retrieveBounty",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setAdjustment",
    values: [boolean, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setBounty",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "setPools", values: [string[]]): string;
  encodeFunctionData(
    functionFragment: "triggerRebase",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "addPool", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "distribute", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initialize_Distributor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nextRewardFor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "removePool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "retrieveBounty",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAdjustment",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setBounty", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setPools", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "triggerRebase",
    data: BytesLike
  ): Result;

  events: {};
}

export class IDistributor extends BaseContract {
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

  interface: IDistributorInterface;

  functions: {
    addPool(
      index: BigNumberish,
      pool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    distribute(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initialize_Distributor(
      _treasury: string,
      _ohm: string,
      _staking: string,
      _authority: string,
      _initialRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    nextRewardFor(who: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    removePool(
      index: BigNumberish,
      pool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    retrieveBounty(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setAdjustment(
      _add: boolean,
      _rate: BigNumberish,
      _target: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setBounty(
      _bounty: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setPools(
      _pools: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    triggerRebase(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addPool(
    index: BigNumberish,
    pool: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  distribute(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initialize_Distributor(
    _treasury: string,
    _ohm: string,
    _staking: string,
    _authority: string,
    _initialRate: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  nextRewardFor(who: string, overrides?: CallOverrides): Promise<BigNumber>;

  removePool(
    index: BigNumberish,
    pool: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  retrieveBounty(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setAdjustment(
    _add: boolean,
    _rate: BigNumberish,
    _target: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setBounty(
    _bounty: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setPools(
    _pools: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  triggerRebase(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addPool(
      index: BigNumberish,
      pool: string,
      overrides?: CallOverrides
    ): Promise<void>;

    distribute(overrides?: CallOverrides): Promise<void>;

    initialize_Distributor(
      _treasury: string,
      _ohm: string,
      _staking: string,
      _authority: string,
      _initialRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    nextRewardFor(who: string, overrides?: CallOverrides): Promise<BigNumber>;

    removePool(
      index: BigNumberish,
      pool: string,
      overrides?: CallOverrides
    ): Promise<void>;

    retrieveBounty(overrides?: CallOverrides): Promise<BigNumber>;

    setAdjustment(
      _add: boolean,
      _rate: BigNumberish,
      _target: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setBounty(_bounty: BigNumberish, overrides?: CallOverrides): Promise<void>;

    setPools(_pools: string[], overrides?: CallOverrides): Promise<void>;

    triggerRebase(overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    addPool(
      index: BigNumberish,
      pool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    distribute(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initialize_Distributor(
      _treasury: string,
      _ohm: string,
      _staking: string,
      _authority: string,
      _initialRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    nextRewardFor(who: string, overrides?: CallOverrides): Promise<BigNumber>;

    removePool(
      index: BigNumberish,
      pool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    retrieveBounty(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setAdjustment(
      _add: boolean,
      _rate: BigNumberish,
      _target: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setBounty(
      _bounty: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setPools(
      _pools: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    triggerRebase(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addPool(
      index: BigNumberish,
      pool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    distribute(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initialize_Distributor(
      _treasury: string,
      _ohm: string,
      _staking: string,
      _authority: string,
      _initialRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    nextRewardFor(
      who: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removePool(
      index: BigNumberish,
      pool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    retrieveBounty(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setAdjustment(
      _add: boolean,
      _rate: BigNumberish,
      _target: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setBounty(
      _bounty: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setPools(
      _pools: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    triggerRebase(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
