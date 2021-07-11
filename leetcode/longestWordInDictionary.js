function print(x) {
  console.log(x);
}


// LOOK OVER THIS BC IT DOESNT SEEM CORRECT, BUT I CHANGED IT SO IT WORKED

// create a tree data structure of letters

// create a hashmap of hashmap??????

// words is an array of strings
var longestWord = function (words) {
  var letters = {};
  var maxLength = 0;
  var maxWord = '';

  //construct tree

  //words.length is number of words
  // iterates through the words
  for (var i = 0; i < words.length; ++i) {
    var word = words[i];

    //sets letters hash to current
    var current = letters;

    // iterates throught the letters in each word
    for (var j = 0; j < word.length; ++j) {
      // letter
      var c = word[j];

      // if hashmap doesnt have letter
      if (!current[c]) {
        // start a hashmap from that letter
        current[c] = {};
      }
      //or add the letter to the hashmap
      current = current[c];
    }

    // this dot is a flag to say that each letter is accounted for
    current['.'] = {};
  }

  for (var i = 0; i < words.length; ++i) {
    var word = words[i];
    var current = letters;
    var canBeBuilt = true;
    for (var j = 0; j < word.length; ++j) {
      var c = word[j];
      if (current == letters || current['.']) {
        current = current[c];
      } else {
        canBeBuilt = false;
        break;
      }
      print(word + ' can ' + canBeBuilt)
      if (canBeBuilt && word.length >= maxLength) {
          var oldWord = maxWord;
          print(maxWord)
        if (maxLength < word.length || word.localeCompare(maxWord) < 0) {
          maxWord = word;
          maxLength = word.length;
          print(maxLength)
        }
        print(word + ';' + oldWord + ' ->' + maxWord)
      }
    }
  }
  print(maxWord)
  console.log(letters)
  return maxWord;

};

print(
  longestWord([
    'henasdfasdfasdnasdfasdfasdllo',
    'my',
    'nanasdfasdfasdme',
    'is',
    'rebecca',
    'onasdfasdfasd',
    'and',
    'i',
    'like',
    'cheese',
  ])
);
