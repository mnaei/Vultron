// SPDX-License-Identifier: AGPL-3.0-or-later

/// DssProxyActions.sol

// Copyright (C) 2018-2020 Maker Ecosystem Growth Holdings, INC.

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General external License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General external License for more details.
//
// You should have received a copy of the GNU Affero General external License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.

pragma solidity >=0.5.12;

interface GemLike {
    function approve(address, uint) external;
    function transfer(address, uint) external;
    function transferFrom(address, address, uint) external;
    function deposit() external payable;
    function withdraw(uint) external;
}

interface ManagerLike {
    function cdpCan(address, uint, address) external view returns (uint);
    function ilks(uint) external view returns (bytes32);
    function owns(uint) external view returns (address);
    function urns(uint) external view returns (address);
    function vat() external view returns (address);
    function open(bytes32, address) external returns (uint);
    function give(uint, address) external;
    function cdpAllow(uint, address, uint) external;
    function urnAllow(address, uint) external;
    function frob(uint, int, int) external;
    function flux(uint, address, uint) external;
    function move(uint, address, uint) external;
    function exit(address, uint, address, uint) external;
    function quit(uint, address) external;
    function enter(address, uint) external;
    function shift(uint, uint) external;
}

interface VatLike {
    function can(address, address) external view returns (uint);
    function ilks(bytes32) external view returns (uint, uint, uint, uint, uint);
    function dai(address) external view returns (uint);
    function urns(bytes32, address) external view returns (uint, uint);
    function frob(bytes32, address, address, address, int, int) external;
    function hope(address) external;
    function move(address, address, uint) external;
}

interface GemJoinLike {
    function dec() external returns (uint);
    function gem() external returns (GemLike);
    function join(address, uint) external payable;
    function exit(address, uint) external;
}

interface GNTJoinLike {
    function bags(address) external view returns (address);
    function make(address) external returns (address);
}

interface DaiJoinLike {
    function vat() external returns (VatLike);
    function dai() external returns (GemLike);
    function join(address, uint) external payable;
    function exit(address, uint) external;
}

interface HopeLike {
    function hope(address) external;
    function nope(address) external;
}

interface EndLike {
    function fix(bytes32) external view returns (uint);
    function cash(bytes32, uint) external;
    function free(bytes32) external;
    function pack(uint) external;
    function skim(bytes32, address) external;
}

interface JugLike {
    function drip(bytes32) external returns (uint);
}

interface PotLike {
    function pie(address) external view returns (uint);
    function drip() external returns (uint);
    function join(uint) external;
    function exit(uint) external;
}

interface ProxyRegistryLike {
    function proxies(address) external view returns (address);
    function build(address) external returns (address);
}

interface ProxyLike {
    function owner() external view returns (address);
}

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// WARNING: These functions meant to be used as a a library for a DSProxy. Some are unsafe if you call them directly.
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


interface DssProxyActions {

    // external functions

    function transfer(address gem, address dst, uint amt) external;

    function ethJoin_join(address apt, address urn) external payable; 

    function gemJoin_join(address apt, address urn, uint amt, bool transferFrom) external; 

    function hope(
        address obj,
        address usr
    ) external; 

    function nope(
        address obj,
        address usr
    ) external; 

    function open(
        address manager,
        bytes32 ilk,
        address usr
    ) external returns (uint cdp);

    function give(
        address manager,
        uint cdp,
        address usr
    ) external;

    function giveToProxy(
        address proxyRegistry,
        address manager,
        uint cdp,
        address dst
    ) external;

    function cdpAllow(
        address manager,
        uint cdp,
        address usr,
        uint ok
    ) external; 

    function urnAllow(
        address manager,
        address usr,
        uint ok
    ) external; 

    function flux(
        address manager,
        uint cdp,
        address dst,
        uint wad
    ) external; 

    function move(
        address manager,
        uint cdp,
        address dst,
        uint rad
    ) external; 

    function frob(
        address manager,
        uint cdp,
        int dink,
        int dart
    ) external; 

    function quit(
        address manager,
        uint cdp,
        address dst
    ) external; 

    function enter(
        address manager,
        address src,
        uint cdp
    ) external;

