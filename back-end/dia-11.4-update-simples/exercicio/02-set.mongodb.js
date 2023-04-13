use('class')
db.movies.find();

use('class')
db.movies.updateOne({
  title: 'Godzilla'
}, {
  $set: {
    budget: 1
  }
})