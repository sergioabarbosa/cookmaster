const { ObjectId } = require('mongodb');
const { connection } = require('../connection');

module.exports = async (collection, id, userId) => {
  const db = await (await connection()).collection(collection).findOneAndDelete(
    { 
      _id: ObjectId(id),
      userId,
    },
  );

  return db.value;
};