const request = require('supertest')
const app = require('@root/src/app');
const server = require('@root/src/server');

describe("Get Endpoints", () => {
  test('should get a product information correctly with promise approach', async () => {
    const res = await request(app)
      .get('/product/'+ process.hrtime.bigint() + '/promise')
    expect(res.statusCode).toEqual(200)
  })

  test('should get a error message correctly with promise approach', async () => {
    const res = await request(app)
      .get('/product/0/promise')
    expect(res.statusCode).toEqual(200)
  })

  test('should get a error message correctly with async approach', async () => {
    const res = await request(app)
      .get('/product/0/async')
    expect(res.statusCode).toEqual(200)
  })

  test('should get a product information correctly with async approach', async () => {
    const res = await request(app)
      .get('/product/'+ process.hrtime.bigint() + '/async')
    expect(res.statusCode).toEqual(200)
  })

  afterAll(done => {
    //This will help closing server after running test, and help avoid warning message: "Jest did not exit one second after the test run has completed."
    // View more in README.
    server.close(done);
  });
});