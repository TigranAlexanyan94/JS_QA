const request = require("supertest");
const app = require("./index");

describe("Users ", () => {
  beforeEach(() => {
    reporter
      .epic("API call")
      .feature("Initial App Load")
      .story("Api requestts");
  });

  it("Verify get call TEST-1", async () => {
    const response = await request(app).get(`/users`);
    expect(response.statusCode).toBe(200);
    expect(response.statusCode).not.toBe(404);
  });

  it("Send request /users/id TEST-2", async () => {
    const response = await request(app).get(`/users/${1}`);
    expect(response.statusCode).toBe(200);
    expect(response.statusCode).not.toBe(404);
  });

  it("Verify if a user can be created successfully using the REST API TEST-8", async () => {
    const response = await request(app).post(`/users`).send({
      name: ";l;l;l",
      email: "user@example.com",
    });
    expect(response.statusCode).toBe(201);
    expect(response.statusCode).not.toBe(404);
  });

  it("Checks deleting user TEST-18", async () => {
    const response = await request(app).delete(`/users/${2}`);
    expect(response.statusCode).toBe(200);
    expect(response.statusCode).not.toBe(404);
  });

  it("Verify put/users with string id TEST-19", async () => {
    const response = await request(app).put(`/users/${262}`).send({
      name: "strmming",
      email: "user@example.com",
    });
    expect(response.statusCode).toBe(200);
    expect(response.statusCode).not.toBe(404);
  });
});
