import java.util.ArrayList;

class Solution {
    public int limit = 1000000;
    
    public int[] solution(int[] arr, int[][] queries) {
        ArrayList<Integer> answer = new ArrayList<>();
        
        for(int[] query: queries){
            int s = query[0];
            int e = query[1];
            int k = query[2];
      
            int min = limit;
            for(int i = 0; i < arr.length; i++) {
                int cur = arr[i];
                if(s<= i && i <= e && cur>k) {
                    min = Math.min(min, cur);
                }
            }
            if(min == limit) min = -1;
            
            answer.add(min);
        }
        return  answer.stream()
                .mapToInt(i -> i)
                .toArray();
    }
}