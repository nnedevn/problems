/**
 * @param {string []} strs
 * @return {string}
 */
let longestCommonPrefix = function (strs) {
  let longestCommonPrefix = "";
  if (strs.length === 0 || strs == null || strs == ['']) {
    return "";
  }

  let shortestStr = strs[0].length;


  //get the length of the shortest string
  for (let i = 0; i < strs.length; i++) {
    if (shortestStr > strs[i].length) {
      shortestStr = strs[i].length;
    }
  }

  let index = 0;

  for (let i = 0; i < shortestStr; i++) {
    for (string of strs) {
      if (string[index] != strs[0][i]) {
        return longestCommonPrefix;
      }
    }
    longestCommonPrefix += strs[0][i];
    index++;
  }

  return longestCommonPrefix;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));

console.log(longestCommonPrefix([""]));