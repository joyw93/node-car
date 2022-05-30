module.exports = (app) => {
  const upload = require("../../config/multer/fileUploader");
  const car = require("../controllers/car");

  app.post("/car/imageUpload", upload.array("image"), car.imageUpload);
  app.post("/car/register", car.register);
};
