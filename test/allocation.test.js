//During the test the env variable is set to test
process.env.NODE_ENV = 'test';
process.env.PORT = 4000;

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('..'); // server
// Configure chai
chai.use(chaiHttp);
chai.should();

const fakeData = require('../allocation/data.json')


describe("Allocations", () => {

    beforeEach((done) => { //Before each test we empty the database
        done();	
    });
     
    describe("POST /", () => {
        it('it should POST a Allocation', (done) => {
            let allocation = fakeData.allocations[0]
           
            chai.request(app)
                .post('/allocation')
                .send(allocation)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql('Allocation successfully added!');
                    done();
                });
        });
    });


    describe("POST /search", () => {
        // Test to get all students record
        it("should get all allocations record", (done) => {
            let allocation = fakeData.allocations[0]
            chai.request(app)
                .post('/allocation/search')
                .send(allocation)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');                    
                    done();
                });
         });
    });



   /*
    * Test the /GET/:id route
    */
   describe('/GET/:id allocation', () => {
    it('it should GET a allocation by the given id', (done) => {
        let allocation = fakeData.allocations[0]

        // TODO: should be saved then requested

        chai.request(app)
        .get('/allocation/' + allocation.userId)
        .send(allocation)
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            done();
        });
        
    });
});
 
    
});
