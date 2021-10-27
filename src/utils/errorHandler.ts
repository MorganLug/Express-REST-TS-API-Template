import createError from 'http-errors';
import {HttpError} from 'http-errors';
import {Request, Response, NextFunction} from "express";

// eslint-disable-next-line no-unused-vars
function errorHandler(err: HttpError, req: Request, res: Response, next: NextFunction) {
  // eslint-disable-next-line no-console
  /* istanbul ignore next */
  console.error(err);
  // if the error is safe to expose to client
  if (err.expose === true) {
    res.status(err.status || 500).send(err);
  } else {
    res.status(500).send(new createError.InternalServerError());
  }
};

export default errorHandler;
