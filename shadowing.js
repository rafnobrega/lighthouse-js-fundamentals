var bookTitle = "Le Petit Prince";
console.log(bookTitle);

function displayBookEnglish() {
  var bookTitle = "The Little Prince"; // If I didn't have the "var", it would print Lhe Little Prince in the third console.log (below).
  console.log(bookTitle);
}

displayBookEnglish();
console.log(bookTitle);



// QUESTION 1:
// Without pasting into your console, what do you think this code will print out?
var x = 1;

function addTwo() {
  x = x + 2; // try adding "let" before the x.

addTwo();
x = x + 1;
console.log(x);

/* 
The global variable x is assigned the value of 1.
Then, the function addTwo() increments the variable by 2.
Next, the variable is incremented by 1.
Finally, it's printed out using console.log. 
*/

// If I had a variable withing the function it would change the print out.