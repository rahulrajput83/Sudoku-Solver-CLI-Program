// Puzzle string must be like this ;
// 1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--
// Here "-" represents "0" or empty cell.

// Creates CLI so that we can enter our puzzle string.
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(``, string => {
    var problemString =`${string}`;
var num = [];
// To convert string into nos num[] and swipe -(hipen) to 0
for (var i = 0; i < problemString.length; i++) {
  if (problemString.charAt(i) !== "-") num[i] = problemString.charAt(i);
  else num[i] = ".";
}

// Creates Matrix of 9x9.
var matrix = listToMatrix(num, 9);
function listToMatrix(list, elementsPerSubArray) {
  var matrix = [], i, k;

  for (i = 0, k = -1; i < list.length; i++) {
      if (i % elementsPerSubArray === 0) {
          k++;
          matrix[k] = [];
      }

      matrix[k].push(list[i]);
  }

  return matrix;
}


sudokuSolver(matrix);
console.log(matrix);

// Fuction to Validate if Sudoku Puzzle is correct or not.
function isValid(board, row, col, k) {
  for (let i = 0; i < 9; i++) {
      const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
      const n = 3 * Math.floor(col / 3) + i % 3;
      if (board[row][i] == k || board[i][col] == k || board[m][n] == k) {
        return false;
      }
  }
  return true;
}

// Function to Solve Sudoku Puzzle
function sudokuSolver(data) {
for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    if (data[i][j] == '.') {
      for (let k = 1; k <= 9; k++) {
        if (isValid(data, i, j, k)) {
          data[i][j] = `${k}`;
        if (sudokuSolver(data)) {
         return true;
        } else {
         data[i][j] = '.';
        }
       }
     }
     return false;
   }
 }
}
return true;
}

    readline.close()
  })
  
// END