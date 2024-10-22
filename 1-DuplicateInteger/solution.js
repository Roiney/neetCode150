class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // Propósito: Armazenar cada número que aparece no array nums de forma única.
        // Por que usar?: Um Set facilita a verificação de duplicatas, pois a inserção e verificação de presença no Set são operações rápidas, com complexidade de tempo O(1).
        //The Set object lets you store unique values of any type, whether primitive values or object references.
        const seen = new Set();
        for (let num of nums) {
            if (seen.has(num)) {
                return true; // Se o número já existe no Set, há um duplicado
            }
            seen.add(num); // Caso contrário, adiciona o número no Set
        }
        return false; // Nenhum duplicado foi encontrado
    }
}
