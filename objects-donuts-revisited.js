var donuts = [
  { type: "Jelly", cost: 1.22 },
  { type: "Chocolate", cost: 2.45 },
  { type: "Cider", cost: 1.59 },
  { type: "Boston Cream", cost: 5.99 }
];


// donut represents a single element of donuts array
// donut is an object, therefore you can access its properties using a dot notation
donuts.forEach(function(donut) {
  console.log(donut.type + " donuts cost $" + donut.cost + " each");
});

// I could use any other word instead of "donut" that the program would still work.