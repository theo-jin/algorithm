// 14500 테트로미노
// https://www.acmicpc.net/problem/14500

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [[N, M], ...board] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

console.log(board[1][3]);

const visited = Array.from({ length: N }, () =>
  Array.from({ length: M }).fill(false)
);

function case1_1(n, m) {
  if (m + 3 < M) {
    return board[n][m] + board[n][m + 1] + board[n][m + 2] + board[n][m + 3];
  }
  return 0;
}
function case1_2(n, m) {
  if (n + 3 < N) {
    return board[n][m] + board[n + 1][m] + board[n + 2][m] + board[n + 3][m];
  }
  return 0;
}
function case2(n, m) {
  if (n + 1 < N && m + 1 < M) {
    return (
      board[n][m] + board[n][m + 1] + board[n + 1][m] + board[n + 1][m + 1]
    );
  }
  return 0;
}
function case3_1(n, m) {
  if (n + 2 < N && m + 1 < M) {
    return (
      board[n][m] + board[n + 1][m] + board[n + 2][m] + board[n + 2][m + 1]
    );
  }
  return 0;
}
function case3_2(n, m) {
  if (n + 1 < N && m + 2 < M) {
    return board[n][m] + board[n][m + 1] + board[n][m + 2] + board[n + 1][m];
  }
  return 0;
}
function case3_3(n, m) {
  if (n + 1 < N && m + 2 < M) {
    return (
      board[n][m] + board[n][m + 1] + board[n + 1][m + 1] + board[n + 2][m + 1]
    );
  }
  return 0;
}
function case3_4(n, m) {
  if (n + 1 < N && m + 2 < M) {
    board[n][m] + board[n][m + 1] + board[n][m + 2] + board[n + 2][m + 1];
  }
  return 0;
}
function case4_1(n, m) {
  if (n + 1 < N && m + 2 < M) {
    board[n][m] + board[n][m + 1] + board[n][m + 2] + board[n + 2][m + 1];
  }
  return 0;
}
function case4_2(n, m) {
  if (n + 1 < N && m + 2 < M) {
    board[n][m] + board[n][m + 1] + board[n][m + 2] + board[n + 2][m + 1];
  }
  return 0;
}
function case4_3(n, m) {
  if (n + 1 < N && m + 2 < M) {
    board[n][m] + board[n][m + 1] + board[n][m + 2] + board[n + 2][m + 1];
  }
  return 0;
}
function case4_4(n, m) {
  if (n + 1 < N && m + 2 < M) {
    board[n][m] + board[n][m + 1] + board[n][m + 2] + board[n + 2][m + 1];
  }
  return 0;
}
function case5_1(n, m) {
  if (n + 1 < N && m + 2 < M) {
    board[n][m] + board[n][m + 1] + board[n][m + 2] + board[n + 2][m + 1];
  }
  return 0;
}
function case5_2(n, m) {
  if (n + 1 < N && m + 2 < M) {
    board[n][m] + board[n][m + 1] + board[n][m + 2] + board[n + 2][m + 1];
  }
  return 0;
}
function case5_3(n, m) {
  if (n + 1 < N && m + 2 < M) {
    board[n][m] + board[n][m + 1] + board[n][m + 2] + board[n + 2][m + 1];
  }
  return 0;
}
function case5_4(n, m) {
  if (n + 1 < N && m + 2 < M) {
    board[n][m] + board[n][m + 1] + board[n][m + 2] + board[n + 2][m + 1];
  }
  return 0;
}
console.log({ visited });
function dfs() {}
