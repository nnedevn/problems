/**
 * @param {Integer}
 * @return {Integer}
 */
function reverseInt(int) {
  let negative = false;
  let reversed = 0;
  if (int < 0) {
    negative = true;
    int *= -1;
  }

  while (int > 0) {
    let number = int % 10;
    reversed = reversed * 10 + number;
    int = Math.floor(int / 10);
  }

  if (reversed > Number.MAX_SAFE_INTEGER) {
    return 0;
  }

  return negative ? -reversed : reversed;
}

console.log(reverseInt(-1534236469));