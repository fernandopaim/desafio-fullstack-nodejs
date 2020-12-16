const request = require('supertest');
const httpStatus = require('http-status');
const app = require('../../src/app');
const setupTestDB = require('../utils/setupTestDB');
const { Statistic } = require('../../src/models');

setupTestDB();

describe('Statistic routes', () => {
  describe('POST /v1/statistics/getAll', () => {
    let newStatistic;

    test('should return 201 and successfully create new statistic if data is ok', async () => {
      const res = await request(app)
        .post('v1/statistics/getAll')
        .expect(httpStatus.OK)
      console.log(res)

      // expect(res.body).not.toHaveProperty('password');
      // expect(res.body).toEqual({ id: expect.anything(), name: newStatistic.name, email: newStatistic.email, role: newStatistic.role });

      // const dbStatistic = await Statistic.findById(res.body.id);
      // expect(dbStatistic).toBeDefined();
      // expect(dbStatistic.password).not.toBe(newStatistic.password);
      // expect(dbStatistic).toMatchObject({ name: newStatistic.name, email: newStatistic.email, role: newStatistic.role });
    });

    // test('should be able to create an admin as well', async () => {
    //   await insertStatistics([admin]);
    //   newStatistic.role = 'admin';

    //   const res = await request(app)
    //     .post('/v1/statistics')
    //     .set('Authorization', `Bearer ${adminAccessToken}`)
    //     .send(newStatistic)
    //     .expect(httpStatus.CREATED);

    //   expect(res.body.role).toBe('admin');

    //   const dbStatistic = await Statistic.findById(res.body.id);
    //   expect(dbStatistic.role).toBe('admin');
    // });

    // test('should return 401 error is access token is missing', async () => {
    //   await request(app).post('/v1/statistics').send(newStatistic).expect(httpStatus.UNAUTHORIZED);
    // });

    // test('should return 403 error if logged in statistic is not admin', async () => {
    //   await insertStatistics([statisticOne]);

    //   await request(app)
    //     .post('/v1/statistics')
    //     .set('Authorization', `Bearer ${statisticOneAccessToken}`)
    //     .send(newStatistic)
    //     .expect(httpStatus.FORBIDDEN);
    // });

    // test('should return 400 error if email is invalid', async () => {
    //   await insertStatistics([admin]);
    //   newStatistic.email = 'invalidEmail';

    //   await request(app)
    //     .post('/v1/statistics')
    //     .set('Authorization', `Bearer ${adminAccessToken}`)
    //     .send(newStatistic)
    //     .expect(httpStatus.BAD_REQUEST);
    // });

    // test('should return 400 error if email is already used', async () => {
    //   await insertStatistics([admin, statisticOne]);
    //   newStatistic.email = statisticOne.email;

    //   await request(app)
    //     .post('/v1/statistics')
    //     .set('Authorization', `Bearer ${adminAccessToken}`)
    //     .send(newStatistic)
    //     .expect(httpStatus.BAD_REQUEST);
    // });

    // test('should return 400 error if password length is less than 8 characters', async () => {
    //   await insertStatistics([admin]);
    //   newStatistic.password = 'passwo1';

    //   await request(app)
    //     .post('/v1/statistics')
    //     .set('Authorization', `Bearer ${adminAccessToken}`)
    //     .send(newStatistic)
    //     .expect(httpStatus.BAD_REQUEST);
    // });

    // test('should return 400 error if password does not contain both letters and numbers', async () => {
    //   await insertStatistics([admin]);
    //   newStatistic.password = 'password';

    //   await request(app)
    //     .post('/v1/statistics')
    //     .set('Authorization', `Bearer ${adminAccessToken}`)
    //     .send(newStatistic)
    //     .expect(httpStatus.BAD_REQUEST);

    //   newStatistic.password = '1111111';

    //   await request(app)
    //     .post('/v1/statistics')
    //     .set('Authorization', `Bearer ${adminAccessToken}`)
    //     .send(newStatistic)
    //     .expect(httpStatus.BAD_REQUEST);
    // });

    // test('should return 400 error if role is neither statistic nor admin', async () => {
    //   await insertStatistics([admin]);
    //   newStatistic.role = 'invalid';

    //   await request(app)
    //     .post('/v1/statistics')
    //     .set('Authorization', `Bearer ${adminAccessToken}`)
    //     .send(newStatistic)
    //     .expect(httpStatus.BAD_REQUEST);
    // });
  });
});
