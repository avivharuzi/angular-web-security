import * as dotenv from 'dotenv';
import * as express from 'express';
import * as path from 'path';
import { Application } from 'express';

dotenv.config();

const app: Application = express();
const publicDirectory = path.join(
  __dirname,
  '../../dist/apps/clickjacking-demo'
);

app.use((req, res, next) => {
  res.setHeader('X-Frame-Options', 'sameorigin');
  next();
});

app.use(express.static(publicDirectory));

app.get('*', (_, res) => {
  res.sendFile(path.join(publicDirectory, 'index.html'));
});

const hostname: string = process.env.SERVER_HOSTNAME || '0.0.0.0';
const port: number = +process.env.SERVER_PORT || 4200;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
