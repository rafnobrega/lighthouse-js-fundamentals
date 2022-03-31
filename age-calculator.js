const ageCalculator = function (name, yearOfBirth, currentYear) { // name is a string, yearOfBirth is a number, currentYear is a number.

  let age = currentYear - yearOfBirth; // to calculate the current age.
  return name + " is " + age + " years old.";
  
}


console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));