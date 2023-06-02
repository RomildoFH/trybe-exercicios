# dado um array, troque o número pelo maior valor a sua direita,
# caso não haja um numero maior a sua direita, permanece ele mesmo.
# entrada: [2, 1, 2, 3, 0, 5, 1, 2, 3]

input = [2, 1, 2, 3, 0, 5, 1, 2, 3]

DESCRIPTION = "Dois loops utilizando slicing no segundo loop"
TIME_COMPLEXITY = "O(n²)"
SPACE_COMPLEXITY = "0(n)"  # o slicing cria uma nova lista


def number_substituition(numbers: list[int]):
    for i in range(len(numbers)):
        max_number = numbers[i]
        for new_element in numbers[i + 1:]:  # slicing [i + 1: posição final]
            if new_element > max_number:
                max_number = new_element
        numbers[i] = max_number


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
