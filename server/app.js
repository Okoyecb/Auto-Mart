/* eslint-disable import/no-extraneous-dependencies */
import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
// import Debug from 'debug';
import dotenv from 'dotenv';
import routes from './routes/routes';

dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use(bodyParser.json({
  extended: true,
}));

app.use(logger('dev'));

app.get('/', (req, res) => {
  res.json('Hi there! Welcome to our AutoMart API');
});

app.use('/api/v1', routes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Welcome to AutoMart'));

export default app;
