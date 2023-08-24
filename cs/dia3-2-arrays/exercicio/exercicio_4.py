""""
Você têm dois arrays de números inteiros que representam:

I - instantes de entrada e saídas em uma biblioteca II - um número que represente um instante a ser buscado.

Retorne quantas pessoas estudantes estão na biblioteca naquele instante. Considere que todo estudante entrou e saiu da biblioteca.

entradas = [1, 2, 3]
saidas = [3, 2, 7]
instante_buscado = 4
resultado: 1

O estudante 1 entrou no instante 1 e saiu no 3, já o segundo entrou
e saiu no 2 e o último foi único a estar presente no instante 4.
"""


def calcula_pessoas(entradas, saidas, instante):
    pessoa_presente = []  # Espaço O(n)
    for i in range(len(entradas)):  # Tempo O(n)
        if i < len(saidas) and entradas[i] <= instante <= saidas[i]:
            pessoa_presente.append(True)
        else:
            pessoa_presente.append(False)
    return pessoa_presente.count(True)


print(calcula_pessoas([1, 2, 3], [3, 2, 7], 4))
print(calcula_pessoas([1, 2, 5], [3, 2, 7], 4))
print(calcula_pessoas([1, 2, 3], [3, 5, 7], 4))
print(calcula_pessoas([1, 2, 3], [4, 5, 7], 4))