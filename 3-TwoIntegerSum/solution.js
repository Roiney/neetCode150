class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
    const seen = {}
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        // Usamos seen.hasOwnProperty(complement) para verificar se esse complemento já existe no objeto seen. Se existir, 
        // isso significa que encontramos dois números cujas somas dão o target, então retornamos os índices do número encontrado e o índice atual i.
        if (seen.hasOwnProperty(complement)) {
                // Se o complemento foi encontrado no objeto, retornamos os índices
                return [seen[complement], i];
            }
            // Caso contrário, armazenamos o número atual e seu índice
            seen[nums[i]] = i;
        }
    }
}
