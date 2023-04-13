use('class')
db.movies.find();

use('class')
db.movies.updateOne({
  title: 'Home Alone'
}, {
  $min: {
    budget: 5
  }
})