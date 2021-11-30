const { connection } = require('../connection');

module.exports = async (email) => {
  const DB = await connection();
  const myUserMail = await DB.collection('users').findOne({ email });
  return myUserMail;
};