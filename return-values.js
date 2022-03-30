function isThisWorking(input) {
  console.log("Printing: isThisWorking was called and " + input + " was passed in as an argument.");
  return "Returning: I am returning this string!";
}

isThisWorking(3);

/* 
Prints: "Printing: isThisWorking was called and 3 was passed in as an argument"
Returns: "Returning: I am returning this string!"

If you don't explicitly define a return value, the function will return undefined by default.

function isThisWorking(input) {
  console.log("Printing: isThisWorking was called and " + input + " was passed in as an argument.");
}

isThisWorking(3);
Prints: "Printing: isThisWorking was called and 3 was passed in as an argument"
Returns: undefined

*/


/*
QUESTION 1 OF 3
What does this function "return"?
*/
function sleep() {
  console.log("I'm sleepy!");
  return "zzz";
  return "snore";
}

sleep();

// The function will return "zzz" and print "I'm sleepy!" to the console. "snore" will not be returned since the first return statement will exit the function.


/*
QUESTION 2 OF 3
What number will be "printed" (to the JavaScript console)?
*/
function square(x) {
  return x * x;
}

function subtractFour(x) {
  return square(x) - 4;
}

console.log(subtractFour(5)); // prints 21


/* 
QUESTION 3 OF 3
What do you think will happen with the following code?
*/
function test() {
  return 1;
  return 2;
}

test();
// 1 will be returned! Once the code evaluates the first return statement, the function finishes. The second return statement will never be reached.




