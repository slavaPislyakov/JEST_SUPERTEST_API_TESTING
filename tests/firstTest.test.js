const request = require("supertest");

describe("my first test", () => {
  let userResponse;

  beforeAll(async () => {
    userResponse = await request("https://fakerapi.it/")
      .get("api/v1/users?")
      .send({
        _quantity: 1,
        _gender: "male",
      });
  });

  test("first test", () => {
    const userBodyResponse = JSON.parse(userResponse.text);

    expect(userBodyResponse.status).toEqual("OK");
    expect(userBodyResponse.code).toEqual(200);
  });
});
