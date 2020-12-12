var db = require("../models");

module.exports = function (app) {
    app.get("/api/users/:id", function (req, res) {
        db.User.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (data) {
            res.json(data);
        });
    })

    app.post("/api/users", function (req, res) {
        db.User.create({
            username: req.body.username,
            password: req.body.password
        }).then(function (data) {
            res.json(data);
        });
    })
};



// app.get("/api/authors", function(req, res) {
//     db.Author.findAll({}).then(function(dbAuthor) {
//       res.json(dbAuthor);
//     });
//   });

//   app.get("/api/authors/:id", function(req, res) {
//     db.Author.findOne({
//       where: {
//         id: req.params.id
//       }
//     }).then(function(dbAuthor) {
//       res.json(dbAuthor);
//     });
//   });

//   app.post("/api/authors", function(req, res) {
//     db.Author.create(req.body).then(function(dbAuthor) {
//       res.json(dbAuthor);
//     });
//   });

//   app.delete("/api/authors/:id", function(req, res) {
//     db.Author.destroy({
//       where: {
//         id: req.params.id
//       }
//     }).then(function(dbAuthor) {
//       res.json(dbAuthor);
//     });
//   });