const uuid = require("uuid");
const AWS = require("aws-sdk");

module.exports.update = async event => {
  return {
    statusCode: 200,
    message: "delete request succusfel"
  };
};

// body: JSON.stringify(
//   {
//     message: "Update request successful",
//     input: event
//   },
