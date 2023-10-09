import java.util.ArrayList;

class Solution {
    public int[] solution(int l, int r) {
        ArrayList<Integer> arrayList = new ArrayList<>();
        for(int i = l; i<=r; i++){
            String str = String.valueOf(i).replaceAll("0","").replaceAll("5","");
            if(str.length() == 0) {
                arrayList.add(i);
            }
        }
        if(arrayList.size() == 0) {
            arrayList.add(-1);
        }
        
        return arrayList.stream().mapToInt(Integer::intValue).toArray();
    }
}