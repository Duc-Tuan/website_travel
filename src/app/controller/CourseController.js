const Course = require('../models/course');
const { mongooseToObject } = require('../../util/mongoose');

class CourseController {

  course(req, res) {
    res.render('course');
  }
  
}

module.exports = new CourseController();
