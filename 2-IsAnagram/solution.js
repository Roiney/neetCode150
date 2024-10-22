class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // Se o tamanho das strings for diferente, elas não podem ser anagramas
        if (s.length !== t.length) {
            return false;
        }
        
        // Criamos um mapa para contar os caracteres da string s
        const charCount = {};
        
        // Contamos a ocorrência de cada caractere na string s
        // Propósito: Esse loop percorre cada caractere da string s.
        // Como funciona?: O loop for...of é usado para iterar sobre cada elemento de uma string (ou array). No caso, cada iteração vai atribuir um caractere da string s à variável char, uma por vez.
        // Exemplo: Se s = "racecar", o loop vai iterar sobre cada letra, ou seja, 'r', 'a', 'c', 'e', 'c', 'a', 'r'.
        for (let char of s) {
            // Propósito: Estamos usando um objeto (charCount) para armazenar o número de vezes que cada caractere aparece na string s.
            // Como funciona?: O charCount é um mapa (objeto) onde cada caractere é a chave, e o valor associado à chave é o número de vezes que o caractere apareceu até o momento.
            // Se charCount['a'] for 2, isso significa que o caractere 'a' apareceu 2 vezes até aquele ponto.
            // Se a chave (caractere) ainda não existe no objeto, ela será criada e associada a um valor (a contagem de ocorrências).
            charCount[char] = (charCount[char] || 0) + 1;
            // (charCount[char] || 0)
            // Propósito: Verificamos quantas vezes o caractere já apareceu antes no objeto charCount.
            // Como funciona?: O operador || retorna o valor da esquerda se ele for "truthy", e se não for (ou seja, undefined, null, 0, etc.), retorna o valor da direita.
            // Se charCount[char] já existir, seu valor será usado.
            // Se charCount[char] for undefined (o caractere ainda não apareceu), o valor será 0 (ou seja, estamos inicializando a contagem como 0).
        }
        
        // Agora verificamos a string t, decrementando as contagens
        for (let char of t) {
            if (!charCount[char]) {
                return false; // Se algum caractere em t não existir ou a contagem for 0, não é anagrama
            }
            charCount[char]--;
        }
        
        // Se passarmos por toda a string t sem problemas, as strings são anagramas
        return true;
    }
}
