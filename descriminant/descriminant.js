const a = prompt("Enter a number");
const b = prompt("Enter b number");
const c = prompt("Enter c number");

const discriminant = Math.pow(b, 2) - 4 * a * c;
let x1, x2;

if (discriminant > 0) {
  x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
  x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
  document.write(`Armat x1:${x1}, x2:${x2}`);
} else if (discriminant == 0) {
  x1 = -b / (2 * a);
  document.write(`Armat x1:${x1}`);
} else {
  let realPart = (-b / (2 * a)).toFixed(2);
  let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
  document.write(`Armatner ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`);
}
