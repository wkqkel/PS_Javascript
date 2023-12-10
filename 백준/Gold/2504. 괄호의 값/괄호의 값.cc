#include <bits/stdc++.h>
using namespace std;

int main(void) {
  ios::sync_with_stdio(0);
  cin.tie(NULL);

  string a;
  cin >> a;

  stack<char> stack;
  int sum = 1;
  int res = 0;
  for(int i = 0; i < a.size(); i++){
    if(a[i] == '('){
      stack.push(a[i]);
      sum *= 2;
    }
    else if(a[i] == '['){
      stack.push(a[i]);
       sum *= 3;
    }
    else if(a[i] == ')'){
      if(stack.empty() || stack.top() != '('){
        cout << 0;
        return 0;
      }
      if(a[i-1] =='(') res+= sum;
      stack.pop();
      sum /= 2;
    }
    else if(a[i] == ']'){
      if(stack.empty() || stack.top() != '['){
        cout << 0;
        return 0;
      }
       if(a[i-1] =='[') res+= sum;
       stack.pop();
       sum /= 3;
    }
  }
  if(stack.empty()) cout << res;
  else cout << 0;
}
