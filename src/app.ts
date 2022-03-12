import express, {Request, Response, NextFunction} from 'express';
import 'express-async-errors';
import { router } from './routes';

const app = express();

app.use(express.json());

app.use(router);

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
    return response.status(400).json({
        status: 'Error',
        message: error.message
    });
});

export { app };