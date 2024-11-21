// 11404 플로이드
// https://www.acmicpc.net/problem/11404

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [[n], [m], ...busInfo] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

const distance = Array.from({ length: n }, () =>
  Array.from({ length: n }).fill(Infinity)
);

for (let i = 0; i < m; i++) {
  const [start, end, cost] = busInfo[i];

  distance[start - 1][end - 1] = Math.min(cost, distance[start - 1][end - 1]);
}

for (let mid = 0; mid < n; mid++) {
  for (let start = 0; start < n; start++) {
    for (let end = 0; end < n; end++) {
      if (
        distance[start][mid] + distance[mid][end] < distance[start][end] &&
        start !== end
      ) {
        distance[start][end] = distance[start][mid] + distance[mid][end];
      }
    }
  }
}
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (distance[i][j] === Infinity) distance[i][j] = 0;
  }
}

console.log(distance.map((v) => v.join(' ')).join('\n'));
