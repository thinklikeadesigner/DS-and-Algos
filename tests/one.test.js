const {one, sortFiles} = require('../amazon coding interview questions/one');

test("one", () => {
    expect(one([4,8,6,12])).toEqual(58);
  });
  

  test("sort", () => {
    expect(sortFiles([4,8,6,12])).toEqual([4,6, 8, 12]);
  });