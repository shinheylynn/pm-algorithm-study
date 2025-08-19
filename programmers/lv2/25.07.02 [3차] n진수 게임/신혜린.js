function solution(n, t, m, p) {
    let answer = ''
    let num = 0
    let sequence = ''

    while (sequence.length < t * m) {
        sequence += num.toString(n).toUpperCase()
        num++
    }

    for (let i = 0; answer.length < t; i++) {
        if (i % m === (p - 1)) {
            answer += sequence[i]
        }
    }

    return answer
}