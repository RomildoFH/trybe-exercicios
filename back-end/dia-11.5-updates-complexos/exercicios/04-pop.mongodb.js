use ('cinema');
db.movies.find();

use ('cinema');
db.movies.updateOne({
  title: 'Batman'
}, {
  $pop: {
    category: -1,
  }
});