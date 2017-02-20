const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const GitHubStrategy = require('passport-github').Strategy;
const logic = require('./passport.js')
const configAuth = require('./auth.js');
const RegularUsers = require('./../models/userSchema.js');

module.exports = function (passport) {
  passport.use(new GitHubStrategy({
    clientID: configAuth.githubAuth.clientID,
    clientSecret: configAuth.githubAuth.clientSecret,
    callbackURL: configAuth.githubAuth.callbackURL,
  },
  function (token, refreshToken, profile, done) {
    process.nextTick(function () {
      RegularUser.findOne({ 'github.id': profile.id }, function (err, user) {
        if (err) {
          return done(err);
        }
        if (user) {
          return done(null, user);
        } else {
          var newUser = new User();

          newUser.github.id = profile.id;
          newUser.github.username = profile.username;
          newUser.github.displayName = profile.displayName;
          newUser.github.publicRepos = profile._json.public_repos;

          newUser.save(function (err) {
            if (err) {
                throw err;
            }
            return done(null, newUser);
          });
        }
      });
    });
  }));
};

passport.use(new LocalStrategy(
  (username, password, done) => {
    logic.getUser({ body: { username } }, function (err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: 'Incorrect username'});
      }
      if (!user.validPassword(password)) {

      }

    }


    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));
