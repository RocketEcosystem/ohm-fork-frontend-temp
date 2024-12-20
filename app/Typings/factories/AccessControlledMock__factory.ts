/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  AccessControlledMock,
  AccessControlledMockInterface,
} from "../AccessControlledMock";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IOlympusAuthority",
        name: "authority",
        type: "address",
      },
    ],
    name: "AuthorityUpdated",
    type: "event",
  },
  {
    inputs: [],
    name: "authority",
    outputs: [
      {
        internalType: "contract IOlympusAuthority",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "governorOnlyTest",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "governorTest",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "guardianOnlyTest",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "guardianTest",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_authority",
        type: "address",
      },
    ],
    name: "initialize_AccessControlledMock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IOlympusAuthority",
        name: "_authority",
        type: "address",
      },
    ],
    name: "initialize_OlympusAccessControlled",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "policyOnlyTest",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "policyTest",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IOlympusAuthority",
        name: "_newAuthority",
        type: "address",
      },
    ],
    name: "setAuthority",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "vaultOnlyTest",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "vaultTest",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6080806040523460155761069c908161001b8239f35b600080fdfe608080604052600436101561001357600080fd5b60003560e01c9081630c0aed5414610469575080630cafff62146104435780631577b8c6146104165780632e389580146103e557806336ea13a31461036b57806357c95543146103455780637a9e5e4b146102865780638718bb36146102605780639d6aedd11461023a578063bf7e214f1461020d578063c599180f146101765763e1f9e8f0146100a357600080fd5b346101715760003660031901126101715760005460405163fbfa77cf60e01b8152906020908290600490829060081c6001600160a01b03165afa80156101655761010991600091610136575b506100f8610530565b906001600160a01b03163314610568565b602061012c6000805460ff60a81b1916600160a81b179081905560a81c60ff1690565b6040519015158152f35b610158915060203d60201161015e575b61015081836104d8565b810190610511565b386100ef565b503d610146565b6040513d6000823e3d90fd5b600080fd5b3461017157600036600319011261017157600054604051630229549960e51b815290602082600481600885901c6001600160a01b03165afa918215610165576020926101cc916000916101f057506100f8610530565b60ff60b01b1916600160b01b17600081905560405160b09190911c60ff1615158152f35b6102079150843d861161015e5761015081836104d8565b846100ef565b346101715760003660031901126101715760005460405160089190911c6001600160a01b03168152602090f35b3461017157600036600319011261017157602060ff60005460b01c166040519015158152f35b3461017157600036600319011261017157602060ff60005460a81c166040519015158152f35b34610171576020366003190112610171576004356001600160a01b038116908181036101715760005460405163030d028960e21b8152909190602081600481600887901c6001600160a01b03165afa8015610165576102ef9160009161032657506100f8610530565b610100600160a81b031990911660089190911b610100600160a81b03161760009081556000805160206106478339815191529080a2005b61033f915060203d60201161015e5761015081836104d8565b856100ef565b3461017157600036600319011261017157602060ff60005460c01c166040519015158152f35b3461017157600036600319011261017157600054604051630505c8c960e01b815290602082600481600885901c6001600160a01b03165afa918215610165576020926103c1916000916101f057506100f8610530565b60ff60b81b1916600160b81b17600081905560405160b89190911c60ff1615158152f35b34610171576020366003190112610171576004356001600160a01b0381169081900361017157610414906105cb565b005b34610171576020366003190112610171576004356001600160a01b038116810361017157610414906105cb565b3461017157600036600319011261017157602060ff60005460b81c166040519015158152f35b346101715760003660031901126101715760005463030d028960e21b82526020908290600490829060081c6001600160a01b03165afa801561016557610109916000916104b957506100f8610530565b6104d2915060203d60201161015e5761015081836104d8565b826100ef565b601f909101601f19168101906001600160401b038211908210176104fb57604052565b634e487b7160e01b600052604160045260246000fd5b9081602091031261017157516001600160a01b03811681036101715790565b60408051919082016001600160401b038111838210176104fb57604052600c82526b15539055551213d49256915160a21b6020830152565b156105705750565b6040519062461bcd60e51b8252602060048301528181519182602483015260005b8381106105b35750508160006044809484010152601f80199101168101030190fd5b60208282018101516044878401015285935001610591565b60005460ff8116610613576001916001600160a01b038116600080516020610647833981519152600080a26101008360a81b039060081b1690828060a81b0319161717600055565b60405162461bcd60e51b815260206004820152600b60248201526a125b9a5d1a585b1a5e995960aa1b6044820152606490fdfe2f658b440c35314f52658ea8a740e05b284cdc84dc9ae01e891f21b8933e7cada26469706673582212204c11238a9c1d3c58f331f001dbd60cf9784a631b92b871a6babf0c1b77126e0764736f6c634300081b0033";

export class AccessControlledMock__factory extends ContractFactory {
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
  ): Promise<AccessControlledMock> {
    return super.deploy(overrides || {}) as Promise<AccessControlledMock>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): AccessControlledMock {
    return super.attach(address) as AccessControlledMock;
  }
  connect(signer: Signer): AccessControlledMock__factory {
    return super.connect(signer) as AccessControlledMock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AccessControlledMockInterface {
    return new utils.Interface(_abi) as AccessControlledMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AccessControlledMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as AccessControlledMock;
  }
}
