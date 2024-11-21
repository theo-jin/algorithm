// 17298 오큰수
// https://www.acmicpc.net/problem/17298

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [[N], [...data]] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

const answer = Array.from({ length: N }).fill(-1);
const stack = [];

for (let i = 0; i < N; i++) {
  while (true) {
    if (stack.length && data[stack[stack.length - 1]] < data[i]) {
      answer[stack.pop()] = data[i];
      continue;
    }
    break;
  }
  stack.push(i);
}

console.log(answer.join(' '));
