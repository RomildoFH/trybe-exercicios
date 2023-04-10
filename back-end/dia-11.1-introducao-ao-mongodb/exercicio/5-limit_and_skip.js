use('exercicio11_1')
db.bios.find().limit(3).pretty()

use('exercicio11_1')
db.bios.find().limit(2).skip(5)