const Course = require('../models/course');
const { mongooseToObject } = require('../../util/mongoose');

class SiteController{

    home(req, res) {
        res.render('news');
      };
      
}

module.exports = new SiteController();