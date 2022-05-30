const { Car } = require("../models");
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
