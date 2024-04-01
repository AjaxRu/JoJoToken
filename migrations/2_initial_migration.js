const MyToken = artifacts.require("JoJo");

module.exports = function (deployer) {
  deployer.deploy(MyToken, 1000000000);
};