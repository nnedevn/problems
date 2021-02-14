function firstNotRepeatingCharacter(s) {
    if (s.length===1) return s;
    
    let occurences = {};
    for (let i = 0; i < s.length; i++){
       occurences[s[i]] = occurences[s[i]] + 1 || 1;
    }

    console.log(occurences)
    
    for (const [key, value] of Object.entries(occurences)){
        if (value === 1) return key;
    }
    return "_"
}

function isPrevOrNextSame(str, index){
    let prev = str[index - 1] !== undefined ? str[index - 1] : false;
    let next = str[index + 1] !== undefined ? str[index + 1] : false;
    let current = str[index];
    return (prev && prev === current) || (next && next === current)
}

let str = "abacabad";

// console.log(isPrevOrNextSame(str, 5))

console.log(firstNotRepeatingCharacter(str));
// console.log(Math.floor(1.45))

// console.log([1,2,3,4,5].reduce((sum, current) => sum + current));