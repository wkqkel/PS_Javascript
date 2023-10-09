import java.util.ArrayList;

class Solution {
    ArrayList<Integer> arrayList = new ArrayList<>();
    
    public int[] solution(int n) {
        collaz(n);
        return arrayList.stream().mapToInt(Integer::intValue).toArray();
    }
    
    public void collaz(int x) {
        arrayList.add(x);
        if(x == 1) {
            return;
        } else {
            collaz(x % 2 == 0 ? x / 2 : 3 * x + 1);
        }
    }
}