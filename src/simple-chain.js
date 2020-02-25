const chainMaker = {
  chain:[],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    str  = `( ${value} )`;
    this.chain.push(str);
    return this;
  },
  removeLink(position) {
    if(this.chain.length < position || position - 1 < 0 || typeof position !== 'number') {
      this.chain = [];
      throw Error('qwertyui');
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
   this.chain.reverse();
   return this;
  },
  finishChain() {
    let result = this.chain.join('~~');
    this.chain = [];
    return result;
  }
};

module.exports = chainMaker;
