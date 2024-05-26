const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');

// const NewsController = require('../../src/controllers/news');
// const NewsRoutes = require('../../src/routes/news');
const { app } = require('../../index');
describe('News Routes', () => {
    let server;

    beforeAll((done) => {
        
        server = app.listen(done);
    });

    afterAll((done) => {
        server.close(done);
    });
    it('should create news', async () => {
        const res = await request(app)
            .post('/news')
            .send({
                // id: 100,
                title: 'Test News',
                description: 'This is a test news.',
                matchId: 1,
                tourId: 1,
                sportId: 1
            });

        expect(res.statusCode).toBe(200);
        
    });

    it('should fetch news by sport ID', async () => {
        const sportId = 1;
        const res = await request(app).get(`/news/sport?sportId=${sportId}`);

        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    it('should fetch news by match ID', async () => {
        const matchId = 1;
        const res = await request(app).get(`/news/match?matchId=${matchId}`);

        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    it('should fetch news by tour ID', async () => {
        const tourId = 1;
        const res = await request(app).get(`/news/tour?tourId=${tourId}`);

        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

});