class Solution {
    public String solution(int n, int t, int m, int p) {
        StringBuilder answer = new StringBuilder();
        
        int currentOrder = 0;
        int tubeOrder = p;
        
        for(int i = 0; i < t * m; i++) {
            String radixString = Integer.toString(i, n);
            
            for(int j = 0; j < radixString.length(); j++) {
                currentOrder++;
                
                if(currentOrder != tubeOrder) continue;
            
                String s = radixString.substring(j, j+1);
                answer.append(s);
                    
                if(answer.length() == t) break;
                    
                tubeOrder += m; 
            }
        }
        
        return answer.toString().toUpperCase();
    }
}