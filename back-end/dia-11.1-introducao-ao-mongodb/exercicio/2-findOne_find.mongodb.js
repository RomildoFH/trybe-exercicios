use('exercicio11_1')
db.bios.find({_id: 8}, {_id: true, name: true}) // Retorna Array de objetos

use('exercicio11_1')
db.bios.findOne({_id: 8}, {_id: true, name: true}) //Retorna objeto