const upload = require("../../config/multer/fileUploader");

module.exports = (app) => {
  const car = require("../controllers/car");

  app.post("/car/imageUpload", upload.array("image"), car.imageUpload);
  app.post("/car/regist", car.regist);
};
