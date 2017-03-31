const mongoose = require('mongoose');
const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require('../config');

function tokenForUser(userId) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: userId, iat: timestamp }, config.secret);
}

exports.signin = (req, res) => {
  // **at this stage user is auth'd
  // check if user already in db, 
  // if not, create and redirect w/ token
  User.findOne({ githubName: req.user.username })
    .catch((err) => {
      res.status(422).send({ error: err });
    })
    .then((result) => {
      if (result) {
        const token = tokenForUser(result._id.toString());
        res.redirect(`http://localhost:8080/signedin?token=${token}`);
      } else {
        User.create({
          githubName: req.user.username,
          avatarUrl: req.user._json.avatar_url,
          settings: {
            color: true,
          }, 
        })
        .then((newUser) => {
          const token = tokenForUser(newUser._id.toString());
          res.redirect(`http://localhost:8080/signedin?token=${token}`);
        });
      }
    });
};

exports.settings = (req, res) => {
  res.send(req.user);
};