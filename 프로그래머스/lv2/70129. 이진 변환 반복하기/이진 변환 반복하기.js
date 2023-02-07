function solution(s) {
   function toBinary(before, ans){
       if(before === '1') return ans;
       ans[0]++;
       return toBinary(before.replaceAll('0',()=>{ans[1]++; return ''}).length.toString(2), ans);
   }
    return toBinary(s, [0,0]);
}