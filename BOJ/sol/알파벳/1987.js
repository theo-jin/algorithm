// 1987 알파벳
// https://www.acmicpc.net/problem/1987

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [RC, ...board] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');
const [R, C] = RC.split(' ');

const visited = Array.from({ length: 26 }).fill(false);
const checkedAlphabet = (x, y) => board[x][y].charCodeAt() - 65;

function dfs(x, y, count) {
  let maxCount = count;

  const dC = [1, 0, -1, 0];
  const dR = [0, -1, 0, 1];
  visited[checkedAlphabet(x, y)] = true;

  for (let i = 0; i < 4; i++) {
    const nx = x + dC[i];
    const ny = y + dR[i];

    if (
      nx >= 0 &&
      ny >= 0 &&
      nx < +R &&
      ny < +C &&
      !visited[checkedAlphabet(nx, ny)]
    ) {
      maxCount = Math.max(maxCount, dfs(nx, ny, count + 1));
    }
  }
  visited[checkedAlphabet(x, y)] = false;
  return maxCount;
}

console.log(dfs(0, 0, 1));
