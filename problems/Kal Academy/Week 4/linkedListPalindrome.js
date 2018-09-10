//Write an algorithm to determine if a linkedlist is a palindrome

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {}

  pop() {}

  _find(value, test = this._test) {}

  get(index) {}

  delete(index) {}

  _testIndex(search, __, i) {
    return search === i;
  }

  _test(a, b) {
    return a === b;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
