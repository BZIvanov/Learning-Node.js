const request = require('supertest');
const { mongoDbConnect, mongoDbDisconnect } = require('../startup/db');
const app = require('../startup/express');

describe('Movies routes', () => {
  let registerUserResponse;

  beforeAll(async () => {
    await mongoDbConnect();

    registerUserResponse = await request(app).post('/v1/users/register').send({
      name: 'Iva',
      email: 'iva@mail.com',
      password: '12345',
    });
  });

  afterAll(async () => {
    await mongoDbDisconnect();
  });

  describe('Get movies controller', () => {
    test('it should get movies successfully', async () => {
      const response = await request(app)
        .get('/v1/movies')
        .expect('Content-Type', /application\/json/)
        .expect(200);

      expect(response.body).toMatchObject({ success: true, data: [] });
    });
  });

  describe('Get movie controller', () => {
    let createMovieResponse;
    beforeAll(async () => {
      createMovieResponse = await request(app)
        .post('/v1/movies')
        .set('Authorization', registerUserResponse.headers.authorization)
        .send({ name: 'My cool movie' });
    });

    test('it should get a movie successfully', async () => {
      const response = await request(app)
        .get(`/v1/movies/${createMovieResponse.body.data._id}`)
        .expect('Content-Type', /application\/json/)
        .expect(200);

      expect(response.body).toMatchObject({
        success: true,
        data: { _id: createMovieResponse.body.data._id, name: 'My cool movie' },
      });
    });

    test('it should return not found error for incorrect movie id', async () => {
      const response = await request(app)
        .get(`/v1/movies/6314b761effb4f7520c5045c`)
        .expect('Content-Type', /application\/json/)
        .expect(404);

      expect(response.body).toMatchObject({
        success: false,
        message: 'Movie not found!',
      });
    });
  });

  describe('Create movies controller', () => {
    test('it should create movie successfully', async () => {
      const createMovieResponse = await request(app)
        .post('/v1/movies')
        .set('Authorization', registerUserResponse.headers.authorization)
        .send({ name: 'Superhero' })
        .expect('Content-Type', /application\/json/)
        .expect(201);

      expect(createMovieResponse.body).toMatchObject({
        success: true,
        data: { __v: 0, name: 'Superhero' },
      });
    });

    test('it should return bad request for incorrect key name', async () => {
      const createMovieResponse = await request(app)
        .post('/v1/movies')
        .set('Authorization', registerUserResponse.headers.authorization)
        .send({ incorrectKey: 'Superhero' })
        .expect('Content-Type', /application\/json/)
        .expect(400);

      expect(createMovieResponse.body).toMatchObject({
        message: '"name" is required',
        success: false,
      });
    });

    test('it should return bad request for too short movie name', async () => {
      const createMovieResponse = await request(app)
        .post('/v1/movies')
        .set('Authorization', registerUserResponse.headers.authorization)
        .send({ name: 'XS' })
        .expect('Content-Type', /application\/json/)
        .expect(400);

      expect(createMovieResponse.body).toMatchObject({
        message: '"name" length must be at least 5 characters long',
        success: false,
      });
    });

    test('it should return bad request for too long movie name', async () => {
      const createMovieResponse = await request(app)
        .post('/v1/movies')
        .set('Authorization', registerUserResponse.headers.authorization)
        .send({
          name: 'Very long test string for movie name. Very long test string for movie name.',
        })
        .expect('Content-Type', /application\/json/)
        .expect(400);

      expect(createMovieResponse.body).toMatchObject({
        message:
          '"name" length must be less than or equal to 50 characters long',
        success: false,
      });
    });

    test('it should return unauthorized if authorization header is not provided', async () => {
      const createMovieResponse = await request(app)
        .post('/v1/movies')
        .send({ name: 'Supermovie' })
        .expect('Content-Type', /application\/json/)
        .expect(401);

      expect(createMovieResponse.body).toMatchObject({
        message: 'Access denied. No token provided',
        success: false,
      });
    });

    test('it should return unauthorized if authorization header is incorrect', async () => {
      const createMovieResponse = await request(app)
        .post('/v1/movies')
        .set('Authorization', 'Bearer invalidtoken')
        .send({ name: 'Supermovie' })
        .expect('Content-Type', /application\/json/)
        .expect(400);

      expect(createMovieResponse.body).toMatchObject({
        message: 'Invalid token',
        success: false,
      });
    });
  });

  describe('Delete movie controller', () => {
    let createMovieResponse;
    beforeAll(async () => {
      createMovieResponse = await request(app)
        .post('/v1/movies')
        .set('Authorization', registerUserResponse.headers.authorization)
        .send({ name: 'My cool movie' });
    });

    test('it should return forbidden error if the user is not admin', async () => {
      const response = await request(app)
        .delete(`/v1/movies/${createMovieResponse.body.data._id}`)
        .set('Authorization', registerUserResponse.headers.authorization)
        .expect('Content-Type', /application\/json/)
        .expect(403);

      expect(response.body).toMatchObject({
        success: false,
        message:
          'Access denied. You are not authorized to complete this action.',
      });
    });
  });
});
