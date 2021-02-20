function boxBlur(image) {
    let result = [];

    for (let row = 1; row < image.length - 1; row++){
        let tempArr = [];
        
        for (let col = 1; col < image[row].length - 1; col++){

            sum = 
            image[row - 1][col - 1] + 
            image[row - 1][col] + 
            image[row - 1][col +1] + 
            image[row][col - 1] + 
            image[row][col] + 
            image[row][col + 1]+ 
            image[row + 1][col - 1]+ 
            image[row + 1][col] + 
            image[row + 1][col + 1];

            flooredAverage = Math.floor(sum/9);
            tempArr.push(flooredAverage);
        }
        result.push(tempArr);
    } 

    return result
}

// console.table(boxBlur([
//     [1,1,1], 
//     [1,7,1], 
//     [1,0,1]]
//     ));

    
console.table(boxBlur(
    [[7, 4, 0, 1], 
    [5, 6, 2, 2], 
    [6, 10, 7, 8], 
    [1, 4, 2, 0]]
));