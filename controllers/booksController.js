const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Book.find({})
        db.Book.sort({ date: - 1 })
        db.Book.then(dbModel => res.json(dbModel))
        db.Book.catch(err => res.status(422).json(err));
      },
      findById: function(req, res) {
        db.Book.findById(req.params.id)
        db.Book.then(dbModel => res.json(dbModel))
        db.Book.catch(err => res.status(422).json(err));
      },
      create: function(req, res) {
        db.Book.create(req.body)
        db.Book.then(dbModel => res.json(dbModel))
        db.Book.catch(err => res.status(422).json(err));
      },
      update: function(req, res) {
        db.Book.findOneAndUpdate({ _id: req.params.id }, req.body)
        db.Book.then(dbModel => res.json(dbModel))
        db.Book.catch(err => res.status(422).json(err));
      },
      remove: function(req, res) {
        db.Book.findById({ _id: req.params.id })
        db.book.then(dbModel => dbModel.remove())
        db.Book.then(dbModel => res.json(dbModel))
        db.book.catch(err => res.status(422).json(err));
      }
};