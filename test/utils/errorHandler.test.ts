import createError from 'http-errors';
import errorHandler from '@App/utils/errorHandler';
import { Response } from 'jest-express/lib/response';
import { Request } from 'jest-express/lib/request';

let request, response;

beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation((err) => {console.log(err)});
});

beforeEach(() => {
  request = new Request();
  response = new Response();
});

afterEach(() => {
  response.resetMocked();
});

afterAll(() => {
  jest.resetAllMocks();
});

describe("errorHandler works as intended", () => {
  it("Error that can be exposed gets returned in the response with its own status code", async () => {
    const error = new createError.NotFound();
    errorHandler(error, request, response, null);
    expect(response.statusCode).toEqual(404);
  });

  it("Error that cannot be exposed gets returned in the response with 500 status code", async () => {
    const error = new createError.NotFound();
    error.expose = false;
    errorHandler(error, request, response, null);
    expect(response.statusCode).toEqual(500);
  });
});