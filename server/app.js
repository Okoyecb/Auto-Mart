/* eslint-disable import/no-extraneous-dependencies */
import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import swaggerUI from 'swagger-ui-express';
import dotenv from 'dotenv';
import swaggerDocument from './swagger.json';
import routes from './routes/routes';

dotenv.config();

const app = express();

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));


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

app.use('*', (req, res) => res.status(404).json({
  success: false,
  message: 'Page not Found',
}));


const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Welcome to AutoMart'));

export default app;
