const { connection } = require('../connection');

module.exports = async (collection, email, password) => {
  const db = await (await connection()).collection(collection).findOne({ email, password });
  return db;
};