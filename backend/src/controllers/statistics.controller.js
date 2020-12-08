const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { statisticsService } = require('../services');

const statistic = catchAsync(async (req, res) => {
  res.status(httpStatus.OK).send(await statisticsService.queryStatistics());
});

module.exports = {
  statistic,
};
