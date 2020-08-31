import express, { Application, Request, Response } from 'express';
import { json, urlencoded } from 'body-parser';

const server: Application = express();

interface IUser {
  name: string;
  age: number;
  isMentor: boolean;
}
interface IResult {
  ok: boolean;
  message?: string;
  data?: any;
}

server.use(json());
server.use(urlencoded({ extended: true }));

server.get('/:regards', (req: Request, res: Response) => {
  const { regards } = req.params;

  res.status(200).json({
    uptime: process.uptime(),
    message: `${regards} Carlos`,
  });
});

server.post('/', (req: Request, res: Response) => {
  const body: IUser = req.body;

  res.status(200).json({
    ok: true,
    data: body.name,
  } as IResult);
});

const PORT = process.env.PORT || '8080';
server.listen(PORT, () => {
  console.log('Running at localhost: ' + PORT);
});
