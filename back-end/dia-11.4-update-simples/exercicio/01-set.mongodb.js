use('class')
db.movies.find()

use('class')
db.movies.updateOne({
  title: 'Batman'
}, {
  $set: {
    imdbRating: 7.7
  }
})