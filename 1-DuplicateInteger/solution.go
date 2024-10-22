package main

import "fmt"

func hasDuplicate(nums []int) bool {
    // Criamos um mapa para armazenar números únicos.
    seen := make(map[int]bool)
    
    // Iteramos sobre o array nums.
    for _, num := range nums {
        // Verificamos se o número já existe no mapa.
        if _, exists := seen[num]; exists {
            return true // Encontramos um número duplicado.
        }
        // Caso contrário, adicionamos o número ao mapa.
        seen[num] = true
    }
    
    // Se chegarmos ao final do loop, não há duplicatas.
    return false
}

func main() {
    nums1 := []int{1, 2, 3, 3} // Exemplo com duplicata
    nums2 := []int{1, 2, 3, 4} // Exemplo sem duplicata
    
    // Testamos a função e imprimimos os resultados
    fmt.Println(hasDuplicate(nums1)) // true
    fmt.Println(hasDuplicate(nums2)) // false
}
