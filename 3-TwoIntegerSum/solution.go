package main

import "fmt"

func twoSum(nums []int, target int) []int {
    // Criamos um mapa para armazenar o número e seu respectivo índice
    seen := make(map[int]int)
    
    // Iteramos sobre o slice de números
    for i, num := range nums {
        complement := target - num // Calculamos o complemento
        
        // Verificamos se o complemento já existe no mapa
        if index, found := seen[complement]; found {
            // Se o complemento foi encontrado, retornamos os índices
            return []int{index, i}
        }
        
        // Caso contrário, armazenamos o número atual e seu índice no mapa
        seen[num] = i
    }
    
    // Caso não encontre, retornamos um slice vazio (apesar de o problema garantir que sempre há uma solução)
    return []int{}
}

func main() {
    nums := []int{2, 7, 11, 15}
    target := 9
    result := twoSum(nums, target)
    fmt.Println(result)  // Deve imprimir: [0 1]
}
