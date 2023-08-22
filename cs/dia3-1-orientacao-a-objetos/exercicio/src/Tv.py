class Tv:

    def __init__(self, tamanho):
        self.__volume = 50
        self.__canal = 1
        self.__tamanho = tamanho
        self.__ligada = False

    def aumentar_volume(self):
        if self.__volume < 99:
            self.__volume += 1
        else:
            raise ValueError("O volume está no máximo")
        print(f"Volume: {self.__volume}")

    def diminuir_volume(self):
        if self.__volume > 0:
            self.__volume -= 1
        else:
            raise ValueError("O volume está no mínimo")
        print(f"Volume: {self.__volume}")

    def modificar_canal(self, canal):
        if 1 <= canal <= 99:
            self.__canal = canal
        else:
            raise ValueError("Canal inexistente")
        print(f"Você está assistindo o canal {self.__canal}")

    def ligar_desligar(self):
        if self.__ligada:
            self.__ligada = False
        else:
            self.__ligada = True

    @property
    def tamanho(self):
        return self.__tamanho

    @property
    def ligada(self):
        return self.__ligada
