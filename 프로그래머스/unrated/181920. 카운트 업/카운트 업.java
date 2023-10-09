class Solution {
    public int[] solution(int start_num, int end_num) {
        int n = end_num-start_num + 1;
        int[] answer = new int[n];
        
        for(int i =start_num; i<=end_num;i++) {
            answer[i-start_num] = i;
        }
        
        return answer;
    }
}