    function shift(
        address manager,
        uint cdpSrc,
        uint cdpOrg
    ) external;
    
    function makeGemBag(
        address gemJoin
    ) external returns (address bag); 

    function lockETH(
        address manager,
        address ethJoin,
        uint cdp
    ) external payable; 

    function safeLockETH(
        address manager,
        address ethJoin,
        uint cdp,
        address owner
    ) external payable; 

    function lockGem(
        address manager,
        address gemJoin,
        uint cdp,
        uint amt,
        bool transferFrom
    ) external; 

    function safeLockGem(
        address manager,
        address gemJoin,
        uint cdp,
        uint amt,
        bool transferFrom,
        address owner
    ) external;

    function freeETH(
        address manager,
        address ethJoin,
        uint cdp,
        uint wad
    ) external; 

    function freeGem(
        address manager,
        address gemJoin,
        uint cdp,
        uint amt
    ) external; 

    function exitETH(
        address manager,
        address ethJoin,
        uint cdp,
        uint wad
    ) external; 

    function exitGem(
        address manager,
        address gemJoin,
        uint cdp,
        uint amt
    ) external;

    function draw(
        address manager,
        address jug,
        address daiJoin,
        uint cdp,
        uint wad
    ) external; 

    function wipe(
        address manager,
        address daiJoin,
        uint cdp,
        uint wad
    ) external;

    function safeWipe(
        address manager,
        address daiJoin,
        uint cdp,
        uint wad,
        address owner
    ) external;

    function wipeAll(
        address manager,
        address daiJoin,
        uint cdp
    ) external;

    function safeWipeAll(
        address manager,
        address daiJoin,
        uint cdp,
        address owner
    ) external; 

    function lockETHAndDraw(
        address manager,
        address jug,
        address ethJoin,
        address daiJoin,
        uint cdp,
        uint wadD
    ) external payable;

    function openLockETHAndDraw(
        address manager,
        address jug,
        address ethJoin,
        address daiJoin,
        bytes32 ilk,
        uint wadD
    ) external payable returns (uint cdp) ;
    
    function lockGemAndDraw(
        address manager,
        address jug,
        address gemJoin,
        address daiJoin,
        uint cdp,
        uint amtC,
        uint wadD,
        bool transferFrom
    ) external; 

    function openLockGemAndDraw(
        address manager,
        address jug,
        address gemJoin,
        address daiJoin,
        bytes32 ilk,
        uint amtC,
        uint wadD,
        bool transferFrom
    ) external returns (uint cdp); 

    function openLockGNTAndDraw(
        address manager,
        address jug,
        address gntJoin,
        address daiJoin,
        bytes32 ilk,
        uint amtC,
        uint wadD
    ) external returns (address bag, uint cdp); 

    function wipeAndFreeETH(
        address manager,
        address ethJoin,
        address daiJoin,
        uint cdp,
        uint wadC,
        uint wadD
    ) external; 

    function wipeAllAndFreeETH(
        address manager,
        address ethJoin,
        address daiJoin,
        uint cdp,
        uint wadC
    ) external;

    function wipeAndFreeGem(
        address manager,
        address gemJoin,
        address daiJoin,
        uint cdp,
        uint amtC,
        uint wadD
    ) external; 

    function wipeAllAndFreeGem(
        address manager,
        address gemJoin,
        address daiJoin,
        uint cdp,
        uint amtC
    ) external; 
}


interface DssProxyActionsEnd {

    // external functions
    function freeETH(
        address manager,
        address ethJoin,
        address end,
        uint cdp
    ) external; 

    function freeGem(
        address manager,
        address gemJoin,
        address end,
        uint cdp
    ) external; 

    function pack(
        address daiJoin,
        address end,
        uint wad
    ) external; 

    function cashETH(
        address ethJoin,
        address end,
        bytes32 ilk,
        uint wad
    ) external; 

    function cashGem(
        address gemJoin,
        address end,
        bytes32 ilk,
        uint wad
    ) external; 
}

interface DssProxyActionsDsr {
    function join(
        address daiJoin,
        address pot,
        uint wad
    ) external;

    function exit(
        address daiJoin,
        address pot,
        uint wad
    ) external;

    function exitAll(
        address daiJoin,
        address pot
    ) external;
}