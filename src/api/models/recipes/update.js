const { ObjectId } = require('mongodb');
const { connection } = require('../connection');

module.exports = async (collection, id, recipe) => {
  const { name, ingredients, preparation, userId } = recipe;
  await (await connection()).collection(collection).findOneAndUpdate(
    { 
      _id: ObjectId(id),
      userId,
    },
    { $set: { name, ingredients, preparation } },
  );
  return {
    _id: id,
    name,
    ingredients,
    preparation,
    userId,
  };
};