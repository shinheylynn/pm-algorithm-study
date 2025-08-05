// 완전탐색
// dungeons 의 최대 길이는 8이므로 완전탐색으로 풀 수 있음
// 완전탐색을 위해 모든 경우의 수를 탐색해야 하므로 재귀 함수를 사용

function solution(k, dungeons) {
  // 방문 여부를 저장해서 모든 요소를 방문할 수 있도록 함
  const visited = Array(dungeons.length).fill(false)
  let answer = 0

  const explore = (hp, count, visited) => {
      for (let i = 0; i < dungeons.length; i++) {
          if (!visited[i]) {
              const [need, use] = dungeons[i]

              if (hp >= need) {
                  visited[i] = true
                  explore(hp - use, count + 1, visited)
                  visited[i] = false // 방문 여부를 초기화
              }
          }
      }

      answer = Math.max(answer, count) // answer에 최대 방문 횟수를 저장
  }

  explore(k, 0, visited)
  return answer
}