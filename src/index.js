require("rootpath")();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("../core/jwt");
const errorHandler = require("../core/error-handler");
global.router = express.Router();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Credentials, Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

// use JWT auth to secure the api
app.use(jwt());

// api routes
app.use("/users", require("../controllers/users.controller"));
// app.use("/suggest", require("../controllers/suggest.controller"));
// app.use("/upload", require("../controllers/upload.controller"));
// app.use("/films", require("../controllers/films.controller"));

// global error handler
app.use(errorHandler);

// start server
const port =
  process.env.NODE_ENV === "production" ? process.env.PORT || 80 : 4000;
const server = app.listen(port, function () {
  console.log("Server listening on port " + port);
});
