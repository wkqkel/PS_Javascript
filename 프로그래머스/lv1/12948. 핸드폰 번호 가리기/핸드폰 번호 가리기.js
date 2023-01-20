function solution(phone_number) {
   return [...phone_number].map((v,i,{length})=> i>=length-4 ? v : '*').join("")
}