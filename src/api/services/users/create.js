// services/users/create.js

const { mailExists } = require('../../middlewares/mailExists');
const { validMail } = require('../../middlewares/validMail');
const User = require('../../models/users/create');
  
const createUser = async (name, email, password) => {
  await validMail();
  await mailExists(); 
  console.log(name, email, password);
 return User.create(name, email, password);
};

module.exports = {
  createUser,
};