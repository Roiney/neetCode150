class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // Cria um mapa para agrupar os anagramas
        const map = new Map()

        for (const str of strs) {
             // Ordena as letras da palavra
            const sorted = str.split('').sort().join('');
            if (map.has(sorted)) {
                map.get(sorted).push(str);
            } else {
                // Se não, cria uma nova lista para esse anagrama
                map.set(sorted, [str]);
            }
        }
        // Retorna os grupos de anagramas como um array de arrays
        return Array.from(map.values());
    }
}

const solution = new Solution();
const strs = ["act", "pots", "tops", "cat", "stop", "hat"];
console.log(solution.groupAnagrams(strs));