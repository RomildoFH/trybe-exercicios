use ('cinema');
db.movies.find();

use ('cinema');
db.movies.updateOne({
    title: 'Home Alone',
    "cast.actor": 'Daniel Stern'
}, {
  $set: {
    "cast.$.character": 'Marv'
  }
});
