import java.util.*;

class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        // Mapa para agrupar os anagramas
        Map<String, List<String>> map = new HashMap<>();
        
        // Itera por todas as palavras
        for (String str : strs) {
            // Converte a string em um array de caracteres, ordena e volta a ser string
            char[] charArray = str.toCharArray();
            Arrays.sort(charArray);
            String sorted = new String(charArray);
            
            // Se já existir a chave, adiciona a palavra no grupo
            if (!map.containsKey(sorted)) {
                map.put(sorted, new ArrayList<>());
            }
            map.get(sorted).add(str);
        }
        
        // Retorna os valores do mapa como uma lista de listas
        return new ArrayList<>(map.values());
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        String[] strs = {"act", "pots", "tops", "cat", "stop", "hat"};
        
        // Testa a função e imprime o resultado
        List<List<String>> result = solution.groupAnagrams(strs);
        System.out.println(result);
    }
}
