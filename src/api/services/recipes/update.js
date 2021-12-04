const jwt = require('jsonwebtoken');
const Update = require('../../models/recipes/update');

const secret = 'serfgres21';

module.exports = async (id, recipe, token) => {
  const { name, ingredients, preparation } = recipe;
  if (!token) return { code: 401, body: { message: 'missing auth token' } };

  let decoded;
  try {
    decoded = jwt.verify(token, secret);
  } catch (err) {
    return { code: 401, body: { message: 'jwt malformed' } };
  }
  const { data: { _id } } = decoded;
  const newRecipe = { name, ingredients, preparation, userId: _id };
  const result = await Update('products', id, newRecipe);
  return {
    code: 200,
    body: result,
  };
};