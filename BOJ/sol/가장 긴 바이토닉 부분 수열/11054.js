// 11054 가장 긴 바이토닉 부분 수열
// https://www.acmicpc.net/problem/11054

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [[N], arr] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

console.log({ N, arr });

const upDp = [];
const downDp = [];
 
