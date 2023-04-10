use('exercicio11_1')
db.books.find({}, { title: 1, isbn: 1, pageCount: 1, _id: 0 }).limit(3)

use('exercicio11_1')
db.books.find(
  {
    status: 'MEAP'
  },
  {
    title: 1,
    authors: 1,
    status: 1
  })
  .skip(5)
  .limit(10)
  .pretty()