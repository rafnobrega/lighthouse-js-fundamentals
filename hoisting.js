// QUESTION 1 OF 3
// What value will be printed to the console?

sayHi("Julia");

function sayHi(name) {
  console.log(greeting + " " + name);
  var greeting;
}

// PRINTS: undefined Julia
// The function declaration is hoisted to the top of its current scope, and inside the function, the greeting variable declaration is also hoisted to the top of its function scope.


// __________________________

// QUESTION 2 OF 3
// What value will be printed to the console?

sayHi("Julia");

function sayHi(name) {
  console.log(greeting + " " + name);
  var greeting = "Hello";
}
// PRINTS: undefined Julia
// The variable declaration is hoisted to the top of current scope (the top of the function). Remember that the declaration is hoisted, not the assignment. The code inside sayHi is equivalent to:
/*
var greeting;
console.log(greeting + " " + name);
greeting = "Hello";
*/

// __________________________

// QUESTION 3 OF 3
// What value will be printed to the console?

function sayHi(name) {
  var greeting = "Hello";
  console.log(greeting + " " + name);
}

sayHi("Julia");
// PRINTS: Hello Julia
// Not many surprises here! The variable declaration and assignment are both already at the top of the function scope, so the function will print out: "Hello Julia"


/*
What you've learned so far:
JavaScript hoists function declarations and variable declarations to the top of the current scope.
Variable assignments are not hoisted.
Declare functions and variables at the top of your scripts, so the syntax and behavior are consistent with each other.
*/
