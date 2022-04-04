function lastIndexOf(array, value) {
  let number = 0;
  let foundMatch = false; // this flag is to check if a match has been made.
  for (let i = array.length - 1; i >= 0; i--) { // -1 so it starts from the end. When counting backwards, the array needs to start at numbers.length -1, or an out of bounds number will be evaluated instead of what is desired. The second parameter in the for loop needs to be i >= 0, or it will never be array[0].
    if (array[i] === value) {
      number = i;
      foundMatch = true;
      return i;
    } 
  } if (foundMatch) {
    return number;
  } else {
    return -1;
  }
}


console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);
console.log(lastIndexOf([100, 200, 300, 400], 10), "=?", 10);
