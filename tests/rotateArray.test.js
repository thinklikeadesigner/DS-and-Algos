// jest --watch --collect-coverage                                        10:45:19 PM

const rotate = require('../leetcode/rotateArray')
const rotateFast = require('../leetcode/rotateArray')

test("2 items 2 rotates back to start", () => {
    expect(rotate([1,2], 2),).toStrictEqual([1,2]);
  });
  
  test("2 items 1 rotates swaps", () => {
    expect(rotate([1,2], 1),).toStrictEqual([2, 1]);
  });
  
test("rotate 1 steps to the right: [99,-1,-100,3] rotate 2 steps to the right: [3,99,-1,-100]", () => {
  expect(rotate([-1,-100,3,99], 2),).toStrictEqual([3,99,-1,-100]);
});

test("rotate 1 steps to the right: [7,1,2,3,4,5,6] rotate 2 steps to the right: [6,7,1,2,3,4,5] rotate 3 steps to the right: [5,6,7,1,2,3,4]", () => {
  expect(rotate([1,2,3,4,5,6,7], 3)).toStrictEqual([5,6,7,1,2,3,4]
    );
});

test("rotateFast 1 steps to the right: [99,-1,-100,3] rotateFast 2 steps to the right: [3,99,-1,-100]", () => {
    expect(rotateFast([-1,-100,3,99], 2),).toStrictEqual([3,99,-1,-100]);
  });
  
  test("rotateFast 1 steps to the right: [7,1,2,3,4,5,6] rotateFast 2 steps to the right: [6,7,1,2,3,4,5] rotateFast 3 steps to the right: [5,6,7,1,2,3,4]", () => {
    expect(rotateFast([1,2,3,4,5,6,7], 3)).toStrictEqual([5,6,7,1,2,3,4]
      );
  });
