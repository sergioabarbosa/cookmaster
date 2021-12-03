const GetService = require('../../services/recipes/get');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await GetService(id);
    const { code, body } = result;
    return res.status(code).send(body);
  } catch (err) {
    next(err);
  }
};