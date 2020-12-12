var db = require("../models");
const { where } = require("sequelize/types");

module.exports = function (app) {
  app.get("/api/game/", function (req, res) {
    db.Score.findAll({}).then(function (data) {
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
        db.Score.create({
            socre: req.body.score,
            UserId: req.params.userId
        }).then(function (data) {
            res.json(data);
        });
    })

    app.delete("/api/game/:id", function (req, res) {
        db.Score.destroy({
            where: {
                id: req.paramas.id
            }
        }).then(function (data) {
            res.json(data);
        });
    })


};
