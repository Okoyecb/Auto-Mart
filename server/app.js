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
  res.json('Hi there! Welcome to our AutoMart API');
});

app.use('/api/v1', routes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Welcome to Auto-Mart!!!'));

export default app;
