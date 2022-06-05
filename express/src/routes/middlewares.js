const AWS = require("../../config/multer/s3");
const path = require("path");
const multer = require("multer");
const multerS3 = require("multer-s3");
const status = require("../../config/response/auth");
const { response, errResponse } = require("../../config/response/format");

exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  return res.response(status.LOGIN_REQUIRED);
};

exports.upload = multer({
  storage: multerS3({
    s3: new AWS.S3(),
    bucket: process.env.BUCKET_NAME,
    key(req, file, cb) {
      cb(
        null,
        `nodecar/test/images/${Date.now()}_${path.basename(file.originalname)}`
      );
    },
  }),
  limit: { fileSize: 20 * 1024 * 1024 },
});
