// 11052 카드 구매하기
// https://www.acmicpc.net/problem/11052

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [[N], [...prices]] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

const dp = Array.from({ length: N + 1 }).fill(0);

for (let i = 1; i < N + 1; i++) {
  for (let j = 1; j <= i; j++) {
    dp[i] = Math.max(dp[i], dp[i - j] + prices[j - 1]);
  }
}

console.log(dp[N]);
