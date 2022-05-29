const AWS = require("aws-sdk");
const path = require("path");
const multer = require("multer");
const multerS3 = require("multer-s3");

AWS.config.update({
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.S3_SECRET_KEY,
  region: "ap-northeast-2",
});

const upload = multer({
  storage: multerS3({
    s3: new AWS.S3(),
    bucket: process.env.BUCKET_NAME,
    key(req, file, cb) {
      cb(
        null,
        `nodecar/images/${Date.now()}_${path.basename(file.originalname)}`
      );
    },
  }),
  limit: { fileSize: 20 * 1024 * 1024 },
});

module.exports = upload;
