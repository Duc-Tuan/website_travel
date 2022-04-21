const express = require('express');
const news = express.Router();

const newsController = require('../app/controller/HomeController');

// newsnontroller.index
news.get('/', newsController.home);

module.exports = news;
