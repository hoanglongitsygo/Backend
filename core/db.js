const { Mongo_URI } = require("../environment/environment");
const mongoose = require("mongoose");
const connectionOptions = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
};
mongoose.connect(Mongo_URI, connectionOptions);
mongoose.Promise = global.Promise;

module.exports = {
  User: require("../models/user.model"),
  // Suggest: require("../models/suggest.model"),
  // Films: require("../models/film.model")
};
