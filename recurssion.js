/**
 * @param {number} n
 * @return {string[][]}
 */
let res = [];
let ld = [];
let rd = [];
let upd = [];

function placeNQueens(board, row, ld, rd, upd) {
  let n = board.length;
  // base case:
  if (row >= board.length) {
    const newBoard = [];

    for (let row = 0; row < board.length; row++) {
      let str = "";
      for (let col = 0; col < board.length; col++) {
        str += board[row][col];
      }
      newBoard.push(str);
    }

    res.push(newBoard);

    return false; // VVV IMP
  }

  // we check
  for (let col = 0; col < board.length; col++) {
    if (ld[n - 1 + row - col] == 0 && rd[row + col] == 0 && upd[col] == 0) {
      // placing the queen.
      board[row][col] = "Q";
      rd[row + col] = ld[n - 1 + row - col] = 1;
      rd[row + col] = 1;
      upd[col] = 1;

      if (placeNQueens(board, row + 1, ld, rd, upd)) {
        return true;
      }
      // bactracking work: removing the queen placed in line: 16.
      board[row][col] = ".";
      ld[n - 1 + row - col] = rd[row + col] = upd[col] = 0;
    }
  }

  return false;
}
var solveNQueens = function (n) {
  const board = new Array(n);
  rd = ld = new Array(2 * n - 1).fill(0);
  // rd = new Array(2 * n - 1).fill(0);
  upd = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    board[i] = new Array(n).fill(".");
  }
  // console.log(board);
  placeNQueens(board, 0, ld, rd, upd);
  console.log(res);
  return res;
};

solveNQueens(4);
