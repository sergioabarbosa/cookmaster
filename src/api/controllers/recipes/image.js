const UploadService = require('../../services/recipes/updateImages');

module.exports = async (req, res, next) => {
  try {
    if (req.file) {
      const { id } = req.params;
      const uploadResult = await UploadService(req.file, id);
      const { code, body } = uploadResult;
      return res.status(code).json(body);
    }
    return res.status(200).json({ message: 'Funcionou' });
  } catch (err) {
    next(err);
  }
};