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

const updatedStatus = {
  id: 101,
  created_on: 'Wed May 22 09:13:52 2019 UTC',
  state: 'New',
  status: 'sold',
  price: 3000000,
  manufacturer: 'Honda',
  model: 'Accord',
  body_type: 'Sedan',
};

const API_PREFIX = '/api/v1';

describe('Create a Post', () => {
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
        expect(res.body.message).to.eql('Successfully retrieved single car');
        done();
      });
  });

  it('/api/v1/car?status=available should respond with status code 200 and get a single car', (done) => {
    chai.request(app)
      .get(`${API_PREFIX}/car?status=available`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).to.equal(200);
        expect(res.body.message).to.eql('Car retrieved successfully');
        done();
      });
  });

  it('/api/v1/car should respond with status code 201 and create a post', (done) => {
    const id = 101;
    chai.request(app)
      .delete(`${API_PREFIX}/car/${id}`)
      .set('Accept', 'application/json')
      .send(details)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).to.equal(200);
        expect(res.body.message).to.eql('Car deleted successfully');
        done();
      });
  });

  it('/api/v1/car/:id should respond with status code 201 and update a car', (done) => {
    const id = 100;
    chai.request(app)
      .patch(`${API_PREFIX}/car/${id}`)
      .set('Accept', 'application/json')
      .send(updatedStatus)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).to.equal(201);
        expect(res.body.message).to.eql('Car Updated successfully');
        done();
      });
  });

  it('/api/v1/car should respond with status code 200 and get a single car', (done) => {
    chai.request(app)
      .get(`${API_PREFIX}/car`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).to.equal(200);
        expect(res.body.message).to.eql('Cars retrieved successfully');
        done();
      });
  });
});
