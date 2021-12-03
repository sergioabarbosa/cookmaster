const Get = require('../../models/recipes/get');

module.exports = async (id) => {
  const result = await Get('recipes', id); 
  console.log(result);
  if (result.length) return { code: 200, body: result[0] };

  return { code: 404, body: { message: 'recipe not found' } };
};