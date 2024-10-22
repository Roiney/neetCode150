package main

import "fmt"

func isAnagram(s string, t string) bool {
    // Se os comprimentos das strings são diferentes, elas não podem ser anagramas
    if len(s) != len(t) {
        return false
    }

    // Criamos um mapa para contar os caracteres da string s
    charCount := make(map[rune]int)

    // Contamos a ocorrência de cada caractere na string s
    for _, char := range s {
        charCount[char]++
    }

    // Agora verificamos a string t, decrementando as contagens
    for _, char := range t {
        if _, exists := charCount[char]; !exists {
            return false // Se t tiver um caractere que não existe em s
        }
        charCount[char]--
        if charCount[char] == 0 {
            delete(charCount, char) // Remove a chave se a contagem chegar a 0
        }
    }

    // Se todas as contagens baterem, charCount estará vazio, então é um anagrama
    return len(charCount) == 0
}

func main() {
    // Teste com strings que são anagramas
    fmt.Println(isAnagram("racecar", "carrace")) // true
    
    // Teste com strings que não são anagramas
    fmt.Println(isAnagram("jar", "jam")) // false
}
