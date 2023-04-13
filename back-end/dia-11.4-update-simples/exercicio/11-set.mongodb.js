use('class')
db.movies.find();

use('class')
db.movies.updateMany({}, {
  $set: {
    sequels: 0
  }
})