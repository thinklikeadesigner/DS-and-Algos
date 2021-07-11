/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps, path) {
path = path.toLowerCase();
    let currLvl = 0;
let val = 0;
for (let i = 0; i < steps; i++) {
    
    if (path[i] === 'u' ){ currLvl++}
    if (path[i] === 'd' ){currLvl--}

    if(currLvl === 0 && path[i] === 'u'){
        val++
    }

}

return val
}



module.exports = countingValleys

countingValleys(8, 'uddduduu');