let calculateRectangleArea = function(l, w) {
  let recArea = l * w;
  if (l < 0 || w < 0) {
    return undefined;
  }
  return recArea;
}

let calculateTriangleArea = function (b, h) {
  let triArea = b * h / 2;
  if (b < 0 || h < 0) {
    return undefined;
  }
  return triArea;
}

let calculateCircleArea = function (r) {
  let cirArea = Math.PI * (r * r);
  if (r < 0) {
    return undefined;
  }
  return cirArea;
}


console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined