const passport = require('passport');
const User = require('../models/user');

module.exports = {
  getRegister(req, res, next) {
    res.render('auth/register');
  },

  async postRegister(req, res, next) {
    try {
      const newUser = new User(req.body);
      User.register(newUser, req.body.password, (err, user) => {
        if(err){
          req.flash("error", err.message);
          return res.render("register");
        }
        passport.authenticate("local")(req, res, () => {
          req.flash("success", "Welcome to YelpCamp " + user.username);
          res.redirect("/campgrounds"); 
        });
      });
    } catch(err) {
      console.log(err.message);
      req.flash('error', err.message);
      return res.redirect('back');
    }
  },

  getLogin(req, res, next) {
    res.render('auth/login');
  },

  async postLogin(req, res, next) {
    await passport.authenticate('local', {
      successRedirect: '/campgrounds',
      failureRedirect: '/users/login',
      successFlash: `Welcome back ${user.username}`,
      failureFlash: true
    })(req, res, next);
  },

  logout(req, res, next) {
    req.logout();
    req.flash('success', 'You\'ve been logged out');
    return res.redirect('/campgrounds')
  }
}