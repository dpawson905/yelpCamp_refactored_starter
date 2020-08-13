const express = require("express");
const router  = express.Router({ mergeParams: true });

const {
  asyncErrorHandler,
  isNotAuthenticated
} = require('../middleware');

const {
  getNewComment
} = require('../controllers/comment');

/* GET new comment */
router.get('/new', asyncErrorHandler(isNotAuthenticated), asyncErrorHandler(getNewComment));

module.exports = router;