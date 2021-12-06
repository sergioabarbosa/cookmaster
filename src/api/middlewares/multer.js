const multer = require('multer');

const storage = multer.diskStorage({
  destination: (_req, _file, dest) => {
    dest(null, 'src/uploads');
  },
  filename: (req, _file, name) => {
    const { id } = req.params;
    name(null, `${id}.jpeg`);
  },
});

module.exports = multer({ storage });