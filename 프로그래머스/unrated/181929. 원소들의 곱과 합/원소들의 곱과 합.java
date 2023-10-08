import java.util.Arrays;

class Solution {
    public int solution(int[] num_list) {
        int sum = Arrays
                        .stream(num_list)
                        .reduce(0, (acc,cur)-> acc+cur);
        System.out.println(sum);
        int multiplySum = Arrays
                        .stream(num_list)
                        .reduce(1, (acc,cur)-> acc *cur);
        
        return multiplySum < Math.pow(sum, 2) ? 1 : 0;
    }
}