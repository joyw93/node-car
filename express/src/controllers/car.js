const service = require("../services/car");
const status = require("../../config/response/car");
const { response, errResponse } = require("../../config/response/format");
const validator = require("../validators/car");

exports.register = async (req, res) => {
  const carDTO = req.body;
  carDTO.userId = req.user.id;

  // 유효성 검사
  const invalidMessage = validator.register(carDTO);
  if (invalidMessage) return res.send(invalidMessage);

  // 매물 등록 요청
  const registerResponse = await service.registerCar(carDTO);

  return res.send(registerResponse);
};

exports.loadAllCars = async (req, res) => {
  const loadAllCarsResponse = await service.loadAllCars();
  return res.send(loadAllCarsResponse);
};

exports.loadCars = async (req, res) => {
  const tag = req.body.tag;
  const loadCarsResponse = await service.loadCars(tag);
  return res.send(loadCarsResponse);
};

exports.loadCar = async (req, res) => {
  const carId = req.body.id;
  const loadCarResponse = await service.loadCar(carId);
  return res.send(loadCarResponse);
};

exports.imageUpload = async (req, res) => {
  try {
    const fileUrls = req.files.map((file) => file.location);
    return res.send(fileUrls);
  } catch (err) {
    console.log(err);
    return res.send(errResponse(status.SERVER_ERROR));
  }
};
