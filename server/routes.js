const passport = require('passport');

const Authentication = require('./controllers/authentication');
const passportConfig = require('./services/passport');

const requireGithubAuth = passport.authenticate('github', { failureRedirect: '/login/github', session: false });
const requireJwtAuth = passport.authenticate('jwt', { session: false });

module.exports = function (app) {

  // SIGNIN
  app.get('/api/github', requireGithubAuth);
  app.get('/api/github/return', requireGithubAuth, Authentication.signin);

  // CONTENT
  app.get('/settings', requireJwtAuth, Authentication.settings);

};

