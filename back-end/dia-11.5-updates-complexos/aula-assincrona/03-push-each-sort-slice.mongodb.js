use ('sales');
db.dropDatabase();

use ('sales');
db.supplies.find();

use ('sales');
db.supplies.updateOne(
  { _id: 1 },
  {
    $push: {
      items: {
        $each: [
          {
            "name" : "notepad",
            "price" : 35.29,
            "quantity" : 2,
          },
          {
            "name": "envelopes",
            "price": 19.95,
            "quantity": 8,
          },
          {
            "name": "pens",
            "price": 56.12,
            "quantity": 5,
          },
        ],
        $sort: { "quantity": -1 },
        $slice: 2,
      },
    },
  },
  { upsert: true },
);