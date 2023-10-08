class Solution {
    int mode = 0;
    String ret = "";
    
    public String solution(String code) {
      for(int i = 0; i<code.length(); i++) {
          char cur = code.charAt(i);
          switch(mode) {
              case 0: 
                  if(cur=='1') {
                      switchMode();
                      break;
                  }
                  if(i % 2== 0) {
                    ret += cur;   
                  }
                  break;
              case 1:
                  if(cur == '1') {
                      switchMode();
                      break;
                  }
                  if(i % 2 != 0) {
                     ret += cur;
                  }
                  break;
          }          
      }
        
      return ret.length() == 0 ? "EMPTY" : ret;
    }
    
    private void switchMode(){
        mode = mode == 1 ? 0 : 1;
    }
}