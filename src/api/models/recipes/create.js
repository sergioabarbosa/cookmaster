const { connection } = require('../connection');

module.exports = async (collection, document, type) => {
  const db = await (await connection()).collection(collection).insertOne(document);
  const { password, ...rest } = db.ops[0];
  return { [type]: rest };
};