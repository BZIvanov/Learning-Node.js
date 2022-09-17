const request = require('supertest');
const { mongoDbConnect, mongoDbDisconnect } = require('../startup/db');
const app = require('../startup/express');

describe('Users routes', () => {
  beforeAll(async () => {
    await mongoDbConnect();
  });

  afterAll(async () => {
    await mongoDbDisconnect();
  });

  describe('Register user controller', () => {
    test('it should register an user successfully', async () => {
      const response = await request(app)
        .post('/api/users/register')
        .send({ name: 'Ico', email: 'ico@mail.com', password: '12345678' })
        .expect('Content-Type', /application\/json/)
        .expect('Authorization', /Bearer [A-Za-z0-9\.-]+/)
        .expect(201);

      expect(response.body).toMatchObject({
        success: true,
        message: 'User created.',
      });
    });

    test('it should return error for already registered user', async () => {
      await request(app)
        .post('/api/users/register')
        .send({ name: 'Emo', email: 'emo@mail.com', password: '12345678' })
        .expect('Content-Type', /application\/json/)
        .expect('Authorization', /Bearer [A-Za-z0-9\.-]+/)
        .expect(201);

      const secondUser = await request(app)
        .post('/api/users/register')
        .send({ name: 'Emo', email: 'emo@mail.com', password: '12345678' })
        .expect('Content-Type', /application\/json/)
        .expect(400);

      expect(secondUser.body).toMatchObject({
        success: false,
        message: 'User already exists.',
      });
    });

    test('it should return an error for missing email', async () => {
      const response = await request(app)
        .post('/api/users/register')
        .send({ name: 'Eva', password: '12345678' })
        .expect('Content-Type', /application\/json/)
        .expect(400);

      expect(response.body).toMatchObject({
        success: false,
        message: '"email" is required',
      });
    });

    test('it should return an error for too short password', async () => {
      const response = await request(app)
        .post('/api/users/register')
        .send({ name: 'Eva', email: 'eva@mail.com', password: '123' })
        .expect('Content-Type', /application\/json/)
        .expect(400);

      expect(response.body).toMatchObject({
        success: false,
        message: '"password" length must be at least 5 characters long',
      });
    });
  });

  describe('Register user controller', () => {
    beforeAll(async () => {
      await request(app)
        .post('/api/users/register')
        .send({ name: 'Eli', email: 'eli@mail.com', password: '12345678' });
    });

    test('it should login an user successfully', async () => {
      const response = await request(app)
        .post('/api/users/login')
        .send({ email: 'eli@mail.com', password: '12345678' })
        .expect('Content-Type', /application\/json/)
        .expect('Authorization', /Bearer [A-Za-z0-9\.-]+/)
        .expect(200);

      expect(response.body).toMatchObject({
        success: true,
        message: 'User login success',
      });
    });

    test('it should return error for incorrect email', async () => {
      const response = await request(app)
        .post('/api/users/login')
        .send({ email: 'eli2@mail.com', password: '12345678' })
        .expect('Content-Type', /application\/json/)
        .expect(400);

      expect(response.body).toMatchObject({
        success: false,
        message: 'Invalid email or password.',
      });
    });

    test('it should return error for incorrect password', async () => {
      const response = await request(app)
        .post('/api/users/login')
        .send({ email: 'eli@mail.com', password: '12345' })
        .expect('Content-Type', /application\/json/)
        .expect(400);

      expect(response.body).toMatchObject({
        success: false,
        message: 'Invalid email or password.',
      });
    });

    test('it should return error if email is not provided', async () => {
      const response = await request(app)
        .post('/api/users/login')
        .send({ password: '12345678' })
        .expect('Content-Type', /application\/json/)
        .expect(400);

      expect(response.body).toMatchObject({
        success: false,
        message: '"email" is required',
      });
    });
  });

  describe('Me controller', () => {
    let registerUserResponse;
    beforeAll(async () => {
      registerUserResponse = await request(app)
        .post('/api/users/register')
        .send({ name: 'Ivan', email: 'ivan@mail.com', password: '12345678' });
    });

    test('it should get user data successfully without returning the password', async () => {
      const response = await request(app)
        .get('/api/users/me')
        .set('Authorization', registerUserResponse.headers.authorization)
        .expect('Content-Type', /application\/json/)
        .expect(200);

      expect(response.body).toMatchObject({
        success: true,
        data: { name: 'Ivan', email: 'ivan@mail.com' },
      });
      expect(response.body).not.toHaveProperty('password');
    });

    test('it should return not found error for incorrect authorization header', async () => {
      const response = await request(app)
        .get('/api/users/me')
        .set(
          'Authorization',
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjVkMjczZWY2M2FjMjQwMzkzOTkyMSIsIm5hbWUiOiJJdmEiLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNjYzNDIzMDkxfQ.LE9leGallYdWGvApMjdgKIWasJ_giiYZbpZDFOMgAVA'
        )
        .expect('Content-Type', /application\/json/)
        .expect(404);

      expect(response.body).toMatchObject({
        success: false,
        message: 'User not found!',
      });
    });
  });
});
