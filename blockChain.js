
let hash = require ('object-hash');

class BlockChain {
    constructor (){

        //create
        this.chain = [];

        //Transaction
        this.curr_transaction = [];
    }

    addNewBlock(prevhash) {
        let block = {
            index: this.chain.length + 1,
            timestamp: Date.now(),
            transaction: this.curr_transaction,
            prevhash: prevhash,
        };


        //put Hash
        this.hash = hash(block);

        // Add to Chain
        this.chain.push(block);
        console.log('block', block);
        this.curr_transaction = [];
        return block;
    }

    lastBlock() {
        return this.chain.slice(-1)[0];       
    }

    addNewTransaction (sender, recipient, amount){
        this.curr_transaction.push({ sender, recipient, amount });
    }

    isEmpty() {
        return this.chain.length == 0;
    }
}

module.exports = BlockChain;
