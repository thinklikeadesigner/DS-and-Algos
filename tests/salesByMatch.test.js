// jest --watch --collect-coverage                                        10:45:19 PM

const sockMerchant = require('../hackerrank/salesByMatch')




test("9 socks", () => {
    expect(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]),).toBe(3);
  });
test("7 socks", () => {
    expect(sockMerchant(7, [1,2,1,2,1,3,2]),).toBe(2);
  });
  
