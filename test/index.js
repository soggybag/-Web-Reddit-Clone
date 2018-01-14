const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

chai.use(chaiHttp);

describe('site', () => {                     //***Describe what you're testing***
  it('Should have home page', (done) => {   //***Describe what should happen***
    //We're testing if the home page loads
    chai.request('localhost:3001').get('/').end((err, res) => {
      if (err) {
        done(err);
      }
      res.status.should.be.equal(200);
      done();
    });

  });
});
