use('business')
db.restaurants.find({}, {})

use('business')
db.restaurants.find({}, {}).sort({ name: 1 })

use('business')
db.restaurants.find({}, {}).sort({ rating: -1 })

use('business')
db.restaurants.find({}, {}).sort({ rating: -1, name: 1 })