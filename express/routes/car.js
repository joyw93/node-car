const express = require("express");
const path = require("path");
const multer = require("multer");
const Car = require("../models/car");
const AWS = require("aws-sdk");
const multerS3 = require("multer-s3");
const { isLoggedIn } = require("./middlewares");

const router = express.Router();

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
        `nodecar/images/${Date.now()}${path.basename(file.originalname)}`
      );
    },
  }),
  limit: { fileSize: 20 * 1024 * 1024 },
});

router.post("/register", async (req, res, next) => {
  const car = req.body;
  car.options = car.options.join();
  car.regions = car.regions.join();
  car.images = car.images.join();

  try {
    await Car.create(car);
  } catch (err) {
    console.error(err);
  }
});

router.post("/imageUpload", upload.array("image"), async (req, res, next) => {
  res.json(req.files.map((v) => v.location));
});

router.post("/loadCar", async (req, res, next) => {
  const carId = req.body.id;
  const car = await Car.findOne({ where: { id: carId } });
  res.send(car);
});

router.post("/loadAllCars", async (req, res, next) => {
  const allCars = await Car.findAll({});
  res.send(allCars);
});

module.exports = router;
