// jest --watch --collect-coverage                                        10:45:19 PM

  const containsDuplicate = require('../leetcode/containsDuplicate')

  

  test("[1,2,3,1]", () => {
    expect(containsDuplicate([1,2,3,1])).toBeTruthy();
  });
  
  test("[1,2,3,4]", () => {
    expect(containsDuplicate([1,2,3,4])).toBeFalsy();
  });
  
  test("[1,1,1,3,3,4,3,2,4,2]", () => {
    expect(containsDuplicate([1,1,1,3,3,4,3,2,4,2])).toBeTruthy();
  });


  test("3,3", () => {
    expect(containsDuplicate([3,3])).toBeTruthy();
  });


  test("In this case, no transaction is done, i.e., max profit = 0.", () => {
    expect(containsDuplicate([0])).toBeFalsy();
  });