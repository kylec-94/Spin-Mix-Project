const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findByCity: function(req, res) {
    db.User
      .find({ city: req.params.city, "$or": [{
        "djPerformer": "yes"}, {"djPerformer": "Yes"}] })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createUser: function(req, res) {
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
