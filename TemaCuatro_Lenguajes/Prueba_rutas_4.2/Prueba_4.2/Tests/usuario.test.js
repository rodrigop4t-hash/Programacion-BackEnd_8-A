import request from 'supertest';
import app from '../index.js';

describe('GET /', () => {

  test('debe responder correctamente', async () => {

    const response = await request(app).get('/');

    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('API con MongoDB funcionando');

  });

});