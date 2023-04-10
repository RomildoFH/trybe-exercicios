use('exercicio11_1')
db.bios.find({"name.first": "John"}, {}).pretty()