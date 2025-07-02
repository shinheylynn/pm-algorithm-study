const isPrime = (n) => {
  const numbered = Number(n);

  if (numbered === 1) return false;

  // 소수 판별은 n의 제곱근까지만 해도 판별이 가능함
  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (numbered % i === 0) return false;
  }

  return true;
};

function solution(n, k) {
  // n을 k진수로 바꾼 뒤, 0으로 split하고
  // 유효한 숫자만 소수인지 판별한 다음
  // length를 구하면 된다

  const answer = n
    .toString(k)
    .split("0")
    .filter((num) => num && isPrime(num)).length;

  return answer;
}
