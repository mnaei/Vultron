const Vultron = artifacts.require("Vultron");

contract("Testing ETH Transfer", async accounts => {
  it("Should deposit eth to vault", async () => {
    const instance = await Vultron.deployed();
    await instance.depositETH.sendTransaction({from: accounts[0], value: "10000000000000000000"}); 
  });

  it("Should withdraw eth to account", async () => {
    const instance = await Vultron.deployed();
    await instance.withdrawETH("10000000000000000000", {from: accounts[0]}); 
  });

});