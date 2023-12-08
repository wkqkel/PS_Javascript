#include <bits/stdc++.h>
using namespace std;

int main(){
  ios::sync_with_stdio(false);
  cin.tie(NULL);

  stack<int> S;

  int n;
  cin >> n;
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