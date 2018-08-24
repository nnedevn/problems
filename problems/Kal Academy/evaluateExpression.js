// Define a stack structure;
class Stack {
  constructor() {
    this.count = 0;
    this.data = {};
  }

  push(data) {
    this.data[this.count] = data;
    this.count++;
  }

  pop() {
    if (this.count === 0) {
      return undefined;
    }

    this.count--;
    let result = this.data[this.count];
    delete this.data[this.count];
    return result;
  }

  size() {
    return this.count;
  }

  peek() {
    return this.data[this.count - 1];
  }
}

/**
 * Scan through all the numbers;
 * operator -> stack
 *
 */

function operatorPrecedence(operator) {
  switch (operator) {
    case "^":
      return 4;
      break;
    case "*":
      return 3;
      break;
    case "/":
      return 3;
      break;
    case "-":
      return 2;
      break;
    case "+":
      return 2;
      break;
    default:
      return "Not a valid operator";
  }
}

function infixToPostfix(expr) {
  let operatorStack = new Stack();
  let postfixExpr = [];
  let exprArr = expr.split("");

  for (let i = 0; i < exprArr.length; i++) {
    if (isNaN(exprArr[i])) {
      // is an operator
      let operator = exprArr[i];
      while (operator) {
        if (operatorStack.size() !== 0) {
          if (
            operatorPrecedence(operator) >
            operatorPrecedence(operatorStack.peek())
          ) {
            operatorStack.push(operator);
            operator = null;
          } else if (
            operatorPrecedence(operator) <=
            operatorPrecedence(operatorStack.peek())
          ) {
            postfixExpr.push(operatorStack.pop());
          }
        } else {
          operatorStack.push(operator);
          console.log(operator);
          operator = null;
        }
      }
    } else {
      postfixExpr.push(exprArr[i]); //push the number
    }
  }
  while (operatorStack.size() != 0) {
    postfixExpr.push(operatorStack.pop());
  }

  return postfixExpr.join('');
}
// console.log(deretminePrecedence(''));
console.log(infixToPostfix("12+3/4-15*12*12*12-25"));
