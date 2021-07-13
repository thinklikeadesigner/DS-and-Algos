function repeatedString(s, n) {
  let strLen = s.length;
  let reqLen = n;
  let wholeStrRep = Math.floor(reqLen / strLen);
  let leftOverStr = reqLen % strLen;

  let chopLeftOver = s.split('');
  let leftOverArr = chopLeftOver.splice(0, leftOverStr);

  let wholeStrCnt = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'a') wholeStrCnt++;
  }

  let choppedStrCnt = 0;
  for (let i = 0; i < leftOverArr.length; i++) {
    if (leftOverArr[i] === 'a') choppedStrCnt++;
  }

  let unchoppedTotCnt = wholeStrRep * wholeStrCnt;
console.log('j')
  return choppedStrCnt + unchoppedTotCnt;
}

repeatedString('aba', 10);

module.exports = repeatedString;

