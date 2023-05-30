def concat(*strings):
    # Equivalente a um ", ".join(strings), que concatena os elementos de um iterável em uma string utilizando um separador
    # Nesse caso a string resultante estaria separada por vírgula
    final_string = ""
    for string in strings:
        final_string += string
        if not string == strings[-1]:
            final_string += ', '
    return final_string


# pode ser chamado com 2 parâmetros
concat("Carlos", "Cristina")  # saída: "Carlos, Cristina"

# pode ser chamado com um número n de parâmetros
concat("Carlos", "Cristina", "Maria")  # saída: "Carlos, Cristina, Maria"

# dict é uma função que já vem embutida no python
# cria um dicionário utilizando as chaves passadas
dict(nome="Felipe", sobrenome="Silva", idade=25)

# o número de parâmetros passados para a função pode variar
dict(nome="Ana", sobrenome="Souza", idade=21, turma=1)
