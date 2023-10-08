class Solution {
    int mode = 0;
    String ret = "";
    
    public String solution(String code) {
      for(int i = 0; i<code.length(); i++) {
          char cur = code.charAt(i);
          if(cur=='1') {
            switchMode();
            continue;
          }
          if(i % 2 == mode) {
             ret += cur;  
          }          
      }
        
      return ret.length() == 0 ? "EMPTY" : ret;
    }
    
    private void switchMode(){
        mode = mode == 1 ? 0 : 1;
    }
}