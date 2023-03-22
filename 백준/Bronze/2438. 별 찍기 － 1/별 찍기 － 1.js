const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

solution(+input[0]);
//function solution() {
//  let sum = "";
//  for (let i = 0; i < +input[0]; i++) {
//    sum += "*";
//    console.log;
//  }
//}

function solution(N) {
  //별
  for (let line = 1; line <= N; ++line) {
    const starCnt = line;
    const spaceCnt = N - line;
    let printString = "";
    for (let i = 0; i < starCnt; i++) {
      //starCnt부분엔 돌고싶은 횟수 적어주는거임
      printString += "*"; //별갯수만큼 별을 더해주고
    }
    // for (let i = 0; i < spaceCnt; i++) {
    //   printString += " "; //공백갯수만큼 공백을 붙여줌
    // }
    console.log(printString);
  }
}