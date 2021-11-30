// services/users/create.js

const { validMail } = require('../../middlewares/validMail');
const User = require('../../models/users/create');
const getByEmail = require('../../models/users/getByMail');

const errUserNoNameOrEmailOrPassword = {
  code: 400, 
  message: 'Invalid entries. Try again.',
};
const errorEmailExists = { 
  code: 409,
  message: 'Email already registered',
};
const createUser = async (name, email, password) => {
  const vNameMailPass = await validMail(name, email, password);
  console.log(vNameMailPass);
    if (vNameMailPass) return { err: errUserNoNameOrEmailOrPassword };
  const mExists = await getByEmail(email);
    if (mExists) return { err: errorEmailExists };

  const userCreate = await User.create({ name, email, password });
    return { user: userCreate };
};

module.exports = {
  createUser,
};