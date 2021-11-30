const UserService = require('../../services/users/create');

module.exports = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const users = await UserService.createUser(name, email, password);
    console.log(users);
    const { err, user } = users;
  if (err) return res.status(err.code).json({ message: err.message });
 
    return res.status(201).json({ user });
  } catch (err) {
    next(err);
  }
};