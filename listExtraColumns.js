module.exports.findExtraCsvKeys = (csvKeys, column_names) => {

  // const extraColumnsCheck = csvKeys.filter(
  //     (key) => !column_names.includes(key)
  // );
  // if (extraColumnsCheck.length == 0) {
  //     return "No Extra Columns";
  // } else {
  //     return "Extra Columns:", extraColumnsCheck;
  // }
  return csvKeys.filter((key) => !column_names.includes(key));
}