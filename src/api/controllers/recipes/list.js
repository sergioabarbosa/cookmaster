const ServiceList = require('../../services/recipes/list');

module.exports = async (_req, res, next) => {
  try {
    const result = await ServiceList();
    const { code, body } = result;
    return res.status(code).send(body);
  } catch (err) {
    next(err);
  }
};