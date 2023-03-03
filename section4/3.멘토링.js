function solution(arr) {
  function isFirstMentor(mentor, mentee, tests) {
    for (const test of tests) {
      let mentorIdx, menteeIdx;
      for (let j = 0; j < test.length; j++) {
        if (test[j] === mentor) {
          mentorIdx = j;
        }
        if (test[j] === mentee) {
          menteeIdx = j;
        }
      }
      if (mentorIdx >= menteeIdx) {
        return false;
      }
    }
    return true;
  }
  const ans = [];
  for (let mentor = 1; mentor <= 4; mentor++) {
    for (let mentee = 1; mentee <= 4; mentee++) {
      if (isFirstMentor(mentor, mentee, arr)) ans.push([mentor, mentee]);
    }
  }
  return ans.length
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));
