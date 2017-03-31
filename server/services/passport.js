const passport = require('passport');

const User = require('../models/user');
const config = require('../config');

// JWT
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

// GITHUB
const GitHubStrategy = require('passport-github').Strategy;


// JWT***********************
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret,
};

const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
  User.findById(payload.sub)
  .catch(err => done(err, false))
  .then((result) => {
    done(null, result);
  });
});


// GITHUB********************
const githubOptions = {
  clientID: config.GITHUB_CLIENT_ID,
  clientSecret: config.GITHUB_CLIENT_SECRET,
  callbackURL: 'http://localhost:3000/api/github/return',
};

const githubLogin = new GitHubStrategy(githubOptions, 
  function (accessToken, refreshToken, profile, cb) {
    cb(null, profile);
  }
);

passport.use(githubLogin);
passport.use(jwtLogin);

