from collections import Counter


class Estatistica:
    def __init__(self, numbers):
        self.numbers = numbers

    def media(self):
        return (sum(number for number in self.numbers)/(len(self.numbers)))

    def mediana(self):
        ordered = sorted(self.numbers)
        length = len(ordered) // 2

        if length % 2 == 0:
            return (ordered[length - 1] + ordered[length + 1]) / 2
        else:
            return ordered[length]

    def moda(self):
        return (Counter(self.numbers).most_common())
