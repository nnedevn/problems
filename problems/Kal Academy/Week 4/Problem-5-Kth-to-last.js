//Implement an algorithm to find the kth to the last element of a singly linked list
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

//---------

function kthToLast(linkedList, k) {
  crawlerOne = linkedList.head;
  crawlerTwo = linkedList.head;
// console.log('clawlerOne', crawlerOne);
  for (let i = 0; i <= k; i++){
    if (crawlerTwo === null ){
      break;
    }
    crawlerTwo = crawlerTwo.next;
  }

  while (crawlerTwo !== null){
    console.log(crawlerTwo);
    crawlerOne = crawlerOne.next;
    crawlerTwo = crawlerTwo.next;
  }
  console.log('clawlerOne', crawlerOne);

  return crawlerOne;
}
// console.log(myList.get(10))
console.log("RESULT:", kthToLast(myList, 0));
