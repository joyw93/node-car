const Car = require("../models/car");
const { Op } = require("sequelize");
const status = require("../../config/response/car");
const { response, errResponse } = require("../../config/response/format");


exports.registerCar = async (carDTO) => {
  try {
    await Car.create(carDTO);
    return response(status.REGISTER_SUCCESS);
  } catch (err) {
    return errResponse(status.SERVER_ERROR);
  }
};

exports.loadAllCars = async () => {
  try {
    const allCars = await Car.findAll({
      order: [["createdAt", "DESC"]],
    });
    return allCars;
  } catch (err) {
    return errResponse(status.SERVER_ERROR);
  }
};

exports.loadCars = async (tag) => {
  try {
    const condition = {};
    !tag.brand ? null : (condition.brand = tag.brand);
    !tag.model ? null : (condition.model = tag.model);
    !tag.isDomestic ? null : (condition.isDomestic = tag.isDomestic);
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
      order: [["createdAt", "DESC"]],
    });
    return cars;
  } catch (err) {
    console.log(err);
    return errResponse(status.SERVER_ERROR);
  }
};

exports.loadCar = async (carId) => {
  try {
    const car = await Car.findOne({ where: { id: carId } });
    return car;
  } catch (err) {
    console.log(err);
    return errResponse(status.SERVER_ERROR);
  }
};
