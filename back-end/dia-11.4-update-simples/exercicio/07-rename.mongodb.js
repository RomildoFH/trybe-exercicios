use('class')
db.movies.find();

use('class')
db.movies.updateOne({
  title: 'Batman'
}, {
  $rename: {
    budget: 'estimatedBudget'
  }
})