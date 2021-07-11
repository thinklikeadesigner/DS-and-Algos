// jest --watch --collect-coverage                                        10:45:19 PM

const countingValleys = require('../hackerrank/countingValleys');




test("1 valley", () => {
    expect(countingValleys(8, 'uddduduu')).toBe(1);
  });
// test("7 socks", () => {
//     expect(countingValleys(7, [1,2,1,2,1,3,2]),).toBe(2);
//   });
  
