function solution(s){
  // 1.filter
  // const getFiltered = (alphabet) => [...s.toLowerCase()].filter(v => v===alphabet)
  // return  getFiltered('p').length === getFiltered('y').length
    
 // 2.split
 // return s.toLowerCase().split('p').length === s.toLowerCase().split('y').length;
    
 // 3.regex 
 // match는 정규식을 만족하는 것, 일치하는 것이 없으면 null 반환 
 // ig는 대소문자 구분 X
 return s.match(/p/ig)?.length === s.match(/y/ig)?.length
}