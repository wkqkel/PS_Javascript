const fs = require('fs');
let [a,b] = fs.readFileSync('dev/stdin').toString().trim().split(' ').map(Number)
let flag = false;
let res = 1;
while(a<=b){
    if(a===b){
        flag =true;
        break
    }
    if (b%2==0) b = parseInt(b/2);
    else if (b % 10 == 1) b = parseInt(b / 10)
    else break;
    res++;
}
if (flag) console.log(res)
else console.log(-1)

