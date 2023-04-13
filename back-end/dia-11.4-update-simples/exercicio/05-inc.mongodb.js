use('class')
db.movies.find();

use('class')
db.movies.updateOne({
  title: 'Home Alone'
}, {
  $inc: {
    budget: 5
  }
})