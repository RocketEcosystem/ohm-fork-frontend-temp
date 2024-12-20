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

interface OlympusAuthorityInterface extends ethers.utils.Interface {
  functions: {
    "authority()": FunctionFragment;
    "governor()": FunctionFragment;
    "guardian()": FunctionFragment;
    "init()": FunctionFragment;
    "initialize_OlympusAccessControlled(address)": FunctionFragment;
    "initialize_OlympusAuthority(address,address,address,address)": FunctionFragment;
    "newGovernor()": FunctionFragment;
    "newGuardian()": FunctionFragment;
    "newPolicy()": FunctionFragment;
    "newVault()": FunctionFragment;
    "policy()": FunctionFragment;
    "pullGovernor()": FunctionFragment;
    "pullGuardian()": FunctionFragment;
    "pullPolicy()": FunctionFragment;
    "pullVault()": FunctionFragment;
    "pushGovernor(address,bool)": FunctionFragment;
    "pushGuardian(address,bool)": FunctionFragment;
    "pushPolicy(address,bool)": FunctionFragment;
    "pushVault(address,bool)": FunctionFragment;
    "setAuthority(address)": FunctionFragment;
    "vault()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "authority", values?: undefined): string;
  encodeFunctionData(functionFragment: "governor", values?: undefined): string;
  encodeFunctionData(functionFragment: "guardian", values?: undefined): string;
  encodeFunctionData(functionFragment: "init", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "initialize_OlympusAccessControlled",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize_OlympusAuthority",
    values: [string, string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "newGovernor",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "newGuardian",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "newPolicy", values?: undefined): string;
  encodeFunctionData(functionFragment: "newVault", values?: undefined): string;
  encodeFunctionData(functionFragment: "policy", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pullGovernor",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pullGuardian",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pullPolicy",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "pullVault", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pushGovernor",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "pushGuardian",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "pushPolicy",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "pushVault",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setAuthority",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "vault", values?: undefined): string;

  decodeFunctionResult(functionFragment: "authority", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "governor", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "guardian", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "init", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initialize_OlympusAccessControlled",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initialize_OlympusAuthority",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "newGovernor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "newGuardian",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "newPolicy", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "newVault", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "policy", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pullGovernor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pullGuardian",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pullPolicy", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pullVault", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pushGovernor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pushGuardian",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pushPolicy", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pushVault", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setAuthority",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "vault", data: BytesLike): Result;

  events: {
    "AuthorityUpdated(address)": EventFragment;
    "GovernorPulled(address,address)": EventFragment;
    "GovernorPushed(address,address,bool)": EventFragment;
    "GuardianPulled(address,address)": EventFragment;
    "GuardianPushed(address,address,bool)": EventFragment;
    "PolicyPulled(address,address)": EventFragment;
    "PolicyPushed(address,address,bool)": EventFragment;
    "VaultPulled(address,address)": EventFragment;
    "VaultPushed(address,address,bool)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AuthorityUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "GovernorPulled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "GovernorPushed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "GuardianPulled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "GuardianPushed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PolicyPulled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PolicyPushed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "VaultPulled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "VaultPushed"): EventFragment;
}

export type AuthorityUpdatedEvent = TypedEvent<
  [string] & { authority: string }
>;

export type GovernorPulledEvent = TypedEvent<
  [string, string] & { from: string; to: string }
>;

export type GovernorPushedEvent = TypedEvent<
  [string, string, boolean] & {
    from: string;
    to: string;
    _effectiveImmediately: boolean;
  }
>;

export type GuardianPulledEvent = TypedEvent<
  [string, string] & { from: string; to: string }
>;

export type GuardianPushedEvent = TypedEvent<
  [string, string, boolean] & {
    from: string;
    to: string;
    _effectiveImmediately: boolean;
  }
>;

export type PolicyPulledEvent = TypedEvent<
  [string, string] & { from: string; to: string }
>;

export type PolicyPushedEvent = TypedEvent<
  [string, string, boolean] & {
    from: string;
    to: string;
    _effectiveImmediately: boolean;
  }
>;

export type VaultPulledEvent = TypedEvent<
  [string, string] & { from: string; to: string }
>;

export type VaultPushedEvent = TypedEvent<
  [string, string, boolean] & {
    from: string;
    to: string;
    _effectiveImmediately: boolean;
  }
>;

export class OlympusAuthority extends BaseContract {
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

  interface: OlympusAuthorityInterface;

  functions: {
    authority(overrides?: CallOverrides): Promise<[string]>;

    governor(overrides?: CallOverrides): Promise<[string]>;

    guardian(overrides?: CallOverrides): Promise<[string]>;

    init(overrides?: CallOverrides): Promise<[boolean]>;

    initialize_OlympusAccessControlled(
      _authority: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initialize_OlympusAuthority(
      _governor: string,
      _guardian: string,
      _policy: string,
      _vault: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    newGovernor(overrides?: CallOverrides): Promise<[string]>;

    newGuardian(overrides?: CallOverrides): Promise<[string]>;

    newPolicy(overrides?: CallOverrides): Promise<[string]>;

    newVault(overrides?: CallOverrides): Promise<[string]>;

    policy(overrides?: CallOverrides): Promise<[string]>;

    pullGovernor(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    pullGuardian(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    pullPolicy(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    pullVault(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    pushGovernor(
      _newGovernor: string,
      _effectiveImmediately: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    pushGuardian(
      _newGuardian: string,
      _effectiveImmediately: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    pushPolicy(
      _newPolicy: string,
      _effectiveImmediately: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    pushVault(
      _newVault: string,
      _effectiveImmediately: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setAuthority(
      _newAuthority: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    vault(overrides?: CallOverrides): Promise<[string]>;
  };

  authority(overrides?: CallOverrides): Promise<string>;

  governor(overrides?: CallOverrides): Promise<string>;

  guardian(overrides?: CallOverrides): Promise<string>;

  init(overrides?: CallOverrides): Promise<boolean>;

  initialize_OlympusAccessControlled(
    _authority: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initialize_OlympusAuthority(
    _governor: string,
    _guardian: string,
    _policy: string,
    _vault: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  newGovernor(overrides?: CallOverrides): Promise<string>;

  newGuardian(overrides?: CallOverrides): Promise<string>;

  newPolicy(overrides?: CallOverrides): Promise<string>;

  newVault(overrides?: CallOverrides): Promise<string>;

  policy(overrides?: CallOverrides): Promise<string>;

  pullGovernor(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  pullGuardian(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  pullPolicy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  pullVault(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  pushGovernor(
    _newGovernor: string,
    _effectiveImmediately: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  pushGuardian(
    _newGuardian: string,
    _effectiveImmediately: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  pushPolicy(
    _newPolicy: string,
    _effectiveImmediately: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  pushVault(
    _newVault: string,
    _effectiveImmediately: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setAuthority(
    _newAuthority: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  vault(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    authority(overrides?: CallOverrides): Promise<string>;

    governor(overrides?: CallOverrides): Promise<string>;

    guardian(overrides?: CallOverrides): Promise<string>;

    init(overrides?: CallOverrides): Promise<boolean>;

    initialize_OlympusAccessControlled(
      _authority: string,
      overrides?: CallOverrides
    ): Promise<void>;

    initialize_OlympusAuthority(
      _governor: string,
      _guardian: string,
      _policy: string,
      _vault: string,
      overrides?: CallOverrides
    ): Promise<void>;

    newGovernor(overrides?: CallOverrides): Promise<string>;

    newGuardian(overrides?: CallOverrides): Promise<string>;

    newPolicy(overrides?: CallOverrides): Promise<string>;

    newVault(overrides?: CallOverrides): Promise<string>;

    policy(overrides?: CallOverrides): Promise<string>;

    pullGovernor(overrides?: CallOverrides): Promise<void>;

    pullGuardian(overrides?: CallOverrides): Promise<void>;

    pullPolicy(overrides?: CallOverrides): Promise<void>;

    pullVault(overrides?: CallOverrides): Promise<void>;

    pushGovernor(
      _newGovernor: string,
      _effectiveImmediately: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    pushGuardian(
      _newGuardian: string,
      _effectiveImmediately: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    pushPolicy(
      _newPolicy: string,
      _effectiveImmediately: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    pushVault(
      _newVault: string,
      _effectiveImmediately: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setAuthority(
      _newAuthority: string,
      overrides?: CallOverrides
    ): Promise<void>;

    vault(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "AuthorityUpdated(address)"(
      authority?: string | null
    ): TypedEventFilter<[string], { authority: string }>;

    AuthorityUpdated(
      authority?: string | null
    ): TypedEventFilter<[string], { authority: string }>;

    "GovernorPulled(address,address)"(
      from?: string | null,
      to?: string | null
    ): TypedEventFilter<[string, string], { from: string; to: string }>;

    GovernorPulled(
      from?: string | null,
      to?: string | null
    ): TypedEventFilter<[string, string], { from: string; to: string }>;

    "GovernorPushed(address,address,bool)"(
      from?: string | null,
      to?: string | null,
      _effectiveImmediately?: null
    ): TypedEventFilter<
      [string, string, boolean],
      { from: string; to: string; _effectiveImmediately: boolean }
    >;

    GovernorPushed(
      from?: string | null,
      to?: string | null,
      _effectiveImmediately?: null
    ): TypedEventFilter<
      [string, string, boolean],
      { from: string; to: string; _effectiveImmediately: boolean }
    >;

    "GuardianPulled(address,address)"(
      from?: string | null,
      to?: string | null
    ): TypedEventFilter<[string, string], { from: string; to: string }>;

    GuardianPulled(
      from?: string | null,
      to?: string | null
    ): TypedEventFilter<[string, string], { from: string; to: string }>;

    "GuardianPushed(address,address,bool)"(
      from?: string | null,
      to?: string | null,
      _effectiveImmediately?: null
    ): TypedEventFilter<
      [string, string, boolean],
      { from: string; to: string; _effectiveImmediately: boolean }
    >;

    GuardianPushed(
      from?: string | null,
      to?: string | null,
      _effectiveImmediately?: null
    ): TypedEventFilter<
      [string, string, boolean],
      { from: string; to: string; _effectiveImmediately: boolean }
    >;

    "PolicyPulled(address,address)"(
      from?: string | null,
      to?: string | null
    ): TypedEventFilter<[string, string], { from: string; to: string }>;

    PolicyPulled(
      from?: string | null,
      to?: string | null
    ): TypedEventFilter<[string, string], { from: string; to: string }>;

    "PolicyPushed(address,address,bool)"(
      from?: string | null,
      to?: string | null,
      _effectiveImmediately?: null
    ): TypedEventFilter<
      [string, string, boolean],
      { from: string; to: string; _effectiveImmediately: boolean }
    >;

    PolicyPushed(
      from?: string | null,
      to?: string | null,
      _effectiveImmediately?: null
    ): TypedEventFilter<
      [string, string, boolean],
      { from: string; to: string; _effectiveImmediately: boolean }
    >;

    "VaultPulled(address,address)"(
      from?: string | null,
      to?: string | null
    ): TypedEventFilter<[string, string], { from: string; to: string }>;

    VaultPulled(
      from?: string | null,
      to?: string | null
    ): TypedEventFilter<[string, string], { from: string; to: string }>;

    "VaultPushed(address,address,bool)"(
      from?: string | null,
      to?: string | null,
      _effectiveImmediately?: null
    ): TypedEventFilter<
      [string, string, boolean],
      { from: string; to: string; _effectiveImmediately: boolean }
    >;

    VaultPushed(
      from?: string | null,
      to?: string | null,
      _effectiveImmediately?: null
    ): TypedEventFilter<
      [string, string, boolean],
      { from: string; to: string; _effectiveImmediately: boolean }
    >;
  };

  estimateGas: {
    authority(overrides?: CallOverrides): Promise<BigNumber>;

    governor(overrides?: CallOverrides): Promise<BigNumber>;

    guardian(overrides?: CallOverrides): Promise<BigNumber>;

    init(overrides?: CallOverrides): Promise<BigNumber>;

    initialize_OlympusAccessControlled(
      _authority: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initialize_OlympusAuthority(
      _governor: string,
      _guardian: string,
      _policy: string,
      _vault: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    newGovernor(overrides?: CallOverrides): Promise<BigNumber>;

    newGuardian(overrides?: CallOverrides): Promise<BigNumber>;

    newPolicy(overrides?: CallOverrides): Promise<BigNumber>;

    newVault(overrides?: CallOverrides): Promise<BigNumber>;

    policy(overrides?: CallOverrides): Promise<BigNumber>;

    pullGovernor(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    pullGuardian(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    pullPolicy(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    pullVault(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    pushGovernor(
      _newGovernor: string,
      _effectiveImmediately: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    pushGuardian(
      _newGuardian: string,
      _effectiveImmediately: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    pushPolicy(
      _newPolicy: string,
      _effectiveImmediately: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    pushVault(
      _newVault: string,
      _effectiveImmediately: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setAuthority(
      _newAuthority: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    vault(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    authority(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    governor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    guardian(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    init(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize_OlympusAccessControlled(
      _authority: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initialize_OlympusAuthority(
      _governor: string,
      _guardian: string,
      _policy: string,
      _vault: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    newGovernor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    newGuardian(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    newPolicy(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    newVault(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    policy(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pullGovernor(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    pullGuardian(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    pullPolicy(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    pullVault(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    pushGovernor(
      _newGovernor: string,
      _effectiveImmediately: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    pushGuardian(
      _newGuardian: string,
      _effectiveImmediately: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    pushPolicy(
      _newPolicy: string,
      _effectiveImmediately: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    pushVault(
      _newVault: string,
      _effectiveImmediately: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setAuthority(
      _newAuthority: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    vault(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
