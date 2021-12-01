const Service = require('../../services/login/loginUser');

module.exports = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const login = { email, password };
    const result = await Service(login);

    const { code, body } = result;
    return res.status(code).send(body);
  } catch (err) {
    next(err);
  }
};
