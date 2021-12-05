const ServiceRemove = require('../../services/recipes/remove');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const token = req.headers.authorization;
    const resultRemove = await ServiceRemove(id, token);

    const { code, body } = resultRemove;
    return res.status(code).send(body);
  } catch (err) {
    next(err);
  }
};