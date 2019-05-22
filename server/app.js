import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes/routes';

const app = express();

app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use(bodyParser.json({
  extended: true,
}));

// app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to Automart app');
});

app.use('/api/v1', routes);

// // send 404 error to error handler
// app.use((req, res, next) => {
//   const error = new Error('Not Found');
//   error.status = 404;
//   next(error);
// });

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Welcome to Auto-Mart!!!'));

export default app;
