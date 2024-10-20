const { returnStatement } = require("@babel/types")

function verifyCell(currentState, neighbours) {

  if (currentState == 1 & neighbours < 2) { //1. Any live cell with fewer than two live neighbours dies as if by under population.
    currentState = 0
  }else if (currentState == 1 && neighbours > 3) { //2. Any live cell with more than three live neighbours dies, as if by overcrowding.
    currentState = 0
  } else if (currentState == 1 && (neighbours == 2 || neighbours == 3)){ // 3. Any live cell with two or three live neighbours lives on to the next generation.
    currentState = 1
  } else if (currentState == 0 && neighbours == 3){ // 4. Any dead cell with exactly three live neighbours becomes a live cell.
    currentState = 1
  }

  return currentState

}

// 1. Any live cell with fewer than two live neighbours dies as if by under population.
// 2. Any live cell with more than three live neighbours dies, as if by overcrowding.
// 3. Any live cell with two or three live neighbours lives on to the next generation.
// 4. Any dead cell with exactly three live neighbours becomes a live cell.
// “Live” or “Dead” cells can be represented with suitable values of either the app

// print(verifyCell(4))
module.exports = { verifyCell };




// function verifygrid(generation0, generation1) {
//   if (generation1 <2) {
//       return dead;
//   }

//   if (generation1) >3 {
//       return alive
//   }
// }