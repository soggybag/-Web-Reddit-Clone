const Post = require('../models/post');

module.exports = (app) => {
  // The middleware route in between creating a new post and it being official submitted
  app.post('/posts/new', (req, res) => {
    console.log(req.body.title);
    // Instantiate instance of post models
    var post = new Post(req.body);

    // Save instance of post model to db
    post.save((err, post) => {
      //Redirect to Home
      return res.redirect('/');
    });
  });
};
