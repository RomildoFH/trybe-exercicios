use ('cinema');
db.movies.find();

use ('cinema');
db.movies.updateOne({
    title: 'Batman',
    "cast.character": 'Batman'
}, {
  $push: {
    "cast.$.actor": {
      $each: [
        "Michael Keaton", "Val Kilmer", "George Clooney"
      ],
      $sort: 1,
    }
  }
});

// Mesma função do anterior
// use ('cinema');
// db.movies.updateOne(
//   { title: "Batman", "cast.character": "Batman" },
//   {
//     $push: {
//       "cast.$[elem].actor": {
//         $each: ["Michael Keaton", "Coruja"],
//         $sort: 1
//       }
//     }
//   },
//   {
//     arrayFilters: [{ "elem.character": "Batman" }]
//   }
// );