class Solution {
  /**
   * @param {number[]} nums - Array de números inteiros.
   * @param {number} k - Quantidade de elementos mais frequentes a retornar.
   * @return {number[]} - Os `k` elementos mais frequentes.
   */
  topKFrequent(nums, k) {
    // Cria um objeto para contar a frequência de cada número em `nums`.
    const count = {};
    for (const num of nums) {
      // Incrementa a contagem para cada número. Se não existir, inicializa com 0.
      count[num] = (count[num] || 0) + 1;
    }

    // Transforma o objeto `count` em um array de pares [frequência, número].
    // As chaves de `count` são strings, então usamos `parseInt` para garantir que sejam números.
    const arr = Object.entries(count).map(([num, freq]) => [
      freq,
      parseInt(num),
    ]);

    // Ordena o array pela frequência (primeiro elemento do par) em ordem decrescente.
    arr.sort((a, b) => b[0] - a[0]);

    // Retorna os `k` números mais frequentes (segundo elemento do par).
    return arr.slice(0, k).map((pair) => pair[1]);
  }
}
