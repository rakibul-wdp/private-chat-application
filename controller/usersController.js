// external imports
const bcrypt = require('bcrypt');

// internal imports
const User = require('../models/People');

// get users page
function getUsers(req, res, next) {
  res.render('users');
}

// add user
async function addUser(req, res, next) {
  let newUser;
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  if (req.files && req.files.length > 0) {
    newUser = new User({
      ...req.body,
      avatar: req.files[0].filename,
      password: hashedPassword,
    });
  } else {
    newUser = new User({
      ...req.body,
      password: hashedPassword,
    });
  }
}

module.exports = {
  getUsers,
}