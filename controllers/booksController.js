const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.googlebooks.find({})
        db.googlebooks.sort({ date: - 1 })
        db.googlebooks.then(dbModel => res.json(dbModel))
        db.googlebooks.catch(err => res.status(422).json(err));
      },
      findById: function(req, res) {
        db.googlebooks.findById(req.params.id)
        db.googlebooks.then(dbModel => res.json(dbModel))
        db.googlebooks.catch(err => res.status(422).json(err));
      },
      create: function(req, res) {
        db.googlebooks.create(req.body)
        db.googlebooks.then(dbModel => res.json(dbModel))
        db.googlebooks.catch(err => res.status(422).json(err));
      },
      update: function(req, res) {
        db.googlebooks.findOneAndUpdate({ _id: req.params.id }, req.body)
        db.googlebooks.then(dbModel => res.json(dbModel))
        db.googlebooks.catch(err => res.status(422).json(err));
      },
      remove: function(req, res) {
        db.googlebooks.findById({ _id: req.params.id })
        db.googlebooks.then(dbModel => dbModel.remove())
        db.googlebooks.then(dbModel => res.json(dbModel))
        db.googlebooks.catch(err => res.status(422).json(err));
      }
};