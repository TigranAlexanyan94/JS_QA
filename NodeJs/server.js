const console = require("console");
const fs = require("fs");
const personalInfo = fs.readFileSync("personalInfo.csv", "utf-8").split(",");
const rates = fs.readFileSync("rates.csv", "utf-8").split(",");
// const arr = []
// personalInfo.split(',').forEach(element => {
//     fs.writeFile('full.json', JSON.stringify(element), function(err){
//         if (err) throw err;
//         console.log('Saved!');
//     })
// });

// const arr = personalInfo.split(',')

const fullInfoJson = [];

personalInfo.forEach((element) => {
  rates.forEach((elem) => {
    fullInfoJson.push({
      firstName: element,
      lastName: element,
      address: element,
      phoneNumber: element,
      email: element,
      rates: {
        Mathemathics: elem.split(":")[1],
        English: elem,
        Physics: elem,
        Geography: elem,
        Algorithms: elem,
      },
    });
  });
});



fs.writeFile(
  "full.json",
  JSON.stringify(fullInfoJson, null, 2),
  function (err) {
    if (err) throw err;
    console.log("Saved!");
  }
);

// console.log(personalInfo);
// console.log(rates);
