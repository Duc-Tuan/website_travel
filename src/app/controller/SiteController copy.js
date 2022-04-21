const coure = require('../models/course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
  //[GET] /home
  home(req, res) {
    res.render('home');
  }
}

module.exports = new SiteController();
