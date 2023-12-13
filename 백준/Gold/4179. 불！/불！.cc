#include <bits/stdc++.h>
using namespace std;
#define X first
#define Y second
string board[1002];
int dist1[1002][1002]; // 불의 전파시간
int dist2[1002][1002]; // 지훈이의 이동시간
int n,m;
int dx[4] = {1,0,-1,0};
int dy[4] = {0,1,0,-1};

int main(void) {
  ios::sync_with_stdio(0);
  cin.tie(0);

  cin >> n >> m;

  queue<pair<int, int>> Q1;
  queue<pair<int, int>> Q2;
  for(int i = 0; i < n; i++){ 
    cin >> board[i];
    for(int j =0; j < m; j++){
      dist1[i][j] = -1;
      dist2[i][j] = -1;
      if(board[i][j] == 'F'){
        Q1.push({i,j});
        dist1[i][j] = 0;
      }
      if(board[i][j] == 'J'){
        Q2.push({i,j});
        dist2[i][j] = 0;
      }
    }
  }

  // 불에 대한 BFS
  while(!Q1.empty()) {
    auto cur = Q1.front(); Q1.pop();
    for(int dir = 0; dir < 4; dir++){
      int nx = cur.X + dx[dir];
      int ny = cur.Y + dy[dir];
      if(nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
      if(dist1[nx][ny] >= 0 || board[nx][ny] == '#') continue;
      dist1[nx][ny] = dist1[cur.X][cur.Y] + 1;
      Q1.push({nx,ny});
    }
  }

  // 지훈에 대한 BFS
  while(!Q2.empty()) {
    auto cur = Q2.front(); Q2.pop();
    for(int dir = 0; dir < 4; dir++){
      int nx = cur.X + dx[dir];
      int ny = cur.Y + dy[dir];
      if(nx < 0 || nx >= n || ny < 0 || ny >= m) {
        // 범위를 벗어났다는 것은 탈출에 성공을 의미
        // 큐에 거리순으로 들어가므로 최초에 탈출한 시간을 출력
        cout << dist2[cur.X][cur.Y] + 1;
        return 0;
      }
      if(dist2[nx][ny] >= 0 || board[nx][ny] == '#') continue;
      if(dist1[nx][ny] != -1 && dist1[nx][ny] <= dist2[cur.X][cur.Y] +1) {
        continue; // 지훈이 도착한 시간과 동시에 불이 도착하거나 빨리 도착했으면 안됨.
      }
      dist2[nx][ny] = dist2[cur.X][cur.Y] + 1;
      Q2.push({nx,ny});
    }
  }

  cout << "IMPOSSIBLE"; // 여기에 도달했음은 탈출에 실패했음을 의미
}