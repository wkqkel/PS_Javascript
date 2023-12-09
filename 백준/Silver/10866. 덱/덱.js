const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1);

class Deque {
  MX = 1000005
  dat = Array(this.MX * 2 +1);
  head = this.MX;
  tail = this.MX;

  push_front(x) {
    this.dat[--this.head] = x;
  }

  push_back(x){
    this.dat[this.tail++] = x;
  }

  pop_front(){
    if(this.empty()) return -1;
    return this.dat[this.head++];
  }

  pop_back(){
    if(this.empty()) return -1;
    return this.dat[--this.tail];
  }

  size(){
    return this.tail - this.head;
  }

  empty(){
    return Number(this.tail - this.head == 0);
  }

  front(){
    if(this.empty()) return -1;
    return this.dat[this.head];
  }

  back(){
    if(this.empty()) return -1;
    return this.dat[this.tail -1]
  }
}

const dq = new Deque();
const ans = []
for(let each of arr){
  const [cmd, x] = each.split(' ');
  const res = dq[cmd](x);
  if(!['push_back','push_front'].includes(cmd)){
    ans.push(res);
  } 
}

console.log(ans.join('\n'))