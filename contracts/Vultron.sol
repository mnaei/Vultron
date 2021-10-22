// SPDX-License-Identifier: agpl-3.0
pragma solidity 0.8.9;

import {DssCdpManager} from "./Maker/DssCdpManager.sol";

interface GemLike {
    function approve(address, uint) external;
    function transfer(address, uint) external;
    function transferFrom(address, address, uint) external;
    function deposit() external payable;
    function withdraw(uint) external;
}

interface GemJoinLike {
    function dec() external returns (uint);
    function gem() external returns (GemLike);
    function join(address, uint) external payable;
    function exit(address, uint) external;
}

contract Vultron {

    DssCdpManager proxy;
    GemLike WETH;
    GemJoinLike JoinETH = GemJoinLike(0x2F0b23f53734252Bda2277357e97e1517d6B042A);

    bytes32 ETHA = 0x4554482d41000000000000000000000000000000000000000000000000000000;
    bytes32 WBTCA = 0x574254432d410000000000000000000000000000000000000000000000000000;

    uint ETHId;
    uint BTCId;


    constructor() {
        proxy = DssCdpManager(0x5ef30b9986345249bc32d8928B7ee64DE9435E39);
        WETH = GemLike(0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2);
        ETHId = proxy.open(ETHA, address(this));
        BTCId = proxy.open(WBTCA, address(this));
    }

    function depositETH () external payable {
        address urn = proxy.urns(ETHId);
        WETH.deposit{value: msg.value}();
        WETH.approve(address(JoinETH), msg.value);
        JoinETH.join(urn, msg.value);
    }
}