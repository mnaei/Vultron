const Vultron = artifacts.require("Vultron");

contract("I don't know", async accounts => {
  it("Should deposit eth to vault", async () => {
    const instance = await Vultron.deployed();
    console.log("this is executed")
    await instance.depositETH.sendTransaction({from: accounts[0], value: 1}); 
    console.log("this two is executed")
  });
});