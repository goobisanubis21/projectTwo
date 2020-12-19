// Requiring our Status model
var db = require("../models");

// Routes

module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/status", function(req, res) {
    db.Status.findAll({}).then(function(dbStatus) {
      res.json(dbStatus);
    });
  });

  app.get("/api/status", function(req, res) {
    db.Status.findAll({}).then(function(dbStatus) {
      res.json(dbStatus);
    });
  });


  // Get route for retrieving a single post
  app.get("/api/status/:id", function(req, res) {
    db.Status.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbStatus) {
      res.json(dbStatus);
    });
  });

  // POST route for saving a new post
  app.post("/api/status/", function(req, res) {
    console.log(req.body);
    db.Status.create({
      text: req.body.text
    }).then(function(dbStatus) {
      res.json(dbStatus);
    });
  });

  // DELETE route for deleting posts
  app.delete("/api/status/:id", function(req, res) {
    db.Status.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbStatus) {
      res.json(dbStatus);
    });
  });

  // PUT route for updating posts
  app.put("/api/status/", function(req, res) {
    db.Status.update(req.body,
      {
        where: {
          id: req.body.id,
        }
      }).then(function(dbStatus) {
        res.json(dbStatus);
      });
  });
};