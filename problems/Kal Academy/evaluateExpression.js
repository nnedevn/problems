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

function isOperator(value) {
  return ["-", "+", "*", "/", "^"].indexOf(value) !== -1 ? true : false;
}

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
  let exprArr = expr.split(""); // add a multiple digit regex

  for (let i = 0; i < exprArr.length; i++) {
    if (isOperator(exprArr[i])) {
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

  return postfixExpr.join("");
}

function evaluateExpression(expression) {
  let result = new Stack();
  let postfixExp = infixToPostfix(expression);

  function popTwo(stack) {
    if (stack.size() < 1) {
      return undefined;
    }
    let right = parseInt(stack.pop());
    let left = parseInt(stack.pop());
    return [left, right];
  }

  for (let i = 0; i < postfixExp.length; i++) {
    if (isOperator(postfixExp[i])) {
      switch (postfixExp[i]) {
        case "-":
          operands = popTwo(result);
          result.push(operands[0] - operands[1]);
          break;
        case "+":
          operands = popTwo(result);
          result.push(operands[0] + operands[1]);
          break;
        case "*":
          operands = popTwo(result);
          result.push(operands[0] * operands[1]);
          break;
        case "/":
          operands = popTwo(result);
          result.push(operands[0] / operands[1]);
          break;
      }
    } else {
      result.push(postfixExp[i]);
    }
  }
  return result.peek();
}

console.log(evaluateExpression("6+3/3"));
