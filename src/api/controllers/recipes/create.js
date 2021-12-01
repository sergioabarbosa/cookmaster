const service = require('../../services/recipes/create');

module.exports = async (req, res, next) => {
  try {
    const { name, ingredients, preparation } = req.body;
    const token = req.headers.authorization;
    const newRecipe = { name, ingredients, preparation };
    const result = await service(newRecipe, token);

    const { code, body } = result;
    return res.status(code).send(body);
  } catch (err) {
    next(err);
  }
};