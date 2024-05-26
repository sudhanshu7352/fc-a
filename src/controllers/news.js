const News = require('../models/news');
const Match = require('../models/match');
const Tour = require('../models/tour');

const createNews = async params => {
    return await News.createNews(params);
}

const getNewsByMatchId = async params => {
  const { matchId } = params;

  if (!matchId) {
      throw new Error('Missing required parameter: matchId');
  }

  return await News.getNewsByMatchId(params);
}

const getNewsByTourId = async params => {
  const { tourId } = params;

  if (!tourId) {
      throw new Error('Missing required parameter: tourId');
  }

  return await News.getNewsByTourId(params);
}

const getNewsBySportId = async params => {
  const { sportId } = params;

  if (!sportId) {
      throw new Error('Missing required parameter: sportId');
  }

  return await News.getNewsBySportId(params);
}

module.exports = {
  createNews: createNews,
  getNewsByTourId: getNewsByTourId,
  getNewsByMatchId: getNewsByMatchId,
  getNewsBySportId: getNewsBySportId
}