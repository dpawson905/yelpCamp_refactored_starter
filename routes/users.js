const express = require('express');
const router = express.Router();

const {
  asyncErrorHandler
} = require('../middleware');

const {
  getRegister,
  postRegister,
  getLogin,
  postLogin,
  logout
} = require('../controllers/users');

/* GET register. */
router.get('/register', getRegister);

/* POST register */
router.post('/register', asyncErrorHandler(postRegister));

/* GET login */
router.get('/login', getLogin);

/* POST login */
router.post('/login', asyncErrorHandler(postLogin));

/* GET logout */
router.get('/logout', logout)

module.exports = router;
