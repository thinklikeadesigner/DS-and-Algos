// jest --watch --collect-coverage                                        10:45:19 PM

const checkMagazine = require('../hackerrank/ransomNote')

  

test("[1,2,3,1]", () => {
  expect(checkMagazine(['give', 'me', 'one', 'grand', 'today', 'night'],['give','dog', 'one', 'grand', 'today'])).toMatch(/(No)/i);
});

