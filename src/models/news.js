const mysql = require('../lib/mysql');

const createNews = async params => {
  const statement = 'insert into news (id, title, description, matchId, tourId, sportId) values (?, ?, ?, ?, ?, ?)';
  const parameters = [ params.id, params.title, params.description, params.matchId, params.tourId, params.sportId ];
  return await mysql.query(statement, parameters);
}

const getNewsByTourId = async params => {
  const statement = 'select * from news where news.tourId = ?';
  const parameters = [params.tourId];
  return await mysql.query(statement, parameters);
}

const getNewsByMatchId = async params => {
  const statement = 'select * from news where news.matchId = ?';
  const parameters = [params.matchId];
  return await mysql.query(statement, parameters);
}

const getNewsBySportId = async params => {
  const statement = 'select n.* from news n inner join tours t on n.tourId = t.id where t.sportId = ?';
  const parameters = [params.sportId];
  return await mysql.query(statement, parameters);
}

module.exports = {
  createNews: createNews,
  getNewsByTourId: getNewsByTourId,
  getNewsByMatchId: getNewsByMatchId,
  getNewsBySportId: getNewsBySportId
}