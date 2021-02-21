function minesweeper(matrix) {
    let result = []
    
    for (let row = 0; row < matrix.length; row++){
        let count = [];
        for (let col = 0; col < matrix[0].length; col++){
            let mines = 0;
            mines = getAdjacent(matrix, row, col).reduce((sum, curr) => sum + curr);
            count.push(mines);       
        }

        result.push(count)
    }
    return result;
}

function getAdjacent(arr, row, col){
    let result = [];

    let topLeftExists = row - 1 >= 0 && col - 1 >= 0;
    let topExists = row - 1 >=0;
    let topRightExists = row - 1 >= 0 && col + 1 < arr[0].length;
    let rightExists = col + 1 < arr[0].length;
    let bottomRightExists = row + 1 < arr.length && col + 1 < arr[row].length;
    let bottomExists = row + 1 < arr.length;
    let bottomLeftExists = row + 1 < arr.length && col - 1 >= 0;
    let leftExists = col - 1 >=0; 

    result.push(topLeftExists && arr[row - 1][col - 1] === true ? 1 : 0)
    result.push(topExists && arr[row - 1][col] === true ? 1 : 0)
    result.push(topRightExists && arr[row - 1][col+1] === true ? 1 : 0)
    result.push(rightExists && arr[row][col + 1] === true ? 1 : 0)
    result.push(bottomRightExists && arr[row + 1][col + 1] === true ? 1 : 0)
    result.push(bottomExists && arr[row + 1][col] === true ? 1 : 0)
    result.push(bottomLeftExists && arr[row + 1][col - 1] === true ? 1 : 0)
    result.push(leftExists && arr[row][col - 1] === true ? 1 : 0)

    return result;
}

let matrix =  
    [[true,false,false,true], 
    [false,false,true,false], 
    [true,true,false,true]]

console.log("expected:")
console.table([[0,2,2,1], 
    [3,4,3,3], 
    [1,2,3,1]])    

console.table(minesweeper(matrix))

console.table(matrix)
// console.log(getAdjacent(matrix, 0, 1))