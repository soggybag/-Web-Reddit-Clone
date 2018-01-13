const app = (require('express'))();

//We're using Handlebars for ExpressJS
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// In order to parse text (e.g. text from when a user creates a new post)
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// We're using MongoDB as our database
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/reddit-clone', { useMongoClient: true });
mongoose.connection.on('error', console.error.bind(console, "MongoDB connection error: "));
mongoose.set('debug', true);


//PUT method for creating a new post
require('./controllers/posts.js')(app);

// Home page
app.get('/', (req, res) => {
  res.render('home', {});
});

// Create new post page
// Needs to do a login check
app.get("/posts/new", (req, res) => {
  res.render('posts-new', {});
});

//The port for this website
app.listen(3001, () => {
  console.log("Listening to port 3001");
});
