const logic = require('./server-logic.js');

module.exports = (app, passport) => {
  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    return res.redirect('/login');
  }
  app.route('/')
    .get(isLoggedIn, (req, res) => {
      res.sendFile('../public/index.html');
    });
  app.route('/login')
    .get((req, res) => {
      res.sendFile('../public/login.html');
    });
  app.route('/logout')
    .get((req, res) => {
      req.logout();
      res.redirect('/login');
    });
  app.route('/profile')
    .get(isLoggedIn, (req, res) => {
      res.sendFile('../public/profile.html');
    });
  app.route('/api/:id')
    .get(isLoggedIn, (req, res) => {
      // Passport attaches user's Github info to req.user.github so we can
      // access it on the front-end later
      res.json(req.user.github);
    });
  // The route to be used when user logs in via Github
  app.route('/auth/github')
    .get(passport.authenticate('github'));
  app.route('/auth/github/callback')
    .get(passport.authenticate('github', {
      successRedirect: '/',
      failureRedirect: '/login',
    }));
  app.get('/get/events', logic.getEvents);

  app.post('/post/event', logic.postEvent);
};
