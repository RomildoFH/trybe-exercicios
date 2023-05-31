characters_file = open("personagens-legais.txt", mode="w")

characters_file.write("Anakin Skywalker\n")
characters_file.write("Homem de ferro\n")

print("Batman", file=characters_file)

more_characters = ["Naruto\n", "Sasuke\n"]

characters_file.writelines(more_characters)

characters_file.close()
