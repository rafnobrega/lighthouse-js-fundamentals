// The function, carPassing(cars, speed), takes in an array of car objects, and the speed of a car as it passes the sensor.


const cars = [
  {
  time: 1568329654807,
  speed: 40,
  },
  {
  time: 1568329821632,
  speed: 42,
  },
  {
  time: 1568331115463,
  speed: 35
  }
  ]
  
  const speed = 38
  
  function carPassing(cars, speed) {
  let newObject = {
  time: Date.now(),
  speed: speed
  }
  cars.push(newObject);
  return cars;
  }
  
  carPassing(cars, speed);
  console.log(cars);