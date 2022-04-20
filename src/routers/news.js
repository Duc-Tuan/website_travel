const express = require('express');
const site = express.Router();

const newsController = require('../app/controller/CourseController');

// newsnontroller.index
site.get('/news', newsController.home);

module.exports = news;