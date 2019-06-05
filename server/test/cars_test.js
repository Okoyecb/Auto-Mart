/* eslint-disable consistent-return */
/* eslint-disable no-undef */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

chai.use(chaiHttp);
const { expect } = chai;

const details = {
  id: 100,
  owner: 'Okoye Francis',
  created_on: 'Wed May 22 09:13:52 2019 UTC',
  state: 'New',
  status: 'available',
  price: 3000000,
  manufacturer: 'Honda',
  model: 'Accord',
  body_type: 'Sedan',
};

const userdetails = {
  id: 13,
  email: 'ishola@gmail.com',
  first_name: 'Ishola',
  last_name: 'Daniel',
  password: 'qwerty1234',
  address: 'Gold street, Cliford way',
};


const API_PREFIX = '/api/v1';
let authToken;
describe('Create a Post', () => {
  before((done) => {
    chai.request(app)
      .post('/api/v1/auth/signin')
      .send(userdetails)
      .end((err, res) => {
        authToken = res.body.token;
        done();
      });
  });
  it('/api/v1/car should respond with status code 201 and create a post', (done) => {
    chai.request(app)
      .post(`${API_PREFIX}/car`)
      .set('Accept', 'application/json')
      .send(details)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).to.equal(201);
        expect(res.body.message).to.eql('Car Posted Successfully');
        done();
      });
  });

  it('/api/v1/car/:id should respond with status code 200 and get a single car', (done) => {
    const id = 100;
    chai.request(app)
      .get(`${API_PREFIX}/car/${id}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).to.equal(200);
        expect(res.body.message).to.eql('Car Successfully Retrieved');
        done();
      });
  });

  it('/api/v1/car?status=available should respond with status code 200 and get a single car', (done) => {
    chai.request(app)
      .get('/api/v1/car/?status=available')
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).to.eql(200);
        expect(res.body.message).to.eql('Cars retrieved successfully');
        done();
      });
  });

  it('/api/v1/car should respond with status code 200', (done) => {
    const id = 100;
    chai.request(app)
      .delete(`${API_PREFIX}/car/${id}`)
      .set('x-access-token', authToken)
      .send(details)
      .end((err, res) => {
        expect(res.status).to.eql(200);
        expect(res.body.message).to.eql('Car has been deleted successfully');
        done();
      });
  });


  it('/api/v1/order/:id/price should respond with status code 404 and and show order not found', (done) => {
    const id = 201;
    chai.request(app)
      .patch(`/api/v1/order/${id}/price`)
      .send({
        new_price_offered: 50000000,
      })
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).to.equal(404);
        done();
      });
  });
});
