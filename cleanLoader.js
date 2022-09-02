"use strict"

const { csvToJson } = require('./csvToJson');
const { findExtraCsvKeys } = require('./findExtraCsvKeys')

// Load the AWS SDK for Node.js
const AWS = require("aws-sdk");
const csv = require("csvtojson");

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

    console.log(csvArray);
    console.log(csvKeys);

const findExtraCsvKeys = findExtraCsvKey(csvKeys, column_names);

console.log(extraColumns)
if (extraColumns.length == 0) {
  console.log("No Extra Columns");
} else {
  console.log("Extra Columns:",extraColumns);
}

  // Removes all unwanted columns from csvArray
  csvArray.forEach((element, index) => csvArray[index] = Object.fromEntries(Object.entries(element).filter((element) => column_names.includes(element[0]))));
  
  console.log("final csvArray: ",csvArray);





  console.log("entriestest",csvArray[0].entries);
}

loader()