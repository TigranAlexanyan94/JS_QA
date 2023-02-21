const app = require("./api");
const request = require("supertest");
const api = "https://demoapp-testing.herokuapp.com/";

describe(`/users`, () => {
  it("Get all data", async () => {
    const response = await request(app.app).get(`${api}/users`);
    expect(response.statusCode).toBe(200);
  });

  it("Get data with id", async () => {
    const response = await request(app.app).get(`${api}/users/${1}`);
    expect(response.statusCode).toBe(200);
  });
});
