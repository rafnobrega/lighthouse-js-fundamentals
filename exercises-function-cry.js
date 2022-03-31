/*

Directions:
Write a named function expression that stores the function in a variable called cry and returns "boohoo!". Don't forget to call the function using the variable name, not the function name:

cry();
Returns: boohoo!

*/

// Programming Quiz: Cry (5-5)
/*
 QUIZ REQUIREMENTS
 - Your code should have a variable `cry`
 - Your code should include a named function expression stored in the variable `cry`
 - Your code should call the function expression using the variable name, not the function name
 - Your function expression should return the expected output
 - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */


 var cry = function myFunction(){
  var sound = "boohoo!";
  return sound;
  };

// Call the function using the variable name, not the function name
console.log(cry());

// This statement is also acceptable, but it won't print anything on your console
// cry();