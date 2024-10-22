import java.util.HashSet;
import java.util.Set;

class Solution {
    public boolean hasDuplicate(int[] nums) {
        // Criamos um HashSet para armazenar os números únicos.
        // O HashSet não permite duplicatas, o que facilita a verificação.
        Set<Integer> seen = new HashSet<>();
        // Percorremos o array nums, iterando sobre cada número.
        for (int num : nums) {
            // Verificamos se o número atual já está no HashSet.
            // Se estiver, significa que encontramos um duplicado e retornamos true.
            if (seen.contains(num)) {
                return true; // Duplicata encontrada
            }
            // Se o número não estiver no HashSet, adicionamos ele.
            seen.add(num);
        }
        
        // Se terminarmos o loop sem encontrar duplicatas, retornamos false.
        return false; // Nenhuma duplicata foi encontrada
    }
}
