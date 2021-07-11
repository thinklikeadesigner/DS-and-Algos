# Union Find

## pros and cons

## Terminology


## Implementations

1. construct a bijection (a mapping) between your objects and the integers in the range [0, n]

*this step is not necessary in general, but it will allow us to construct an array based union find which is very efficient and easy to work with*

2. randomly assign a mapping between the objects and the integers, they each should be mapped to exactly one number

*store in hash table for faster look up*

3. construct an array, each index has an associated object we can look up through our mapping

*the array originally contains it's own index as the value, and each spot in the array is associated to its object, I know it's confusing.*
*at the beginning each object is it's own node. but when you join two you pick one to be the parent, and then you assign the parent's index value to the child. find a picture*

### find
to find which componenet a particular element belongs to find the root of that component by following the parent nodes until a self loop is reached (a node who's parent is itself)

### unify
to unify two elements find which are the root nodes of each component and if the root nodes are different make one of the root nodes be the parent of the other


## USES




## Complexity analysis

***a(n) means amortized constant time***

- construction  <strong>O(n)<strong>

- union  <strong>a(n)<strong>

- find <strong>a(n)<strong>

- get component size <strong>a(n)<strong>

- check if connected <strong>a(n)<strong>

- count components  <strong>O(1)<strong>


## facts

- we don't ununion elements
- the number of components is equal to the number of roots remaining. 
- the number of root nodes never increases


## Common interview questions

- bread first search



### more resources
[union find video explanation](https://www.youtube.com/watch?v=RBSGKlAvoiM&t=8906s)



## Path compression is awesome because it connects all the nodes to a single root node

- find the root node
- then make the last one point to the root node
- and make everyone point to the root node in that component