const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: []
};

chainMaker.addLink = function (value) {
    chainMaker.chain.push(value);
    return chainMaker;
  };
  chainMaker.removeLink = function(position) {
    if (chainMaker.chain[position - 1] === undefined) {
      chainMaker.chain = [];
      throw new Error();
    }
    chainMaker.chain.splice(position - 1, 1);
    return chainMaker;
  };
  chainMaker.reverseChain = function() {
    chainMaker.chain.reverse();
    return chainMaker;
  };
  chainMaker.finishChain = function() {
    let result = chainMaker.chain.map(a => '( ' + a + ' )').join("~~");
    chainMaker.chain = [];
    return result;
};

module.exports = chainMaker;
