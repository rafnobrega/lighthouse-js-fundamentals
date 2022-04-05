// Welcome back to Codeville, where you are now the mayor! The people of Codeville want you to focus on Smart City upgrades. You've decided to begin by replacing all of the city's trash cans with smart cans: when citizens toss their rubbish into the smart can, it automatically sorts items into waste, recycling, and compost bins.

// We need to complete a function called smartGarbage(trash, bins), which will be responsible for increasing the garbage count for waste, recycling, or compost depending on what trash is submitted.

const smartGarbage = function (trash, bins) {
  if (trash === "recycling") {
    bins.recycling += 1;
  } else if (trash === "compost") {
    bins.compost += 1;
  } else if (trash === "waste") {
    bins.waste += 1;
  }
  return bins
}

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));


// The Object.keys() method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would


/*

const smartGarbage = function (trash, bins) {
  const binNames = Object.keys(bins);
  
  for (let x of binNames) {
    if (x === trash) {
      bins[x] += 1;
    }
  }
  return bins;
}

*/