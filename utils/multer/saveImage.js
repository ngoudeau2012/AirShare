const multer = require("multer");
const path = require("path");
require("dotenv").config();

// init area of storage
const storage = multer.diskStorage({
  destination: "./images/uploads/",
  filename: function (req, file, cb) {
    // reads "name" on front end
    // "extname" takes extension of file of upload and adds to end. Pass through original
    //   and adds to file name
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
//   init upload
module.exports = multer({
  storage: storage,
  // method is name on form for front end
}).single("photoUpload");
