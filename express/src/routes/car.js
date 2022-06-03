module.exports = (app) => {
  const { isLoggedIn, upload } = require("./middlewares");
  const controller = require("../controllers/car");

  app.post("/car/imageUpload", upload.array("image"), controller.imageUpload);
  app.post("/car/register", isLoggedIn, controller.register);
  app.post("/car/loadAllCars", controller.loadAllCars);
  app.post("/car/loadCars", controller.loadCars);
  app.post("/car/loadCar", controller.loadCar);
};
