#include <bits/stdc++.h>
using namespace std;

struct Stack {
  int dat[100005];
  int pos = 0;

  void push(int x){
    dat[pos++] = x;
  }

  void pop(){
    pos--;
  }

  bool empty(){
    return pos == 0;
  }

  int top(){
    return dat[pos-1];
  }

  int size(){
    return pos;
  }
};


int main(void) {
  ios::sync_with_stdio(0);
  cin.tie(NULL);
  
  while(true){
    string s;
    getline(cin, s);
    if(s == ".") break;

    Stack stack;
    bool escape = false;
    for(auto c: s) {
      if(c == '(') {
        stack.push(c);
      }
      else if(c == '['){
        stack.push(c);
      }
      else if(c == ')'){
        if(stack.empty() || stack.top() != '(') {
          escape = true;
          break;
        }
        stack.pop();
      }
      else if(c == ']'){
        if(stack.empty() || stack.top() != '[') {
          escape = true;
          break;
        }
        stack.pop();
      }
    }
    if(escape) {
      cout << "no" << '\n';
      continue;
    }
    string res = "no";
    if(stack.size() == 0) res = "yes";
    cout << res << '\n';
  }
}
