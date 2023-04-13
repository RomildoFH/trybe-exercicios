use('business')
db.restaurants.countDocuments({
  rating: { $not: { $lte: 5 } }
})

use('business')
db.restaurants.countDocuments({
  $or: [
    { rating: { $gte: 6 } },
    { borough: 'Brooklyn' }
  ]
})

use('business')
db.restaurants.countDocuments({
  $and: [
    { borough: { $in: [ 'Queens', 'Staten Island', 'Brooklyn' ] } },
    { rating: { $gt: 4 } }
  ]
})

use('business')
db.restaurants.countDocuments({
  $nor: [
    { rating: 1 },
    { cuisine: 'American' }
  ]
})

use('business')
db.restaurants.countDocuments({
  $and: [
    {
      $or: [
        { rating: { $gt: 6, $lt: 10 } },
      ]
    },
    {
      $or: [
        { borough: 'Brooklyn' },
        { cuisine: { $ne: 'Delicatessen' } }
      ]
    }
  ]
})
