var catSays = function(max) {   //Notice how the function keyword no longer has a name.
  var catMessage = "";
  for (var i = 0; i < max; i++) {
    catMessage += "meow ";
  }
  return catMessage;
};



// NAMED FUNCTION EXPRESSIONS

var favoriteMovie = function movie() {
  return "The Fountain";
};

favoriteMovie(); //still returns "The Fountain"