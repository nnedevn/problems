function avoidObstacles(inputArray) {
    let increment = 1;
    let position = 0;

    while (position <= Math.max(...inputArray)){
        if (inputArray.indexOf(position) !== -1){
            position = 0
            increment++
        } else {
            position = position + increment;
        }
    } 

    return increment
}


// console.log(avoidObstacles([5, 3, 6, 7, 9])); //4
// console.log(avoidObstacles([2, 3])); //4
console.log(avoidObstacles([1, 4, 10, 6, 2])); //7