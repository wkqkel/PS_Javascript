#include <bits/stdc++.h>
using namespace std;

struct Stack {
  int dat[10005];
  int pos = 0;

  void push(int val) {
    dat[pos++] = val;
  }

  void pop(){
    pos--;
  }

  int top(){
    return dat[pos - 1];
  }

  bool empty() {
    return pos == 0;
  }

  int size(){
    return pos;
  }
};

int main(){
  ios::sync_with_stdio(false);
  cin.tie(NULL);

  int n;
  cin >> n;

  Stack S;

  while(n--){
    string op;
    cin >> op;
    if(op == "push"){
      int x;
      cin >> x;
      S.push(x);
    }
    else if(op == "pop"){
      if(S.empty()) {
        cout << "-1" << '\n';
      } else {
        cout << S.top() << '\n';
        S.pop();
      }
    }
    else if(op == "size"){
      cout << S.size() << '\n';
    }
    else if(op == "empty"){
      cout << +S.empty() << '\n';
    }
    else { // top
      if(S.empty()) {
        cout << "-1" << '\n';
      } else {
        cout << S.top() << '\n';
      }
    }
  }
}