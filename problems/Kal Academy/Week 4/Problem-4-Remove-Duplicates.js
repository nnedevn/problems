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
myList.push("ten");
myList.push("three");
myList.push("one");
myList.push("two");
myList.push("two");
myList.push("two");
myList.push("two");
myList.push("two");
myList.push("two");
myList.push("two");


// with additional data-structure
function removeDuplicates(node) {
  if (node === null){
    return;
  }

  nodes = new Set;
  prev = null;

  while (node !== null){ 
    if (nodes.has(node.value)){
      prev.next = node.next;
    } else {

      nodes.add(node.value);
      prev = node;
    }
    node = node.next;
  }
}

// without any additional data-structures
function deDup(node){
  while (node !== null){
    let current = node;
    while (current.next !== null){
        console.log('in')
      if (current.next.value === node.value){
        current.next = current.next.next
      } else {
        current = current.next;
      }
    }
    node = node.next;
  }
}


deDup(myList.head);

for (i = 0; i < myList.length; i++) {
  console.log(myList.get(i));
}

