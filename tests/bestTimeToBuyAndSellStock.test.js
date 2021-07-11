// jest --watch --collect-coverage                                        10:45:19 PM

const maxProfit = require('../leetcode/bestTimeToBuyAndSellStock')


test("Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4, Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.", () => {
  expect(maxProfit([7,1,5,3,6,4])).toBe(7);
});

test("Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4. Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are engaging multiple transactions at the same time. You must sell before buying again.", () => {
  expect(maxProfit([1,2,3,4,5])).toBe(4);
});

test("In this case, no transaction is done, i.e., max profit = 0.", () => {
  expect(maxProfit([7,6,4,3,1])).toBe(0);
});