/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IEasyAuction, IEasyAuctionInterface } from "../IEasyAuction";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "tokenToSell",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "biddingToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "lastCancellation",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "auctionEnd",
        type: "uint256",
      },
      {
        internalType: "uint96",
        name: "auctionAmount",
        type: "uint96",
      },
      {
        internalType: "uint96",
        name: "minimumTotalPurchased",
        type: "uint96",
      },
      {
        internalType: "uint256",
        name: "minimumPurchaseAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minFundingThreshold",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isAtomicClosureAllowed",
        type: "bool",
      },
      {
        internalType: "address",
        name: "accessManager",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "accessManagerData",
        type: "bytes",
      },
    ],
    name: "initiateAuction",
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
];

export class IEasyAuction__factory {
  static readonly abi = _abi;
  static createInterface(): IEasyAuctionInterface {
    return new utils.Interface(_abi) as IEasyAuctionInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IEasyAuction {
    return new Contract(address, _abi, signerOrProvider) as IEasyAuction;
  }
}