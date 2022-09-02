module.exports.getTableFromDynamo = (csvObject) => {

    let obj = {};
    obj.PutRequest = {};
    obj.PutRequest.Item = csvObject[i];
  
    // Put array as params.RequestItems.<tableName>
    const RequestItems = {};
    RequestItems[tableName] = [obj];
    const params = {};
    params.RequestItems = RequestItems;
  
    const id = csvObject[i].id;
  
    const csvKeys = Object.keys(csvObject[0]);
    // console.log('csvKeys:', csvKeys)
    // console.log('csvObject:', csvObject[i])
  
    const dynamoContentParams = {
      Key: {
        [column_names[0]]: csvObject[i][column_names[0]],
      },
      TableName: tableName,
      AttributesToGet: column_names,
    };
  
    dynamodb.get(dynamoContentParams, function (err, response) {
      let dynamoContent = {};
  
      if (err) console.log(err, err.stack); // an error occurred
      else {
        response.Item; // successful response
        var keys = [],
          k = 0;
        // console.log("response: ", response);
  
        //GETS THE KEYS FROM AWS TABLE
        // for (keys[k++] in response.Item) {
        // }
        // console.log("Response Keys (Dynamo): ", keys);
      }
    });
}