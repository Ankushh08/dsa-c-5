// let dp;
// function helper(nums, i, target) {
//   if (target === 0) {
//     dp[i][target] = true;
//     return true;
//   }
//   if (i >= nums.length) return false;

//   if (dp[i][target] != -2) {
//     return dp[i][target];
//   }

//   let include = false;
//   if (nums[i] <= target) include = helper(nums, i + 1, target - nums[i]);

//   const exclude = helper(nums, i + 1, target);
//   dp[i][target] = include | exclude;
//   return include | exclude;
// }
// var canPartition = function (nums) {
//   let tsum = 0;
//   let n = nums.length;
//   dp = new Array(n + 1);

//   for (let i = 0; i < nums.length; i++) {
//     tsum += nums[i];
//   }
//   console.log(tsum, "before");
//   if (tsum % 2 == 1) {
//     return false;
//   }

//   tsum /= 2;
//   console.log(tsum);
//   for (let i = 0; i <= n; i++) {
//     dp[i] = new Array(tsum + 1).fill(false);
//   }

//   //   return helper(nums, 0, tsum);

//   /// base case:
//   for (let i = 0; i <= n; i++) {
//     dp[i][0] = true;
//   }
//   // dp[i][j] => 0....i, j
//   for (let i = 1; i <= n; i++) {
//     for (let j = 0; j <= tsum; j++) {
//       if (j >= nums[i - 1]) {
//         dp[i][j] = dp[i - 1][j - nums[i - 1]];
//       }
//       dp[i][j] = dp[i][j] | dp[i - 1][j];
//       // (i, j)
//     }
//   }

//   return dp[n][tsum];
// };

// const a = [1, 5, 11, 5];

// canPartition(a);
// console.log(dp);

let dp = [];
const helper = (coins, amount) => {
  if (amount == 0) {
    dp[amount] = 0;
    return 0;
  }

  let minCoins = 1e8;
  if (dp[amount] != -1) return dp[amount];
  for (let i = 0; i < coins.length; i++) {
    if (coins[i] >= amount) {
      let cur = helper(coins, amount - coins[i]) + 1;
      minCoins = Math.min(minCoins, cur);
    }
  }
  dp[amount] = minCoins;
  return minCoins;
};

var coinChange = function (coins, amount) {
  dp = new Array(amount + 1).fill(-2);
  const res = helper(coins, amount);
  console.log(dp);
};
coinChange([1, 2, 5], 11);
// console.log(dp);

const d = [-1, 1, 1, 2, 2, 1, 2, 2, 3, 3, 2, 3];

console.log(d);
