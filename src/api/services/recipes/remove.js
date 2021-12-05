const jwt = require('jsonwebtoken');
const recipeDelete = require('../../models/recipes/remove');

const secret = 'serfgres21';

module.exports = async (id, token) => {
  if (!token) return { code: 401, body: { message: 'missing auth token' } };
  let decode;
  try {
    decode = jwt.verify(token, secret);
  } catch (err) {
    return { code: 401, body: { message: 'jwt malformed' } };
  }
  const { data: { _id } } = decode;
  const userId = _id;
  const result = await recipeDelete('recipes', id, userId);

  return {
    code: 204,
    body: result,
  };
};