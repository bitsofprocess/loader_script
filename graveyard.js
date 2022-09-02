//STRINGS OF ROWS AND COLUMNS FROM CSV

//   const csvString = JSON.stringify(csvArray[i]);
//   var rows = csvString.split("/n");
//   const cols = rows[i].split(",");
//   j = 0;
//   column_names = "id";
//   var value = cols[j];

// console.log(csvArray.split('/n'))

//GETS VALUE OF FIRST ID
// console.log(csvArray[i][column_names])
// 001

//GETS VALUE OF OBJECT KEYS
// console.log(Object.keys(csvArray[0]));
//id

//LOOPING THROUGH AND FILTERING ARRAY

// for (let l=0; l < csvKeys.length - 1; l++) {
//   newKey = (Object.entries(csvArray[l]))
//   for (let m=0; m < extraColumnsCheck.length; m++) {
// newCsvEntries = newKey.filter((key) => !key.includes(extraColumnsCheck[0]))
// console.log(m)
// }
// console.log('Final Key: ', newKey)
// console.log('m Array: ', mArray)
// }
// console.log('extra columns: ', extraColumnsCheck )

//CONVERT ARRAY BACK TO OBJECT

// Object.keys(csvArray[i]).filter((key) => key.includes(column_names))
// const updatedCsv = Object.fromEntries(Object.entries(csvArray).filter(([key]) => key.includes(extraColumnsCheck)));
// console.log('updatedCsvArray: ', updatedCsvArray)
// console.log('updatedCsvObject: ', updatedCsvObject)

// const newData = column_names.filter((y) => y != missingColumnCheck);
// console.log('newData: ', newData)
/*

    const newData = column_namesTest.filter((y) => y != test2);
    console.log("newData:", newData)



// ATTEMPTS TO EXTRACT EXTRA COLUMNS

  // csvKeyValueArray = Object.entries(csvArray[j])[l]
    extraColumns.forEach((element) => {
      let excludeColumn = element
      console.log(newCsvEntry[0]) 
      // console.log(excludeColumn)
      // if (newCsvEntry.includes(excludeColumn)) {
      //   newCsvEntry.filter(element === excludeColumn)
      // }
      // let newCsvEntry = Object.entries(csvArray[j])[l].filter((item) => !item.includes(excludeColumn))

      // console.log(newCsvEntry)

          // console.log(Object.entries(csvArray[j])[l].filter((item) => !item.includes(exclude)))
    // if (csvKeyValueArray.includes(extraColumns.forEach(element => element))) {
    //   console.log((csvKeyValueArray))
    // }

// ATTEMPTS TO LOOP THROUGH ARRAYS

for (let m=0; m < extraColumns.length; m++) {
  for (let j=0; j< csvArray.length; j++) {
    for (let l=0; l < csvKeys.length; l++) {
      
      newKey = Object.entries(csvArray[j])[l]
      .filter((key) => !key.includes(extraColumns[m]))
      console.log(m)
      // newCsvEntries.push(newKey)
      // }
      // console.log('extraColumns[m]: ', extraColumns[m])
      // console.log(newKey)
    }
  }
}
// console.log('extra columns: ', extraColumns ) 
// console.log(newCsvEntries)


  // console.log('csvKeys.length:', csvKeys.length)

  // for (let l=0; l < csvKeys.length; l++) {
  //   for (let m=0; l < column_names.length; m++) {
  //     updatedCsvArray = Object.entries(csvArray[l]).filter((key) => key.includes(column_names[m]))
  //   } console.log('updatedCsvArray: ', updatedCsvArray)
  // }

/*


  let newCsvArray = []
  let l

  console.)

  // for (let m=0; m < extraColumns.length; m++) {
    for (l=0; l < csvKeys.length - 1; l++) {
      console.log('Object.entries: ', (Object.entries(csvArray[l])).filter((key) => !key.includes('notes')))
      //.filter((key) => !key.includes(extraColumns[m]))
      // newCsvArray.push(newCsvEntry)
      // console.log(extraColumns[m])
    } 
    // console.log(newCsvArray)
    // newCsvEntries = newKey.filter((key) => !key.includes(extraColumns[0]))
    // }

  // console.log(newCsvEntries)


//REQUIRED COLUMNS CHECK

/*
  const requiredColumns = csvKeys.filter(
    (column) => !column_names.includes(column)
  );
  if (requiredColumns.length == 0) {
    console.log("All Columns Present");
  } else {
    console.log("Columns missing:", requiredColumns);
  }

 */


