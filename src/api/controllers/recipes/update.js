const service = require('../../services/recipes/update');

module.exports = async (req, res, next) => {
  try {
    const { name, ingredients, preparation } = req.body;
    const { id } = req.params;
    const token = req.headers.authorization;
    const editRecipe = { name, ingredients, preparation };
    const result = await service(id, editRecipe, token);

    const { code, body } = result;
    return res.status(code).send(body);
  } catch (err) {
    next(err);
  }
};