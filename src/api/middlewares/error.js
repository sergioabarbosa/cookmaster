module.exports = (err, _req, res, _next) => {
  if (err.isJoi) {
    const { message } = err.details[0];
    if (message === 'All fields must be filled') {
      return res.status(401).send({ message });
    }
    return res.status(400).send({ message });
  }
  console.error(err);
  return res.status(500).end();
};