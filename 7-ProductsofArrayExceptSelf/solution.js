class Solution {
    /**
     * Calcula o produto de todos os elementos de um array, exceto o elemento no índice atual.
     * @param {number[]} nums - Array de números inteiros.
     * @return {number[]} - Array onde cada posição contém o produto de todos os outros elementos.
     */
    productExceptSelf(nums) {
        const n = nums.length;
        const res = new Array(n).fill(1); // Inicializa o array com 1.
        
        let prefix = 1; // Produto acumulado da esquerda para a direita.
        for (let i = 0; i < n; i++) {
            res[i] = prefix; // Define o valor atual como o produto acumulado.
            prefix *= nums[i]; // Atualiza o prefixo multiplicando pelo elemento atual.
        }
        
        let suffix = 1; // Produto acumulado da direita para a esquerda.
        for (let i = n - 1; i >= 0; i--) {
            res[i] *= suffix; // Multiplica o produto acumulado pela direita.
            suffix *= nums[i]; // Atualiza o sufixo multiplicando pelo elemento atual.
        }
        
        return res; // Retorna o array de resultados.
    }
}
