const fs = require("fs");
const filePath = "dev/stdin";
// const input = fs.readFileSync(filePath).toString().trim().split(' '); // 1줄인경우
const input = fs.readFileSync(filePath).toString().trim().split("\n"); // 여러줄인경우

const N = Number(input[0]);
const arr = input[1].split(' ').map(Number).sort((a,b)=>a-b);
const M = Number(input[2]);
const query = input[3].split(' ').map(Number)


const lowerBound = (arr, target, start,end) =>{
  while(start < end){
    const mid = parseInt((start+end)/2);
    if(arr[mid]>= target) end = mid;
    else start = mid +1;
  }
  return end;
}


const upperBound = (arr, target, start,end) =>{
  while(start < end){
    const mid = parseInt((start+end)/2);
    if(arr[mid]> target) end = mid;
    else start = mid +1;
  }
  return end;
}

function countByRange(arr,leftValue,rightValue) {
  const rightIndex = upperBound(arr,rightValue,0,arr.length);
  const leftIndex = lowerBound(arr,leftValue,0,arr.length);
  return rightIndex - leftIndex;
}


const res = query.reduce((acc,cur) => acc + countByRange(arr,cur,cur) +'\n','')

console.log(res)