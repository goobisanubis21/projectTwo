var db = require("../models");

module.exports = function (app) {
  app.get("/api/game/", function (req, res) {
    db.Score.findAll({include: [{model: db.User}],order:[['winStreak', 'DESC']]}).then(function (data) {
      res.json(data);
    });
  });
  
  app.get("/api/game/:userId", function (req, res) {
    db.Score.findAll({
      where: {
        UserId: req.params.userId
      }
    }).then(function (data) {
      res.json(data);
    });
  });

  app.post("/api/game/:userId", function (req, res) {
    console.log(req.params.userId)
    db.Score.create({
      UserId: req.params.userId
    }).then(function (data) {
      res.json(data);
    });
  });

  app.delete("/api/game/:id", function (req, res) {
    db.Score.destroy({
      where: {
        id: req.paramas.id
      }
    }).then(function (data) {
      res.json(data);
    });
  });

  app.put("/api/game-best/:id/:streak/:score", function (req, res) {
    db.Score.update({
      winStreak: req.params.streak,
      combineScore: req.params.score
    }, {
      where: {
        UserId: req.params.id
      }
    }).then(function (data) {
      res.json(data);
    }).catch(function (err) {
      res.json(err);
    });
  });

  app.put("/api/game-score/:id/:streak/:score", function (req, res) {
    db.Score.update({
      currWinStreak: req.params.streak,
      currCombineScore: req.params.score
    }, {
      where: {
        UserId: req.params.id
      }
    }).then(function (data) {
      res.json(data);
    }).catch(function (err) {
      res.json(err);
    });
  });




};
