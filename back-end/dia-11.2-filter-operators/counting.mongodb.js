use('business')
db.restaurants.find({}, {})

use('business')
db.restaurants.countDocuments({ borough: { $in: [ 'Queens', 'Staten Island', 'Bronx' ] } })

use('business')
db.restaurants.countDocuments({ cuisine: { $ne: 'American' } })

use('business')
db.restaurants.countDocuments({ rating: { $gte: 8 } })

use('business')
db.restaurants.countDocuments({ rating: { $lte: 4 } })

use('business')
db.restaurants.countDocuments({ rating: { $nin: [5, 6, 7 ] } })
