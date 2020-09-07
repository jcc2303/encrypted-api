

/*
 * GET /allocation route to retrieve all the allocations.
 */
function getAllocations(req, res) {
    //Query the DB and if no errors, send all the allocations
    const fakeData = {
        "allocations": [
            {
                "user_id": "7364823",
                "json": {"a": "b"}
            },
            {
                "user_id": "3824092",
                "json": {"a": "b"}
            }
        ]
    }
    res.send(fakeData);    
}


//export all the functions
module.exports = { getAllocations };