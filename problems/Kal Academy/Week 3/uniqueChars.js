//Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

//Variant 1:
function uniqueChars(str){
  let strArr = str.split('');
  strArr = strArr.sort();
  for (let i = 0; i < str.length-1; i++){
    if(str[i]===str[i+1]){
      return false;
    }
  }
  return true;
}

//console.log(uniqueChars('abss'));

//Variant 2:

function uniqueCharsV2(str){
  let boolArr = Array(256);

  for (let i = 0; i < str.length; i++){
    if( boolArr[str[i].charCodeAt(0)] === true ){
      return false;
    } else {
      boolArr[str[i].charCodeAt(0)] = true; 
    }
  }

  return true;
}

console.log(uniqueCharsV2('!*@#%&Aa'));
