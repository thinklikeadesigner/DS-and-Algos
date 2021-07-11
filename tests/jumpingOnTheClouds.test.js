// jest --watch --collect-coverage                                        10:45:19 PM

const jumpingOnClouds = require('../hackerrank/jumpingOnTheClouds');




test("1 valley", () => {
    expect(jumpingOnClouds([0,1,0,0,0,1,0])).toBe(3);
  });
test("1 valley", () => {
    expect(jumpingOnClouds([0,0,1,0,0,1,0])).toBe(4);
  });
