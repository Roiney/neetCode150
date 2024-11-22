class Solution {
    /**
     * Codifica um array de strings em uma única string.
     * @param {string[]} strs - Array de strings para codificar.
     * @returns {string} - String codificada.
     */
    encode(strs) {
        // Se o array for vazio, retorna uma string vazia.
        if (strs.length === 0) return "";

        let sizes = []; // Array para armazenar os tamanhos de cada string.
        let res = "";   // String resultante que será retornada.

        // Primeiro loop: calcula e armazena os tamanhos das strings.
        for (let s of strs) {
            sizes.push(s.length); // Adiciona o tamanho da string atual.
        }

        // Segundo loop: adiciona os tamanhos das strings na string resultante,
        // separados por vírgulas e seguidos de um delimitador `#`.
        for (let sz of sizes) {
            res += sz + ','; // Adiciona o tamanho seguido de uma vírgula.
        }
        res += '#'; // Adiciona o delimitador para separar tamanhos e conteúdo.

        // Terceiro loop: adiciona as strings reais na string resultante.
        for (let s of strs) {
            res += s; // Adiciona a string atual.
        }

        // Retorna a string codificada.
        return res;
    }

    /**
     * Decodifica uma string codificada de volta para um array de strings.
     * @param {string} str - String codificada.
     * @returns {string[]} - Array de strings decodificado.
     */
    decode(str) {
        // Se a string codificada for vazia, retorna um array vazio.
        if (str.length === 0) return [];

        let sizes = []; // Array para armazenar os tamanhos das strings.
        let res = [];   // Array resultante que será retornado.
        let i = 0;      // Índice para percorrer a string codificada.

        // Primeiro loop: lê os tamanhos das strings até encontrar o delimitador `#`.
        while (str[i] !== '#') {
            let cur = ""; // Armazena o tamanho atual como uma string.
            while (str[i] !== ',') { // Lê caracteres até encontrar uma vírgula.
                cur += str[i];
                i++;
            }
            sizes.push(parseInt(cur)); // Converte o tamanho para inteiro e adiciona ao array.
            i++; // Avança o índice para a próxima posição após a vírgula.
        }
        i++; // Avança o índice para a posição após o `#`.

        // Segundo loop: lê cada string de acordo com os tamanhos armazenados.
        for (let sz of sizes) {
            res.push(str.substr(i, sz)); // Extrai a substring de tamanho `sz`.
            i += sz; // Avança o índice pelo tamanho da string extraída.
        }

        // Retorna o array de strings decodificado.
        return res;
    }
}
