/**
 * https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup
 * @param {Array} cloudArr
 * @returns{Int}
 */
const jumpingOnTheClouds = function(cloudArr) {
  let numberOfJumps = 0;

  let currentIndex = 0;

  while (currentIndex < cloudArr.length) {
    if (cloudArr[currentIndex + 2] === 0) {
      numberOfJumps++;
      currentIndex += 2;
    } else {
      numberOfJumps++;
      currentIndex += 1;
    }
  }

  return numberOfJumps - 1;
};

console.log(jumpingOnTheClouds([0, 0, 0, 0, 1, 0]));
