function lcs(word1, word2) {
  var maxValue = 0;
  var finalIndex = 0;
  let lastIndex = ''
  if(word1[word1.length -1] === word2[word2.length-1]){
    lastIndex = word1.pop();
    word2.pop();
  }
``

  var lcsarr = new Array(word1.length) ;
  for (var i = 0; i <= word1.length ; ++i) {
    lcsarr[i] = new Array(word2.length );
    for (var j = 0; j <= word2.length ; ++j) {
      lcsarr[i][j] = 0;
    }
  }
  // console.log(lcsarr);

  for (let i = 0; i <= word1.length ; ++i) {
    for (let j = 0; j <= word2.length ; ++j) {
      if (i === 0 || j === 0) {
        lcsarr[i][j] = 0;
      } else if (word1[i - 1] === word2[j - 1]) {
        lcsarr[i][j] = maxValue = lcsarr[i - 1][j - 1] + 1;
        finalIndex = i;
      } else {
        lcsarr[i][j] = maxValue = Math.max(lcsarr[i - 1][j], lcsarr[i][j - 1])
        finalIndex = i;
      }
    }
  }
  console.log(lcsarr)
  // index = lcsarr
  console.log(finalIndex,maxValue);

let str = '';



}

console.log(lcs('ABCDGH','AEDFHR'))
