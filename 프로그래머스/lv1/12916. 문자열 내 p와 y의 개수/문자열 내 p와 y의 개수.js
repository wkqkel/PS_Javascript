function solution(s){
  // const getFiltered = (alphabet) => [...s.toLowerCase()].filter(v => v===alphabet)
  // return  getFiltered('p').length === getFiltered('y').length
    
 return s.toLowerCase().split('p').length === s.toLowerCase().split('y').length;
}