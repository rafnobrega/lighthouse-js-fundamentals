/*
Array Loops
Once the data is in the array, you want to be able to efficiently access and manipulate each element in the array without writing repetitive code for each element.

For instance, if this was our original donuts array:

var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

and we decided to make all the same donut types, but only sell them as donut holes instead, we could write the following code:
donuts[0] += " hole";
donuts[1] += " hole";
donuts[2] += " hole";
//donuts array: ["jelly donut hole", "chocolate donut hole", "glazed donut hole"]

But remember, you have another powerful tool at your disposal, loops!

To loop through an array, you can use a variable to represent the index in the array, and then loop over that index to perform whatever manipulations your heart desires.
*/

var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

// the variable `i` is used to step through each element in the array
for (var i = 0; i < donuts.length; i++) {
    donuts[i] += " hole";
    donuts[i] = donuts[i].toUpperCase();
}

//donuts array: ["JELLY DONUT HOLE", "CHOCOLATE DONUT HOLE", "GLAZED DONUT HOLE"]

// In this example, the variable i is being used to represent the index of the array. As i is incremented, you are stepping over each element in the array starting from 0 until donuts.length - 1 (donuts.length is out of bounds).

