// function definition
const success = async (res, message = "", data = []) => {
  // calling output method by passing res, 200, message and data
  return await output(res, 200, message, data);
};

// function definition
const error = async (res, message = "") => {
  // calling output method by passing res, 400, message
  return await output(res, 400, message);
};

// function definition
const output = async (res, status = 200, message = "", data = []) => {
  // returning response having status, json (status, message & data)
  return res.status(status).json({ status, message, data });
};

// exporting module
module.exports = {
  success,
  error,
  output,
};
