const { connection } = require('../connection');

module.exports = async (collection) => { 
  const db = await (await connection()).collection(collection).find({}).toArray();
  console.log(db);
  return db;
};