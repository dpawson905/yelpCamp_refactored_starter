const Campground = require("../models/campground");

module.exports = {
  async getAllCampgrounds(req, res, next) {
    try {
      let campgrounds = await Campground.find({});
      res.render('campgrounds/index', { campgrounds });
    } catch(err) {
      console.log(err)
      req.flash('error', err.message);
      return res.redirect('back');
    }
  }
}