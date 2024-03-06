/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';
import { libOne } from '@test-org/lib-one';
import { libTwo } from '@test-org/lib-two';
import { nanoid } from 'nanoid';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api-one!' });
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Lib One output`, libOne());
  console.log(`Lib Two output`, libTwo());
  console.log(`ES6 Module output`, nanoid());
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
