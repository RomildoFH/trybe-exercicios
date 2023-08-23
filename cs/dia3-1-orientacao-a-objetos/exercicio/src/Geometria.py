import math


class FiguraGeometrica:
    def area(self):
        pass

    def perimetro(self):
        pass


class Retangulo(FiguraGeometrica):
    def __init__(self, base, altura):
        self.base = base
        self.altura = altura

    def area(self):
        return self.base * self.altura

    def perimetro(self):
        return ((2 * self.altura) + (2 * self.base))


class Quadrado(FiguraGeometrica):
    def __init__(self, lado):
        self.lado = lado

    def area(self):
        return self.lado ** 2

    def perimetro(self):
        return (self.lado * 4)


class Triangulo(FiguraGeometrica):
    def __init__(self, base, altura):
        self.base = base
        self.altura = altura

    def area(self):
        return ((self.base * self.altura) / 2)

    def perimetro(self):
        hipotenusa = ((self.base / 2) ** 2 + (self.altura) ** 2) ** (1/2)
        print(f"a hipotenusa é {hipotenusa}")
        return ((hipotenusa * 2) + self.base)


class Circulo(FiguraGeometrica):
    def __init__(self, raio):
        self.raio = raio

    def area(self):
        return ((self.raio ** 2) * math.pi)

    def perimetro(self):
        return (2 * math.pi * self.raio)
