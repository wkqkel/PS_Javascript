#include <bits/stdc++.h>
using namespace std;

#define X first
#define Y second

int main() {
  ios::sync_with_stdio(0);
  cin.tie(0);

  int n, m;

  cin >> m >> n;

  int arr[1002][1002];
  int dis[1002][1002];

  int dx[4] = {-1,1,0,0};
  int dy[4] = {0,0,1,-1};

  queue<pair<int,int>> q;

  for(int i = 0; i<n; i++) {
    for(int j =0; j<m; j++) {
      cin >> arr[i][j];
      if(arr[i][j] == 1) {
        q.push({i,j});
      } 
      if(arr[i][j] == 0) {
        dis[i][j] = -1;
      }
    }
  }

  while(!q.empty()){
    pair<int, int> cur = q.front();
    q.pop();
    for(int dir = 0; dir < 4; dir++) {
      int nx = cur.X + dx[dir];
      int ny = cur.Y + dy[dir];
      if(nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
      if(dis[nx][ny] >= 0) continue;
      dis[nx][ny] = dis[cur.X][cur.Y] + 1;
      q.push({nx,ny});
    }
  }

  int ans = 0;
  for(int i =0; i< n;i++){
    for(int j = 0; j <m; j++){
      if(dis[i][j] == -1) {
        cout << -1;
        return 0;
      }
      ans = max(ans, dis[i][j]);
    }
  }

  cout << ans;
}