//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('..'); // '../server'
// Configure chai
chai.use(chaiHttp);
chai.should();

describe("Allocations", () => {
    describe("GET /", () => {
        // Test to get all students record
        it("should get all allocations record", (done) => {
             chai.request(app)
                 .get('/')
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                     done();
                  });
         });
    });
});
