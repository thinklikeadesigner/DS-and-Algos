function charCounter(str) {
    var obj = {};
    for (var char of str) {
      if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
          obj[char] = obj[char]++ ||1;
      }
    }
    return obj;
  }
   
  function isAlphaNumeric(str) {
      var code;
    
      for (let i = 0; i < str.length; i++) {
      code = str.charCodeAt(i);
          if (!(code > 47 && code < 58)&& // numeric 0-9
  !(code > 64 && code < 91)&& // upper alpha A-Z
  !(code > 96 && code < 123)) { // lower alpha a-z
          return false;
      }
  }
  return true
    }

  // 55% faster than regex