// import { csvToJson } from '../csvToJson.js';
// const csvToJson = require('./csvToJson');

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

async function csvToJson(csvFilePath) {
  try {
    const data = await csv().fromFile(csvFilePath);

    // log the JSON array
    return data;
  } catch (err) {
    console.log(err);
  }
}


async function main() {
  const csvArray = await csvToJson(csvFilePath);

  //  Make an array with 25 elements in it, where each element is PutRequest.Item.csvArray[i]
  /*
  i = 0;

  let obj = {};
  obj.PutRequest = {};
  obj.PutRequest.Item = csvArray[i];

  // Put array as params.RequestItems.<tableName>
  const RequestItems = {};
  RequestItems[tableName] = [obj];
  const params = {};
  params.RequestItems = RequestItems;

  const id = csvArray[i].id;

  const csvKeys = Object.keys(csvArray[0]);
  // console.log('csvKeys:', csvKeys)
  // console.log('csvArray:', csvArray)

  const requiredColumns = csvKeys.filter(
    (column) => !column_names.includes(column)
  );
  if (requiredColumns.length == 0) {
    console.log("All Columns Present");
  } else {
    console.log("Columns missing:", requiredColumns);
  }

 */
  let i = 0;

  const dynamoContentParams = {
    Key: {
      [column_names[0]]: csvArray[i][column_names[0]],
    },
    TableName: tableName,
    AttributesToGet: column_names,
  };

  let dynamoContent = {}

  dynamoContent = await dynamodb.get(dynamoContentParams, function (err, response) {
    let dynamoContent = {}

    if (err) console.log(err, err.stack); // an error occurred
    else {
    dyanmoContent = console.log(response.Item); // successful response
    var keys = [], k = 0;
    console.log('dynamoContent1: ', dynamoContent)
    for (keys[k++] in dynamoContent) {
      // console.log('dynamoContent2: ', dynamoContent)
      // console.log('keys:', keys)
    } 
      console.log('keys2: ', keys)
      // console.log('dynamoContent3: ', dynamoContent)
  } 
  });

  // console.log('csvArrayKeys:', Object.keys(csvArray[0]))
  //RETURNS: csv keys. Use to check against keys in dynamo table.


  csvTestKeys = [
    "id",
    "answers",
    "category",
    "prompt",
    "url",
    "notes",
    "comments"
  ];

//   column_namesTest = ["id", "url", "notes"];
  const extraColumnsCheck = csvTestKeys.filter((key) => !column_names.includes(key));
  if (extraColumnsCheck.length == 0) {
    console.log("No Extra Columns");
  } else {
    console.log("Extra Columns:", extraColumnsCheck);
  }

  // What columns are in column_names that are not in csvKeys? Throw out these columns from csvArray
  const missingColumnCheck = column_names.filter((column) => !csvTestKeys.includes(column));
  if (missingColumnCheck.length == 0) {
    console.log("No Missing Columns");
  } else {
    console.log("Missing columns:", missingColumnCheck);
  }

  //throw out additional columns

  // var keys = [], k = 0;
  // for (keys[k++] in dynamoContent) {
  //   console.log(keys)
  // }
  //RETURNS: keys for additional info. 
  //game content still in object

  //RETURNS: info about domain, service, operation, etc. 
  //game content in object at bottom.
/*
    //update with new data

    const newData = column_namesTest.filter((y) => y != test2);
    console.log("newData:", newData);

    //add batch load/write here?
  }

  //batch load

  let n = 0;
  let timeOut = null;
  let maximum_backOff = 32;
  for (let j = 0; j < csvArray.length; j += 25) {
    timeOut = Math.floor(Math.random() * 1000) + 1;
    setTimeout(async () => {
      const picturesArray = [];
      for (let i = j; i < j + 25; i++) {
        if (csvArray[i]) {
        }
      }
    });

    //BATCH WRITE

    //   dynamodb.batchWrite(params, function (err, data) {
    //     if (err) console.log(err);
    //     else console.log(data);
    //   });
    // }
   
  }
   */
}

main();
