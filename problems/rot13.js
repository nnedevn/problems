function rot13(str) {

  str = str.split('');
  
  for (let i = 0; i < str.length; i++){

    if (str[i].charCodeAt(0) + 13 > 90 ){
      // console.log(str[i].charCodeAt(0));
      str[i] = String.fromCharCode(str[i].charCodeAt(0) - 13);
    } else if (str[i].charCodeAt(0) - 13 <= 90 && str[i].charCodeAt(0) > 64){
      str[i] = String.fromCharCode(str[i].charCodeAt(0) + 13);
    }
  }

  return str.join('');
}

console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
