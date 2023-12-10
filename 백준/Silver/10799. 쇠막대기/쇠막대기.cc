#include <bits/stdc++.h>
using namespace std;

int main(void) {
  ios::sync_with_stdio(0);
  cin.tie(NULL);

  string a;
  cin >> a;

  stack<char> s;
  int cnt = 0;

  for(int i =0; i<a.size(); i++){
    if(a[i] == '('){
      s.push(a[i]);
    }
    else if(a[i] == ')'){
      s.pop();
      if(a[i-1] =='(') cnt += s.size();
      else cnt++;
    } 
  }

  cout << cnt;
}
