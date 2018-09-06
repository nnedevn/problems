//URLify a given string (Replace spaces is %20)

//Version 1:
function urlIfyStr(str) {
  str = str.trim();
  let strArr = str.split(" ");
  let result = "";

  for (let i = 0; i < strArr.length ; i++){
    i === strArr.length - 1 ? 
      result +=strArr[i] : 
      result += strArr[i] + "%20";
  }

  return result; 
}

//console.log(urlIfyStr('This is a test'));

//Version 2:

function stringToUrl(str){
  str = str.trim();

  let spaceCount = 0;
  for (let i = 0; i < str.length; i++){
    if(str[i] === ' '){ spaceCount ++ }
  }

   strArr = str.split('');
   oldLength = strArr.length;
   newLength = strArr.length + 2 * spaceCount;

  console.log(oldLength, newLength);

  for (let i = oldLength - 1; i >= 0; i--){
    if( strArr[i] === ' '){
      strArr[newLength - 1] = '0'; 
      strArr[newLength - 2] = '2';
      strArr[newLength - 3] = '%';
      newLength -= 3;
    } else {
      strArr[newLength - 1] = strArr [i];
      newLength --;
    }
  }

  return strArr.join('');
}

console.log(stringToUrl('This is another test '));
