// SPDX-License-Identifier: agpl-3.0
pragma solidity 0.8.9;

import {DssCdpManager} from "./Maker/DssCdpManager.sol";


interface VatLike {
    function can(address, address) external view returns (uint);
    function ilks(bytes32) external view returns (uint, uint, uint, uint, uint);
    function dai(address) external view returns (uint);
    function urns(bytes32, address) external view returns (uint, uint);
    function frob(bytes32, address, address, address, int, int) external;
    function hope(address) external;
    function move(address, address, uint) external;
}

interface GemLike {
    function balanceOf(address) external returns(uint);
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

    function toInt(uint x) internal pure returns (int y) {
        y = int(x);
        require(y >= 0, "int-overflow");
    }

    DssCdpManager   proxy = DssCdpManager(0x5ef30b9986345249bc32d8928B7ee64DE9435E39);
    GemLike   WETH = GemLike(0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2);
    GemJoinLike JoinETH = GemJoinLike(0x2F0b23f53734252Bda2277357e97e1517d6B042A);
    VatLike Vat = VatLike(0x35D1b3F3D7966A1DFe207aa4514C12a259A0492B);

    bytes32 ETHA = 0x4554482d41000000000000000000000000000000000000000000000000000000;
    bytes32 WBTCA = 0x574254432d410000000000000000000000000000000000000000000000000000;


    uint ETHId;
    uint BTCId;


    constructor() {
        ETHId = proxy.open(ETHA, address(this));
        BTCId = proxy.open(WBTCA, address(this));
    }

    function depositETH () external payable {
        WETH.deposit{value: msg.value}();
        WETH.approve(address(JoinETH), msg.value);

        address urn = proxy.urns(ETHId);
        JoinETH.join(urn, msg.value);

        proxy.frob(
            ETHId,
            int(msg.value),
            0
        );
    }


    function withdrawETH (uint amount) external payable {

        proxy.frob(ETHId, -toInt(amount), 0);
        // Moves the amount from the CDP urn to proxy's address
        proxy.flux(ETHId, address(this), amount);
        // // Exits WETH amount to proxy address as a token
        JoinETH.exit(address(this), amount);
        // // Converts WETH to ETH
        WETH.withdraw(amount);
        // // Sends ETH back to the user's wallet
        payable(msg.sender).transfer(amount);
    }


    function getDaiAmount(
        address vat,
        address jug,
        address urn,
        bytes32 ilk,
        uint wad
    ) internal returns (int) {

        int dart = 0;
        // Updates stability fee rate
        uint rate = JugLike(jug).drip(ilk);

        // Gets DAI balance of the urn in the vat
        uint dai = VatLike(vat).dai(urn);

        // If there was already enough DAI in the vat balance, just exits it without adding more debt
        if (dai < mul(wad, RAY)) {
            // Calculates the needed dart so together with the existing dai in the vat is enough to exit wad amount of DAI tokens
            dart = toInt(sub(mul(wad, RAY), dai) / rate);
            // This is neeeded due lack of precision. It might need to sum an extra dart wei (for the given DAI wad amount)
            dart = mul(uint(dart), rate) < mul(wad, RAY) ? dart + 1 : dart;
        }

        return dart;
    }

    function borrowDAI (uint amount) external {

    }

    fallback() external payable  {}

    receive() external payable {}
}