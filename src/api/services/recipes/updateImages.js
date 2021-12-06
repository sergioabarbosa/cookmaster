const recipeUpdate = require('../../models/recipes/updateImages');

module.exports = async (file, id) => {
  const updateResult = await recipeUpdate('recipes', file, id);
  return {
    code: 200,
    body: updateResult,
  };
};