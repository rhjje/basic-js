const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  addLink(value) {
    this.chain.push(value);
    return this;
  },

  removeLink(position) {
    if (this.chain[position - 1] === undefined) {
      this.chain = [];
      throw new Error();
    }
    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    const result = this.chain.map(a => '( ' + a + ' )').join("~~");
    this.chain = [];
    return result;
  },
};

module.exports = chainMaker;
