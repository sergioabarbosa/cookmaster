const GetList = require('../../models/recipes/list');

module.exports = async () => {
  const result = await GetList('recipes'); 

  return {
    code: 200,
    body: result,
  };
};