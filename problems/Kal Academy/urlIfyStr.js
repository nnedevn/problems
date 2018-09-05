//URLify a given string (Replace spaces is %20)

//Easy way:
function urlIfyStr(str) {
  let strArr = str.split(" ");
  let result = "";

  for (let i = 0; i < strArr.length ; i++){
    i === strArr.length - 1 ? 
      result +=strArr[i] : 
      result += strArr[i] + "%20";
  }

  return result; 
}

console.log(urlIfyStr('This is a test'));