import kotlin.math.*

class Solution {
    lateinit var visited : Array<Boolean>
    private var answer = 0
    
    fun solution(k: Int, dungeons: Array<IntArray>): Int {
        var dungeonLength: Int = dungeons.size
        visited = Array<Boolean>(dungeonLength) { false }
        
        dfs(0, k, dungeons)
        
        return answer
    }
    
    // DFS로 모든 던전 탐험 경우의 수를 탐색
    // dfs(0, 80, [[80, 20], [50, 40], [30, 10]]) 실행 순서:
    // 1. depth=0, remain=80 시작
    // 2. i=0: [80,20] 선택 가능 → visited[0]=true → dfs(1, 60) 호출
    //    3. depth=1, remain=60에서 i=1: [50,40] 선택 가능 → visited[1]=true → dfs(2, 20) 호출
    //       4. depth=2, remain=20에서 i=2: [30,10] 선택 불가 (20 < 30) → answer=max(0,2)=2
    //       visited[1]=false로 복구
    //    visited[0]=false로 복구
    // 5. i=1: [50,40] 선택 가능 → visited[1]=true → dfs(1, 40) 호출
    //    6. depth=1, remain=40에서 i=0: [80,20] 선택 불가 (40 < 80)
    //       i=2: [30,10] 선택 가능 → visited[2]=true → dfs(2, 30) 호출
    //       7. depth=2, remain=30에서 모든 던전 선택 불가 → answer=max(2,2)=2
    //       visited[2]=false로 복구
    //    visited[1]=false로 복구
    // 8. i=2: [30,10] 선택 가능 → visited[2]=true → dfs(1, 70) 호출
    //    9. depth=1, remain=70에서 i=0: [80,20] 선택 불가, i=1: [50,40] 선택 가능...
    fun dfs(depth: Int, remain: Int, dungeons: Array<IntArray>) {
        for(i:Int in dungeons.indices) {
            if(visited[i] || remain - dungeons[i][0] < 0) {
                continue
            }
            
            visited[i] = true;
            var cost : Int = dungeons[i][1];
            dfs(depth + 1, remain - cost, dungeons)
            visited[i] = false;
        }
        
        answer = max(answer, depth);
    }
}