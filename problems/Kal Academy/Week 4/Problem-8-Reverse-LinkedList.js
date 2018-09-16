// Reverse a linked list – iteratively and recursively

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);
    this.length++;
    if (!this.head) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
  }

  pop() {
    return this.delete(this.length - 1);
  }

  _find(value, test = this._test) {
    let current = this.head;
    let i = 0;
    while (current) {
      if (test(value, current.value, i, current)) {
        return current;
      }
      current = current.next;
      i++;
    }
    return null;
  }

  get(index) {
    const node = this._find(index, this._testIndex);
    if (!node) {
      return null;
    } else {
      return node.value;
    }
  }

  delete(index) {
    if (index === 0) {
      const head = this.head;
      if (head) {
        this.head = head.next;
      } else {
        this.head = null;
        this.tail = null;
      }
      this.length--;
      return head.value;
    }
    const node = this._find(index - 1, this._testIndex);
    const excise = node.next;
    if (!excise) return null;
    node.next = excise.next;
    if (node.next && !node.next.next) {
      this.tail = node.next;
    }
    this.length--;
    return excise.value;
  }

  _testIndex(search, __, i) {
    return search === i;
  }

  _test(a, b) {
    return a === b;
  }
}

let myList = new LinkedList();
myList.push("one");
myList.push("two");
myList.push("three");
myList.push("four");
myList.push("five");
myList.push("six");
myList.push("seven");
myList.push("eight");


//iteratively
function reverseLinkedList(linkedList) {
  let prev = null;
  let current = linkedList.head;

  while (current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  linkedList.head = prev;

  return linkedList;
}

//recursively

function reverseLinkedListRec(current) {
  if (current === null) {
    console.log("Am i useful?");
    return;
  }
  if (current.next === null) {
    myList.head = current;
    return;
  }
  reverseLinkedListRec(current.next);
  current.next.next = current;
  current.next = null;
}

reverseLinkedListRec(myList.head);
myList.delete(0);
myList.delete(0);
myList.delete(0);

for (let i = 0; i < myList.length; i++) {
  console.log(myList.get(i));
}
