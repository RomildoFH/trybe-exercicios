import sys


class ListaArray:
    def __init__(self, lista=None):
        if lista is None:
            lista = []
        self.data = lista

    def __len__(self):
        # quando pedido o tamanho do array
        # retorne o tamanho de data
        return len(self.data)

    def __str__(self):
        # converte para string e exibe os valores de data
        return str(self.data)

    def get(self, index):
        # recupera o elemento no índice informado
        return self.data[index]

    def set(self, index, value):
        # insere um elemento no índice informado
        self.data.insert(index, value)

    def update(self, index, value):
        self.data[index] = value


array = ListaArray()

# sys.getsizeof retorna o tamanho da lista em bytes
array_memory_size = sys.getsizeof(array.data)
print(array_memory_size)  # 56

array.set(0, "Marcos")
array.set(1, "Patrícia")
# quando começamos as inserções o valor muda
array_memory_size = sys.getsizeof(array.data)
print(array_memory_size)  # 88

array.set(2, "Matheus")
array.set(3, "Giovana")
# como um espaço adicional é reservado o valor não é modificado
array_memory_size = sys.getsizeof(array.data)
print(array_memory_size)  # 88

# Exercício 3
exemplo = ListaArray([1, 2, 3, 4, 5])
print(exemplo.data)
exemplo.update(2, 10)
print(exemplo.data)  # [1, 2, 10, 4, 5]
