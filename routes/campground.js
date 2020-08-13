const express = require("express");
const router  = express.Router();

const {
  asyncErrorHandler,
  isNotAuthenticated
} = require('../middleware');

const {
  getAllCampgrounds
} = require('../controllers/campground');

/* GET all campgrounds */
router.get('/', asyncErrorHandler(isNotAuthenticated), asyncErrorHandler(getAllCampgrounds));

module.exports = router;