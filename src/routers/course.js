const express = require('express');
const course = express.Router();

const courseController = require('../app/controller/CourseController');

course.get('/', courseController.course);

module.exports = course;
