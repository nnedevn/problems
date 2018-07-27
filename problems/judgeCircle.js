
// Input: "UD"
// Output: true

// Input: "LL"
// Output: false
/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
  let directionsArr = moves.split('');  
  let checkArr = [0, 0];

  directionsArr.forEach(move => {
    switch (move){
      case 'U': 
        checkArr[0] += 1;
        break;
      case 'D':
        checkArr[0] -= 1;
        break;
      case 'L':
        checkArr[1] += 1;
        break;
      case "R":
        checkArr[1] -= 1;
    }
  });

return (checkArr[0]===0 && checkArr[1]===0);
};


console.log(judgeCircle("LR"))


// Cleaner version: 
var judgeCircle2 = function(moves) {
  let storage = {
      R: 0,
      L: 0,
      U: 0,
      D: 0
  }
  
  for (let i in moves) {
      storage[moves[i]] += 1;
  }
  
  return (storage['R'] == storage['L'] && storage['U'] === storage['D'])
};