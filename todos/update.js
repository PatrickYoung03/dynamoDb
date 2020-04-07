const uuid = require("uuid");
const AWS = require("aws-sdk");

module.exports.update = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Update request successful",
        input: event
      },
      null,
      2
    )
  };
};
