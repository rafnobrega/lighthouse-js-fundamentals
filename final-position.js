const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

const finalPosition = function(moves) {
  let final = []; 
  let x = 0; // the parade begins at [0, 0]
  let y = 0; // the parade begins at [0, 0]

  for (let move of moves) {
    if (move === 'south') {
      y--;
    } else if (move === 'north') {
      y++;
    } else if (move === 'east') {
      x++;
    } else if (move === 'west') {
      x--;
    }
  }
  final.push(x, y); // pushes x and y to the variable final on line 4.
  return final;
}
  

console.log(finalPosition(moves));