function solution(s){
  const getFiltered = (alphabet) => [...s.toLowerCase()].filter(v => v===alphabet)
  return  getFiltered('p').length === getFiltered('y').length
}