import java.util.Arrays;

class Solution {
    public String solution(String my_string, String overwrite_string, int s) {
        String answer = "";
        
        String[] arr = my_string.split("");
        int n = overwrite_string.length();
        for(int i = s; i<n+s;i++){
            arr[i] = overwrite_string.split("")[i-s];
        }
        answer = String.join("",arr);
        
        return answer;
        
 
    }
}