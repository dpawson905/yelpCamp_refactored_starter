const express = require('express');
const router = express.Router();

const {
  getLanding
} = require('../controllers');

/* GET home page. */
router.get('/', getLanding);

module.exports = router;
