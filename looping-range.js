function range(start, end, step) {
  let array = [];
  for (let i = start; i <= end; i += step) {
    array.push(i);
    if (start === undefined || end === undefined || step === undefined) {
      return array = []; // return an empty array if start, end, or step are undefined.
    } else if (start > end) {
      return array = []; // return an empty array if start is greater than end.
    } else if (step <= 0) {
      return array = []; // return an empty array is step is 0 or negative.
    }
  } 
  return array;
}


console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
