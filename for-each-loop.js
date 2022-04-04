var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

donuts.forEach(function(donut) {
  donut += " hole";
  donut = donut.toUpperCase();
  console.log(donut); // prints donuts hole and uppercase.
});

console.log(donuts); // prints the array from line 1.


/*
Notice that the forEach() method iterates over the array without the need of an explicitly defined index. In the example above, donut corresponds to the element in the array itself. This is different from a for or while loop where an index is used to access each element in the array:

for (var i = 0; i < donuts.length; i++) {
  donuts[i] += " hole";
  donuts[i] = donuts[i].toUpperCase();
  console.log(donuts[i]);
}
*/


words = ["cat", "in", "hat"];

words.forEach(function(word, num, all) {
  console.log("Word " + num + " in " + all.toString() + " is " + word);
});
/*
Prints:
Word 0 in cat,in,hat is cat
Word 1 in cat,in,hat is in
Word 2 in cat,in,hat is hat
*/