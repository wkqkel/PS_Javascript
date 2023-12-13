/**
1. 아이디어
- 가장자리면서 .인것들 돔.
- 불 bfs와 지훈이 dfs 거리를 구해놓음
- 가장자리에서 불dfs > 지훈이dfs면 탈출(min갱신) 
- 아니면 impossible
2. 시간복잡도
- 불bfs: N*M
- 지훈이bfs: N*M
- 가장자리 (N+M) *2
- 총 2NM + 2(N+M)
- 2 * 1e6 + 4 * 1e3 => 2004000 << 2억이하 가능
3. 자료구조

*/
#include <bits/stdc++.h>
using namespace std;

#define X first
#define Y second

int main() {
  ios::sync_with_stdio(0);
  cin.tie(0);

  int n, m;

  cin >> n >> m;

  string arr[1002];
  int dist_f[1002][1002];
  int dist_j[1002][1002];

  int dx[4] = {-1,1,0,0};
  int dy[4] = {0,0,1,-1};


  queue<pair<int,int>> q;
  
  pair<int,int> js;
  for(int i = 0; i < n; i++) {
    cin >> arr[i];
    for(int j = 0; j < m; j++) {
      dist_f[i][j] = -1;
      dist_j[i][j] = -1;
      if(arr[i][j] == 'J') js = {i, j};
      if(arr[i][j] == 'F') {
        q.push({i,j});
        dist_f[i][j] = 0;
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
      if(arr[nx][ny] == '#' || dist_f[nx][ny] >= 0) continue;
      dist_f[nx][ny] = dist_f[cur.X][cur.Y] + 1;
      q.push({nx,ny});
    }
  }

  q.push(js);
  dist_j[js.X][js.Y] = 0;
  while(!q.empty()){
    pair<int, int> cur = q.front();
    q.pop();
    for(int dir = 0; dir < 4; dir++) {
      int nx = cur.X + dx[dir];
      int ny = cur.Y + dy[dir];
      if(nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
      if(arr[nx][ny] == '#' || dist_j[nx][ny] >= 0) continue;
      dist_j[nx][ny] = dist_j[cur.X][cur.Y] + 1;
      q.push({nx,ny});
    }
  }

  int ans = 1e9;

  for(int i = 0; i < n; i++) {
    for(int j = 0; j < m; j++){
      if(i > 0 && i < n -1 && 0<j && j < m-1) continue;
      if(dist_j[i][j] < 0) continue;
      if(dist_f[i][j] < 0 || dist_f[i][j] > dist_j[i][j]) ans = min(ans, dist_j[i][j]);
    }
  }

  if(ans == 1e9) {
    cout << "IMPOSSIBLE";
    return 0;
  }
  
  cout << ans + 1;
}

/**
- 놓친부분
1. 불꽃이 안 닿아서 -1일수도.
2. 불꽃이 여러개
*/