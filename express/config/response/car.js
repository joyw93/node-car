module.exports = {

  // Response Success
  REGISTER_SUCCESS: {
    isSuccess: true,
    code: 2101,
    message: "매물등록 성공",
  },

  //Request Error
  REGISTER_BRAND_EMPTY: {
    isSuccess: false,
    code: 4101,
    message: "제조사를 입력하세요",
  },
  REGISTER_MODEL_EMPTY: {
    isSuccess: false,
    code: 4102,
    message: "모델을 입력하세요",
  },
  REGISTER_ODO_EMPTY: {
    isSuccess: false,
    code: 4103,
    message: "주행거리를 입력하세요",
  },
  REGISTER_AGE_EMPTY: {
    isSuccess: false,
    code: 4104,
    message: "연식을 입력하세요",
  },
  REGISTER_FUEL_EMPTY: {
    isSuccess: false,
    code: 4105,
    message: "연료타입을 입력하세요",
  },
  REGISTER_COLOR_EMPTY: {
    isSuccess: false,
    code: 4106,
    message: "색상을 입력하세요",
  },
  REGISTER_IS_RENTED_EMPTY: {
    isSuccess: false,
    code: 4107,
    message: "렌트여부를 입력하세요",
  },
  REGISTER_OPTION_EMPTY: {
    isSuccess: false,
    code: 4108,
    message: "옵션을 입력하세요",
  },
  REGISTER_IS_ACCIDENT_EMPTY: {
    isSuccess: false,
    code: 4109,
    message: "사고 여부를 입력하세요",
  },
  REGISTER_IS_NEEDFIX_EMPTY: {
    isSuccess: false,
    code: 4110,
    message: "수리필요 여부를 입력하세요",
  },
  REGISTER_REGIONS_EMPTY: {
    isSuccess: false,
    code: 4111,
    message: "판매 지역을 입력하세요",
  },
  REGISTER_FEATURE_EMPTY: {
    isSuccess: false,
    code: 4112,
    message: "상세정보를 입력하세요",
  },
  REGISTER_RECOMMEND_EMPTY: {
    isSuccess: false,
    code: 4113,
    message: "딜러 추천여부를 입력하세요",
  },
  REGISTER_IMAGES_EMPTY: {
    isSuccess: false,
    code: 4114,
    message: "차량 사진을 첨부하세요",
  },
  REGISTER_PRICE_EMPTY: {
    isSuccess: false,
    code: 4115,
    message: "차량 가격을 입력하세요",
  },

  // Common Error
  DB_ERROR: { isSuccess: false, code: 5000, message: "데이터 베이스 에러" },
  SERVER_ERROR: { isSuccess: false, code: 5001, message: "서버 에러" },
};
