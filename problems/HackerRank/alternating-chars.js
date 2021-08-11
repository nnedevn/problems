/**
 * You are given a string containing characters  and  only. Your task is to change it into a string such that there are no matching adjacent characters. To do this, you are allowed to delete zero or more characters in the string. Your task is to find the minimum number of required deletions.
 * @param {string} s 
 * @returns {int} result
 */

function alternatingCharacters(s) {
    // Write your code here
    let result = 0;
    for (let i = 0; i < s.length - 1; i++){
        if (s[i] === s[i+1]){
            result++;
        }
    }
    return result;
}

const input = "AAAA";

console.log(alternatingCharacters(input));

