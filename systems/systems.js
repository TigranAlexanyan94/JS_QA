function systems(num, dividedNum) {
  const obj = { 10: "A", 11: "B", 12: "C", 13: "D", 14: "E", 15: "F" };
  const arr = [];
  if (dividedNum == 10) {
    return num;
  } else {
    while (Math.floor(num / dividedNum) != 0) {
      let key = num % dividedNum;
      if (dividedNum == 16) {
        if (key > 9) {
          arr.push(obj[key]);
        } else {
          arr.push(key);
        }
      } else {
        arr.push(key);
      }
      num = Math.floor(num / dividedNum);
    }
    arr.push(num % dividedNum);
  }
  return arr.reverse().join("");
}

console.log(
  systems(
    parseInt(prompt("Enter number")),
    parseInt(prompt("Enter number 8, 10 or 16"))
  )
);
