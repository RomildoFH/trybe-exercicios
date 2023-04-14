use ('cinema');
db.movies.find();

use ('cinema');
db.movies.updateOne({
  title: 'Batman'
}, {
  $push: {
    category: 'superhero',
  }
});

use ('cinema');
db.movies.findOne({ title: 'Batman' });