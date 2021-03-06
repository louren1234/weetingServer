const multer = require("multer");
const path = require("path");
const upload = multer({
    storage: multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, 'images/');
      },
      filename: function (req, file, cb) {
        cb(null, file.originalname);
      }
    }),
  });
module.exports = upload;
