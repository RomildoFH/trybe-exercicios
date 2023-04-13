use('class')
db.movies.find();

use('class')
db.movies.updateMany({}, {
  $unset: {
    budget: "",
    estimatedBudget: "",
  }
})