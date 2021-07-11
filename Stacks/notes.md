# Stacks

## singly linked lists versus doubly linked lists pros and cons


USES
recursive calls
undo mechanisms
used for Depth First Search algorithm  on graphs
used in compilers to find matching brackets


## Stack complexity analysis


- pushing <strong>O(1)<strong>

- popping <strong>O(1)<strong>

- peeking <strong>O(1)<strong>

- searching <strong>O(n)<strong>

- size <strong>O(1)<strong>


Common interview questions

- matching brackets


### more resources
[stack video explanation](https://www.youtube.com/watch?v=RBSGKlAvoiM&t=3506s)


// queueu example BFS

``` javascript
let Q be a queue
Q.enqueu(startingNode)
startingNode.visited = true

While Q is not empty

    node = Q.dequeu()

    For neighbor in neighbors(node)
        If naighbor has not been visited:
            neighbor.visited = true
            Q.enqueu(neighbor )
            ```