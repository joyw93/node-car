const express = require("express");
const path = require("path");
const multer = require("multer");
const Car = require("../models/car");
const AWS = require("aws-sdk");
const multerS3 = require("multer-s3");
const { Op } = require("sequelize");
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
        `nodecar/images/${Date.now()}_${path.basename(file.originalname)}`
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
  car.age = car.age.replace("년", "");

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
  const cars = await Car.findAll({});
  res.send(cars);
});

router.post("/loadCars", async (req, res, next) => {
  const tag = req.body.tag;
  const condition = {};
  !tag.brand ? null : (condition.brand = tag.brand);
  !tag.model ? null : (condition.model = tag.model);
  !tag.fuel ? null : (condition.fuel = tag.fuel);
  !tag.color ? null : (condition.color = tag.color);
  condition.odo = {
    [Op.and]: [{ [Op.gte]: tag.odoMin }, { [Op.lte]: tag.odoMax }],
  };
  condition.age = {
    [Op.and]: [{ [Op.gte]: tag.ageMin }, { [Op.lte]: tag.ageMax }],
  };
  const cars = await Car.findAll({
    where: condition,
  });
  console.log(req.body.tag);
  res.send(cars);
});

module.exports = router;
