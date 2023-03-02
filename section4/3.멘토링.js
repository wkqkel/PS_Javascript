// for문을 이용한 블루투포스(완전탐색) 대표문제
// 모든 경우를 확인

// [mentor, mentee]가 될 수 있는 경우의 수
// 1,2,3,4   1,2,3,4 해서 16가지
// 멘토,멘티 짝이 될 수 있는 조건, 모든 시험에서 멘토가 멘티보다 앞서야함.
// 각 테스트횟수마다 멘토와 멘티가 몇번째에있는지 확인해야함.

// i,j가 결정되면 거기서 테스트 돌면서 체크해야함.

function solution(tests) {
  function IsFirstMentor(mentor, mentee) {
    for (let test of tests) {
      if (test.indexOf(mentor) >= test.indexOf(mentee)) return false;
    }
    return true;
  }

  let ans = [];
  for (let mentor = 1; mentor <= 4; mentor++) {
    for (let mentee = 1; mentee <= 4; mentee++) {
      if (IsFirstMentor(mentor, mentee)) {
        ans.push([mentor, mentee]);
      }
    }
  }
  return ans.length;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));

// function solution(tests) {
//   function IsFirstMentor(mentor, mentee) {
//     for (let test of tests) {
//       let mentorIdx, menteeIdx;
//       for (let i = 0; i < test.length; i++) {
//         if (test[i] === mentor) mentorIdx = i;
//         if (test[i] === mentee) menteeIdx = i;
//       }
//       if (mentorIdx >= menteeIdx) return false;
//     }
//     return true;
//   }

//   const students_length = tests[0].length;
//   let ans = [];
//   for (let mentor = 1; mentor <= students_length; mentor++) {
//     for (let mentee = 1; mentee <= students_length; mentee++) {
//       if (IsFirstMentor(mentor, mentee)) {
//         ans.push([mentor, mentee]);
//       }
//     }
//   }
//   return ans;
// }

// let arr = [
//   [3, 4, 1, 2],
//   [4, 3, 2, 1],
//   [3, 1, 4, 2],
// ];
// console.log(solution(arr));
