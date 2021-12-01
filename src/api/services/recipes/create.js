const jwt = require('jsonwebtoken');
const Joi = require('joi');
const createRecipe = require('../../models/recipes/create');

const secret = 'serfgres21';

const schema = Joi.object({
  name: Joi.string().required(),
  ingredients: Joi.string().required(),
  preparation: Joi.string().required(),
}).messages({
  'any.required': 'Invalid entries. Try again.',
});

const checks = async (itens) => {
  const { name, ingredients, preparation } = itens;
  const result = schema.validate({ name, ingredients, preparation });
  if ('error' in result) {
    const { message } = result.error.details[0];
    return { code: 400, body: { message } };
  }
  return null;
};

module.exports = async (recipe, token) => {
  const { name, ingredients, preparation } = recipe;
  const obj = { name, ingredients, preparation };
  console.log(name, ingredients, preparation);

  const verifyErrors = await checks(obj);
  if (verifyErrors) return verifyErrors;
  let decoded;
  try {
    decoded = jwt.verify(token, secret);
  } catch (err) {
    return { code: 401, body: { message: 'jwt malformed' } };
  } 
  const { data: { _id } } = decoded;
  const newRecipe = { name, ingredients, preparation, userId: _id };

  const recipeCreated = await createRecipe('recipes', newRecipe, 'recipe');
  return {
    code: 201,
    body: recipeCreated,
  };
};