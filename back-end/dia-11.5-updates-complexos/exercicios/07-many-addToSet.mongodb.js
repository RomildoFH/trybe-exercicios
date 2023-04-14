use ('cinema');
db.movies.find();

use ('cinema');
db.movies.updateMany({
  $or:[ 
    {title: 'Batman'},
    {title: 'Home Alone'}
  ]
}, {
  $addToSet: {
    category: { $each: [ "90's" ] }
  }
});
