const mysql = require('../lib/mysql');
const NodeCache = require('node-cache');

// Initialize a cache with a TTL (time-to-live) of 10 mins (600 seconds)
const cache = new NodeCache({ stdTTL: 600 });

const getAllTours = async () => {
    const statement = 'select * from tours;';
    const parameters = [];
    return await mysql.query(statement, parameters);
}

const getMatchesByTourName = async params => {
    const tourName = params.name;
    const cachedMatches = cache.get(tourName);
    if (cachedMatches) {
        console.log('Returning matches from cache for tour:', tourName);
        return cachedMatches;
    }
    const statement = 'SELECT * FROM matches LEFT JOIN tours ON matches.tourId = tours.id WHERE tours.name = ?';
    const parameters = [tourName];

    try {
        const matches = await mysql.query(statement, parameters);
        cache.set(tourName, matches);
        return matches;
    } catch (error) {
        console.error('Error fetching matches:', error);
        throw error;
    }
}

const getMatchesByTourId = async params => {
    const statement = 'select * from matches left join tours on matches.tourId = tours.id where tours.id = ?';
    const parameters = [ params.id ];
    return await mysql.query(statement, parameters);
}

module.exports = {
    getAllTours: getAllTours,
    getMatchesByTourName: getMatchesByTourName,
    getMatchesByTourId: getMatchesByTourId
}