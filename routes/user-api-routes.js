var db = require("../models");
//const { where } = require("sequelize/types");

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

    app.post("/api/users", function (req, res) {
        db.User.create({
            username: req.body.username,
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

    app.put("/api/user-score/:id/:score", function (req, res) {
        db.User.update({
            highestScore: req.params.score
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

    //might be hard to do
    app.put("/api/user-password/:id", function (req, res) {
        db.User.update({
            pssword: req.body.password
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
};
