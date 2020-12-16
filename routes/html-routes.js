var path = require("path");

var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });
  app.get("/signup", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });
  app.get("/highscore", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/highscore.html"));
  });
};