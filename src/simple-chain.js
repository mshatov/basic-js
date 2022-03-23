const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  strChain: '',

  chainToString() {
    return '( ' + this.chain.join(' )~~( ') + ' )';
  },

  clearChain() {
    this.chain = [];
  },

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    if (value === null) {
      this.chain.push('null');
    } else {
      this.chain.push(value);
    }

    return this;
  },

  removeLink(position) {
    if (position <= 0
      || position > this.getLength()
      || typeof (position) != 'number'
      || !Number.isInteger(position)) {
      this.clearChain();
      throw new Error('You can\'t remove incorrect link!');
    }

    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },
  
  finishChain() {
    this.strChain = this.chainToString();
    this.clearChain();
    return this.strChain;
  }
};

module.exports = {
  chainMaker
};
