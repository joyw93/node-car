const express = require("express");
const Car = require("../models/car");

const router = express.Router();

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

router.post("/loadAllData", async (req, res, next) => {
  const car = await Car.findAll({})
  res.send(car)
});

module.exports = router;
