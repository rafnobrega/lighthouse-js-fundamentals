// Objects are one of the most important data structures in JavaScript. Get ready to see them everywhere!

// They have properties (information about the object) and methods (functions or capabilities the object has). Objects are an incredibly powerful data type and you will see them all over the place when working with JavaScript, or any other object-oriented programming language.


//Object literals, methods, and properties
//You can define objects using object-literal notation:

var myObj = { 
  color: "orange",
  shape: "sphere",
  type: "food",
  eat: function() { return "yummy" }
};

myObj.eat(); // method
myObj.color; // property


// Naming conventions
// Feel free to use upper and lowercase numbers and letters, but don't start your property name with a number. You don't need to wrap the string in quotes! If it's a multi-word property, use camel case. Don't use hyphens in your property names

var richard = {
  "1stSon": true;
  "loves-snow": true;
};

richard.1stSon // error
richard.loves-snow // error