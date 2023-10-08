import java.util.Arrays;

class Solution {
    public int solution(int a, int d, boolean[] included) {
        int n = included.length;
        int res = 0;
        for(int i = 0; i <n; i++) {
            int val = included[i] ? a + (i * d) :0;
            res += val;
        }
        return res;
        // return Arrays.stream(included).reduce(0, (acc,cur,idx)->{
        //    int val = cur && idx >= a -1? 1 + (idx * d) :0;
        //    return acc + val;
        // });
    }
}