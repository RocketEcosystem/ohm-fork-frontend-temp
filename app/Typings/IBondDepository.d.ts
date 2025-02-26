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

interface IBondDepositoryInterface extends ethers.utils.Interface {
  functions: {
    "close(uint256)": FunctionFragment;
    "create(address,uint256[3],bool[2],uint256[2],uint32[2])": FunctionFragment;
    "currentDebt(uint256)": FunctionFragment;
    "debtDecay(uint256)": FunctionFragment;
    "debtRatio(uint256)": FunctionFragment;
    "deposit(uint256,uint256,uint256,address,address)": FunctionFragment;
    "initialize_OlympusBondDepositoryV2(address,address,address,address,address)": FunctionFragment;
    "isLive(uint256)": FunctionFragment;
    "liveMarkets()": FunctionFragment;
    "liveMarketsFor(address)": FunctionFragment;
    "marketPrice(uint256)": FunctionFragment;
    "payoutFor(uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "close", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "create",
    values: [
      string,
      [BigNumberish, BigNumberish, BigNumberish],
      [boolean, boolean],
      [BigNumberish, BigNumberish],
      [BigNumberish, BigNumberish]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "currentDebt",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "debtDecay",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "debtRatio",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [BigNumberish, BigNumberish, BigNumberish, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize_OlympusBondDepositoryV2",
    values: [string, string, string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "isLive",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "liveMarkets",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "liveMarketsFor",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "marketPrice",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "payoutFor",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "close", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "create", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "currentDebt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "debtDecay", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "debtRatio", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initialize_OlympusBondDepositoryV2",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isLive", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "liveMarkets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "liveMarketsFor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "marketPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "payoutFor", data: BytesLike): Result;

  events: {};
}

export class IBondDepository extends BaseContract {
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

  interface: IBondDepositoryInterface;

  functions: {
    close(
      _id: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    create(
      _quoteToken: string,
      _market: [BigNumberish, BigNumberish, BigNumberish],
      _booleans: [boolean, boolean],
      _terms: [BigNumberish, BigNumberish],
      _intervals: [BigNumberish, BigNumberish],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    currentDebt(
      _bid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    debtDecay(
      _bid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    debtRatio(
      _bid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    deposit(
      _bid: BigNumberish,
      _amount: BigNumberish,
      _maxPrice: BigNumberish,
      _user: string,
      _referral: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initialize_OlympusBondDepositoryV2(
      _authority: string,
      _ohm: string,
      _gohm: string,
      _staking: string,
      _treasury: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isLive(_bid: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;

    liveMarkets(overrides?: CallOverrides): Promise<[BigNumber[]]>;

    liveMarketsFor(
      _quoteToken: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    marketPrice(
      _bid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    payoutFor(
      _amount: BigNumberish,
      _bid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  close(
    _id: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  create(
    _quoteToken: string,
    _market: [BigNumberish, BigNumberish, BigNumberish],
    _booleans: [boolean, boolean],
    _terms: [BigNumberish, BigNumberish],
    _intervals: [BigNumberish, BigNumberish],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  currentDebt(
    _bid: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  debtDecay(_bid: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  debtRatio(_bid: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  deposit(
    _bid: BigNumberish,
    _amount: BigNumberish,
    _maxPrice: BigNumberish,
    _user: string,
    _referral: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initialize_OlympusBondDepositoryV2(
    _authority: string,
    _ohm: string,
    _gohm: string,
    _staking: string,
    _treasury: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isLive(_bid: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

  liveMarkets(overrides?: CallOverrides): Promise<BigNumber[]>;

  liveMarketsFor(
    _quoteToken: string,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  marketPrice(
    _bid: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  payoutFor(
    _amount: BigNumberish,
    _bid: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    close(_id: BigNumberish, overrides?: CallOverrides): Promise<void>;

    create(
      _quoteToken: string,
      _market: [BigNumberish, BigNumberish, BigNumberish],
      _booleans: [boolean, boolean],
      _terms: [BigNumberish, BigNumberish],
      _intervals: [BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    currentDebt(
      _bid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    debtDecay(
      _bid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    debtRatio(
      _bid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    deposit(
      _bid: BigNumberish,
      _amount: BigNumberish,
      _maxPrice: BigNumberish,
      _user: string,
      _referral: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        payout_: BigNumber;
        expiry_: BigNumber;
        index_: BigNumber;
      }
    >;

    initialize_OlympusBondDepositoryV2(
      _authority: string,
      _ohm: string,
      _gohm: string,
      _staking: string,
      _treasury: string,
      overrides?: CallOverrides
    ): Promise<void>;

    isLive(_bid: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

    liveMarkets(overrides?: CallOverrides): Promise<BigNumber[]>;

    liveMarketsFor(
      _quoteToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    marketPrice(
      _bid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    payoutFor(
      _amount: BigNumberish,
      _bid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    close(
      _id: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    create(
      _quoteToken: string,
      _market: [BigNumberish, BigNumberish, BigNumberish],
      _booleans: [boolean, boolean],
      _terms: [BigNumberish, BigNumberish],
      _intervals: [BigNumberish, BigNumberish],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    currentDebt(
      _bid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    debtDecay(
      _bid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    debtRatio(
      _bid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    deposit(
      _bid: BigNumberish,
      _amount: BigNumberish,
      _maxPrice: BigNumberish,
      _user: string,
      _referral: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initialize_OlympusBondDepositoryV2(
      _authority: string,
      _ohm: string,
      _gohm: string,
      _staking: string,
      _treasury: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isLive(_bid: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    liveMarkets(overrides?: CallOverrides): Promise<BigNumber>;

    liveMarketsFor(
      _quoteToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    marketPrice(
      _bid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    payoutFor(
      _amount: BigNumberish,
      _bid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    close(
      _id: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    create(
      _quoteToken: string,
      _market: [BigNumberish, BigNumberish, BigNumberish],
      _booleans: [boolean, boolean],
      _terms: [BigNumberish, BigNumberish],
      _intervals: [BigNumberish, BigNumberish],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    currentDebt(
      _bid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    debtDecay(
      _bid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    debtRatio(
      _bid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    deposit(
      _bid: BigNumberish,
      _amount: BigNumberish,
      _maxPrice: BigNumberish,
      _user: string,
      _referral: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initialize_OlympusBondDepositoryV2(
      _authority: string,
      _ohm: string,
      _gohm: string,
      _staking: string,
      _treasury: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isLive(
      _bid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    liveMarkets(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    liveMarketsFor(
      _quoteToken: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    marketPrice(
      _bid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    payoutFor(
      _amount: BigNumberish,
      _bid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
