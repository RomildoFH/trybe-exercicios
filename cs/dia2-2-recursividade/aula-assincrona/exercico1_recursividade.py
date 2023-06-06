# Número passado por parâmetro à função: 4

# Execução: 4 + 3 + 2 + 1

# Resultado: 10

def sum_recursive(n):
    if n == 0:
        return 0
    else:
        return n + sum_recursive(n - 1)
