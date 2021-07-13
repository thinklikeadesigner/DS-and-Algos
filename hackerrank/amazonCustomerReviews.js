// function print(x){console.log(x)}
function searchSuggestions(repository, customerQuery){







return repository + customerQuery


}

module.exports = searchSuggestions

// searchSuggestions(["mobile", "mouse", "moneypot", "monitor", "mousepad"], "mouse")


// function getKeywords() {
//     let keywords = [];
//     savedCards.forEach((card) => {
//       keywords.push(card.keyword);
//     });

  
//     const keywordsList = sortByOccurance(keywords);
//     const keywordsDisplay = keywordsList.join(', ');
//     if (keywordsList.length <= 3) {
//       return keywordsDisplay;
//     }
//     const keywordCut = keywordsList.slice(0, 2);
//     const display =
//       keywordCut.join(', ') + `, and ${keywordsList.length - 2} others`;
//     return display;
//   }



//   function sortByOccurance(arr) {
//     let frequency = {};

//     arr.forEach((value) => {
//       frequency[value] = 0;
//     });
//     var uniques = arr.filter((value) => {
//       return ++frequency[value] === 1;
//     });
//     return uniques.sort((a, b) => {
//       return frequency[b] - frequency[a];
//     });
//   }


//   function keywordNum(keywordsList){

//     if (keywordsList.length <= 3) {
//         return keywordsList;
//       }
//       else {
//       return  keywordsList.slice(0, 3);
//       }


//   }

//   function  chopWord(word, str){

//     let cutWord = word.split('').splice(0,str.length)

// return joinWord = cutWord.join('')



// }
// function filterBySize(arr, str) {



//     return  arr.filter((word) =>chopWord(word, str) === str )
// // chopWord(arr[0], 'mob') === 'mob'





// }





// print(chopWord('worfasdd', 6))


//   print(filterBySize(["mobile", "mouwse", "dpg", "mobbb"], 'mob'))
// //   print(keywordNum(["mobile", "mouse", "moneqypot"]))
// //   print(keywordNum(["mobile", "mouse", "moneypot", "monitor", "mousepad"]))
// //   print(filterBySize(["mobile", "mouse", "moneypot", "monitor", "mousepad"],'mouwse'))