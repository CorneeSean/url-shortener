import express from 'express';
import cors from 'cors';
import { config } from './config';
import { bootstrapApi } from './api';
import { deps } from "./deps";

const app = express();

app.use(express.json());
app.use(cors(config.corsOptions));
app.use('/public', express.static(config.publicPath));

bootstrapApi(app, deps);

app.listen(config.port, () => console.log(`Url Shortener Server listening at ${config.host}`));
