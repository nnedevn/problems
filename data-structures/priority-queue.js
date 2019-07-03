// Version 1

const { createQueue, Queue } = require('./queue.js');

function createPriorityQueue() {
  const lowPriorityQueue = createQueue();
  const highPriorityQueue = createQueue();

  return {
    enqueue(item, isHighPriority = false) {
      isHighPriority
        ? highPriorityQueue.enqueue(item)
        : lowPriorityQueue.enqueue(item);
    },
    dequeue() {
      if (!highPriorityQueue.isEmpty()) {
        return highPriorityQueue.dequeue();
      }
      return lowPriorityQueue.dequeue();
    },
    peek() {
      if (!highPriorityQueue.isEmpty()) {
        return highPriorityQueue.peek();
      }
      return lowPriorityQueue.peek();
    },
    get length() {
      return highPriorityQueue.length + lowPriorityQueue.length;
    },
    isEmpty() {
      return highPriorityQueue.isEmpty() && 
      lowPriorityQueue.isEmpty();
    }
  }
}

class PriorityQueue {
  constructor(){
    this.highPriorityQueue = new Queue;
    this.lowPriorityQueue = new Queue;
  }
  enqueue(item, highPriority = false){
    highPriority
      ? this.highPriorityQueue.enqueue(item)
      : this.lowPriorityQueue.enqueue(item)
  }
  dequeue(){
    if (!this.highPriorityQueue.isEmpty()){
      return this.highPriorityQueue.dequeue();
    }
    return this.lowPriorityQueue.dequeue();
  }
  peek(){
    if (!this.highPriorityQueue.isEmpty()){
      return this.highPriorityQueue.peek();
    }
    return this.lowPriorityQueue.peek();
  }
  get length(){
    return this.highPriorityQueue.length + this.lowPriorityQueue.length;
  }
  isEmpty(){
    return this.highPriorityQueue.isEmpty() &&
      this.lowPriorityQueue.isEmpty();
  }
}

// TEST 1
// const pQ = createPriorityQueue();
// TEST 2
// const pQ = new PriorityQueue;

//--------
// console.log(pQ.isEmpty());
// pQ.enqueue('This is one thing I need to do');
// pQ.enqueue('This is something else that has to be done');
// pQ.enqueue('This is the last thing I need to do');
// console.log(pQ.isEmpty());
// console.log(pQ.peek());
// console.log(pQ.length);
// pQ.dequeue();
// console.log(pQ.length);
// pQ.enqueue('This is somethign unexpected that has to be done right away', true);
// console.log(pQ.peek());
// pQ.dequeue();
// console.log(pQ.peek());
