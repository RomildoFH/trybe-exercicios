use ('cinema');
db.movies.find();

use ('cinema');
db.movies.updateOne({
  title: 'Batman'
}, {
  $addToSet: {
    category: { $each: [ 'action' ] }
  }
});
