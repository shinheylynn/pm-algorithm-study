import kotlin.math.sqrt

class Solution {
    fun solution(n: Int, k: Int): Int {
        var radixString = n.toString(k)
        
        var splitArray = radixString.split("0")
        
        return splitArray.count {
            it.isNotEmpty() && isPrimeNumber(it.toLong())
        }
    }
    
    fun isPrimeNumber(n:Long) : Boolean {
        if(n < 2) return false;
        
        var squareRoot = sqrt(n.toDouble()).toInt()
        
        for(i: Int in 2..squareRoot) {
            if(n % i == 0L) return false;
        }
        
        return true
    }
}