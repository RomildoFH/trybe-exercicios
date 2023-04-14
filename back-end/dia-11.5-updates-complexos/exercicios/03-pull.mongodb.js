use ('cinema');
db.movies.find();

use ('cinema');
db.movies.updateOne({
  title: 'Batman'
}, {
  $pull: {
    category: 'action',
  }
});