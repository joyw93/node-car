const carService = require("../services/car");
const status = require("../../config/response/car");
const { response, errResponse } = require("../../config/response/format");
const validator = require("../validators/car");

exports.imageUpload = async (req, res) => {
  try {
    const fileUrls = req.files.map((file) => file.location);
    return res.send(response(status.SUCCESS, fileUrls));
  } catch (err) {
    console.log(err);
    return res.send(errResponse(status.SERVER_ERROR));
  }
};

exports.register = async (req, res) => {
  const carDTO = req.body;

  // 유효성 검사
  const unvalidMessage = validator.register(carDTO);
  if (unvalidMessage) return res.send(unvalidMessage);

  // 매물 등록 요청
  const registerResponse = await carService.registerCar(carDTO);

  return res.send(registerResponse);
};
