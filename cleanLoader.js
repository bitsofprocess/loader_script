"use strict";

const { csvToJson } = require("./csvToJson");
const { findExtraCsvKeys } = require("./findExtraCsvKeys");
const { findMissingCsvColumns } = require("./findMissingCsvColumns");

// Load the AWS SDK for Node.js
const AWS = require("aws-sdk");
const csv = require("csvtojson");
const _ = require('lodash');

const csvFilePath = process.argv[2];
const game_code = process.argv[3];
const tableName = process.argv[4];
const myCredentials = {
  accessKeyId: process.argv[5],
  secretAccessKey: process.argv[6],
};
// Set the region
// AWS.config.update({region: 'us-east-1'});
AWS.config = new AWS.Config({
  credentials: myCredentials,
  region: "us-east-1",
});

// Create DynamoDB service object
// var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});
const dynamodb = new AWS.DynamoDB.DocumentClient();
let column_names = [];

switch (game_code) {
  case "CAPTIONS":
    column_names = ["id", "url"];
    break;
  case "CT":
    column_names = [
      "id",
      "answers",
      "category",
      "correct_answer",
      "prompt",
      "url",
    ];
    break;
  case "FLUS":
    column_names = ["id", "points", "question", "special"];
    break;
  case "LT":
    column_names = ["id", "answers", "correct_answer", "question"];
    break;
  case "NOW":
    column_names = ["id", "word"];
    break;
  case "PLAYDECK":
    column_names = [
      "id",
      "deck_name",
      "deck_type",
      "game_code",
      "rating",
      "safe_for_work",
      "search_term",
      "text",
      "url",
    ];
    break;
  case "PROMPTDECK":
    column_names = [
      "id",
      "deck_name",
      "deck_type",
      "game_code",
      "rating",
      "safe_for_work",
      "text",
      "url",
    ];
    break;
  case "TOT":
    column_names = ["id", "category", "word"];
    break;
  // default:
  // code block
}

const loader = async () => {
  const csvArray = await csvToJson(csvFilePath);
  const additionalKeys = [];
  const missingKeys = [];
  const csvKeys = Object.keys(csvArray[0]);

  // console.log(csvArray);
  // console.log("csvKeys: ", csvKeys);
  // console.log("csvArray:", csvArray);

  const extraColumns = findExtraCsvKeys(csvKeys, column_names);

  console.log(extraColumns);
  if (extraColumns.length == 0) {
    console.log("No Extra Columns");
  } else {
    console.log("Extra Columns:", extraColumns);
  }

  const missingColumns = column_names.filter(
    (column) => !csvKeys.includes(column)
  );
  if (missingColumns.length == 0) {
    console.log("No Missing Columns");
  } else {
    console.log("Missing columns:", missingColumns);
  }

  // Removes all unwanted columns from csvArray

  csvArray.forEach(
    (element, index) =>
      (csvArray[index] = Object.fromEntries(
        Object.entries(element).filter((element) =>
          column_names.includes(element[0])
        )
      ))
  );

  // GET DYNAMODB TABLE

  const i = 0;

  let obj = {};
  obj.PutRequest = {};
  obj.PutRequest.Item = csvArray[i];

  // Put array as params.RequestItems.<tableName>
  const RequestItems = {};
  RequestItems[tableName] = [obj];
  const params = {};
  params.RequestItems = RequestItems;

  const id = csvArray[i].id;

  const dynamoContentParams = {
    Key: {
      [column_names[0]]: csvArray[i][column_names[0]],
    },
    TableName: tableName,
    AttributesToGet: column_names,
  };

  try {
    let res = await dynamodb.get(dynamoContentParams).promise();
    let dynamoItem = res.Item;
    // console.log("SUCCESSFULL GET", dynamoItem);
  //   /* 
  //   // console.log("SUCCESSFULL GET", dynamoItem);
  //   // console.log(
  //   //   Object.entries(dynamoItem).forEach((element) =>
  //   //     console.log(element[0])
  //   //   )
  //   // );
  //   */
   
  // note: make sure this iterates through each csv element
  // should iteration happen at top level to ensure that params are updated accordingly?
    if (!_.isEqual(dynamoItem, csvArray[0])) {
      dynamodb.batchWrite(params, function (err, data) {
        if (err) console.log(err);
        else console.log(data);
      });
    }
    } catch (err) {
    console.log(err);
  }


  // for (let y=0; y < column_names.length; y++) {
  //   console.log(csvArray[0][column_names[y]])
  // }
  //returns each value from key-value pair

  // console.log(csvArray)



  // END GET DYNAMODB TABLE
};

loader();