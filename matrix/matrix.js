const num = parseInt(prompt("Enter number: "));
let multidimensionalArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function rotate(array){
  const arr = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      let temp = array[i][j];
      array[i][j] = array[j][i];
      array[j][i] = temp;
    }
  }
  for (let i = array.length - 1; i >= 0; i--) {
    arr.push(array[i])
  }
  return arr
}

function rotateNTimes(array, n){
  for (let i = 0; i < n % 4; i++) {
    array = rotate(array);
  }
  return array;
}

function print(array){
  for (let index = 0; index < array.length; index++) {
    console.log(array[index].join(" "))
  }
}
console.log("===Before===")
print(multidimensionalArr);
console.log("===After===")
print(rotateNTimes(multidimensionalArr, num));
