function print(x){console.log(x)}

var longestPalindrome = function(str) {
    var letters = [];

    //create hashmap

    for (let i = 0; i < str.length; i++) {
        const currLetter = str[i];
// check if hashmap has the current letter
        if (letters[currLetter]) {
            //adds 1 to value
            letters[currLetter]++
        } else {
            //adds current letter with a value of one to hashmap
            letters[currLetter] = 1
        }


        
    }

var totalPairs = 0;
var hasOdd = false;

// scans the hashmap for pairs

for (var j in letters) {
    // checks the current value of hashmap letters
    var currVal = letters[j]


    //sets pairs to the current value of hashmap / 2
    var pairs = Math.floor(currVal / 2);

    // if the hasOdd flag has not already been set, checks for odd and sets hasOdd to true
        if (!hasOdd && currVal - pairs *2 >= 1) {
            hasOdd = true;
        }
// adds num of pairs of curr value to total pairs
        totalPairs += pairs;
    }

    print(letters)

    // multiplies the amt of pairs by 2 to get total letters, and adds one if there is at least one odd num of values
return totalPairs * 2 + (hasOdd ? 1 : 0)





}


print(longestPalindrome('wiaeufhjqniwuaekjsfldh'))