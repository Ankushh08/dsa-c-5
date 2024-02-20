var nextGreaterElements = function (nums) {
  const stack = [];

  const n = nums.length;
  const res = new Array(n).fill(-1);

  for (let i = 0; i < nums.length; i++) {
    if (stack.length == 0) {
      stack.push(i);
    } else {
      while (stack.length && nums[i] > nums[stack.at(-1)]) {
        const ti = stack.pop();
        res[ti] = nums[i];
      }
      stack.push(i);
    }
  }

  // elements in my stack: they dont have NGE towards right.
  // handle circular case

  for (let i = 0; i < n; i++) {
    while (stack.length && nums[i] > nums[stack.at(-1)]) {
      const ti = stack.pop();
      res[ti] = nums[i];
    }
  }

  return res;
};
