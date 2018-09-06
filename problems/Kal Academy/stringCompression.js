//mplement a method to perform a basic string compression using the counts of repeated characters. For example, the string aabccccaaa would become a2b1c4a3. If the compressed string would not become smaller than the original string, your method should return the original string.

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

  let strMap = [];
  let result = '';

  for(let i = 0; i < str.length; i++){
    strMap[str.charCodeAt(i)] ?
    strMap[str.charCodeAt(i)] += 1 :
    strMap[str.charCodeAt(i)] = 1
  }

  for(let i = 0; i < strMap.length; i++){
    if (strMap[i] !== undefined) {
      result += String.fromCharCode(i) + strMap[i]
    }
  }

  // console.log(strMap[100]);

  return result;
}

console.log(compressStr('aabccccaaa'));