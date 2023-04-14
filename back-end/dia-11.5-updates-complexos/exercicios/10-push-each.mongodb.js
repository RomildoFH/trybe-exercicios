use ('cinema');
db.movies.find();

use ('cinema');
db.movies.updateOne({
    title: 'Batman',
}, {
  $push: {
    cast: {
      $each: [
        {
          "character": "Batman"
        },
        {
          "character": "Alfred"
        },
        {
          "character": "Coringa"
        }
      ]
    }
  }
});
