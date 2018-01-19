const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

chai.use(chaiHttp);

const Post = require('../models/post');

describe('Posts', () => {                     //***Describe what you're testing***
  it('Should create with valid attributes at POST /post/new', (done) => {   //***Describe what should happen***
    //We're testing if the home page loads
    // chai.request('localhost:3001').get('/').end((err, res) => {
    //   if (err) {
    //     done(err);
    //   }
    //   res.status.should.be.equal(200);
    //   done();
    // });

    //TODO: write a test case for posts


    // How many posts are there now?
    // Make a request to create another
    // Check that the database has one more post in it
    // Check that the response is a successful

  });
});
