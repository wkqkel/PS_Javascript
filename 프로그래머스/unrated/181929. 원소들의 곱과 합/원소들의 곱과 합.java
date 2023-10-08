import java.util.Arrays;

class Solution {
    public int solution(int[] num_list) {
       int sum = 0;
       int mul = 1;
       for(int num: num_list){
           sum += num;
           mul *= num;
       }
       return mul < Math.pow(sum, 2) ? 1 : 0;
    }
//     public int solution(int[] num_list) {
//         int sum = Arrays
//                         .stream(num_list)
//                         .sum();
//         System.out.println(sum);
//         int multiplySum = Arrays
//                         .stream(num_list)
//                         .reduce(1, (acc,cur)-> acc *cur);
        
//         return multiplySum < Math.pow(sum, 2) ? 1 : 0;
//     }
}