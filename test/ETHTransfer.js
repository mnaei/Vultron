const Vultron = artifacts.require("Vultron");
const fs = require("fs")

contract("Testing ETH Transfer", async accounts => {
  it("Should deposit eth to vault", async () => {
    const instance = await Vultron.deployed();
    await instance.depositETH.sendTransaction({from: accounts[0], value: "10000000000000000000"}); 
  });

  it("Should withdraw eth to account", async () => {
    const instance = await Vultron.deployed();
    await instance.withdrawETH("1000000000000000000", {from: accounts[0]}); 
  });


  it("Should borrow DAI", async () => {
    const instance = await Vultron.deployed();
    await instance.borrowDAI("20000000000000000000000", {from: accounts[0]}); 
  });


  it("Should payback DAI", async () => {
    const instance = await Vultron.deployed();
    // let DAIABI = JSON.stringify(JSON.parse(ERC20ABI);                                // Set contract ABI
    let ERC20 = new web3.eth.Contract(comp.abi, "0x6b175474e89094c44da98b954eedeac495271d0f");                   // Contract object
    await ERC20.methods.approve(instance.address, "2000000000000000000000").send( {from: accounts[0]});
    await instance.paybackDAI("2000000000000000000000", {from: accounts[0]}); 
  });

});

var comp = 
{
  "contractName": "IERC20",
  "abi": [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.8.9+commit.e5eed63a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"Interface of the ERC20 standard as defined in the EIP.\",\"events\":{\"Approval(address,address,uint256)\":{\"details\":\"Emitted when the allowance of a `spender` for an `owner` is set by a call to {approve}. `value` is the new allowance.\"},\"Transfer(address,address,uint256)\":{\"details\":\"Emitted when `value` tokens are moved from one account (`from`) to another (`to`). Note that `value` may be zero.\"}},\"kind\":\"dev\",\"methods\":{\"allowance(address,address)\":{\"details\":\"Returns the remaining number of tokens that `spender` will be allowed to spend on behalf of `owner` through {transferFrom}. This is zero by default. This value changes when {approve} or {transferFrom} are called.\"},\"approve(address,uint256)\":{\"details\":\"Sets `amount` as the allowance of `spender` over the caller's tokens. Returns a boolean value indicating whether the operation succeeded. IMPORTANT: Beware that changing an allowance with this method brings the risk that someone may use both the old and the new allowance by unfortunate transaction ordering. One possible solution to mitigate this race condition is to first reduce the spender's allowance to 0 and set the desired value afterwards: https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729 Emits an {Approval} event.\"},\"balanceOf(address)\":{\"details\":\"Returns the amount of tokens owned by `account`.\"},\"totalSupply()\":{\"details\":\"Returns the amount of tokens in existence.\"},\"transfer(address,uint256)\":{\"details\":\"Moves `amount` tokens from the caller's account to `recipient`. Returns a boolean value indicating whether the operation succeeded. Emits a {Transfer} event.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"Moves `amount` tokens from `sender` to `recipient` using the allowance mechanism. `amount` is then deducted from the caller's allowance. Returns a boolean value indicating whether the operation succeeded. Emits a {Transfer} event.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/IERC20.sol\":\"IERC20\"},\"evmVersion\":\"london\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"project:/contracts/IERC20.sol\":{\"keccak256\":\"0x099f5073cf3661dccceb42bddbfeac88074d75b5ccca2e02338c88aa7ef5b33c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://34d937df9b08274808f78e0a8217210586078774b563831b4c3adce8533c8a76\",\"dweb:/ipfs/QmSDdFmrtQxMH6uQMHFHHQYcJKt2WonXj7LD2m2vtF5UQ5\"]}},\"version\":1}",
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "immutableReferences": {},
  "generatedSources": [],
  "deployedGeneratedSources": [],
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "// SPDX-License-Identifier: MIT\n\npragma solidity ^0.8.9;\n\n/**\n * @dev Interface of the ERC20 standard as defined in the EIP.\n */\ninterface IERC20 {\n    /**\n     * @dev Returns the amount of tokens in existence.\n     */\n    function totalSupply() external view returns (uint256);\n\n    /**\n     * @dev Returns the amount of tokens owned by `account`.\n     */\n    function balanceOf(address account) external view returns (uint256);\n\n    /**\n     * @dev Moves `amount` tokens from the caller's account to `recipient`.\n     *\n     * Returns a boolean value indicating whether the operation succeeded.\n     *\n     * Emits a {Transfer} event.\n     */\n    function transfer(address recipient, uint256 amount) external returns (bool);\n\n    /**\n     * @dev Returns the remaining number of tokens that `spender` will be\n     * allowed to spend on behalf of `owner` through {transferFrom}. This is\n     * zero by default.\n     *\n     * This value changes when {approve} or {transferFrom} are called.\n     */\n    function allowance(address owner, address spender) external view returns (uint256);\n\n    /**\n     * @dev Sets `amount` as the allowance of `spender` over the caller's tokens.\n     *\n     * Returns a boolean value indicating whether the operation succeeded.\n     *\n     * IMPORTANT: Beware that changing an allowance with this method brings the risk\n     * that someone may use both the old and the new allowance by unfortunate\n     * transaction ordering. One possible solution to mitigate this race\n     * condition is to first reduce the spender's allowance to 0 and set the\n     * desired value afterwards:\n     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729\n     *\n     * Emits an {Approval} event.\n     */\n    function approve(address spender, uint256 amount) external returns (bool);\n\n    /**\n     * @dev Moves `amount` tokens from `sender` to `recipient` using the\n     * allowance mechanism. `amount` is then deducted from the caller's\n     * allowance.\n     *\n     * Returns a boolean value indicating whether the operation succeeded.\n     *\n     * Emits a {Transfer} event.\n     */\n    function transferFrom(\n        address sender,\n        address recipient,\n        uint256 amount\n    ) external returns (bool);\n\n    /**\n     * @dev Emitted when `value` tokens are moved from one account (`from`) to\n     * another (`to`).\n     *\n     * Note that `value` may be zero.\n     */\n    event Transfer(address indexed from, address indexed to, uint256 value);\n\n    /**\n     * @dev Emitted when the allowance of a `spender` for an `owner` is set by\n     * a call to {approve}. `value` is the new allowance.\n     */\n    event Approval(address indexed owner, address indexed spender, uint256 value);\n}\n",
  "sourcePath": "/Users/mnaei/j/vultron/contracts/IERC20.sol",
  "ast": {
    "absolutePath": "project:/contracts/IERC20.sol",
    "exportedSymbols": {
      "IERC20": [
        77
      ]
    },
    "id": 78,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".9"
        ],
        "nodeType": "PragmaDirective",
        "src": "33:23:0"
      },
      {
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "IERC20",
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": {
          "id": 2,
          "nodeType": "StructuredDocumentation",
          "src": "58:70:0",
          "text": " @dev Interface of the ERC20 standard as defined in the EIP."
        },
        "fullyImplemented": false,
        "id": 77,
        "linearizedBaseContracts": [
          77
        ],
        "name": "IERC20",
        "nameLocation": "139:6:0",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "documentation": {
              "id": 3,
              "nodeType": "StructuredDocumentation",
              "src": "152:66:0",
              "text": " @dev Returns the amount of tokens in existence."
            },
            "functionSelector": "18160ddd",
            "id": 8,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "totalSupply",
            "nameLocation": "232:11:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "243:2:0"
            },
            "returnParameters": {
              "id": 7,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 8,
                  "src": "269:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "269:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "268:9:0"
            },
            "scope": 77,
            "src": "223:55:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "documentation": {
              "id": 9,
              "nodeType": "StructuredDocumentation",
              "src": "284:72:0",
              "text": " @dev Returns the amount of tokens owned by `account`."
            },
            "functionSelector": "70a08231",
            "id": 16,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "balanceOf",
            "nameLocation": "370:9:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 12,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "388:7:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 16,
                  "src": "380:15:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "380:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "379:17:0"
            },
            "returnParameters": {
              "id": 15,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 16,
                  "src": "420:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "420:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "419:9:0"
            },
            "scope": 77,
            "src": "361:68:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "documentation": {
              "id": 17,
              "nodeType": "StructuredDocumentation",
              "src": "435:209:0",
              "text": " @dev Moves `amount` tokens from the caller's account to `recipient`.\n Returns a boolean value indicating whether the operation succeeded.\n Emits a {Transfer} event."
            },
            "functionSelector": "a9059cbb",
            "id": 26,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "transfer",
            "nameLocation": "658:8:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 22,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19,
                  "mutability": "mutable",
                  "name": "recipient",
                  "nameLocation": "675:9:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 26,
                  "src": "667:17:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 18,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "667:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 21,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "694:6:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 26,
                  "src": "686:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "686:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "666:35:0"
            },
            "returnParameters": {
              "id": 25,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 24,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 26,
                  "src": "720:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 23,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "720:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "719:6:0"
            },
            "scope": 77,
            "src": "649:77:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "documentation": {
              "id": 27,
              "nodeType": "StructuredDocumentation",
              "src": "732:264:0",
              "text": " @dev Returns the remaining number of tokens that `spender` will be\n allowed to spend on behalf of `owner` through {transferFrom}. This is\n zero by default.\n This value changes when {approve} or {transferFrom} are called."
            },
            "functionSelector": "dd62ed3e",
            "id": 36,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "allowance",
            "nameLocation": "1010:9:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 32,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "1028:5:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 36,
                  "src": "1020:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1020:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 31,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "1043:7:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 36,
                  "src": "1035:15:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 30,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1035:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1019:32:0"
            },
            "returnParameters": {
              "id": 35,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 36,
                  "src": "1075:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 33,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1075:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1074:9:0"
            },
            "scope": 77,
            "src": "1001:83:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "documentation": {
              "id": 37,
              "nodeType": "StructuredDocumentation",
              "src": "1090:642:0",
              "text": " @dev Sets `amount` as the allowance of `spender` over the caller's tokens.\n Returns a boolean value indicating whether the operation succeeded.\n IMPORTANT: Beware that changing an allowance with this method brings the risk\n that someone may use both the old and the new allowance by unfortunate\n transaction ordering. One possible solution to mitigate this race\n condition is to first reduce the spender's allowance to 0 and set the\n desired value afterwards:\n https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729\n Emits an {Approval} event."
            },
            "functionSelector": "095ea7b3",
            "id": 46,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "approve",
            "nameLocation": "1746:7:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 42,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 39,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "1762:7:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 46,
                  "src": "1754:15:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 38,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1754:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 41,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "1779:6:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 46,
                  "src": "1771:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 40,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1771:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1753:33:0"
            },
            "returnParameters": {
              "id": 45,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 46,
                  "src": "1805:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 43,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1805:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1804:6:0"
            },
            "scope": 77,
            "src": "1737:74:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "documentation": {
              "id": 47,
              "nodeType": "StructuredDocumentation",
              "src": "1817:296:0",
              "text": " @dev Moves `amount` tokens from `sender` to `recipient` using the\n allowance mechanism. `amount` is then deducted from the caller's\n allowance.\n Returns a boolean value indicating whether the operation succeeded.\n Emits a {Transfer} event."
            },
            "functionSelector": "23b872dd",
            "id": 58,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "transferFrom",
            "nameLocation": "2127:12:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 54,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49,
                  "mutability": "mutable",
                  "name": "sender",
                  "nameLocation": "2157:6:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 58,
                  "src": "2149:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 48,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2149:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 51,
                  "mutability": "mutable",
                  "name": "recipient",
                  "nameLocation": "2181:9:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 58,
                  "src": "2173:17:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 50,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2173:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 53,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "2208:6:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 58,
                  "src": "2200:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 52,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2200:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2139:81:0"
            },
            "returnParameters": {
              "id": 57,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 58,
                  "src": "2239:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 55,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2239:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2238:6:0"
            },
            "scope": 77,
            "src": "2118:127:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "anonymous": false,
            "documentation": {
              "id": 59,
              "nodeType": "StructuredDocumentation",
              "src": "2251:158:0",
              "text": " @dev Emitted when `value` tokens are moved from one account (`from`) to\n another (`to`).\n Note that `value` may be zero."
            },
            "id": 67,
            "name": "Transfer",
            "nameLocation": "2420:8:0",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 66,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "2445:4:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 67,
                  "src": "2429:20:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 60,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2429:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 63,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "2467:2:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 67,
                  "src": "2451:18:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 62,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2451:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 65,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2479:5:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 67,
                  "src": "2471:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 64,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2471:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2428:57:0"
            },
            "src": "2414:72:0"
          },
          {
            "anonymous": false,
            "documentation": {
              "id": 68,
              "nodeType": "StructuredDocumentation",
              "src": "2492:148:0",
              "text": " @dev Emitted when the allowance of a `spender` for an `owner` is set by\n a call to {approve}. `value` is the new allowance."
            },
            "id": 76,
            "name": "Approval",
            "nameLocation": "2651:8:0",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 75,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 70,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "2676:5:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 76,
                  "src": "2660:21:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 69,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2660:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 72,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "2699:7:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 76,
                  "src": "2683:23:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 71,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2683:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 74,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2716:5:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 76,
                  "src": "2708:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 73,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2708:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2659:63:0"
            },
            "src": "2645:78:0"
          }
        ],
        "scope": 78,
        "src": "129:2596:0",
        "usedErrors": []
      }
    ],
    "src": "33:2693:0"
  },
  "legacyAST": {
    "absolutePath": "project:/contracts/IERC20.sol",
    "exportedSymbols": {
      "IERC20": [
        77
      ]
    },
    "id": 78,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".9"
        ],
        "nodeType": "PragmaDirective",
        "src": "33:23:0"
      },
      {
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "IERC20",
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": {
          "id": 2,
          "nodeType": "StructuredDocumentation",
          "src": "58:70:0",
          "text": " @dev Interface of the ERC20 standard as defined in the EIP."
        },
        "fullyImplemented": false,
        "id": 77,
        "linearizedBaseContracts": [
          77
        ],
        "name": "IERC20",
        "nameLocation": "139:6:0",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "documentation": {
              "id": 3,
              "nodeType": "StructuredDocumentation",
              "src": "152:66:0",
              "text": " @dev Returns the amount of tokens in existence."
            },
            "functionSelector": "18160ddd",
            "id": 8,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "totalSupply",
            "nameLocation": "232:11:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "243:2:0"
            },
            "returnParameters": {
              "id": 7,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 8,
                  "src": "269:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "269:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "268:9:0"
            },
            "scope": 77,
            "src": "223:55:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "documentation": {
              "id": 9,
              "nodeType": "StructuredDocumentation",
              "src": "284:72:0",
              "text": " @dev Returns the amount of tokens owned by `account`."
            },
            "functionSelector": "70a08231",
            "id": 16,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "balanceOf",
            "nameLocation": "370:9:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 12,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "388:7:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 16,
                  "src": "380:15:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "380:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "379:17:0"
            },
            "returnParameters": {
              "id": 15,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 16,
                  "src": "420:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "420:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "419:9:0"
            },
            "scope": 77,
            "src": "361:68:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "documentation": {
              "id": 17,
              "nodeType": "StructuredDocumentation",
              "src": "435:209:0",
              "text": " @dev Moves `amount` tokens from the caller's account to `recipient`.\n Returns a boolean value indicating whether the operation succeeded.\n Emits a {Transfer} event."
            },
            "functionSelector": "a9059cbb",
            "id": 26,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "transfer",
            "nameLocation": "658:8:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 22,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 19,
                  "mutability": "mutable",
                  "name": "recipient",
                  "nameLocation": "675:9:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 26,
                  "src": "667:17:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 18,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "667:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 21,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "694:6:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 26,
                  "src": "686:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "686:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "666:35:0"
            },
            "returnParameters": {
              "id": 25,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 24,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 26,
                  "src": "720:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 23,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "720:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "719:6:0"
            },
            "scope": 77,
            "src": "649:77:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "documentation": {
              "id": 27,
              "nodeType": "StructuredDocumentation",
              "src": "732:264:0",
              "text": " @dev Returns the remaining number of tokens that `spender` will be\n allowed to spend on behalf of `owner` through {transferFrom}. This is\n zero by default.\n This value changes when {approve} or {transferFrom} are called."
            },
            "functionSelector": "dd62ed3e",
            "id": 36,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "allowance",
            "nameLocation": "1010:9:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 32,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "1028:5:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 36,
                  "src": "1020:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 28,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1020:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 31,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "1043:7:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 36,
                  "src": "1035:15:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 30,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1035:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1019:32:0"
            },
            "returnParameters": {
              "id": 35,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 36,
                  "src": "1075:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 33,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1075:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1074:9:0"
            },
            "scope": 77,
            "src": "1001:83:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "documentation": {
              "id": 37,
              "nodeType": "StructuredDocumentation",
              "src": "1090:642:0",
              "text": " @dev Sets `amount` as the allowance of `spender` over the caller's tokens.\n Returns a boolean value indicating whether the operation succeeded.\n IMPORTANT: Beware that changing an allowance with this method brings the risk\n that someone may use both the old and the new allowance by unfortunate\n transaction ordering. One possible solution to mitigate this race\n condition is to first reduce the spender's allowance to 0 and set the\n desired value afterwards:\n https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729\n Emits an {Approval} event."
            },
            "functionSelector": "095ea7b3",
            "id": 46,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "approve",
            "nameLocation": "1746:7:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 42,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 39,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "1762:7:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 46,
                  "src": "1754:15:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 38,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1754:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 41,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "1779:6:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 46,
                  "src": "1771:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 40,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1771:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1753:33:0"
            },
            "returnParameters": {
              "id": 45,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 46,
                  "src": "1805:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 43,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1805:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1804:6:0"
            },
            "scope": 77,
            "src": "1737:74:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "documentation": {
              "id": 47,
              "nodeType": "StructuredDocumentation",
              "src": "1817:296:0",
              "text": " @dev Moves `amount` tokens from `sender` to `recipient` using the\n allowance mechanism. `amount` is then deducted from the caller's\n allowance.\n Returns a boolean value indicating whether the operation succeeded.\n Emits a {Transfer} event."
            },
            "functionSelector": "23b872dd",
            "id": 58,
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "transferFrom",
            "nameLocation": "2127:12:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 54,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49,
                  "mutability": "mutable",
                  "name": "sender",
                  "nameLocation": "2157:6:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 58,
                  "src": "2149:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 48,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2149:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 51,
                  "mutability": "mutable",
                  "name": "recipient",
                  "nameLocation": "2181:9:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 58,
                  "src": "2173:17:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 50,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2173:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 53,
                  "mutability": "mutable",
                  "name": "amount",
                  "nameLocation": "2208:6:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 58,
                  "src": "2200:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 52,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2200:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2139:81:0"
            },
            "returnParameters": {
              "id": 57,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 58,
                  "src": "2239:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 55,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2239:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2238:6:0"
            },
            "scope": 77,
            "src": "2118:127:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "anonymous": false,
            "documentation": {
              "id": 59,
              "nodeType": "StructuredDocumentation",
              "src": "2251:158:0",
              "text": " @dev Emitted when `value` tokens are moved from one account (`from`) to\n another (`to`).\n Note that `value` may be zero."
            },
            "id": 67,
            "name": "Transfer",
            "nameLocation": "2420:8:0",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 66,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "2445:4:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 67,
                  "src": "2429:20:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 60,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2429:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 63,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "2467:2:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 67,
                  "src": "2451:18:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 62,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2451:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 65,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2479:5:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 67,
                  "src": "2471:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 64,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2471:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2428:57:0"
            },
            "src": "2414:72:0"
          },
          {
            "anonymous": false,
            "documentation": {
              "id": 68,
              "nodeType": "StructuredDocumentation",
              "src": "2492:148:0",
              "text": " @dev Emitted when the allowance of a `spender` for an `owner` is set by\n a call to {approve}. `value` is the new allowance."
            },
            "id": 76,
            "name": "Approval",
            "nameLocation": "2651:8:0",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 75,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 70,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "2676:5:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 76,
                  "src": "2660:21:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 69,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2660:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 72,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "2699:7:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 76,
                  "src": "2683:23:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 71,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2683:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 74,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2716:5:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 76,
                  "src": "2708:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 73,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2708:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2659:63:0"
            },
            "src": "2645:78:0"
          }
        ],
        "scope": 78,
        "src": "129:2596:0",
        "usedErrors": []
      }
    ],
    "src": "33:2693:0"
  },
  "compiler": {
    "name": "solc",
    "version": "0.8.9+commit.e5eed63a.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.4.3",
  "updatedAt": "2021-10-21T17:54:10.258Z",
  "devdoc": {
    "details": "Interface of the ERC20 standard as defined in the EIP.",
    "events": {
      "Approval(address,address,uint256)": {
        "details": "Emitted when the allowance of a `spender` for an `owner` is set by a call to {approve}. `value` is the new allowance."
      },
      "Transfer(address,address,uint256)": {
        "details": "Emitted when `value` tokens are moved from one account (`from`) to another (`to`). Note that `value` may be zero."
      }
    },
    "kind": "dev",
    "methods": {
      "allowance(address,address)": {
        "details": "Returns the remaining number of tokens that `spender` will be allowed to spend on behalf of `owner` through {transferFrom}. This is zero by default. This value changes when {approve} or {transferFrom} are called."
      },
      "approve(address,uint256)": {
        "details": "Sets `amount` as the allowance of `spender` over the caller's tokens. Returns a boolean value indicating whether the operation succeeded. IMPORTANT: Beware that changing an allowance with this method brings the risk that someone may use both the old and the new allowance by unfortunate transaction ordering. One possible solution to mitigate this race condition is to first reduce the spender's allowance to 0 and set the desired value afterwards: https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729 Emits an {Approval} event."
      },
      "balanceOf(address)": {
        "details": "Returns the amount of tokens owned by `account`."
      },
      "totalSupply()": {
        "details": "Returns the amount of tokens in existence."
      },
      "transfer(address,uint256)": {
        "details": "Moves `amount` tokens from the caller's account to `recipient`. Returns a boolean value indicating whether the operation succeeded. Emits a {Transfer} event."
      },
      "transferFrom(address,address,uint256)": {
        "details": "Moves `amount` tokens from `sender` to `recipient` using the allowance mechanism. `amount` is then deducted from the caller's allowance. Returns a boolean value indicating whether the operation succeeded. Emits a {Transfer} event."
      }
    },
    "version": 1
  },
  "userdoc": {
    "kind": "user",
    "methods": {},
    "version": 1
  }
}