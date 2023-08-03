import express from 'express';
import {config} from 'dotenv';
import cors from 'cors'

import route from './routes'

config()

const app = express();

app.use(express.json());
app.use(route);
app.use(cors);

export { app };