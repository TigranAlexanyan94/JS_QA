const request = require("supertest");
const api = "https://demoapp-testing.herokuapp.com/";

describe(`/users`, () => {
  it("Get all data", async () => {
    const response = await request(api).get(`${api}/users`);
    expect(response.statusCode).toBe(404);
    expect(response.statusCode).not.toBe(200);
  });

  it("Get data with id", async () => {
    const response = await request(api).get(`${api}/users/${1}`);
    expect(response.statusCode).toBe(404);
    expect(response.statusCode).not.toBe(200);
  });

  it("Post data", async () => {
    const response = await request(api).post(`${api}/users/`).send({
        "fullname": "stllkring",
        "email": "user@example.com",
        "birth": "2023-02-21",
        "gender": "string",
        "phone": "string",
        "id": 0,
        "created": 
        "2023-02-21T16:52:05.035Z"
      });
    expect(response.statusCode).toBe(404);
    expect(response.statusCode).not.toBe(200)
  });

  it("Delete data", async () => {
    const response = await request(api).delete(`${api}/users/`)
    expect(response.statusCode).toBe(404);
    expect(response.statusCode).not.toBe(200)
  });

  it("Put data", async () => {
    const response = await request(api).put(`${api}/users/${262}`).send({
        "fullname": "strmming",
        "email": "user@example.com",
        "birth": "2023-02-21",
        "gender": "string",
        "phone": "string",
        "id": 0,
        "created": 
        "2023-02-21T16:52:05.035Z"
      });
    expect(response.statusCode).toBe(503);
    expect(response.statusCode).not.toBe(200)
  });
  
});
