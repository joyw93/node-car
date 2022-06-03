const response = ({ isSuccess, code, message }, result = null) => {
  return {
    isSuccess: isSuccess,
    code: code,
    message: message,
    result: result,
  };
};

const errResponse = ({ isSuccess=false, code=500, message }) => {
  return {
    isSuccess: isSuccess,
    code: code,
    message: message,
  };
};

module.exports = { response, errResponse };
