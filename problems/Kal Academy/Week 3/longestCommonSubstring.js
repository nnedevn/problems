function lcs(word1, word2) {
  let lcsLength = 0; // The length of the lcs
  let finalIndex = 0;
  let lastIndex = "";

  // if the last index is the same, store it and remove it from both strings
  // if(word1[word1.length -1] === word2[word2.length-1]){
  //   lastIndex = word1[word1.length -1];
  //   word1 = word1.slice(0, word1.length - 1);
  //   word2 = word2.slice(0, word2.length - 1);
  // }

  console.log(word1, word2, lastIndex);

  var lcsarr = new Array(word1.length);
  for (var i = 0; i <= word1.length; ++i) {
    lcsarr[i] = new Array(word2.length);
    for (var j = 0; j <= word2.length; ++j) {
      lcsarr[i][j] = 0;
    }
  }
  // console.log(lcsarr);

  for (let i = 0; i <= word1.length; ++i) {
    for (let j = 0; j <= word2.length; ++j) {
      if (i === 0 || j === 0) {
        lcsarr[i][j] = 0;
      } else if (word1[i -1] === word2[j -1]) {
        lcsarr[i][j] = lcsLength = lcsarr[i - 1][j - 1] + 1;
        finalIndex = i;
      } else {
        lcsarr[i][j] = lcsLength = Math.max(lcsarr[i - 1][j], lcsarr[i][j - 1]);
        finalIndex = i;
      }
    }
  }
  console.log(lcsarr);
  console.log(finalIndex, lcsLength);

 /*
  while there is word1 and word 2 left

  check the top and the left:
    if they are the same go top
    if current indes is max of top and left go diagonally
    and push word 2[word2 index]
    if the left is larger than top - go left
    if the top is larger than left go top

 */
  let rowIndex = word1.length;
  let colIndex = word2.length;
  let resultArr = []
  
  while (rowIndex !== 0 && colIndex !== 0){
    if( // local max
      lcsarr[rowIndex][colIndex] > Math.max(lcsarr[rowIndex -1 ][colIndex], lcsarr[rowIndex][colIndex-1])){
        resultArr.push(word2[colIndex]);
        rowIndex --;
        colIndex --;
      } else { // top and left are the same
        if (lcsarr[rowIndex-1][colIndex] === lcsarr[rowIndex][colIndex-1]){
          colIndex --; // go top
        } else { // left is larger than top
          if(lcsarr[rowIndex-1][colIndex] > lcsarr[rowIndex][colIndex-1]){
            rowIndex --; // go left
          } else {
            console.log('dunno')
          }
        }
      }


  }
return resultArr;

  //Return the reversed string + the lastIndex

}

console.log(lcs("GXTXAYB", "AGGTAAB"));
