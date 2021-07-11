# Priority Queues



## definition
tree based DS that satisfies the **heap invariant**

also called **heap property**, the heap invariant is satisfied if A is a parent node of B then A is ordered with respect to B for all nodes A, B in the heap

## pros or cons

## Terminology
adding elements to back of queue = enqueueing/adding/offering

removing elements from front of queueu = dequeueing/removing/polling

## Implementations
- with heaps give best time complexity(priority queue is an abstract data type so you can have multiple implementations, but using a [heap](../Heap/notes.md) is fastest




## USES

- certain implementations of djikstra's algorithm
- to dynamically fetch the 'next best' or 'next worse' element
- lossless data compression (huffman coding)
- **best first search** algorithms like A* (pronounced A Star) to continuously grab the next best option
- minimum spanning tree algorithms


## complexity analysis PQ with binary heap
 
 - binary heap construction **O(n)**
 - polling **O(log(n))**
 - peeking **O(1)**
 - adding **O(log(n))**
 - naive removing **O(n))**
 - advanced removing with help from hash table **O(log(n))**
 - naive contains **O(n)**
 - contains check with hash table **O(1)**

 - // Check out  [heapify](./BinaryHeap.java) for O(n) time! use heapify whenever possible

``` java
// heapify
 for (int i = Math.max(0, (heapSize / 2) - 1); i >= 0; i--) sink(i);
  }

  ```
  
## facts

- a special type of Queue [(check out my Queues notes!)](../Queues/notes.md)

- like a Queue except each element has a certain priority. this determines the order of removal



## Disclaimers
- Priority Queues only support comparable data(aka sortable)

- Priority Queues don't guarantee correctly sorted order, it's relative to when an item was pulled from the queue versus when another item was added. Check out the example to see what I mean


## Examples

### how prioritizing works:

given the following numbers 3, 8, 6, 5, 7, 9, 11, 14, 12, 15

You do the following operations:

poll()

add(2)

poll()

add(4)

add(1) <== was added after first items were pulled(polled)

poll()

poll()

 This will give: 3, 2, 1, 6, 7, 8, 9, 11, 12, 14, 15


 The numbers aren't in order because we added 2 after we alread polled 3 and added 1 after we already
 polled 2 and 3


### turning min PQ into max PQ

**Method one:** change the comparator

let x, y be numbers in pq
if x <= y then x comes out of pq before y, so the negation of this is x >= y then y comes out before x

**Method two:** change the sign
multiply everything by -1 before placing them in pq
then when you remove them, multiply them by -1 again

for example, with 2, 3, 5, 9, 13 multiply by -1 and insert into PQ
PQ --> -13, -9, -5, -3, -2
now just multiply by -1 again
13, 9, 5, 3, 2
ta-da! the numbers are sorted max to min

(you can do this with strings too)

## Common interview questions
### more resources
[queues video explanation](https://www.youtube.com/watch?v=RBSGKlAvoiM&t=4558s)

#
