use('class')
db.movies.find();

use('class')
db.movies.updateOne({
  title: 'Home Alone'
}, {
  $set: {
    budget: 15,
    imdbRating: 5.5
  }
})