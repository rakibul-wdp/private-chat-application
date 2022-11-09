// external imports
const express = require('express');

// internal import
const {getUsers, addUser, removeUser} = require('../controller/usersController');
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse');
const avatarUpload = require('../middlewares/users/avatarUpload');
const { addUserValidators, addUserValidationHandler } = require('../middlewares/users/userValidators');

const  {checkLogin}  = require('../middlewares/common/checkLogin');

const router = express.Router();

// users page
router.get('/', decorateHtmlResponse('Users'), checkLogin, getUsers);

// add user
router.post('/', avatarUpload, addUserValidators, addUserValidationHandler, addUser);

// remove user
router.delete('/:id', removeUser);

module.exports = router;