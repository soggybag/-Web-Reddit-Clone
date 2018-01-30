const User = require('../models/user');
module.exports = (app) => {
  // Signup form
  app.get('/register', (req, res) => {
    res.render('register');
  });

  //POST request for register
  app.post('/register', (req, res) => {
    //Create User
    const user = new User(req.body);

    user.save().then((user) => {
      res.redirect('/')
    }).catch((err) => {
      console.log(err.message);
    });
  });
}
