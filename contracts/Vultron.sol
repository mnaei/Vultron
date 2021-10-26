// SPDX-License-Identifier: agpl-3.0
pragma solidity 0.8.9;

// We have to be considerate of the underlying functions. Whether the vaults are paused, not paused, etc.. and build workaround
// we also have to calculate the fee of the lending protocol
// on our vault we have to do margin call considering the users both ETC and BTC vault
// Consider debt celiing
// instead of an auction system just integrate with one inch to liquidate position.
// consider what happens when the entire vault gets margin called and dai/eth is returned
// if a user vault is delinquite then we can provide very low margin to the maker vault and see it is auctioned by maker. If they are below their margin call amount then we send less to the auction to cover our losses 

import {DssCdpManager} from "./Maker/DssCdpManager.sol";

interface DSSChainLog {

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

interface DaiJoinLike {
    function dai() external returns (GemLike);
    function join(address, uint) external payable;
    function exit(address, uint) external;
}

contract Vultron {

    function toInt(uint x) internal pure returns (int y) {
        y = int(x);
        require(y >= 0, "int-overflow");
    }

    function mul(uint x, uint y) internal pure returns (uint z) {
        require(y == 0 || (z = x * y) / y == x, "mul-overflow");
    }

    DssCdpManager   proxy = DssCdpManager(0x5ef30b9986345249bc32d8928B7ee64DE9435E39);
    GemLike   WETH = GemLike(0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2);
    GemJoinLike JoinETH = GemJoinLike(0x2F0b23f53734252Bda2277357e97e1517d6B042A);
    VatLike Vat = VatLike(0x35D1b3F3D7966A1DFe207aa4514C12a259A0492B);
    DaiJoinLike daiJoin = DaiJoinLike(0x9759A6Ac90977b93B58547b4A71c78317f391A28);

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

    function returnUnwatedToken() external {
        
    }

    function depositBTC () external {

    }

    function withdrawBTC () external {

    }

    function toRad(uint wad) internal pure returns (uint rad) {
        rad = mul(wad, 10 ** 27);
    }

    function borrowDAI(uint amount) external {
        
        // Generates debt in the CDP
        proxy.frob(ETHId, 0, int(amount));
        // Moves the DAI amount (balance in the vat in rad) to proxy's address
        proxy.move(ETHId, address(this), toRad(amount));
        // // Allows adapter to access to proxy's DAI balance in the vat
        if (Vat.can(address(this), address(daiJoin)) == 0) {
            Vat.hope(address(daiJoin));
        }
        // Exits DAI to the user's wallet as a token
        daiJoin.exit(msg.sender, amount);

    }


    function paybackDAI () external {

    }

    function delinquite() public view {
        
    }
    function marginCall() external {
        
        // transfer user vault to be auctioned off
    }

    function balance() public {
        
    }

    function intreset() external {

        // To add our fees, we can use the same system maker dao is using, which is to increase the debt, 
            // and then subtract their debt to our own and thats how we get our fees. 
            // We would still have to call the drip function every once a while to collect the fees
        // We would have to integrate with one inch to liquidate our position. 
                
    }

    function exit() external {
        
    }

    function makerExit() external {

    }

    fallback() external payable  {}

    receive() external payable {}
}
