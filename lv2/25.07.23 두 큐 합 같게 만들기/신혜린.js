function solution(queue1, queue2) {
  // 일일이 shift, push 하는 것보다 효율적인 방법을 찾다가 두 큐를 하나로 합치기로 함
  const queue = [...queue1, ...queue2]

  // 타겟은 두 큐의 합을 2로 나눈 값
  const half = queue.reduce((acc, cur) => acc + cur, 0) / 2
  
  // 기준은 queue1의 합으로 하고 타겟에 도달할 때까지 반복
  let sum1 = queue1.reduce((acc, cur) => acc + cur, 0)

  // sum1이 타겟보다 크면 queue1에서 빼고 작으면 queue2에서 더하기 위해 
  // queue1의 인덱스와 queue2의 인덱스를 따로 선언
  // queue2의 첫 번째 인덱스는 queue1의 마지막 인덱스 + 1
  let index1 = 0
  let index2 = queue1.length
  let answer = 0

  // 최악의 경우 queue1의 모든 원소를 queue2로 옮겼다가 다시 받아와도 타겟에 도달하지 못하는 경우가 있음 (2n)
  // 무한루프를 막기 위해 보수적으로 queue1의 길이 * 3으로 설정 (3n)
  // 처음에 단순히 queue1.length * 2로 설정했다가 테스트케이스 1번에서 실패함ㅎ
  while (answer <= queue1.length * 3) {
      if (sum1 === half) return answer
      
      // 최소 횟수를 구하기 위해서 sum1이 타겟보다 클 경우 queue1에서 빼고 작으면 queue2에서 더하는 순서로 진행
      // 한 번 실행될 때마다 각 index를 1씩 증가시킴 (슬라이딩 형태)
      if (sum1 > half) {
          sum1 -= queue[index1++]
      } else {
          sum1 += queue[index2++]
      }
      
      answer++
  }
  
  // 3n번 반복해도 타겟에 도달하지 못한 경우 -1 반환
  return -1
}