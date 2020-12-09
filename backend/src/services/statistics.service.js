const httpStatus = require('http-status')
const { Statistic } = require('../models')
const ApiError = require('../utils/ApiError')

/**
 * Query for statistics
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryStatistics = async (filter, options = {}) => {
  const uptime = await Statistic.findOne({ route: 'uptime' })
  const elapsedTime = Math.floor((Date.now() - Date.parse(uptime.createdAt))/60000)
  const statistics = await Statistic.find({ route: {$ne: 'uptime'}, ...filter }, options)
  return  { uptime: {
            elapsedTime: `${elapsedTime} minute(s)`,
            activeAt: uptime.createdAt
          }, ...statistics }
}

/**
 * Get statistic by route
 * @param {string} route
 * @returns {Promise<Statistic>}
 */
const getStatisticByRoute = async (route) => {
  return Statistic.findOne({ route: route })
}

/**
 * Update statistic by route
 * @param {string} route
 * @returns {Promise<Statistic>}
 */
const updateStatisticByRoute = async (route) => {
  const statistic = await getStatisticByRoute(route)

  if (!statistic)
    return Statistic.create({ route: route, count: 1 })

  statistic.count++
  return await statistic.save()
}

module.exports = {
  queryStatistics,
  getStatisticByRoute,
  updateStatisticByRoute,
}
