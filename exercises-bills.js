var bills = [50.23, 19.12, 34.01, 100.11, 12.15, 9.90, 29.11, 12.99, 10.00, 99.22, 102.20, 100.10, 6.77, 2.22];

let totals = bills.map(function(tip) {
  tip *= 1.15;
  tip = tip.toFixed(2);
  tip = Number(tip);
  return tip;
});

console.log(totals);

/*
// Method 2
var totals = bills.map(function(element) {
    element *= 1.15;
    return Number(element.toFixed(2));
});
*/