/**
 * Finish the solution so that it takes an input n (integer) 
 * and returns a string that is the decimal representation of
 *  the number grouped by commas after every 3 digits.
 * 
 * 0 <= n <= Number.MAX_SAFE_INTEGER
 */

function formatNumber(number){
  let str = '';
  let numberStr = number + '';
  let count = 0;
  for (let i = numberStr.length-1; i >= 0;i--) {
    if (count % 3 === 0 && count !== 0 ) {
      str = numberStr[i] + ',' + str;
      count ++;
    } else {
        str = numberStr[i] + str;
        count ++;
    }

  }

  return str;
}

console.log(formatNumber(35235235));