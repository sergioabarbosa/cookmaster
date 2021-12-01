const jwt = require('jsonwebtoken');
const Joi = require('joi');
const checkLogin = require('../../models/login/loginUser');

const secret = 'serfgres21';

const jwtConfig = {
  expiresIn: '4d',
  algorithm: 'HS256',
};

const schema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
}).messages({
  'any.required': 'All fields must be filled',
  'string.email': 'Incorrect username or password',
});

const checkEmailAndPass = async (email, password) => {
  const result = schema.validate({ email, password });
  if ('error' in result) {
    const { message } = result.error.details[0];
    return { code: 401, body: { message } };
  }
  if (!await checkLogin('users', email, password)) {
    return { code: 401, body: { message: 'Incorrect username or password' } };
  }
  return null;
};

module.exports = async (login) => {
  const { email, password } = login;

  const verifyErrors = await checkEmailAndPass(email, password);
  if (verifyErrors) return verifyErrors;
  const validUser = await checkLogin('users', email, password);
  const token = jwt.sign({ data: validUser }, secret, jwtConfig);
  return {
    code: 200,
    body: { token },
  };
};