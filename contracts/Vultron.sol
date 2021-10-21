// SPDX-License-Identifier: agpl-3.0
pragma solidity 0.8.9;

import {DssProxyActions} from "./Maker/DssProxyActions.sol";

contract Vultron {

    DssProxyActions proxy;
    address manager;

    constructor() {
        proxy = DssProxyActions(0x82ecD135Dce65Fbc6DbdD0e4237E0AF93FFD5038);
        manager = 0x5ef30b9986345249bc32d8928B7ee64DE9435E39;
        proxy.open(manager, "ETH-A", address(this));
        proxy.open(manager, "WBTC", address(this));
    }
}