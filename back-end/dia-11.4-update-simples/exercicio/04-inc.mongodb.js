use('class')
db.movies.find();

use('class')
db.movies.updateOne({
  title: 'Batman'
}, {
  $inc: {
    imdbRating: 2
  }
})