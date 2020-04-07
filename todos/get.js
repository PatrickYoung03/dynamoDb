const uuid = require("uuid");
const AWS = require("aws-sdk");

const dynamoDb = new AWS.DynamoDB.DocumentClient();

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
