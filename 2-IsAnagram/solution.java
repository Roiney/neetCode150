import java.util.HashMap;
import java.util.Map;

class Solution {
    public boolean isAnagram(String s, String t) {
  // Se as strings têm comprimentos diferentes, elas não podem ser anagramas
        if (s.length() != t.length()) {
            return false;
        }

        // Criamos um mapa para contar os caracteres da string s
        Map<Character, Integer> charCount = new HashMap<>();

        // Contamos a ocorrência de cada caractere na string s
        for (char c : s.toCharArray()) {
            charCount.put(c, charCount.getOrDefault(c, 0) + 1);
        }

        // Agora verificamos a string t, decrementando as contagens
        for (char c : t.toCharArray()) {
            if (!charCount.containsKey(c)) {
                return false; // Se t tiver um caractere que não existe em s
            }
            charCount.put(c, charCount.get(c) - 1); // Decrementa a contagem
            if (charCount.get(c) == 0) {
                charCount.remove(c); // Remove a chave se a contagem chegar a 0
            }
        }

        // Se todas as contagens baterem, charCount estará vazio, então é um anagrama
        return charCount.isEmpty();
    }
}
