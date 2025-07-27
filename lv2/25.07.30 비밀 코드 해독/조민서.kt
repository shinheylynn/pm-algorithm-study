// 문제를 처음 보고 든 생각
// [3, 4, 7, 9, 10] 이렇게 5개의 정수가 있고
// 첫 번째 시도에서 비밀 코드에 포함된 정수가 3, 4로 2개 있습니다.
// 두 번째 시도에서 비밀 코드에 포함된 정수가 7, 9, 10으로 3개 있습니다.
// 세 번째 시도에서 비밀 코드에 포함된 정수가 3, 7, 9, 10으로 4개 있습니다.
// 네 번째 시도에서 비밀 코드에 포함된 정수가 7, 9, 10으로 3개 있습니다.
// 다섯 번째 시도에서 비밀 코드에 포함된 정수가 3, 4, 7로 3개 있습니다.
// 
// 위 케이스를 보고 [비밀코드로 가능한 정수]과 [입력한 정수]의 교집합의 길이 == 일치하는 개수 이구나가 떠오름
// 그럼 nC5 가지의 모든 조합을 구해서 각 입력값 과의 교집합을 구해서 길이를 비교하면 되겠다고 생각
// 근데 가능한 모든 조합을 구하는 코드가 안떠올라서 찾아봤음
class Solution {
    fun solution(n: Int, q: Array<IntArray>, ans: IntArray): Int {
        var answer: Int = 0
        
        val numbers = (1..n).toList()
        
        val possibleCombinations = numbers.combinations(5)
        
        for(combination in possibleCombinations) {
            var didAllMatch : Boolean = true
            
            for(i:Int in q.indices) {
                var combinationSet = combination.toSet()
                var inputSet = q[i].toSet()
                
                val intersectionSize = combinationSet.intersect(inputSet).size
                
                if(intersectionSize != ans[i]) {
                    didAllMatch = false
                    break
                }
            }
            
            if(didAllMatch) answer++
        }
        
        return answer
    }
    
    // 모든 조합을 구하는 코드
    // [1,2,3].combinations(2) 실행 순서
    // 1. [1,2,3]에서 head=1, tail=[2,3] 분리
    // 2. withHead 계산: [2,3].combinations(1) 호출
    //    - [2,3]에서 head=2, tail=[3]
    //    - withHead: [2], withoutHead: [3] 반환
    //    - 1과 결합하여 [1,2], [1,3] 생성
    // 3. withoutHead 계산: [2,3].combinations(2) 호출
    //    - [2,3]에서 [2,3] 반환
    // 4. 최종적으로 [1,2], [1,3], [2,3] 반환
    fun <T> List<T>.combinations(k: Int): List<List<T>> {
        if (k == 0) return listOf(emptyList())
        if (this.isEmpty()) return emptyList()

        val head = this.first()
        val tail = this.drop(1)

        val withHead = tail.combinations(k - 1).map { listOf(head) + it }
        val withoutHead = tail.combinations(k)

        return withHead + withoutHead
    }
}