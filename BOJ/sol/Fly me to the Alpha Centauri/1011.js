// 1011 Fly me to the Alpha Centauri
// https://www.acmicpc.net/problem/1011

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [[T], ...tcs] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

for (let i = 0; i < T; i++) {
  let curSpeed = 0;
  const [start, end] = tcs[i];
  let remainDist = start - end;
  while (remainDist !== 0) {
    if (remainDist === start - end) {
      curSpeed = 1;
    }
    if (remainDist) {
    }
  }
}
