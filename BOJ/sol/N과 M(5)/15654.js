// 15654 N과 M (5)
// https://www.acmicpc.net/problem/15654

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [[N, M], [...arr]] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

const numbers = arr.sort((a, b) => a - b);
const visited = Array.from({ length: N }).fill(false);
const answer = [];
const temp = [];

dfs(0, numbers[0]);

function dfs(count, start) {
  if (count === M) {
    answer.push(temp.join(' '));
    return;
  }

  for (let i = 0; i < numbers.length; i++) {
    if (visited[i]) {
      continue;
    }

    visited[i] = true;
    temp.push(numbers[i]);

    dfs(count + 1, numbers[i]);

    temp.pop(numbers[i]);
    visited[i] = false;
  }
}

console.log(answer.join('\n'));
