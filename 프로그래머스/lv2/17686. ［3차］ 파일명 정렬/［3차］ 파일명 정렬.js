 function splitStringByNumber(str) {
  const regex = /^(\D+)?(\d+)?(.*)$/;
  const matches = str.match(regex);
  const head = matches[1]?.toLowerCase() || '';
  const number = +matches[2] || '';
  const tail = matches[3] || '';
  return [ head, number, tail ];
}
function solution(files) {
   return files.sort((a,b)=> {
       const [aHead, aNumber, aTail] = splitStringByNumber(a);
       const [bHead, bNumber, bTail] = splitStringByNumber(b);
       
       if(aHead !== bHead) {
        return aHead > bHead ? 1 : -1;
       }
       
       if(aNumber !== bNumber) {
         return aNumber > bNumber ? 1 : -1;
       }
     
       return 0;
   })
}