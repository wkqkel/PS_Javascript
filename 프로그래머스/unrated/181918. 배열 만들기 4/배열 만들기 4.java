import java.util.*;

class Solution {
    public Stack<Integer> solution(int[] arr) {
        Stack<Integer> stack = new Stack<>();
        int i = 0;
        
        while(i < arr.length) {
            if(stack.isEmpty() || stack.peek() < arr[i]) {
                stack.push(arr[i]);
                i++;
            }else if(stack.peek() >= arr[i]) {
                stack.pop();
            }
        }
        
        return stack;
    }
    

//     public int[] solution(int[] arr) {
//         ArrayList<Integer> stk = new ArrayList<>();
//         int i = 0;
        
//         while(i < arr.length) {
//             i = perform(i, stk, arr);
//         }
        
//         return toArray(stk);
//     }
    
//     private int perform(int i, ArrayList<Integer> stk, int[] arr) {
//         if(stk.size() == 0 || (stk.size() > 0 && stk.get(stk.size() - 1) < arr[i])){
//             stk.add(arr[i]);
//             return i + 1;
//         }
//         if(stk.size() > 0  && stk.get(stk.size() - 1) >= arr[i]){
//             stk.remove(stk.size() -1);
//         }
//         return i;
//     }
    
//     private int[] toArray(ArrayList<Integer> arrayList){
//         return arrayList.stream().mapToInt(Integer::intValue).toArray();
//     }
}