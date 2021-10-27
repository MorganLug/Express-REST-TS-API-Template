import express from "express";
import {Request, Response, NextFunction} from "express";
import createError from 'http-errors';

import errorHandler from '@App/utils/errorHandler';

const app = express();

app.use(express.json());

// basic route to see api status and version
app.get( "/", function(req: Request, res: Response) {
    res.json({
        status: "running",
        version: "3545aea"
    });
});

// catch 404 and forward to error handler
app.use((req: Request, res: Response, next: NextFunction) => {
    next(new createError.NotFound());
});
  
// pass any unhandled errors to the error handler
app.use(errorHandler);

export default app;