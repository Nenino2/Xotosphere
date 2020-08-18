import express from 'express';
import * as db from './database/connectDb';
import mongoSanitize from 'express-mongo-sanitize';
import xss from 'xss-clean';
import helmet from 'helmet';
import compression from 'compression';
import storesRouter from './routes/storeRouter'
import cors from 'cors'
import { notFoundHandler } from './controllers/notFoundController'
import { errorHandler } from './controllers/errorHandlerController'

export default async () => {
    // Connect Database
    await db.connect();

    // Initializate express app
    const app = express();

    // Compression
    app.use(compression());

    // Helmet Headers
    app.use(helmet());

    // Cors
    app.use(cors())

    // Body parser
    app.use(express.json());

    // Xss Sanitizer
    app.use(xss());

    // MongoDB Sanitizer
    app.use(mongoSanitize());

    // Api routers
    app.use(`${process.env.API_PATH}/stores`, storesRouter);

    // Not found
    app.use(`${process.env.API_PATH}/`, notFoundHandler);

    // Error Handler
    app.use(errorHandler);

    return app;
}