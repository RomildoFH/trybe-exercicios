"""
Em um jogo de baralho, as cartas estão representadas por um array numérico.
Para iniciar o jogo, devemos embaralhar as cartas.
Faremos isto dividindo uma porção de cartas em 2
e depois mesclando as duas porções.
Por exemplo:

Exemplo 1:
cartas = [2, 6, 4, 5]
cartas por parte = 2

resultado = [2, 4, 6, 5]

Exemplo 2:
cartas = [1, 4, 4, 7, 6, 6]
cartas por parte = 3

resultado = [1, 7, 4, 6, 4, 6]
"""

exemplo_1 = [2, 6, 4, 5]

exemplo_2 = [1, 4, 4, 7, 6, 6]


def embaralha_cartas(lista):
    cartas_por_parte = len(lista) // 2
    new_array = []  # Complexidade de espaço O(n)
    for i in range(len(lista)):  # Complexidade de tempo O(n)
        if i < cartas_por_parte:
            new_array.append(lista[i])
            new_array.append(lista[i + cartas_por_parte])
    return new_array


print(embaralha_cartas(exemplo_1))
print(embaralha_cartas(exemplo_2))
