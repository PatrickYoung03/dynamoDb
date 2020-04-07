const uuid = require("uuid");
const AWS = require("aws-sdk");

module.exports.get = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "get request by id succesfull",
        input: event
      },
      null,
      2
    )
  };
};
