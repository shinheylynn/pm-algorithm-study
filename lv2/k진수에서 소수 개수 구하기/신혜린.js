const solution = (n, k) => {
  let answer = 0

  // '조건에 맞는 소수' = '0을 기준으로 나눈 숫자 중 소수'
  const nums = n.toString(k).split('0')
    
    for (let num of nums) {
        if (isPrime(Number(num))) {
            answer++
        }
    }
  
  return answer
}

const isPrime = (n) => {
  if (n < 2) return false
  
  // 소수 판별은 n의 제곱근까지만 해도 판별이 가능함
  // ex) a × b = 31인 모든 경우에서, a 또는 b는 반드시 √31 = 5.567보다 작거나 같음
  // 31을 2, 3, 4, 5로 나누어 보면 나머지가 0이 되는 경우가 없음
  // 따라서 소수임
  for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false
  }

  return true
}