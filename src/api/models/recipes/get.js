const { ObjectId } = require('mongodb');
const { connection } = require('../connection');

module.exports = async (collection, id) => {
  try {
    const DB = await (await connection()).collection(collection).find(ObjectId(id)).toArray();
    return DB;
  } catch (err) {
    return [];
  }
};