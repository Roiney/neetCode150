# Duplicate Integer

Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

`Example 1:`

`Input: nums = [1, 2, 3, 3]`

`Output: true`

`Example 2:`

`Input: nums = [1, 2, 3, 4]`

`Output: false`
<br>
# Solução
<br>
### Problema:

Você recebe um array de inteiros e precisa determinar se algum número aparece mais de uma vez no array. Se houver duplicatas, retorna `true`; caso contrário, retorna `false`.
<br>
### Ideia Geral:

A ideia principal é percorrer o array e usar uma estrutura de dados que armazene apenas valores únicos (como um `Set` ou um mapa/dicionário). Conforme percorremos o array, verificamos se um número já foi visto antes:
<br>
* Se o número já foi encontrado, significa que há um duplicado, e retornamos `true`.
* Se não, adicionamos o número à estrutura de dados e continuamos a verificação.

### Passos:

1. **Percorrer o array**: Vamos iterar sobre cada número no array.
2. **Usar um `Set` (ou estrutura similar)**: Usamos um `Set` para armazenar os números à medida que os encontramos, pois ele só permite valores únicos.
<br>

    * Para cada número do array:
        * Se ele já estiver no `Set`, significa que já o vimos antes, então retornamos `true`.
        * Se não estiver no `Set`, adicionamos o número ao conjunto.
3. **Retorno final**: Se percorremos todo o array sem encontrar duplicatas, retornamos `false`.

### Exemplo:

Para o array `nums = [1, 2, 3, 3]`:
<br>
* Iniciamos com um `Set` vazio.
* Percorremos o array:
    * O número `1` é novo, então o adicionamos ao `Set`.
    * O número `2` é novo, então o adicionamos ao `Set`.
    * O número `3` é novo, então o adicionamos ao `Set`.
    * O número `3` já está no `Set`, então retornamos `true`, indicando que há um duplicado.

### Complexidade:

* **Tempo**: O(n), onde n é o número de elementos no array, já que percorremos o array uma única vez e cada operação de inserção ou verificação em um `Set` é feita em tempo constante.
* **Espaço**: O(n), pois usamos um `Set` para armazenar até n elementos no pior caso (se não houver duplicatas).