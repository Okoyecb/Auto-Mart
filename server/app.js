import express from 'express';

const app = express();

app.use(
  express.urlencoded({
    extended: false,
  }),
);
app.use(express.json());

app.use('/', (req, res) => {
  res.status(200).json({
    message: 'success',
  });
});

// send 404 error to error handler
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Welcome to Auto-Mart!!!'));

export default app;
