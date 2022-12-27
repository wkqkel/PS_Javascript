function solution(spell, dic) {


  for (let i= 0; i< dic.length; i++){
      const obj = {}
      spell.map(spell => obj[spell] = (obj[spell]|0) + 1)
      for (let j=0; j< dic[i].length; j++){
          const spell = dic[i][j]
          if(obj[spell]) obj[spell] -= 1;
          
      }
      if(Object.values(obj).reduce((acc,cur)=> acc+ +cur,0)===0) return 1
  }
  return 2
}