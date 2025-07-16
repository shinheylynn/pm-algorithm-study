import java.util.HashMap;
import java.util.Map;
import java.util.ArrayList;

class Solution {
    public int[] solution(String msg) {
        ArrayList<Integer> answer = new ArrayList<Integer>();
        
        Map<String, Integer> dictionary = new HashMap<String, Integer>();
        
        initDictionary(dictionary);
        
        String w = "";
        String[] letters = msg.split("");
        
        for(int i = 0; i < letters.length; i++) {
            String a = w + letters[i];
            if(dictionary.containsKey(a)) {
                w = a;
            } else {
                dictionary.put(a, dictionary.size() + 1);
                answer.add(dictionary.get(w));
                w = letters[i];
            }
        }
        
        answer.add(dictionary.get(w));
        
        int[] result = new int[answer.size()];

        for(int i = 0 ; i < answer.size() ; i++) {
            result[i] = answer.get(i);
        }

        return result;
    }
    
    public void initDictionary(Map<String, Integer> dictionary) {
        dictionary.put("A", 1);
        dictionary.put("B", 2);
        dictionary.put("C", 3);
        dictionary.put("D", 4);
        dictionary.put("E", 5);
        dictionary.put("F", 6);
        dictionary.put("G", 7);
        dictionary.put("H", 8);
        dictionary.put("I", 9);
        dictionary.put("J", 10);
        dictionary.put("K", 11);
        dictionary.put("L", 12);
        dictionary.put("M", 13);
        dictionary.put("N", 14);
        dictionary.put("O", 15);
        dictionary.put("P", 16);
        dictionary.put("Q", 17);
        dictionary.put("R", 18);
        dictionary.put("S", 19);
        dictionary.put("T", 20);
        dictionary.put("U", 21);
        dictionary.put("V", 22);
        dictionary.put("W", 23);
        dictionary.put("X", 24);
        dictionary.put("Y", 25);
        dictionary.put("Z", 26);
    }
}