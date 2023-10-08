import java.util.Arrays;

class Solution {
    public int[] solution(int[] num_list) {
        int n = num_list.length;
        int[] answer = Arrays.copyOf(num_list, n + 1);
        int val = num_list[n-1] > num_list[n-2] 
                ?  num_list[n-1] -  num_list[n-2]
                : num_list[n-1] * 2;
        answer[n] =val;
        
        return answer;
    }
}