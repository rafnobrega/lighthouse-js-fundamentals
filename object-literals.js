// OBJECT LITERAL NOTATION

var sister = {
  name: "Sarah",
  age: 23,
  parents: [ "alice", "andy" ],
  siblings: ["julia"],
  favoriteColor: "purple",
  pets: true,
  paintPicture: function() { return "Sarah paints!"; }
};

sister.paintPicture();

/*
The syntax you see above is called object-literal notation. There are some important things you need to remember when you're structuring an object literal:

- The "key" (representing a property or method name) and its "value" are separated from each other by a colon
- The key: value pairs are separated from each other by commas
- The entire object is wrapped inside curly braces { }.
*/
