const response = ({ isSuccess, code, message }, result = null) => {
  return {
    isSuccess: isSuccess,
    code: code,
    message: message,
    result: result,
  };
};

const errResponse = ({ isSuccess, code, message }) => {
  return {
    isSuccess: isSuccess,
    code: code,
    message: message,
  };
};

module.exports = { response, errResponse };
