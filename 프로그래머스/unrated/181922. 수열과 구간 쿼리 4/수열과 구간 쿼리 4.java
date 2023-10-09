import java.util.Arrays;

class Solution {
    public int[] solution(int[] arr, int[][] queries) {
        int[] answer = Arrays.copyOf(arr, arr.length);
        
        for(int[] query : queries) {
            int s = query[0];
            int e = query[1];
            int k = query[2];
            
            for(int i = 0; i <answer.length;i++){
                if(s<= i && i <= e && i % k == 0) {
                    answer[i] += 1;
                }
            }
        }
        
        return answer;
    }
}