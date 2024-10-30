/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockSOHM, MockSOHMInterface } from "../MockSOHM";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "initialIndex_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rebasePct_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DECIMALS",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "_agnosticBalance",
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
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "_allowedValue",
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
    inputs: [],
    name: "_index",
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
    inputs: [],
    name: "_rebasePct",
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
    inputs: [],
    name: "_totalAgnosticSupply",
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "spender_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value_",
        type: "uint256",
      },
    ],
    name: "approve",
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
        name: "owner_",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
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
    name: "drip",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
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
    name: "index",
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
        internalType: "address",
        name: "to_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
    ],
    name: "mint",
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
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rebase",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newIndex_",
        type: "uint256",
      },
    ],
    name: "setIndex",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newRebasePct_",
        type: "uint256",
      },
    ],
    name: "setRebasePct",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        internalType: "address",
        name: "to_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value_",
        type: "uint256",
      },
    ],
    name: "transfer",
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
        name: "from_",
        type: "address",
      },
      {
        internalType: "address",
        name: "to_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value_",
        type: "uint256",
      },
    ],
    name: "transferFrom",
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
  "0x60a06040523461041c576111426040813803918261001c81610421565b93849283398101031261041c57602081519101519061003b6040610421565b9160098352684d6f636b20734f484d60b81b602084015261005c6040610421565b6004815263734f484d60e01b602082015283519092906001600160401b03811161032557600354600181811c91168015610412575b602082101461030557601f81116103ad575b50602094601f82116001146103465794819293949560009261033b575b50508160011b916000199060031b1c1916176003555b82516001600160401b03811161032557600454600181811c9116801561031b575b602082101461030557601f81116102a0575b506020601f8211600114610239578192939460009261022e575b50508160011b916000199060031b1c1916176004555b80156101dd57811561018757633b9aca00608052600555600655604051610cfb9081610447823960805181818161019a015281816104b70152818161070701528181610b050152610c300152f35b60405162461bcd60e51b815260206004820152602860248201527f7265626173652070657263656e74616765206d75737420626520677265617465604482015267072207468616e20360c41b6064820152608490fd5b60405162461bcd60e51b8152602060048201526024808201527f696e697469616c20696e646578206d75737420626520677265617465722074686044820152630616e20360e41b6064820152608490fd5b015190503880610123565b601f198216906004600052806000209160005b8181106102885750958360019596971061026f575b505050811b01600455610139565b015160001960f88460031b161c19169055388080610261565b9192602060018192868b01518155019401920161024c565b60046000527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b601f830160051c810191602084106102fb575b601f0160051c01905b8181106102ef5750610109565b600081556001016102e2565b90915081906102d9565b634e487b7160e01b600052602260045260246000fd5b90607f16906100f7565b634e487b7160e01b600052604160045260246000fd5b0151905038806100c0565b601f198216956003600052806000209160005b8881106103955750836001959697981061037c575b505050811b016003556100d6565b015160001960f88460031b161c1916905538808061036e565b91926020600181928685015181550194019201610359565b60036000527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b601f830160051c81019160208410610408575b601f0160051c01905b8181106103fc57506100a3565b600081556001016103ef565b90915081906103e6565b90607f1690610091565b600080fd5b6040519190601f01601f191682016001600160401b038111838210176103255760405256fe608080604052600436101561001357600080fd5b60003560e01c90816301861080146109b2575080630452107d1461093d57806306fdde0314610868578063095ea7b31461084257806318160ddd1461081d57806323b872dd146107485780632986c0e51461072a5780632e0f2625146106ef578063312ca139146106d1578063313ce567146106b557806335eb1f3514610664578063395093511461061257806340a5737f146105af57806340c10f19146104935780634d78a7281461047557806370a082311461042c578063952169c0146103f257806395d89b41146102d25780639f678cca146102b6578063a457c2d71461020f578063a9059cbb146101ca578063af14052c146101725763dd62ed3e1461011c57600080fd5b3461016d57604036600319011261016d57610135610a16565b61013d610a2c565b6001600160a01b039182166000908152600160209081526040808320949093168252928352819020549051908152f35b600080fd5b3461016d57600036600319011261016d576101c56005546101bf61019860065483610a42565b7f000000000000000000000000000000000000000000000000000000000000000090610a6b565b90610af0565b600555005b3461016d57604036600319011261016d576102046101e6610a16565b6101fa6001600160a01b0382161515610a8b565b6024359033610c15565b602060405160018152f35b3461016d57604036600319011261016d57610228610a16565b60243590336000526001602052604060002060018060a01b038216600052602052604060002054918083106102635761020492039033610bbb565b60405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608490fd5b3461016d57600036600319011261016d576102d033610afd565b005b3461016d57600036600319011261016d5760405160006004548060011c906001811680156103e8575b6020831081146103d4578285529081156103b85750600114610361575b50819003601f01601f19168101906001600160401b0382118183101761034b57610347829182604052826109cd565b0390f35b634e487b7160e01b600052604160045260246000fd5b600460009081529091507f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b5b8282106103a257506020915082010182610318565b600181602092548385880101520191019061038d565b90506020925060ff191682840152151560051b82010182610318565b634e487b7160e01b84526022600452602484fd5b91607f16916102fb565b3461016d57602036600319011261016d576001600160a01b03610413610a16565b1660005260086020526020604060002054604051908152f35b3461016d57602036600319011261016d576001600160a01b0361044d610a16565b166000526008602052602061046d61019860406000205460055490610a42565b604051908152f35b3461016d57600036600319011261016d576020600754604051908152f35b3461016d57604036600319011261016d576104ac610a16565b6000906104e76104de7f0000000000000000000000000000000000000000000000000000000000000000602435610a42565b60055490610a6b565b6001600160a01b03909116808352600860205260408320805461050b908490610af0565b9055801561056a5760209261052283600254610af0565b6002558181528084526040812061053a848254610af0565b9055600080516020610ca683398151915284604051858152a361055f81600754610af0565b600755604051908152f35b60405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606490fd5b3461016d57602036600319011261016d5760043580156105ce57600555005b606460405162461bcd60e51b815260206004820152602060248201527f6e657720696e646578206d7573742062652067726561746572207468616e20306044820152fd5b3461016d57604036600319011261016d5761020461062e610a16565b336000526001602052604060002060018060a01b03821660005260205261065d60406000206024359054610af0565b9033610bbb565b3461016d57604036600319011261016d5761067d610a16565b610685610a2c565b6001600160a01b039182166000908152600960209081526040808320949093168252928352819020549051908152f35b3461016d57600036600319011261016d57602060405160098152f35b3461016d57600036600319011261016d576020600654604051908152f35b3461016d57600036600319011261016d5760206040517f00000000000000000000000000000000000000000000000000000000000000008152f35b3461016d57600036600319011261016d576020600554604051908152f35b3461016d57606036600319011261016d57610761610a16565b610769610a2c565b6001600160a01b03821691604435919083156107ca57610204936107976001600160a01b0384161515610a8b565b6000526009602052604060002060018060a01b03831660005260205260406000206107c3848254610ae3565b9055610c15565b60405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608490fd5b3461016d57600036600319011261016d57602061046d61019860075460055490610a42565b3461016d57604036600319011261016d5761020461085e610a16565b6024359033610bbb565b3461016d57600036600319011261016d5760405160006003548060011c90600181168015610933575b6020831081146103d4578285529081156103b857506001146108dc5750819003601f01601f19168101906001600160401b0382118183101761034b57610347829182604052826109cd565b600360009081529091507fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b5b82821061091d57506020915082010182610318565b6001816020925483858801015201910190610908565b91607f1691610891565b3461016d57602036600319011261016d57600435801561095c57600655005b60405162461bcd60e51b815260206004820152602860248201527f7265626173652070657263656e74616765206d75737420626520677265617465604482015267072207468616e20360c41b6064820152608490fd5b3461016d57600036600319011261016d576020906005548152f35b91909160208152825180602083015260005b818110610a00575060409293506000838284010152601f8019910116010190565b80602080928701015160408286010152016109df565b600435906001600160a01b038216820361016d57565b602435906001600160a01b038216820361016d57565b81810292918115918404141715610a5557565b634e487b7160e01b600052601160045260246000fd5b8115610a75570490565b634e487b7160e01b600052601260045260246000fd5b15610a9257565b60405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608490fd5b91908203918211610a5557565b91908201809211610a5557565b64174876e8007f000000000000000000000000000000000000000000000000000000000000000081810291820403610a5557600554610b3b91610a6b565b9060018060a01b03168060005260086020526040600020610b5d838254610af0565b9055801561056a57610b7182600254610af0565b6002558060005260006020526040600020610b8d838254610af0565b90556000600080516020610ca68339815191526020604051858152a3610bb581600754610af0565b60075590565b6001600160a01b0390811660008181526009602090815260408083209590941680835294815290839020859055915193845291927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259190a3565b916020610c556104de600080516020610ca6833981519152937f000000000000000000000000000000000000000000000000000000000000000090610a42565b9360018060a01b03169283600052600882526040600020610c77868254610ae3565b905560018060a01b03169384600052600882526040600020610c9a828254610af0565b9055604051908152a356feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa26469706673582212205f6acdeb7bc7091a3074970650fc2a4831d3f9512918bf78fd57372d859e002764736f6c634300081b0033";

export class MockSOHM__factory extends ContractFactory {
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
    initialIndex_: BigNumberish,
    rebasePct_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockSOHM> {
    return super.deploy(
      initialIndex_,
      rebasePct_,
      overrides || {}
    ) as Promise<MockSOHM>;
  }
  getDeployTransaction(
    initialIndex_: BigNumberish,
    rebasePct_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      initialIndex_,
      rebasePct_,
      overrides || {}
    );
  }
  attach(address: string): MockSOHM {
    return super.attach(address) as MockSOHM;
  }
  connect(signer: Signer): MockSOHM__factory {
    return super.connect(signer) as MockSOHM__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockSOHMInterface {
    return new utils.Interface(_abi) as MockSOHMInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockSOHM {
    return new Contract(address, _abi, signerOrProvider) as MockSOHM;
  }
}