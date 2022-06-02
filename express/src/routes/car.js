module.exports = (app) => {
  const upload = require("../../config/multer/fileUploader");
  const { isLoggedIn } = require("./middlewares");
  const car = require("../controllers/car");

  app.post("/car/imageUpload", upload.array("image"), car.imageUpload);
  app.post("/car/register", isLoggedIn, car.register);
};
