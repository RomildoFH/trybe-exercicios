use('class')
db.movies.find();

use('class')
db.movies.updateMany({
  $or: [
    { title: 'Batman' },
    { title: 'Home Alone' },
  ]
}, {
  $max: {
    imdbRating: 17,
  }
})