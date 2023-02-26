const fs = require("fs");
const personalInfo = fs.readFileSync("personalInfo.csv", "utf-8");
const rates = fs.readFileSync("rates.csv", "utf-8");

function csvToArray(personalInfo, rates) {
  const lines = personalInfo.split("\n");
  const ratesLines = rates.split(",");
  const delimeter = ",";
  const result = [];

  for (const line of lines) {
    const row = line.split(delimeter);
    const obj = {
      firstName: row[0],
      lastName: row[1],
      address: row[2],
      phoneNumber: row[3],
      email: row[4],
      rates: {
        Mathemathics: ratesLines[0].split(":")[1],
        English: ratesLines[1].split(":")[1],
        Physics: ratesLines[2].split(":")[1],
        Geography: ratesLines[3].split(":")[1],
        Algorithms: ratesLines[4].split(":")[2],
      },
    };
    result.push(obj);
  }
  return JSON.stringify(result, null, 2);
}

const array = csvToArray(personalInfo, rates);

fs.appendFileSync("data.json", "utf-8");

fs.readFile('data.json', function(err, data){
    fs.writeFileSync('data.json', array)
});
