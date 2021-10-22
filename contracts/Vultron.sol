// SPDX-License-Identifier: agpl-3.0
pragma solidity 0.8.9;

import {DssCdpManager} from "./Maker/DssCdpManager.sol";

contract Vultron {

    DssCdpManager proxy;

    uint ETHId;
    uint BTCId;

    constructor() {
        proxy = DssCdpManager(0x5ef30b9986345249bc32d8928B7ee64DE9435E39);
        bytes32 ETHA = 0x4554482d41000000000000000000000000000000000000000000000000000000;
        bytes32 WBTCA = 0x574254432d410000000000000000000000000000000000000000000000000000;
        ETHId = proxy.open(ETHA, address(this));
        BTCId = proxy.open(WBTCA, address(this));
    }

    // function depositETH () external payable {
    //     proxy.frob(ETHId, int(msg.value) , 0);
    // }

    // function stringToBytes32(string memory source) public pure returns (bytes32 result) {
    //     bytes memory tempEmptyStringTest = bytes(source);
    //     if (tempEmptyStringTest.length == 0) {
    //         return 0x0;
    //     }

    //     assembly {
    //         result := mload(add(source, 32))
    //     }
    // }
}