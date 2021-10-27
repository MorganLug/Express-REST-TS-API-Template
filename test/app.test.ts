import request from "supertest";

import app from "@App/app";

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation((err) => {
    console.log(err);
  });
});

describe("GET / - entry endpoint", () => {
  it("status is running and version is correct", async () => {
    const result = await request(app).get("/");

    expect(result.body).toEqual({
      status: "running",
      version: "3545aea",
    });
    expect(result.statusCode).toEqual(200);
  });
});

describe("Error handling", () => {
  it("404 error works as expected", async () => {
    const result = await request(app).get("/unknownEndpoint");

    expect(result.statusCode).toEqual(404);
  });
});
