/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { LibNote, LibNoteInterface } from "../LibNote";

const _abi = [
  {
    anonymous: true,
    inputs: [
      {
        indexed: true,
        internalType: "bytes4",
        name: "sig",
        type: "bytes4",
      },
      {
        indexed: true,
        internalType: "address",
        name: "usr",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "arg1",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "arg2",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "LogNote",
    type: "event",
  },
];

const _bytecode =
  "0x60808060405234601357603a908160198239f35b600080fdfe600080fdfea26469706673582212205cab09bfbcb03f5376c9575708f8d3cdeabad6ef1947dafef0fa79e1b7174c5664736f6c634300081b0033";

export class LibNote__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<LibNote> {
    return super.deploy(overrides || {}) as Promise<LibNote>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): LibNote {
    return super.attach(address) as LibNote;
  }
  connect(signer: Signer): LibNote__factory {
    return super.connect(signer) as LibNote__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LibNoteInterface {
    return new utils.Interface(_abi) as LibNoteInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LibNote {
    return new Contract(address, _abi, signerOrProvider) as LibNote;
  }
}
