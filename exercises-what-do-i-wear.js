// @ts-nocheck


/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables `shirtWidth`, `shirtLength`, and `shirtSleeve`
 * 2. Your code should include an `if...else` conditional statement
 * 3. Your code should use logical expressions
 * 4. Your code should produce the expected output
 * 6. Your code should not be empty
 * 7. BE CAREFUL ABOUT THE EXACT CHARACTERS TO BE PRINTED.
 */



// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
var shirtWidth = 20;
var shirtLength = 29;
var shirtSleeve = 8.38;

/*
 * To gain confidence, check your code for the following combination of [shirtWidth, shirtLength, shirtSleeve, expectedSize]:
 * [18, 28, 8.13, 'S']
 * [19.99, 28.99, 8.379, 'S']
 * [20, 29, 8.38, 'M']
 * [22, 30, 8.63, 'L']
 * [24, 31, 8.88, 'XL']
 * [26, 33, 9.63, '2XL']
 * [27.99, 33.99, 10.129, '2XL']
 * [28, 34, 10.13, '3XL']
 * [18, 29, 8.47, 'NA']
*/

if ((shirtWidth >= 18 && shirtWidth <= 19.999) && (shirtLength >= 28 && shirtLength <= 28.99) && (shirtSleeve >= 8.13 && shirtSleeve <= 8.379)) {
  console.log("S");
} else if ((shirtWidth >= 20 && shirtWidth <= 21.999) && (shirtLength >= 29 && shirtLength <= 29.999) && (shirtSleeve >= 8.38 && shirtSleeve <= 8.629)) {
  console.log("M");
} else if ((shirtWidth >= 22 && shirtWidth <= 23.999) && (shirtLength >= 30 && shirtLength <= 30.999) && (shirtSleeve >= 8.63 && shirtSleeve <= 8.879)) {
  console.log("L");
} else if ((shirtWidth >= 24 && shirtWidth <= 25.999) && (shirtLength >= 31 && shirtLength <= 32.999) && (shirtSleeve >= 8.88 && shirtSleeve <= 9.629)) {
  console.log("XL");
} else if ((shirtWidth >= 26 && shirtWidth <= 27.999) && (shirtLength >= 33 && shirtLength <= 33.999) && (shirtSleeve >= 9.63 && shirtSleeve <= 10.129)) {
  console.log("2XL");
} else if (shirtWidth >= 28 && shirtLength >= 34 && shirtSleeve >= 10.13) {
  console.log("3XL");
} else {
  console.log("NA");
}