var db = require("../models");
var passport = require("../config/passport");

module.exports = function (app) {
  app.get("/api/users/:id", function (req, res) {
    db.User.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (data) {
      res.json(data);
    });
  });

  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json(req.user);
  });

  app.post("/api/signup", function (req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    }).then(function (data) {
      res.json(data);
    });
  });

  app.delete("/api/users/:id", function (req, res) {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (data) {
      res.json(data);
    });
  });

  app.put("/api/user-password/:id", function (req, res) {
    db.User.update({
      password: req.body.password
    }, {
      where: {
        id: req.params.id
      }
    }).then(function (data) {
      res.json(data);
    }).catch(function (err) {
      res.json(err);
    });
  });

  app.put("/api/user-best/:id/:streak/:score", function (req, res) {
    db.User.update({
      winStreak: req.params.streak,
      combineScore: req.params.score
    }, {
      where: {
        id: req.params.id
      }
    }).then(function (data) {
      res.json(data);
    }).catch(function (err) {
      res.json(err);
    });
  });

  app.put("/api/user-score/:id/:streak/:score", function (req, res) {
    db.User.update({
      currWinStreak: req.params.streak,
      currCombineScore: req.params.score
    }, {
      where: {
        id: req.params.id
      }
    }).then(function (data) {
      res.json(data);
    }).catch(function (err) {
      res.json(err);
    });
  });

  app.get("/api/user", function(req, res) {
    if (!req.user) {
      res.json({});
    } else {
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
};
