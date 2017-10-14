var ConvertLib = artifacts.require("./ConvertLib.sol");
var Geekt = artifacts.require("./Geekt.sol");
var MetaCoin = artifacts.require("./MetaCoin.sol");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MetaCoin, Geekt);
  deployer.deploy(MetaCoin);
  deployer.deploy(Geekt);
};
