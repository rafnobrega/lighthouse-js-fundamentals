// returns the sum of two numbers
function add(x, y) {
  return x + y;
}

// returns the value of a number divided by 2
function divideByTwo(num) {
  return num / 2;
}

var sum = add(5, 7); // call the "add" function and store the returned value in the "sum" variable

var average = divideByTwo(sum); // call the "divideByTwo" function and store the returned value in the "average" variable

console.log(sum);
console.log(average);



/* 
QUIZ QUESTION
Try predicting what will be printed in the console.log statement below. Then, check your prediction by pasting the code into the JavaScript console. Functions can be tricky, so try figuring it out before running the code!
*/

function addTen(x) {
  return x + 10;
}
function divideByThree(y) {
  return y / 3;
}

var result = addTen(2);
console.log(divideByThree(result));  
// The divideByThree() function will divide the value of 12 by 3 and return 4!


//I love you - Sampoo
console.log('I love Sampoo.' + ' She is the best!');


