import java.util.*

// 1번 풀이 - 시간 초과
class Solution1 {
    fun solution(queue1: IntArray, queue2: IntArray): Int {
        var answer: Int = 0
        
        var queueA: Queue<Long> = LinkedList(queue1.map { it.toLong() })
        var queueB: Queue<Long> = LinkedList(queue2.map { it.toLong() })
        
        val limit =  (queueA.size + queueB.size) * 2
        
        while(queueA.sum() != queueB.sum()) {
            if(answer > limit) {
                return -1
            }
            
            var sum1 = queueA.sum()
            var sum2 = queueB.sum()
            
            if(sum1 > sum2) {
                var item = queueA.poll()
                queueB.add(item)
            } else {
                var item = queueB.poll()
                queueA.add(item)
            }
            
            answer++
        }
        
        return answer
    }
}

// 2번 풀이 - 성공
class Solution2 {
    fun solution(queue1: IntArray, queue2: IntArray): Int {
        var answer: Int = 0
        
        var queueA: Queue<Int> = LinkedList(queue1.toList())
        var queueB: Queue<Int> = LinkedList(queue2.toList())
        
        var sum1 = queueA.sumOf { it.toLong() }
        var sum2 = queueB.sumOf { it.toLong() }
        
        val limit =  (queueA.size + queueB.size) * 2
        
        while(sum1 != sum2) {
            if(answer > limit) {
                return -1
            }
            
            if(sum1 > sum2) {
                var item = queueA.poll()
                queueB.offer(item)
                sum1 -= item
                sum2 += item
            } else {
                var item = queueB.poll()
                queueA.offer(item)
                sum1 += item
                sum2 -= item
            }
            
            answer++
        }
        
        return answer
    }
}