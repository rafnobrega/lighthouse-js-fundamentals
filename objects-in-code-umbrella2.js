var umbrella = { 
  color: "pink",
  isOpen: true,
  
  open: function() { 
    if (umbrella.isOpen === true) {
      return "The umbrella is already opened!";
    } else {
      umbrella.isOpen = true;
      return "Julia opens the umbrella!";
    }
   },

  close: function() {
    if (umbrella.isOpen === true) {
       umbrella.isOpen = false; //  expected .isOpen to change
       return "Julia closes the umbrella!";
    } else {
      return "The umbrella is already closed!";
    }
  }
};