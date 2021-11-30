const getByEmail = require('./validMail');

const mailExists = async (email) => {
const emailExists = await getByEmail.validMail(email);
const errorEmailExists = { 
  message: 'Email already registered',
};

if (emailExists) {
    return {
      err: errorEmailExists,
    };
  }
};
module.exports = {
    mailExists,
};