const Comment = require('../models/comment');
const Post = require('../models/post')

module.exports = (app) => {
  //Create a comment
  app.post('/posts/:postId/comments', (req, res) => {
    const comment = new Comment(req.body);


    // console.log("Comment id: " + comment);
    //The save method does not return anything to then
    comment.save().then(() => {
      return Post.findById(req.params.postId);
    }).then((post) => {
      if (!post.comments) {
        post.comments = [];
      }
      // console.log("Pre-push: " + post.comments.length);
      // console.log("Comment id 2: " + comment);
      post.comments.unshift(comment);
      // console.log("Post-push: " + post.comments.length);

      // TODO: fix that it's not saving comment
      post.save().then((post) => {
        // console.log("Post after save: " + post);
         res.redirect("/");
       });
    }).catch((err) => {
      console.log(err.message)
    });
  });
};
