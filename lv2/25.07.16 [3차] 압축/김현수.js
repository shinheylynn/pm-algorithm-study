function solution(msg) {
  // 일단 가장 간단하게 2중 for문으로 처리가 가능할듯.
  const answer = [];

  // dictionary를 하나 만들어 두고
  // A => 1, B => 2 ...
  const map = new Map(
    new Array(26).fill(0).map((_, i) => [String.fromCharCode(i + 65), i + 1])
  );

  // 한 글자씩 바깥 for문으로 순회한다.
  for (let i = 0; i < msg.length; i += 1) {
    let currentString = msg[i];
    let index = map.get(currentString);
    let nextIndex = i + 1;

    // 안의 반복문에서는 글자를 한 글자씩 더하며 dictionary에 있는지 검사한다.
    while (map.get(currentString) && nextIndex < msg.length) {
      currentString += msg[nextIndex];
      nextIndex += 1;

      // 만약 있으면 일단 색인 임시 저장. 그리고 글자를 한 글자씩 더한다.
      // dictionary 안의 가장 긴 글자를 찾아야하므로, 찾았다면 인덱스를 한 칸 더 옮겨야 한다
      if (map.get(currentString)) {
        index = map.get(currentString);
        i += 1;
      }
    }

    // 만약 없으면 dictionary에 set. 임시 저장했던 색인 출력.
    map.set(currentString, map.size + 1);
    answer.push(index);
  }

  return answer;
}
