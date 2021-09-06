import * as dotenv from 'dotenv';

dotenv.config();

import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as cors from 'cors';
import * as express from 'express';
import * as helmet from 'helmet';

import { routes } from './app/routes';

const app = express();

app.use(cors());
app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.json());
routes(app);

const host = process.env.HOSTNAME || '0.0.0.0';
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server running at: http://${host}:${port}`);
});
