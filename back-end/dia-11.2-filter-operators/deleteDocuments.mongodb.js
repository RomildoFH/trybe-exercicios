use('business')
db.restaurants.deleteOne({ cuisine: 'Ice Cream, Gelato, Yogurt, Ices' })

use('business')
db.restaurants.deleteMany({ cuisine: "American" });