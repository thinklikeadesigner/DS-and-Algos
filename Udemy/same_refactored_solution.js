// frequency counter technique

function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false
        }
    }
    return true
}

same([1, 2, 3, 2, 5], [9, 1, 4, 4, 11])



// my answer (stop using print! it will mess up the code tests)
function validAnagram(arr1, arr2) {
    // add whatever parameters you deem necessary - good luck!
    if (arr1.length !== arr2.length) return false
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    for (let char of arr1) {
        if (!frequencyCounter1[char]) {
            frequencyCounter1[char] = 1
        } else {
            frequencyCounter1[char] += 1

        }
    }
    for (let char of arr2) {
        frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1
    }

    console.log(frequencyCounter1)
    console.log(frequencyCounter2)
    for (let key in frequencyCounter1) {
        if (!(frequencyCounter2.hasOwnProperty(key))) {
            return false
        }
        if (frequencyCounter2[key] !== frequencyCounter1[key]) {
            return false
        }
    }
    return true

}

// answer

function validAnagram(first, second) {
    if (first.length !== second.length) {
      return false;
    }
  
    const lookup = {};
  
    for (let i = 0; i < first.length; i++) {
      let letter = first[i];
      // if letter exists, increment, otherwise set to 1
      lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    console.log(lookup)
  
    for (let i = 0; i < second.length; i++) {
      let letter = second[i];
      // can't find letter or letter is zero then it's not an anagram
      // zero is falsy so returns false
      if (!lookup[letter]) {
        return false;
      } else {
        lookup[letter] -= 1;
      }
    }
  
    return true;
  }
  
  
  // {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
  validAnagram('anagrams', 'nagaramm')

console.log(validAnagram("anagram", 'nagaram'))
console.log(validAnagram("racecar", 'carrace'))
console.log(validAnagram("football", 'lobfoot'))
