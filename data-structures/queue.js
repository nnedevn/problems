//Version 1
function createQueue() {
  const queue = [];
  return {
    enqueue(item) {
      queue.unshift(item);
    },
    dequeue() {
      return queue.pop();
    },
    peek() {
      return queue[queue.length - 1];
    },
    get length() {
      return queue.length;
    },
    isEmpty() {
      return queue.length === 0;
    }
  }
}

// Version 2
class Queue {
  constructor() {
    this.queue = [];
  }
  enqueue(item) {
    this.queue.unshift(item);
  }
  dequeue() {
    return this.queue.pop();
  }
  peek() {
    return this.queue[this.queue.length - 1];
  }
  isEmpty() {
    return this.queue.length === 0;
  }
  get length() {
    return this.queue.length;
  }
}

module.exports = {
  createQueue,
  Queue
}


// TEST 1
// let q = createQueue();
// TEST 2
// let q = new Queue;

//-------
// console.log(q.isEmpty());
// q.enqueue('This is something.');  
// q.enqueue('This is somethig else.')
// console.log(q.isEmpty());
// console.log(q.length);
// console.log(q.dequeue());
// console.log(q.length);
// console.log(q.peek());
