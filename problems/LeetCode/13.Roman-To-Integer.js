/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let result = 0;

  for (let i = 0; i < s.length; i++){
    switch (s[i]){
      case 'M':
        result += 1000;
        break;
      case 'D':
        result += 500;
        break;
      case 'C':
        result += 100;
        break;
      case 'L':
        result += 50;
        break;
      case 'X':
        result += 10;
        break;
      case 'V':
        result += 5;
        break;
      case 'I':
        result += 1;
    }
  }
  return result;
};

