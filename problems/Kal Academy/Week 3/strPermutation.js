// Given two strings, write a method to decide if one is a permutation of the other?

function strPermutation(str1, str2){

  if(str1.length !== str2.length){
    return false;
  }

  let str1Arr = str1.split('');
  let str2Arr = str2.split('');

  str1Arr = str1Arr.sort();
  str2Arr = str2Arr.sort();
  
  for (let i = 0; i < str1Arr.length; i++){
    if (str1Arr[i] !== str2Arr[i]){
      return false;
    }
  }
  return true;
}

console.log(strPermutation('abc', 'cad'));