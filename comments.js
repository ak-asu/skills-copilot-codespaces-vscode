// Create web server
// Create a route for comments
// Create a route for comments/new
// Create a route for comments/:id
// Create a route for comments/:id/edit
// Create a route for comments/:id/delete
// Listen on port 3000

// Require express
const express = require('express');
const app = express();
const comments = require('./comments');

// Set up body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

// Set up method-override
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

// Set up express-handlebars
const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Set up comments
const comments = require('./comments');

// Create a route for comments
app.get('/comments', (req, res) => {
  res.render('comments-index', { comments: comments });
});

// Create a route for comments/new
app.get('/comments/new', (req, res) => {
  res.render('comments-new');
});

// Create a route for comments/:id
app.get('/comments/:id', (req, res) => {
  res.render('comments-show', { comment: comments[req.params.id] });
});

// Create a route for comments/:id/edit
app.get('/comments/:id/edit', (req, res) => {
  res.render('comments-edit', { comment: comments[req.params.id], id: req.params.id });
});

// Create a route for comments/:id/delete
app.delete('/comments/:id/delete', (req, res) => {
  comments.splice(req.params.id, 1);
  res.redirect('/comments');
});

// Listen on port 3000
app.listen(3000, () => {
  console.log('App listening on port 3000!');
});