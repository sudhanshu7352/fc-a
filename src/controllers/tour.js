const Tour = require('../models/tour');

const getAllTours = async () => {
    return await Tour.getAllTours();
}

const getMatchesByTourName = async params => {
    const { name } = params;

    if (!name) {
        throw new Error('Missing required parameter: name');
    }

    return await Tour.getMatchesByTourName(params);
}

const getMatchesByTourId = async params => {
    return await Tour.getMatchesByTourId(params);
}

module.exports = {
    getAllTours: getAllTours,
    getMatchesByTourName: getMatchesByTourName,
    getMatchesByTourId: getMatchesByTourId
}