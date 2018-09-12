//Implement a method to perform a basic string compression using the counts of repeated characters. For example, the string aabccccaaa would become a2b1c4a3. If the compressed string would not become smaller than the original string, your method should return the original string.

function uniqueChars(str){
  strArr = str.split('');
  strArr = strArr.sort();
  for (let i = 0; i < strArr.length; i++){
    if(strArr[i] === strArr[i+1]){
      return false;
    }
  }
  return true;
}

function compressStr(str){
// if the string comprises of unique chars, return string
  if (uniqueChars(str)){
    return str;
  }

  let ntainer = {};
    while(str[i] === str[i+1]){
      count ++;
      i++
    }
    resultStr += str[i] + count;
  }

  return resultStr;
}

console.log(compressStr('aabccccaaa'));