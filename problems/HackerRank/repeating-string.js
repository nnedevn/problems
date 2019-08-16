/**
 *https://www.hackerrank.com/challenges/repeated-string/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup
 * @param {String} str 
 * @param {int} n 
 * @returns {string}
 */

const repeatingString = function(str, n) {
  let instancesOfAInStr = 0;
  let instancesOfAInPartialStr = 0;

  let strLength = str.length;
  let partialStrCharacters = 0;
  for (let i = 0; i < strLength; i++) {
    if (str[i] === "a") {
      instancesOfAInStr++;
    }
  }

  let numberOfSequences = Math.floor(n / strLength);

  if (numberOfSequences * strLength < n) {
    partialStrCharacters = n - numberOfSequences * strLength;
  }

  for (let i = 0; i < partialStrCharacters; i++) {
    if (str[i] === "a") {
      instancesOfAInPartialStr++;
    }
  }

  instancesOfAInStr =
    instancesOfAInStr * numberOfSequences + instancesOfAInPartialStr;

  return instancesOfAInStr;
};

console.log(repeatingString("a", 1000000000000000));
