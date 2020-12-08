const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');
const { roles } = require('../config/roles');

const statisticsSchema = mongoose.Schema(
  {
    route: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      notnull: true
    },
    count: {
      type: Number,
      required: true,
      trim: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
statisticsSchema.plugin(toJSON);
statisticsSchema.plugin(paginate);

/**
 * @typedef Statistics
 */
const Statistics = mongoose.model('Statistics', statisticsSchema);

module.exports = Statistics;
