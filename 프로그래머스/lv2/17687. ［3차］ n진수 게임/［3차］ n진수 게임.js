function solution(n, t, m, p) {
const numbers = Array(1000000).fill(0).map((n, idx) => idx)

  const numberedNumbers = numbers.reduce((p,c) => p + `${c.toString(n)}`)



  let answers = []
  for (let i=0; i<t; i++) {
    answers.push(numberedNumbers[p+(i*m)-1])
  }

  // console.log(answers.join('').toUpperCase())
  return answers.join('').toUpperCase()
}
    
