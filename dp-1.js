// // MEMOIZATION | TOP DOWN APPROACH
// const fib = (n, dp) => {
//   if (n <= 1) {
//     dp[n] = n;
//     return n;
//   }

//   //   console.log(n, dp)
//   if (dp[n] != -1) return dp[n];

//   dp[n] = fib(n - 1, dp) + fib(n - 2, dp);
//   return dp[n];
// };
// // TABULATION | ITERATION | BOTTOM UP APPROACH
// const fibIteration = (n) => {
//   const dp = new Array(n + 1);
//   // base case:
//   dp[0] = 0;
//   dp[1] = 1;

//   for (let i = 2; i <= n; i++) {
//     dp[i] = dp[i - 1] + dp[i - 2];
//   }
//   // n - 1 || n || dp[i] => ith fib number
//   console.log(dp);
//   return dp[n];
// };

// // dp[i] = ith fib number
// // [0,1,2,3,4,5] dp[5]
// const dp = new Array(6).fill(-1);
// fib(5, dp);
// console.log(fibIteration(5, dp));
// console.log(dp);

const helper = (text1, text2, t1, t2, dp) => {
  if (t1 >= text1.length || t2 >= text2.length) {
    dp[t1][t2] = 0;
    return 0;
  }

  if (text1[t1] == text2[t2]) {
    dp[t1][t2] = 1 + helper(text1, text2, t1 + 1, t2 + 1, dp);
    return dp[t1][t2];
  }

  const sp1 = helper(text1, text2, t1 + 1, t2, dp);
  const sp2 = helper(text1, text2, t1, t2 + 1, dp);
  const curAnswer = Math.max(sp1, sp2);
  dp[t1][t2] = curAnswer; // cached answer
  return curAnswer;
};

var longestCommonSubsequence = function (text1, text2) {
  const n = text1.length;
  const m = text2.length;
  const dp = new Array(n + 1);
  for (let i = 0; i <= n; i++) {
    dp[i] = new Array(m + 1).fill(-1);
  }
  //   dp[1][2] => text1[0], text2[1]
  //   dp[i][j] ... 0..i,0...j
  // n x m

  //   for (let t1 = 1; t1 <= n; t1++) {
  //     for (let t2 = 1; t2 <= m; t2++) {
  //       if (text1[t1 - 1] == text2[t2 - 1]) {
  //         dp[t1][t2] = 1 + dp[t1 - 1][t2 - 1];
  //       } else {
  //         dp[t1][t2] = Math.max(dp[t1 - 1][t2], dp[t1][t2 - 1]);
  //       }
  //     }
  //   }

  //   for (let t1 = 0; t1 < n; t1++) {
  //     for (let t2 = 0; t2 < m; t2++) {
  //       if (text1[t1] == text2[t2]) {
  //         if (t1 == 0 || t2 == 0) {
  //           dp[t1][t2] = 1;
  //           continue;
  //         }
  //         dp[t1][t2] = 1 + dp[t1 - 1][t2 - 1];
  //       } else {
  //         if (t1 == 0 && t2 > 0) {
  //           dp[t1][t2] = dp[t1][t2 - 1];
  //         } else if (t2 == 0 && t1 > 0) {
  //           dp[t1][t2] = dp[t1 - 1][t2];
  //         } else if (t1 == 0 && t2 == 0) {
  //           dp[t1][t2] = 0;
  //         } else dp[t1][t2] = Math.max(dp[t1 - 1][t2], dp[t1][t2 - 1]);
  //       }
  //     }
  //   }

  //   console.log(dp);
  helper(text1, text2, 0, 0, dp);
  // for ()
  console.log(dp);
  return dp[0][0];
};

console.log(longestCommonSubsequence("abcde", "hhhhh"));
