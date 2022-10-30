// external imports
const express = require('express');

// internal import
const {getUsers} = require('../controller/usersController');

const router = express.Router();

// users page
router.get('/', getUsers);

module.exports = router;