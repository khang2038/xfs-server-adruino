import express, { NextFunction, Request, Response } from 'express';
import morgan from 'morgan';
import { HttpException } from './shares/http-exception';
import cors from 'cors';
import bodyParser from 'body-parser';
import Database from './configs/Database';
import router from './routes/specification.route';
import http from 'http';
import { ServerSocket } from './configs/socket';

const port = 8000;

const app = express();

app.use(morgan('tiny'));

const errorHandler = (
  error: any,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  if (error instanceof HttpException) {
    return response.status(error.status).json({
      statusCode: error.status || 400,
      message: error.message,
      timestamp: Date.now(),
      path: request.path,
      errors: error.errors,
    });
  }

  next(error);
};

app.use(express.json());
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(errorHandler);
app.use('/api',router);

Database.instance.initialize();


app.get('/',(req: Request, res: Response) => {
  res.send('Express + TS server');
});



const httpServer = http.createServer(app);
new ServerSocket(httpServer).start();

httpServer.listen(port,() => {
  console.log(`Server is listen on port ${port}`)
})