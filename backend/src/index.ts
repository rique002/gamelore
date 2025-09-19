import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import config from '#config/config.js';

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Hello World!');
  console.log('Response sent');
});

app.listen(config.port, () => {
  console.log(`Example app listening on port ${config.port.toString()}`);
});
