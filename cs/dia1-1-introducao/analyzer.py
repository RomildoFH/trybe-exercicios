def analyze(text):
    report = ""
    count_words = len(text.split(" "))
    report += f"Número de palavras é {count_words}\n"
    # \n quebra linha
    char_counter = dict()

    for char in text:
        if char in char_counter:
            char_counter[char] += 1
        else:
            char_counter[char] = 1
    report += f"Ocorrência por caracter: {char_counter}"
    return report


text_to_analyze = "Lorem ipsum dolor sit"
print(analyze(text_to_analyze))
