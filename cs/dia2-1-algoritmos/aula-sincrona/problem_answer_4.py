# dado um array, troque o número pelo maior valor a sua direita,
# caso não haja um numero maior a sua direita, permanece ele mesmo.
# entrada: [2, 1, 2, 3, 0, 5, 1, 2, 3]

input = [2, 1, 2, 3, 0, 5, 1, 2, 3]

DESCRIPTION = "Um loop reverso"
TIME_COMPLEXITY = "O(n)"
SPACE_COMPLEXITY = "0(1)"


def number_substituition(numbers: list[int]):
    last_position = len(numbers) - 1
    max_number = numbers[last_position]
    for i in range(last_position, -1, -1):  # da última para primeria posição
        if max_number > numbers[i]:
            numbers[i] = max_number
        else:
            max_number = numbers[i]


"""
n(1 + (n * 3) + 1)
n(2 + 3n)
2n + 3n²
O(n²)
"""


def test_number_substituition():
    numbers_list = [2, 1, 2, 3, 0, 5, 1, 2, 3]
    number_substituition(numbers_list)
    assert numbers_list == [5, 5, 5, 5, 5, 5, 3, 3, 3]
