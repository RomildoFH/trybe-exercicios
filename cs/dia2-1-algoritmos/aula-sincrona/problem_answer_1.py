# dado um array, troque o número pelo maior valor a sua direita,
# caso não haja um numero maior a sua direita, permanece ele mesmo.
# entrada: [2, 1, 2, 3, 0, 5, 1, 2, 3]

input = [2, 1, 2, 3, 0, 5, 1, 2, 3]

DESCRIPTION = "Dois loops simples"
TIME_COMPLEXITY = "O(n²)"
SPACE_COMPLEXITY = "0(2)"


def number_substituition(numbers: list[int]):
    result = []
    for i in range(len(numbers)):
        max_number = numbers[i]
        for j in range(len(numbers)):
            if j > i and numbers[j] > max_number:
                max_number = numbers[j]
        result.append(max_number)
    return result


"""
n(1 + (n * 3) + 1)
n(2 + 3n)
2n + 3n²
O(n²)
"""


def test_number_substituition():
    numbers_list = [2, 1, 2, 3, 0, 5, 1, 2, 3]
    new_list = [5, 5, 5, 5, 5, 5, 3, 3, 3]
    assert number_substituition(numbers_list) == new_list
