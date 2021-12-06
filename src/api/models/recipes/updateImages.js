const { ObjectId } = require('mongodb');
const { connection } = require('../connection');

const URL = 'localhost:3000/';

module.exports = async (collection, file, id) => {
  const filePath = `${URL}${file.path}`;
  const updateResult = await (await connection()).collection(collection).findOneAndUpdate(
    { 
      _id: ObjectId(id),
    },
    { $set: { image: filePath } },
  );
  return { ...updateResult.value, image: filePath };
};