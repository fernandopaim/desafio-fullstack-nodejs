const { statisticsService } = require('../services');

module.exports = (req, res, next) => {
  statisticsService.updateStatisticByRoute(req.url)
  next()
}
