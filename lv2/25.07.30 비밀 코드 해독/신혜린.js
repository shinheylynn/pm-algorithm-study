// 처음 든 생각
// ans의 값이 가장 큰 인덱스를 기준으로 q의 값을 접근하는 건가?
// 예) ans[2] = 3이면 q[2]의 값에서 3개만 뽑아서 나머지 2개 값을 1~n 중에 뽑고 Set로 중복을 제거한 뒤 
// 다른 배열 값들과 비교해가며 ans와 일치하는 조합이 뭔지 찾아야 하나?

// 음 로직이 너무 복잡해지는 거 같다 단순화할 수는 없을까
// 힌트를 찾아보니 어차피 n의 제한이 30 이하라 완전탐색을 해도 상관이 없구나 (30C5 = 142506개).. 대박


function solution(n, q, ans) {
  const combinations = getCombinations(n)
  const answer = []
  
  for (const combination of combinations) {
      if (isValid(combination, q, ans)) {
          answer.push(combination)
      }
  }
  
  return answer.length
}

// n의 최대값은 30, 배열의 길이는 5 
// 숫자 30개 중 5개를 뽑은 모든 조합을 구한다 (30C5) = 완전탐색
const getCombinations = (n) => {
  const results = []
  const temp = []
  const arr = Array.from({ length: n}, (_, i) => i + 1)
  
  // 5중 for문을 줄이기 위해 재귀함수를 사용해보자..
  const combination = (start) => {
      if (temp.length === 5) {
          results.push([...temp])
          return
      }   
      
      for (let i = start; i < arr.length; i++) {
          temp.push(arr[i])
          combination(i + 1)
          temp.pop() // 재귀함수가 실행되는 것과 상관 없이 실행됨 (리턴되는 게 아님)
      }
  }
  
  combination(0)
  return results
}

// 조합의 각 요소가 주어진 배열에 몇 개가 있는지 카운트 해보자
// 그리고 카운트 값이 ans 배열 요소의 값과 같으면 true, 다르면 false
const isValid = (combination, q, ans) => {
  for (let i = 0; i < q.length; i++) {
      const arr = q[i]
      const expectedCount = ans[i]

      const count = arr.filter(num => combination.includes(num)).length

      if (count !== expectedCount) {
          return false
      }
  }
  return true
};