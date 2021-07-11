// jest --watch --collect-coverage                                        10:45:19 PM

const repeatedString = require('../hackerrank/repeatedString');




test("should have 7 a's", () => {
    expect(repeatedString('aba', 10)).toBe(7);
  });
// test("1 valley", () => {
//     expect(repeatedString([0,0,1,0,0,1,0])).toBe(4);
//   });
