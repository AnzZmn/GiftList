const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const newTree =  new MerkleTree(niceList)

const newRoot = newTree.getRoot()

console.log("root:",newRoot)
