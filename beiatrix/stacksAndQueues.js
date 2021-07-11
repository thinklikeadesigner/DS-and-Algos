function print(x){console.log(`x is ${x}`)}


////// stacks last in first out lifo
// const stack = []

// push
// stack.push('dog')
// stack.push('cat')
// stack.push('fish')
//  print(stack)

//  stack.pop()

//  print(stack)
// pop

// peak
// print(stack[stack.length-1])



class Stack{
    constructor(){
        this.storage = {}
        this.size = 0
    }

push(element){
    this.size++
this.storage[this.size] = element
}

pop(){
let removed = this.storage[this.size]
delete this.storage[this.size]
this.size--
return removed


}

peek() {
    return this.storage[this.size]
}


}


const stack = new Stack();

stack.push('dog')
stack.push('cat')
stack.push('fish')
//  print(stack)

 stack.pop()

//  print(stack)

//  print(stack.peek())



// queues first in first out fifo
// enqueu adding to end
// dequeue removing from front


// const queue = []

// enqueue
// Array.prototype.push()

// dequeue
// Array.prototype.shift()

// queue.push('seahorse')
// queue.push('dolphin')
// queue.push('whaleshark')
// print(queue)
// queue.shift()
// print(queue)
// queue.shift()
// print(queue)
// queue.push('dolphin')
// print(queue)
// queue.push('seahorse')
// print(queue)
// queue.shift()
// print(queue)





// QUEUE
class Queue {
    constructor(){
        this.storage = {}
        this.head = 0
        this.tail = 0
    }

enqueue(element){
    this.storage[this.tail] = element;
    this.tail++
}

dequeue(){
    let removed = this.storage[this.head]
    delete this.storage[this.head]
    this.head++
    return removed 
}


}

const queue = new Queue()

queue.enqueue('sheila')
print(queue)
queue.enqueue('iago')
print(queue)
queue.enqueue('tati')
print(queue)
queue.dequeue()
print(queue)
queue.dequeue()
print(queue)
