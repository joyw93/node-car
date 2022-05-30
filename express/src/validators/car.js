const status = require("../../config/response/car");
const { response } = require("../../config/response/format");

exports.register = (car) => {
  // 빈 값 검사
  if (!car.brand) return response(status.REGISTER_BRAND_EMPTY);
  if (!car.model) return response(status.REGISTER_MODEL_EMPTY);
  if (!car.odo) return response(status.REGISTER_ODO_EMPTY);
  if (!car.age) return response(status.REGISTER_AGE_EMPTY);
  if (!car.fuel) return response(status.REGISTER_FUEL_EMPTY);
  if (!car.color) return response(status.REGISTER_COLOR_EMPTY);
  if (!car.isRented) return response(status.REGISTER_IS_RENTED_EMPTY);
  if (!car.options) return response(status.REGISTER_OPTION_EMPTY);
  if (!car.accident) return response(status.REGISTER_IS_ACCIDENT_EMPTY);
  if (!car.needFix) return response(status.REGISTER_IS_NEEDFIX_EMPTY);
  if (!car.regions) return response(status.REGISTER_REGIONS_EMPTY);
  if (!car.feature) return response(status.REGISTER_FEATURE_EMPTY);
  if (!car.isRecommend) return response(status.REGISTER_RECOMMEND_EMPTY);
  if (!car.images) return response(status.REGISTER_IMAGES_EMPTY);
  if (!car.price) return response(status.REGISTER_PRICE_EMPTY);
};
