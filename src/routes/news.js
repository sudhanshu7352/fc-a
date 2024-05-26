const News = require('../controllers/news');
// const bodyparser = require('bodyParser');

module.exports = function (app) {
  app.post('/news', (req, res) => {
    try {
      return res.json(News.createNews(req.body));
    } catch (err) {
      throw new Error('Error: ' + err);
    }
  });


  // API for getting news by tour id --> news/tour?tourId=<tour_id>
  app.route('/news/tour').get(async (req, res, next) => {
    try {
      let params = req.query;
      let result = await News.getNewsByTourId(params);
      return res.json(result);
    } catch (err) {
      return next(err);
    }
  });

  // API for getting news by match id --> news/match?matchId=<match_id>
  app.route('/news/match').get(async (req, res, next) => {
    try {
      let params = req.query;
      let result = await News.getNewsByMatchId(params);
      return res.json(result);
    } catch (err) {
      return next(err);
    }
  });

  // API for getting news by sport id --> news/sport?sportId=<sport_id>
  app.route('/news/sport').get(async (req, res, next) => {
    try {
      let params = req.query;
      let result = await News.getNewsBySportId(params);
      return res.json(result);
    } catch (err) {
      return next(err);
    }
  });

}