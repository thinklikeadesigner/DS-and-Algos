
// https://humanwhocodes.com/blog/2019/02/computer-science-in-javascript-doubly-linked-lists/

/* i hate writing console.log, so if you want to use this shortcut instead of console.log, you can

for example, instead of
console.log('hello')

you can do
print('hello')

*/
function print(x) {
    console.log(x);
}


class DoublyLinkedList {
    constructor(){
        this[head] = null;
        this[tail] = null;
    }

// adding data

    add(data) {
        // create the new node and place the data in it
        const newNode = new DoublyLinkedListNode(data);

        // special case: no nodes in the list yet
        if (this[head] === null) {
            this[head] = newNode;
        } else {

            //link the current tail and new tail
            thi[tail].next = newNode;
            newNode.previous = this[tail];

        }

        //reassign the tail to be the new node
        this[tail = newNode]

    }

// getting data
get(index) {
    
    // ensure `index` is a positive value
    if (index > -1) {

        // the pointer to use for traversal
        let current = this[head];

        // used to keep track of where in the list you are
        let i = 0;

        // traverse the list until you reach either the end or the index
        while ((current !== null) && (i < index)) {
            current = current.next;
            i++;          
        }
    
        // return the data if `current` isn't null
        return current !== null ? current.data : undefined;
    } else {
        return undefined;
    }
}

    // removing data from linked list
    remove(index) {
    
        // special cases: no nodes in the list or `index` is negative
        if ((this[head] === null) || (index < 0)) {
            throw new RangeError(`Index ${index} does not exist in the list.`);
        }

        // special case: removing the first node
        if (index === 0) {

            // store the data from the current head
            const data = this[head].data;

            // just replace the head with the next node in the list
            this[head] = this[head].next;

            // special case: there was only one node, so also reset `this[tail]`
            if (this[head] === null) {
                this[tail] = null;
            } else {
                this[head].previous = null;
            }

            // return the data at the previous head of the list
            return data;
        }

        // pointer use to traverse the list
        let current = this[head];

        // used to track how deep into the list you are
        let i = 0;

        // same loop as in `get()`
        while ((current !== null) && (i < index)) {

            // traverse to the next node
            current = current.next;

            // increment the count
            i++;
        }

        // if node was found, remove it
        if (current !== null) {

            // skip over the node to remove
            current.previous.next = current.next;

            // special case: this is the last node so reset `this[tail]`.
            if (this[tail] === current) {
                this[tail] = current.previous;
            } else {
                current.next.previous = current.previous;
            }

            // return the value that was just removed from the list
            return current.data;
        }

        // if node wasn't found, throw an error
        throw new RangeError(`Index ${index} does not exist in the list.`);
    }

    // creating a reverse iterator
      // other methods hidden for clarity

      *reverse(){

        // start by looking at the tail
        let current = this[tail];

        // follow the previous links to the head
        while (current !== null) {
            yield current.data;
            current = current.previous;
        }
    }

}




class DoublyLinkedListNode {
    constructor(data){
        this.data = data;
        this.next = null;
        this.previous = null;
    }
}

const head = new DoublyLinkedListNode(12);

const secondNode = new DoublyLinkedListNode(99);
head.next = secondNode;


secondNode.previous = head;
print(secondNode)
const thirdNode = new DoublyLinkedListNode(37);
secondNode.next = thirdNode;
thirdNode.previous = secondNode;

const tail = thirdNode;

let current = head;

while (current !== null) {
    console.log(current.data);
    current = current.next;
}


// using the class

const list = new DoublyLinkedList();
list.add("red");
list.add("orange");
list.add("yellow");
    
// get the second item in the list
console.log(list.get(1));       // "orange"

// print out all items in reverse
for (const color of list.reverse()) {
    console.log(color);
}

// remove the second item in the list    
console.log(list.remove(1));    // "orange"
    
// get the new first item in the list
console.log(list.get(1));       // "yellow"

// convert to an array
const array1 = [...list.values()];
const array2 = [...list];
const array3 = [...list.reverse()];