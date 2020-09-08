const { encrypt, decrypt } = require('../crypto');


const fakeData = require('./data.json');
const { map } = require('..');


/*
 * POST /allocation to save a new allocation.
 */
function postAllocation(req, res) {
    if(!req.body) return
    const { userId, key, json } = req.body

    if( !userId || !key || !json ){
        res.send({ message: 'some parameters are null'})    
        return
    }
    // TODO: try catch block

    const hash = encrypt(key, json);

    // save allocation
    res.send({ message: 'Allocation successfully added!'});
}

/*
 * GET /allocation/:id route to retrieve a allocation given its id.
 */
function getAllocation(req, res) {

    if(!req.body) return
    const { userId, key } = req.body

    // TODO: try catch block
    // it should be come from database
    const fakeCiphertext = 'U2FsdGVkX1+C6uXAlwJFyJ2g2tZARd1a/6ZtsC8dLSk=' // key "5dbf48c27b59602fb48d44ae => {a: "b1"}

    const text = decrypt(key, fakeCiphertext);

    res.send(text);
}


/*
 * GET /allocation route to retrieve all the allocations.
 */
function getAllocations(req, res) {
    //Query the DB and if no errors, send all the allocations

    if(!req.body) return
    const { userId, key } = req.body

    // TODO: try catch block
    // it should be come from database with userId
    const fakeCipherList = ['U2FsdGVkX1+C6uXAlwJFyJ2g2tZARd1a/6ZtsC8dLSk=', 'U2FsdGVkX1+C6uXAlwJFyJ2g2tZARd1a/6ZtsC8dLSk=' ] // key "5dbf48c27b59602fb48d44ae => {a: "b1"}

    let decryptedList = fakeCipherList.map( cipherText => {
        return decrypt(key, cipherText);
    })

    res.send(decryptedList);
}

//export all the functions
module.exports = { getAllocations, postAllocation, getAllocation };


