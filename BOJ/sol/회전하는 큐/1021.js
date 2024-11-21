// 1021 회전하는 큐
// https://www.acmicpc.net/problem/1021

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [[N, M], [...arr]] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

const queue = [];
let count = 0;
for (let i = 1; i <= N; i++) queue.push(i);

for (let i = 0; i < M; i++) {
  const targetNumber = arr[i];

  if (queue[0] === targetNumber) {
    queue.shift();
    continue;
  }
  if (queue.indexOf(targetNumber) < queue.length / 2) {
    while (queue[0] !== targetNumber) {
      queue.push(queue.shift());
      count += 1;
    }
    queue.shift();
  } else {
    while (queue[0] !== targetNumber) {
      queue.unshift(queue.pop());
      count += 1;
    }

    queue.shift();
  }
}

console.log(count);
