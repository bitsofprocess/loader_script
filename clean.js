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
AWS.config = new AWS.Config({
  credentials: myCredentials,
  region: "us-east-1",
});

// Create DynamoDB service object
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

async function main() {
  const csvArray = await csvToJson(csvFilePath);
  const csvKeys = Object.keys(csvObject[0]);
}
