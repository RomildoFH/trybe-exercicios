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


def embaralha_cartas(items):
    answer = []
    div_cards_by_two = len(items) // 2
    for offset in range(div_cards_by_two):
        answer.extend(items[offset::div_cards_by_two])
    return answer


print(embaralha_cartas(exemplo_1))
print(embaralha_cartas(exemplo_2))