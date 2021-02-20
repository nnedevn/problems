// function arrayChange(inputArray) {
//     let counter = 0;
    
//     for (let i = 1; i < inputArray.length; i++){
//         while (inputArray[i] <= inputArray[i-1]){
//             inputArray[i]++;
//             counter++
//         }
//     }
//     return counter;
// }


function arrayChange(inputArray) {
    let prevElAbsVal = inputArray[0];
    let allIncreases = 0;
    
    for (let i = 1; i < inputArray.length; i++){
        let currentVal = inputArray[i];
        if (currentVal <=  prevElAbsVal){
            let increaseNeeded = prevElAbsVal - currentVal + 1;
            allIncreases += increaseNeeded;
            prevElAbsVal = currentVal + increaseNeeded;        
        } else {
            prevElAbsVal = currentVal;
        }
    }
    
    return allIncreases;
}


// console.log(arrayChange([0, -1, -2]));
console.log(arrayChange([-1000, 0, -2, -1000]));