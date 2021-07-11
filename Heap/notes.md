# Heap



## definition
tree based DS that satisfies the <strong>heap invariant<strong>( also called heap property): if A is a parent node of B then A is ordered with respect to B for all nodes A, B in the heap

## types of heaps

- **binary heap** is a [binary tree](../BinaryTree/notes.md) that supports the heap invariant
- fibonacci heap
- binomial heap
- pairing heap

## pros or cons

## Terminology


## Implementations
- for binary heap, using an array to represent it is very fast
    - makes it easy to access all the children and parent nodes

## USES



## complexity analysis

- Polling **O(log(n))** for binary heap
- removing **O(n)** for binary heap
    - you can remove in O(log(n)) with a [hash table](../HashTable/notes.md) (caveat: what if more than one node with same value? map one value to multiple positions with a set or tree set)



## facts
- you can have min heaps and max heaps

- can be binary, but don't have to be

- Heaps form the data structure that priority queueu is made from. 

- all heaps must be trees, aka can't be cycles 

- used in Priority Queues [(check out my Priority Queues notes!)](../PriorityQueues/notes.md)

## Examples

binary heap using array

``` javascript

let i be the parent node index(zero based index)

left child index: 2i + 1
right child index: 2i + 2

```

Adding elements to binary heap uses a bubbling up technique. the insert position is the regulary position for insertion, farthest to the bottom and left most. then you swap with each parent node until there's no more bigger parents above you

Instructions:

Insert(1)

Insert(13)

Insert(4)

Insert(0)

Insert (10)

Removing elements from binary heap using leveling down technique. opposite of bubbling up. if there's a tie, default to selecting the left node

**polling** is when you remove the node at the top of the heap. the last node at the bottom is always swapped with the top.

Instructions:

Poll()

Remove(12)

Remove(3)

Poll()

Remove(6)

To remove 12, you do a scan from top, (BFS style), until you find 12. then swap with the last node in the tree. 

When you swap to the middle of the tree, level down instead of bubbling up.



## Common interview questions



### more resources
[queues video explanation](https://www.youtube.com/watch?v=RBSGKlAvoiM&t=4558s)