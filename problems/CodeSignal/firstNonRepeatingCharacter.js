function firstNotRepeatingCharacter(s) {
    if (s.length===1) return s;
    
    let occurences = {};
    for (let i = 0; i < s.length; i++){
       occurences[s[i]] = occurences[s[i]] + 1 || 1;
    }
    
    for (const [key, value] of Object.entries(occurences)){
        if (value === 1) return key;
    }
    return "_"
}

let str = "abacabad";

console.log(firstNotRepeatingCharacter(str));
