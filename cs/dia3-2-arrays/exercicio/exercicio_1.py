"""
Em um software monitor, o qual verifica a resiliência de outro software,
precisamos saber o tempo máximo que um software permaneceu sem instabilidades.
Para isto, a cada hora é feito uma requisição ao sistema para verificamos
se está tudo bem.
Supondo um array que contenha os estados coletados por nosso software,
calcule quanto tempo máximo que o servidor permaneceu sem instabilidades.

1 - OK
0 - Instabilidades

valores_coletados = [0, 1, 1, 1, 0, 0, 1, 1]
resultado = 3

valores_coletados = [1, 1, 1, 1, 0, 0, 1, 1]
resultado = 4

"""
valores_coletados = [0, 1, 1, 1, 0, 0, 1, 1]

valores_coletados_2 = [1, 1, 1, 1, 0, 0, 1, 1]


def calcula_tempo_max(list):  # O(n) pois utiliza um for
    max_repete_times = 0
    current_repete_times = 0
    for number in list:
        if number == 1:
            current_repete_times += 1
        else:
            current_repete_times = 0
        if current_repete_times > max_repete_times:
            max_repete_times = current_repete_times
    return max_repete_times


print(calcula_tempo_max(valores_coletados))
print(calcula_tempo_max(valores_coletados_2))
