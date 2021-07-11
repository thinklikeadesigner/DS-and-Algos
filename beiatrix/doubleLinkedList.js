const treeify = require('treeify');

function print(x){console.log(x)}

// doubly linked list

class Node {
    constructor(val, prev, next)
{
    this.val = val;
    this.next = next || null;
    this.prev = prev || null;
}}

class LinkedList {
    constructor() {
        this.head = this.tail = null
    }


// add to end of list/tail

append(val){
// if list is empty
if (!this.tail) {
    this.head = this.tail = new Node(val);
} else {
    // capture the old tail in a variable

    let oldTail = this.tail;
    this.tail = new Node(val);
    oldTail.next = this.tail;
    this.tail.prev = oldTail;


}





}

prepend(val){
// if list is empty
    if (!this.tail) {
        this.head = this.tail = new Node(val);
    } else {
        let oldHead = this.head;
        this.head = new Node(val);
        this.head.next = oldHead;
        oldHead.prev = this.head;
    }



}

deleteHead(){
    // if list is empty
    if (!this.tail) {
        return null
    } else {
// save old head so you can return the val
let removedHead = this.head;

//check if 1 node left
if ( this.head === this.tail){
    this.head = this.tail = null;
} else {
    this.head = this.head.next;
    this.head.prev = null;
}

print(removedHead.val)
return removedHead.val;
    }
}

deleteTail() {

    // if list is empty
    if (!this.tail) {
print('null')
        return null
    } else {
// save old tail so you can return val
        
let removedTail = this.tail;

// if there's only one node, deleting it gives you null
if (this.tail === this.head) {
    this.tail = this.head = null
} else {
    // or else set the new tail to node behind the old tail
this.tail = this.tail.prev
//and set the node after the new tail to null
this.tail.next = null


}
print(removedTail.val)

return removedTail.val;
    }


}




search(val){
// keep track of where we are

let currentNode = this.head;

while (currentNode) {

    // if we found our node
    if(currentNode.val === val){
        // print(currentNode.val)
        return currentNode
    }
    //if not found search next node
    currentNode = currentNode.next
}

print('null')
return null

} 


}



let list = new LinkedList()

list.append(1)
list.append(2)
list.append(3)
list.prepend(0)
list.prepend(-1)

// print(list)

list.search(1)

list.deleteHead() // -1
list.deleteTail() // 3
list.deleteHead() // -1
list.deleteTail() // 3
list.deleteTail() // 3
list.deleteTail() // 3

// print(treeify.asTree(list.search(099), true))





























