console.log('encrypted-api');
const express = require("express");

let bodyParser = require('body-parser');

let allocation = require('./allocation');


const PORT = process.env.PORT || 3000;
const app = express();



//parse application/json and look for raw text                                        
app.use(bodyParser.json());                                     
app.use(bodyParser.urlencoded({extended: true}));               
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json'}));  

app.get("/", (req, res) => res.json({message: "Welcome to our Allocation! -> GET ./allocations"}));

    
app.route("/allocation")
    .get(  allocation.getAllocations )
    .post( allocation.postAllocation );
app.route("/allocation/:id")
    .get( allocation.getAllocation );


app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
});

module.exports = app; // for testing