const content = {
    Item: {
      correct_answer: '0',
      category: 'Aliens',
      answers: `[{"S":"Women's rights to be topless in public"},{"S":"Making \\"Alien Day\\" a national holiday"},{"S":"Elimination of plastic bottles"},{"S":"Overthrowing the European Union"}]`,
      prompt: 'Raëlist, who believe humans were created by aliens, are active in what modern political movement?',
      id: '001',
      url: 'https://cttg.site/GameApartAliens1.pdf'
    }
  }

  console.log(content.Item.answers)

  //CHECK IF VALUE EXISTS IN OBJECT

  // Extract all the values from the object into an array, then use the includes() function to check.
var theObj = { foo: "bar" };
var hasVal = Object.values(theObj).includes("bar");

//OR

// Manually loop through the object and check each value
var hasVal = false;
for (let key in theObj) { if (theObj[key] == "SEARCH") { hasVal = true; break; }}