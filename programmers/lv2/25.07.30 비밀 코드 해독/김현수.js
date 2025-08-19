// 맨 처음 했던 생각) 정답 수 만큼 가능한 조합을 모두 만들어서 -> 일정 빈도 이상 나오는 숫자를 골라서 다시 조합을 만드는 건가보다
// 아님. q[i]의 요소가 아닌 것도 정수 조합으로 가능함.
// 그리고 ans[i]가 0이라면 q[i]의 모든 요소는 정수 조합에 포함될 수 없음.

// function solution(n, q, ans) {
//     const countMap = Object.fromEntries(new Array(n).fill(0).map((_, i) => [i + 1, 0]));

//     q.flatMap((entered, i) => generateCombinations(entered, ans[i])).flat().forEach((num) => {
//         countMap[num] = countMap[num] + 1
//     })

//     return Object.entries(countMap).sort((a, b) => b[1] - a[1]);
// }

// ---

// 가능한 조합을 모두 만들어두고 조건에 어긋날 때마다 제외해야 하나?

const generateCombinations = (list, k, items = [], idx = 0, result = []) => {
  if (items.length === k) {
    result.push(items);
    return;
  }

  for (let i = idx; i < list.length; i += 1) {
    generateCombinations(list, k, [...items, list[i]], i + 1, result);
  }

  return result;
};

function solution(n, q, ans) {
  const numbers = new Array(n).fill(0).map((_, i) => i + 1);

  // 1 ~ n 까지 가능한 모든 조합을 만든다.
  const possibleCombinations = generateCombinations(numbers, 5).map(
    (combinations) =>
      combinations.reduce((map, number) => map.set(number, 1), new Map())
  );

  let answer = possibleCombinations;

  for (let i = 0; i < q.length; i += 1) {
    answer = answer.filter(
      (countMap) =>
        q[i].reduce((acc, cur) => acc + (countMap.get(cur) || 0), 0) === ans[i]
    );
  }

  return answer.length;
}
