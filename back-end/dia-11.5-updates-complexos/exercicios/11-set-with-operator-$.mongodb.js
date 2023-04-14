use ('cinema');
db.movies.find();

use ('cinema');
db.movies.updateOne({
    title: 'Batman',
    "cast.character": 'Batman'
}, {
  $set: { "cast.$.actor": ['Christian Bale'] }
});

use ('cinema');
db.movies.updateOne({
    title: 'Batman',
    "cast.character": 'Alfred'
}, {
  $set: { "cast.$.actor": ['Michael Caine'] }
});

use ('cinema');
db.movies.updateOne({
    title: 'Batman',
    "cast.character": 'Coringa'
}, {
  $set: { "cast.$.actor": ['Heath Ledger'] }
});