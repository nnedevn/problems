//Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.
/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {

  var result = [];

    for (letter of str) {
      if (letter.charCodeAt(0) > 64 && letter.charCodeAt(0) < 91){
      result += String.fromCharCode(letter.charCodeAt(0) + 32);
      } else{
        result += letter;
      }
  }

  return(result);

};

console.log(toLowerCase('CONVERT tO LoweRCAsE.'));