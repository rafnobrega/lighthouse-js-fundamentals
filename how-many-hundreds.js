/*

let howManyHundreds = function(number) {
  let containers = number / 100;
  return number.toFixed(0);

}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);

*/

let howManyHundreds = function(number) {
  let containers = number / 100;
  if (containers < 1) {
    return 0;
  } else {
    return Math.floor(containers);
  }
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);
