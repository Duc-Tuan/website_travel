const express = require('express');
const site = express.Router();

const siteController = require('../app/controller/SiteController copy');

// newsnontroller.index
site.get('/', siteController.home);

module.exports = site;