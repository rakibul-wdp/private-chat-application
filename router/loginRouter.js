// external imports
const express = require('express');

// internal import
const {getLogin, login, logout} = require('../controller/loginController');
const { redirectLoggedIn } = require('../middlewares/common/checkLogin');
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse');
const { doLoginValidators, doLoginValidationHandler } = require('../middlewares/login/loginValidators');

const router = express.Router();

// set page title
const page_title = 'Login';

// login page
router.get('/', decorateHtmlResponse(page_title), redirectLoggedIn, getLogin);

// process login
router.post('/', decorateHtmlResponse(page_title), doLoginValidators, doLoginValidationHandler, login);

// logout
router.delete('/', logout);

module.exports = router;