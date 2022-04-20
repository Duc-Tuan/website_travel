module.exports = {
  mutipleMongooseToObject: function (mongooses) {
    return mongooses.map((course) => course.toObject());
  },
  mongooseToObject: function (mongooses) {
    return mongooses ? mongooses.toObject() : mongooses;
  },
};
