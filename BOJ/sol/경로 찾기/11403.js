// 11403 경로 찾기
// https://www.acmicpc.net/problem/11403

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [[N], ...data] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

const answer = Array.from({ length: N }, () =>
  Array.from({ length: N }).fill(0)
);

for (let i = 0; i < N; i++) {
  const visited = Array.from({ length: N }).fill(false);
  for (let j = 0; j < N; j++) {
    dfs(i, j, visited);
  }
}

function dfs(start, node, visited) {
  if (data[start][node] === 1 && !visited[node]) {
    visited[node] = true;
    answer[node][start] = 1;
    dfs(start, node, visited);
  }
}

console.log(answer.map((v) => v.join(' ')).join('\n'));
