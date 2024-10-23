import java.util.HashMap;

class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Criamos um HashMap para armazenar o número e seu respectivo índice
        HashMap<Integer, Integer> seen = new HashMap<>();
        
        // Iteramos sobre o array de números
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i]; // Calculamos o complemento
            
            // Verificamos se o complemento já existe no HashMap
            if (seen.containsKey(complement)) {
                // Se o complemento existir, retornamos o índice do complemento e o índice atual
                return new int[] { seen.get(complement), i };
            }
            
            // Armazenamos o número atual e seu índice no HashMap
            seen.put(nums[i], i);
        }
        
        // Caso não encontre a soma, retornamos um array vazio (apesar de o problema garantir que sempre haverá uma solução)
        return new int[] {};
    }
}
