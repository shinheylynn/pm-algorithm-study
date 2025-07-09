// 가장 단순하게 구한 것
// 자릿수에 관계없이 무조건 구해야 하는 숫자까지 담아서 진수 변환 후, 필요한 숫자만 추출
function solution1(n, t, m, p) {
  return new Array(t * m)
    .fill(0)
    .flatMap((_, i) => i.toString(n).toUpperCase().split(""))
    .filter((_, i) => i % m === p - 1)
    .slice(0, t)
    .join("");
}

// 조금 더 효율화
// 자릿수를 판단하여 필요한 숫자만 추출. 이때 구할 수 있는 최대 숫자는 참여자 수 * 구할 숫자 수 만큼이다.
function solution2(n, t, m, p) {
  const numbers = [];
  let currentNumber = 0;

  while (numbers.length < t * m) {
    numbers.push(...currentNumber.toString(n).toUpperCase().split(""));
    currentNumber += 1;
  }

  return numbers
    .filter((_, i) => i % m === p - 1)
    .slice(0, t)
    .join("");
}

// 더더 효율화
// 자릿수를 판단하여 필요한 숫자만 추출. 이때 구할 수 있는 최대 숫자는 참여자 수 * 구할 숫자 수 에서 자신의 순서까지이다.
function solution3(n, t, m, p) {
  const lastIndex = t * m - Math.abs(p - m);

  const numbers = [];
  let currentNumber = 0;

  while (numbers.length < lastIndex) {
    numbers.push(...currentNumber.toString(n).toUpperCase().split(""));
    currentNumber += 1;
  }

  return numbers
    .filter((_, i) => i % m === p - 1)
    .slice(0, t)
    .join("");
}
