// external imports
const express = require('express');

// internal import
const {getUsers} = require('../controller/usersController');
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse');
const avatarUpload = require('../middlewares/users/avatarUpload');
const { addUserValidators, addUserValidationHandler } = require('../middlewares/users/userValidators');

const router = express.Router();

// users page
router.get('/', decorateHtmlResponse('Users'), getUsers);

// add user
router.post('/', avatarUpload, addUserValidators, addUserValidationHandler);

module.exports = router;