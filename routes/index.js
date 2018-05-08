var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/secret');
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/signup', function(req, res, next) {
  res.render('signup');
});

router.post('/login', passport.authenticate('local-login', {
  successRedirect: '/secret',
  failureRedirect: '/login',
  failureFlash: true
}));

router.post('/signup', passport.authenticate('local-signup', {
  successRedirect: '/secret',
  failureRedirect: '/signup',
  failureFlash: true
}));

router.get('/logout', function(req, res, next) {
  req.logout();
  res.redirect('/');
});

router.get('/secret', isLoggedIn, function(req, res, next) {
  var user = req.user.local;
  res.render('secret', {
    username: user.username,
  });
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    res.locals.username = req.user.local.username;
    next();
  } else {
    res.redirect('/login');
  }
}

router.post('/add', function(req, res, next) {
  if (!req.body || !req.body.text) {
    res.redirect('/');
}
  else {
  // Save new task with text provided, for the current user, and completed = false
    var user = Mods ({_creator: req.user, text: req.body.text});
    user.save()
      .then(() => {
        res.redirect('/');
      })
      .catch((err) => {
        next(err);
      });
  }
});

//, { title: 'Express' }

module.exports = router;
