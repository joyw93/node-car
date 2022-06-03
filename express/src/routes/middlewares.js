const AWS = require("../../config/multer/s3");
const path = require("path");
const multer = require("multer");
const multerS3 = require("multer-s3");

exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  return res.status(401).send("로그인이 필요합니다.");
};

exports.isNotLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    return next();
  }
  return res.status(401).send("로그인한 사람은 할 수 없습니다.");
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
