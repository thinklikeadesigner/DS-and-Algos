class Queue {
    constructor() {
      this.collection = {};
      this.start = 0;
      this.end = 0;
    }
    print() {
      console.log(this.collection);
    }
    enqueue(val) {
      this.collection[this.end++] = val;
    }
    dequeue() {
      return this.collection[this.start++];
    }
    front() {
      return this.collection[this.start];
    }
    size() {
      return this.end - this.start;
    }
    isEmpty() {
      return this.size() === 0;
    }
  }
  