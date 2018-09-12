//Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.

// Make a pass and take a note of all the zeros in row 1 col 1 onwards


//print a matrix in the console
function format2dArr(arr){
    for (let j = 0; j < arr.length; j++){
      console.log(arr[j])    
  }
}

function zeroCol(matrix, col){
  for (let i = 0; i < matrix.length; i++){
    matrix[i][col] = 0;
  }
}

  function zeroRow(matrix, row){
    for (let i = 0; i < matrix[row].length; i++) {
    matrix[row][i] = 0;
   }
  }

function setZeroInMatrix(matrix){

  let firstRowHasZero = false;
  let firstColHasZero = false;

  // check if first row has 0 in it
  for (let i = 0; i < matrix[0].length; i++){
    if (matrix[0][i] === 0){
      firstRowHasZero = true;
      break;
    }
  }

  //check if first col has 0 in it
  for (let i = 0; i < matrix.length; i++){
    if (matrix[i][0] === 0){
      firstColHasZero = true;
      break;
    }
  }

  // check the rest of the matrix for 0 and mark which rows and cols will need to be zeroed.
  for (let i = 1; i < matrix.length; i++){
    for (let j = 1; j < matrix[i].length; j++){
      if(matrix[i][j] === 0){
        matrix[i][0] = 0;
        matrix[0][j] = 0 ;
      }
    }
  }

  //zero the cols
  for (let i = 0; i < matrix[0].length; i++ ){
    if (matrix[0][i] === 0){
      zeroCol(matrix, i)
    }
  } 

  //zero the rows
  for  (let i = 0; i < matrix.length; i++){
    if(matrix[i][0] === 0){
       zeroRow(matrix, i);
    }
  }

  // zero first row and col in case they contained a 0
  firstColHasZero ? zeroCol(matrix, 0) : null
  firstRowHasZero ? zeroRow(matrix, 0) : null

return matrix;
}

format2dArr(setZeroInMatrix([
  [1,1,1,1],
  [1,1,1,1],
  [1,1,0,1],
  [1,1,1,1],
]));
