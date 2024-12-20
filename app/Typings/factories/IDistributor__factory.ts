/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IDistributor, IDistributorInterface } from "../IDistributor";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
    ],
    name: "addPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "distribute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ITreasury",
        name: "_treasury",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "_ohm",
        type: "address",
      },
      {
        internalType: "address",
        name: "_staking",
        type: "address",
      },
      {
        internalType: "address",
        name: "_authority",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_initialRate",
        type: "uint256",
      },
    ],
    name: "initialize_Distributor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "who",
        type: "address",
      },
    ],
    name: "nextRewardFor",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
    ],
    name: "removePool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "retrieveBounty",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_add",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "_rate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_target",
        type: "uint256",
      },
    ],
    name: "setAdjustment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_bounty",
        type: "uint256",
      },
    ],
    name: "setBounty",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_pools",
        type: "address[]",
      },
    ],
    name: "setPools",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "triggerRebase",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IDistributor__factory {
  static readonly abi = _abi;
  static createInterface(): IDistributorInterface {
    return new utils.Interface(_abi) as IDistributorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IDistributor {
    return new Contract(address, _abi, signerOrProvider) as IDistributor;
  }
}
