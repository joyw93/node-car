const carService = require("../services/car");
const status = require("../../config/responseStatus");
const { response, errResponse } = require("../../config/responseFormat");

exports.imageUpload = async (req, res) => {
  try {
    const fileUrls = req.files.map((file) => file.location);
    return res.send(response(status.SUCCESS, fileUrls));
  } catch (err) {
    console.log(err);
    return res.send(errResponse(status.SERVER_ERROR));
  }
};

exports.regist = async (req, res) => {
  const carDTO = req.body;

  // 유효성 검사
  const isValid = validator.regist(carDTO);
  
};
