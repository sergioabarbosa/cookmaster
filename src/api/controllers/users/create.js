const UserService = require('../../services/users/create');

module.exports = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const { err, user } = await UserService.createUser(name, email, password);

    if (err) return res.status(400).json({ err });

    return res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};