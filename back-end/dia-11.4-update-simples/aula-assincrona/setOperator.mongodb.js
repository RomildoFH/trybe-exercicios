use ('conteudo_trybe');
db.products.find();

use ('conteudo_trybe');
db.products.updateOne(
  { _id: 100 },
  { $set: {
      quantity: 500,
      details: { model: "14Q3", make: "xyz" },
      tags: [ "coats", "outerwear", "clothing" ]
    }
  }
);

use ('conteudo_trybe');
db.products.updateOne(
  { _id: 100 },
  { $set: { "details.make": "zzz" } }
);

use ('conteudo_trybe');
db.products.updateOne(
  { _id: 100 },
  { $set: {
      "tags.1": "rain gear",
      "ratings.0.rating": 2
    }
  }
);