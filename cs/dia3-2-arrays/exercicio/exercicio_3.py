""""
Imagine que você esteja trabalhando em um e-commerce, e foi lhe dado a demanda de analisar um array de números inteiros que representam os produtos dessa empresa. Verifique quantos produtos formam boas combinações, ou seja, quando um produto é igual ao outro e seu índice é maior que o anterior. Esta combinação pode ser utilizada para modificar os produtos de uma página. Por exemplo:

Exemplo 1:
produtos = [1, 3, 1, 1, 2, 3]
resultado = 4
Os índices (0, 2), (0, 3), (1, 5), (2, 3) formam combinações.

Exemplo 2:
produtos = [1, 1, 2, 3]
resultado = 1
Os índices (0, 1) formam a única combinação.
"""


def conta_repeticoes(lista):
    boas_combinacoes = 0
    for i in range(len(lista)):  # O(n)²
        for j in range(i + 1, len(lista)):
            if lista[i] == lista[j]:
                boas_combinacoes += 1
    return boas_combinacoes


produtos = [1, 3, 1, 1, 2, 3]
produtos_2 = [1, 1, 2, 3]

print(conta_repeticoes(produtos))
print(conta_repeticoes(produtos_2))
