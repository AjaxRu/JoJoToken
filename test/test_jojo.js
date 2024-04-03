const { BN, expectEvent, expectRevert } = require('@openzeppelin/test-helpers');

const JoJo = artifacts.require("JoJo");

contract("JoJo", function(accounts) {
  let jojo;

  beforeEach(async function() {
    jojo = await JoJo.new(new BN(1000));
  });

  it("should deploy with correct name and symbol", async function() {
    const name = await jojo.name();
    const symbol = await jojo.symbol();
    assert.equal(name, "JoJo", "Name should be JoJo");
    assert.equal(symbol, "JJ", "Symbol should be JJ");
  });

  it("should mint initial supply to deployer", async function() {
    const initialSupply = new BN(1000);
    const balance = await jojo.balanceOf(accounts[0]);
    assert(balance.eq(initialSupply), "Initial supply should be minted to deployer");
  });

  it("should transfer tokens correctly", async function() {
    const amount = new BN(100);
    await jojo.transfer(accounts[1], amount);
    const balance1 = await jojo.balanceOf(accounts[0]);
    const balance2 = await jojo.balanceOf(accounts[1]);
    assert(balance1.eq(new BN(900)), "Sender balance should decrease");
    assert(balance2.eq(amount), "Recipient balance should increase");
  });

});
