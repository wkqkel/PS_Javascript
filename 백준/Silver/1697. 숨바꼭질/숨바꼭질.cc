#include <bits/stdc++.h>
using namespace std;
#define X first
#define Y second

int n,k;

int main(void) {
  ios::sync_with_stdio(0);
  cin.tie(0);

  int dist[1000004];
  cin >> n >> k;

  queue<int> q;

  q.push(n);
  dist[n] = 0;
  
  int min = 999999;

  while(!q.empty()){
    auto cur =q.front();
    q.pop();
    if(cur == k) {
     if(min > dist[k]) min = dist[k];
    }
    for(auto nx : {cur+1,cur-1,cur*2}){
      if(nx < 0 || nx > 1e5 || dist[nx] > 0) continue;
      dist[nx] = dist[cur] +1;
      q.push(nx);
    }
  }

  cout << min;
}