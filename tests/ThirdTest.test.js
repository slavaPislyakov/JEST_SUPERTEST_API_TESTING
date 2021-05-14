const request = require('supertest');

describe('my third test', () => {
  let userResponse;

  beforeAll(async () => {
    userResponse = await request('https://fakerapi.it/')
      .get('api/v1/users?')
      .send({
        _quantity: 1,
        _locale: 'fr_FR',
      });
  });

  test('third test', () => {
    userBodyResponse = JSON.parse(userResponse.text);
    console.log(userResponse.text);

    expect(userBodyResponse.status).toEqual('ERROR');
    expect(userBodyResponse.code).toEqual(200);
  });
});
