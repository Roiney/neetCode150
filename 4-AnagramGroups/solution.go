package main

import (
	"fmt"
	"sort"
)

// Função para agrupar anagramas
func groupAnagrams(strs []string) [][]string {
	// Usamos um mapa para agrupar as palavras
	anagramMap := make(map[string][]string)

	// Iteramos sobre as palavras
	for _, str := range strs {
		// Convertendo a string em um slice de runas para ordenação
		sortedStr := sortString(str)

		// Adicionando a palavra ao grupo correspondente
		anagramMap[sortedStr] = append(anagramMap[sortedStr], str)
	}

	// Extraímos os valores do mapa (grupos de anagramas)
	result := make([][]string, 0, len(anagramMap))
	for _, group := range anagramMap {
		result = append(result, group)
	}

	return result
}

// Função para ordenar os caracteres de uma string
func sortString(s string) string {
	runes := []rune(s)
	sort.Slice(runes, func(i, j int) bool {
		return runes[i] < runes[j]
	})
	return string(runes)
}

func main() {
	// Input de teste
	strs := []string{"act", "pots", "tops", "cat", "stop", "hat"}

	// Chamamos a função e imprimimos o resultado
	result := groupAnagrams(strs)
	fmt.Println(result)
}
