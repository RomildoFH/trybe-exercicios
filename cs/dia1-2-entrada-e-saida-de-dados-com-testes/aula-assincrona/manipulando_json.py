import json  # json é um modulo que vem embutido, porém precisamos importá-lo


with open("pokemons.json") as file:
    content = file.read()  # leitura do arquivo
    # o conteúdo é transformado em estrutura python equivalente, dicionário
    # neste caso.
    pokemons = json.loads(content)["results"]
    # acessamos a chave results que é onde contém nossa lista de pokemons

print(pokemons[0])  # imprime o primeiro pokemon da lista
