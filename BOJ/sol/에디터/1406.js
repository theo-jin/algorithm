// 1406 에디터
// https://www.acmicpc.net/problem/1406

const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [original, N, ...datas] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

console.log({ original, N, datas });

class Node {
  constructor(data, prev = null, next = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class Editor {
  head = null;
  cursor = null;
  constructor(initialValue) {
    for (const v of initialValue) {
      this.commandP(v);
    }
  }

  commandL() {
    if (this.cursor.prev === null) {
      return;
    }
    this.cursor = this.cursor.prev;
  }

  commandD() {
    if (this.cursor.next === null) {
      return;
    }
    this.cursor = this.cursor.next;
  }

  commandB() {
    if (this.cursor === null) {
      return;
    }
    const prevNode = this.cursor.prev;
    const nextNode = this.cursor.next;
    if (prevNode) {
      prevNode.next = nextNode;
    }
    if (nextNode) {
      nextNode.prev = prevNode;
    }
    this.cursor = nextNode;
    this.head = nextNode;
  }

  commandP(data) {
    const newNode = new Node(data);
    if (this.cursor === null) {
      this.head = newNode;
      this.cursor = newNode;
      return;
    }

    const nextNode = this.cursor.next;
    if (nextNode !== null) {
      nextNode.prev = newNode;
    }
    this.cursor.next = newNode;
    newNode.prev = this.cursor;
    newNode.next = nextNode;
    this.cursor = newNode;
  }
  show() {
    let curNode = this.head;
    let curData = '';
    while (curNode !== null) {
      curData += curNode.data;
      curNode = curNode.next;
    }
    return curData;
  }
}

const editor = new Editor(original);

for (let i = 0; i < +N; i++) {
  const [command, value] = datas[i].split(' ');
  console.log({ command, value });
  switch (command) {
    case 'L':
      editor.commandL();
      break;
    case 'D':
      editor.commandD();
      break;
    case 'B':
      editor.commandB();
      break;
    case 'P':
      editor.commandP(value);
      break;
  }
  console.log(editor.show());
}
// console.log(editor.show());
