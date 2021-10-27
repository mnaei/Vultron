// SPDX-License-Identifier: AGPL-3.0-or-later

/// DssCdpManager.sol

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

interface VatLike {
    function urns(bytes32, address) external view returns (uint, uint);
    function hope(address) external;
    function flux(bytes32, address, address, uint) external;
    function move(address, address, uint) external;
    function frob(bytes32, address, address, address, int, int) external;
    function fork(bytes32, address, address, int, int) external;
}

interface DssCdpManager {

    struct List {
        uint prev;
        uint next;
    }

    function urns(uint urnId) external returns (address);

    function ilks(uint ilkId) external returns (bytes32);

    function owns(uint CDPId) external returns (address);

    function cdpCan(address owner, uint CDPId, address idk) external returns (uint);

    // Allow/disallow a usr address to manage the cdp.
    function cdpAllow(
        uint cdp,
        address usr,
        uint ok
    ) external;

    // Allow/disallow a usr address to quit to the the sender urn.
    function urnAllow(
        address usr,
        uint ok
    ) external; 

    // Open a new cdp for a given usr address.
    function open(
        bytes32 ilk,
        address usr
    ) external returns (uint); 

    // Give the cdp ownership to a dst address.
    function give(
        uint cdp,
        address dst
    ) external; 

    // Frob the cdp keeping the generated DAI or collateral freed in the cdp urn address.
    function frob(
        uint cdp,
        int dink,
        int dart
    ) external;

    // Transfer wad amount of cdp collateral from the cdp address to a dst address.
    function flux(
        uint cdp,
        address dst,
        uint wad
    ) external; 

    // Transfer wad amount of any type of collateral (ilk) from the cdp address to a dst address.
    // This function has the purpose to take away collateral from the system that doesn't correspond to the cdp but was sent there wrongly.
    function flux(
        bytes32 ilk,
        uint cdp,
        address dst,
        uint wad
    ) external; 

    // Transfer wad amount of DAI from the cdp address to a dst address.
    function move(
        uint cdp,
        address dst,
        uint rad
    ) external; 

    // Quit the system, migrating the cdp (ink, art) to a different dst urn
    function quit(
        uint cdp,
        address dst
    ) external; 

    // Import a position from src urn to the urn owned by cdp
    function enter(
        address src,
        uint cdp
    ) external;

    // Move a position from cdpSrc urn to the cdpDst urn
    function shift(
        uint cdpSrc,
        uint cdpDst
    ) external;
}
