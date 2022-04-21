const siteRouter = require('./site');
const newsRouter = require('./news');
const courseRouter = require('./course');

function route(app) {
  app.use('/course', courseRouter);
  app.use('/news', newsRouter);

  app.use('/', siteRouter);
}

module.exports = route;
