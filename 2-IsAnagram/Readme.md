# Is Anagram

Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

`Example 1:`

`Input: s = "racecar", t = "carrace"`

`Output: true`

`Example 2:`

`Input: s = "jar", t = "jam"`

`Output: false`
Constraints:

s and t consist of lowercase English letters.
<br>
# Solução

A solução consiste em verificar se as duas strings contêm exatamente os mesmos caracteres, com as mesmas quantidades, mas em qualquer ordem. Se for o caso, as strings são consideradas **anagramas**.
<br>
### Passos:

1. **Verificação de comprimento**: Se as duas strings têm comprimentos diferentes, elas não podem ser anagramas, então retornamos `false` imediatamente.
2. **Criação de um mapa (ou objeto)**: Usamos um mapa (ou dicionário) para contar quantas vezes cada caractere aparece na primeira string (`s`).
3. **Percorrer a segunda string (`t`)**:
<br>

    * Para cada caractere da string `t`, verificamos se ele está presente no mapa criado a partir de `s`.
    * Se o caractere estiver presente, reduzimos sua contagem no mapa.
    * Se a contagem de um caractere chegar a zero, removemos esse caractere do mapa.
4. **Verificação final**: Se, após verificar toda a string `t`, o mapa estiver vazio (ou seja, todas as contagens de caracteres foram balanceadas), as strings são anagramas e retornamos `true`. Caso contrário, retornamos `false`.

### Exemplo:

Para as strings `s = "racecar"` e `t = "carrace"`:
<br>
* A primeira string é percorrida, e um mapa com as contagens dos caracteres é criado.
* A segunda string é percorrida e as contagens são verificadas e ajustadas no mapa.
* No final, todas as contagens batem, e o mapa fica vazio, indicando que as strings são anagramas.

### Complexidade:

* **Tempo**: O(n), onde n é o comprimento de qualquer uma das strings, pois precisamos percorrer ambas.
* **Espaço**: O(1) no sentido de que o tamanho do mapa é limitado pelo número de caracteres no alfabeto (26 letras no total para letras minúsculas), então o espaço é constante.

Essa abordagem é eficiente e faz uso de contagens de caracteres para determinar se duas strings são anagramas.