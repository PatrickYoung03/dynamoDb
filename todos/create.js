const uuid = require("uuid");
const AWS = require("aws-sdk");
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.create = async (event, context, callback) => {
  const data = JSON.parse(event.body);
  console.log("data", data);
  // return {
  //   statusCode: 200,
  //   body: JSON.parse(
  //     {
  //       message: "POST request succesfull",
  //       input: event
  //     },
  //     null,
  //     2
  //   )
  // };

  const params = {
    TableName: process.env.BOOTCAMPERS_TABLE,
    Item: {
      id: uuid.v1(),
      first_name: data.firstName,
      last_name: data.lastName
    }
  };

  dynamoDb.put(params, error => {
    // handle potential errors
    if (error) {
      console.error(error);
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: { "Content-Type": "text/plain" },
        body: "Couldn't create the todo item."
      });
      return;
    }
    // create a response
    const response = {
      statusCode: 200,
      body: JSON.stringify(params.Item)
    };
    callback(null, response);
  });
};
