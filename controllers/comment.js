const Campground = require("../models/campground");
const Comment = require("../models/comment");

module.exports = {
  async getNewComment(req, res, next) {
    res.send('Placeholder for GET /new')
  }
}