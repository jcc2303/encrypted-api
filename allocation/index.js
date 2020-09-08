

const fakeData = require('./data.json')



/*
 * POST /allocation to save a new allocation.
 */
function postAllocation(req, res) {
    console.log(req.body)

    // save allocation
    res.send({user_id: 123, message: 'Allocation successfully added!'});
}

/*
 * GET /allocation/:id route to retrieve a allocation given its id.
 */
function getAllocation(req, res) {
    console.log(req.params.id)
    res.send(fakeData.allocations[0]);
}


/*
 * GET /allocation route to retrieve all the allocations.
 */
function getAllocations(req, res) {
    //Query the DB and if no errors, send all the allocations
    res.send(fakeData);    
}

//export all the functions
module.exports = { getAllocations, postAllocation, getAllocation };


