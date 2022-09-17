const request = require('supertest');
const app = require('../startup/express');

describe('Users routes', () => {
  describe('Not found controller', () => {
    test('it should return not found for get on /test route', async () => {
      const response = await request(app)
        .get('/test')
        .expect('Content-Type', /application\/json/)
        .expect(404);

      expect(response.body).toMatchObject({
        success: false,
        message: 'GET on route /test not found.',
      });
    });

    test('it should return not found for post on /test route', async () => {
      const response = await request(app)
        .post('/test')
        .expect('Content-Type', /application\/json/)
        .expect(404);

      expect(response.body).toMatchObject({
        success: false,
        message: 'POST on route /test not found.',
      });
    });
  });
});
