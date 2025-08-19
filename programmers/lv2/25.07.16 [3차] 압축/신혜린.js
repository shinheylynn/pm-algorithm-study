function solution(msg) {
  const dic = new Map('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((w, i) => [w, i + 1]))
  const answer = []

  let sliceIndex = 0

  while (sliceIndex < msg.length) {
      // 뒤에서부터 가장 긴 문자열을 찾는다
      let j = msg.length

      // dic에 존재하는 가장 긴 문자열을 찾을 때까지 뒤에서부터 1개씩 줄여간다
      while (!dic.get(msg.slice(sliceIndex, j))) {
          j--
      }
      
      // dic에 존재하는 가장 긴 문자열을 찾으면 w, c에 각자 값 할당한다
      const w = msg.slice(sliceIndex, j)
      const c = msg[j] || ''

      answer.push(dic.get(w)) // 출력
      dic.set(w + c, dic.size + 1) // 등록

      // w의 길이만큼 인덱스를 이동하여 다음 압축 구간으로 넘어간다
      sliceIndex += w.length
  }

  return answer
}