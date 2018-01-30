const Post = require('../models/post');

module.exports = (app) => {
  // Create a new post page
  // Needs to do a login check
  app.get("/posts/new", (req, res) => {
    // res.send("Hello")
    res.render('posts-new', {});
  });

  // The middleware route in between creating a new post and it being official submitted
  app.post('/posts/new', (req, res) => {
    console.log(req.body.title);
    // Instantiate instance of post models
    var post = new Post(req.body);

    post.save().then((post) => {
      res.redirect('/')
    }).catch((err) => {
      console.log(err.message)
    })

    // Save instance of post model to db
    // post.save((err, post) => {
    //   //Redirect to Home
    //   return res.redirect('/');
    // });
  });
};
