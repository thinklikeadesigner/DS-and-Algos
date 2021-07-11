/*
 * Complete the 'jumpingOnClouds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY c as parameter.
 */

function jumpingOnClouds(c) {
    // Write your code here
console.log(c)

let curr = 0;
let score = 0;
for (let i = 0; i < c.length; i++) {
    if(c[i+2] === 0){
        
        console.log(i + 2)
        i += 1
        curr += 2
        score += 1
    }
    else
    {
    
     
        if(c[i+1] === 0){
            console.log(i + 2)
            console.log(`middle ${i} ci ${c[i]}`)
        
            curr += 1
            score += 1
        }
        else
        {
            console.log(`else ${i}  ci ${c[i]}`)
         
        }
    }
}
console.log(score)
return score
}

jumpingOnClouds([0,1,0,0,0,1,0])
jumpingOnClouds([0,0,1,0,0,1,0])


module.exports = jumpingOnClouds


// Complete the insertNodeAtTail function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function insertNodeAtTail(head, data) {


}