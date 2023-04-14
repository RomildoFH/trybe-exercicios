use ('cinema');
db.movies.find();

use ('cinema');
db.movies.updateOne({
  title: 'Batman'
}, {
  $push: {
    category: { $each: [ 'villain', 'comic-based' ] }
  }
});