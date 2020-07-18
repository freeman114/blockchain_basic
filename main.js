let hash = require ('object-hash');
let BlockChain = require ('./blockChain')

let blockChain = new BlockChain();

let PROOF = 11;

let validProof = (proof) => {
    let guesshash = hash(proof);
    console.log( 'Hashing: ', guesshash);
    return guesshash == hash(PROOF);
};

let proofOfWork = () => {
    let proof = 0;
    while (true) {
        if (!validProof(proof)) {
            proof ++ ;
        } else {
            break;
        }    
    }
    return proof;
}

if (proofOfWork() == PROOF) {
    blockChain.addNewTransaction("islem", "alexander", 200);
    let prevHash = blockChain.lastBlock() ? blockChain.lastBlock().hash : null;
    blockChain.addNewBlock(prevHash);
}


console.log(` Chain:`, blockChain.chain);
console.log(` Chain:`, blockChain.chain[0].transaction);