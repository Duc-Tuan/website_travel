'use strict';
const path = require('path');

const express = require('express');
const hbs = require('express-handlebars');
const morgan = require('morgan');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('combined'));

// Template engine
app.engine('.hbs', hbs.engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/news', (req, res) => {
  res.render('news');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
