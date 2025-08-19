class Queue {
  constructor(arr) {
    // 메모리 초과로 수정
    // this.queue = arr;
    this.queue = arr.slice();

    this.sum = arr.reduce((acc, cur) => acc + cur, 0);
    this.popIndex = 0;
  }

  pop() {
    // 시간 초과로 수정
    // const popped = this.queue[0];
    // this.queue = this.queue.slice(1);
    const popped = this.queue[this.popIndex];
    this.popIndex += 1;
    this.sum -= popped;
    return popped;
  }

  insert(element) {
    // 시간 초과로 수정
    // this.queue = [...this.queue, element];

    this.queue.push(element);
    this.sum += element;
    return this.queue;
  }
}

function solution(queue1, queue2) {
  // 합이 더 큰 쪽에서만 빼는 건가? -> 아님 => 맞음
  // 문제 중 예시 테스트케이스 1번에서 작은쪽에서 먼저 빼서 헷갈렸는데, 결국 더 큰쪽에서만 빼면 됨

  // 더 큰 요소가 있는 쪽에서 빼는 건가? -> 아님

  const q1 = new Queue(queue1);
  const q2 = new Queue(queue2);

  // 각 큐의 합이 되어야 할 숫자
  const goal = (q1.sum + q2.sum) / 2;

  // 합이 되어야 할 숫자가 정수가 아니라면 불가능함
  if (!Number.isInteger(goal)) {
    return -1;
  }

  // 만약 두 큐의 요소 중 하나라도 goal보다 크다면 불가능함
  if (queue1.some((num) => num > goal) || queue2.some((num) => num > goal)) {
    return -1;
  }

  let count = 0;

  while (q1.sum !== goal) {
    if (count > queue1.length + queue2.length + 1) {
      return -1;
    }

    if (q1.sum > q2.sum) {
      q2.insert(q1.pop());
    } else {
      q1.insert(q2.pop());
    }

    count += 1;
  }

  return count;
}
