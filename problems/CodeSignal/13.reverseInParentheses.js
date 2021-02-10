/* 
Write a function that reverses characters in (possibly nested) parentheses in the input string.

(baz) -> zab
foo(bar)baz -> foorabaz
foo(bar(baz))blim -> foobazrabblim
*/

// Initial naive solution:
function reverseInParentheses(inputString){
    if (inputString.indexOf("(") === -1) {
        return inputString;
    }

    let parenStack = new createStack();
    let newString;

    for (let i = 0; i < inputString.length; i++){
        if (inputString[i] === "("){
            parenStack.push(i);
        }
    }

    let stringInParens = inputString.slice(parenStack.peek()+1, inputString.indexOf(")", parenStack.peek()));
    let reversedStringInParens = stringInParens.split("").reverse().join("");
    let newStringArr = [];

    newStringArr.push(inputString.slice(0, parenStack.peek()));
    newStringArr.push(reversedStringInParens);
    newStringArr.push(inputString.slice(inputString.indexOf(")", parenStack.peek()) + 1, inputString.length));
    newString = newStringArr.join('');
    console.log(newStringArr);
    return reverseInParentheses(newString);
}

function createStack(){
    const arr = [];

    return {
        push(item){
            arr.push(item)
        },
        pop(){
            return arr.pop();
        },
        get length(){
            return arr.length;
        },
        peek(){
            return arr[arr.length - 1];
        },
        isEmpty() {
            return arr.length === 0;
        }
    }
}

console.log(reverseInParentheses("foo(bar(baz))blim"));