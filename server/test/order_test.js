/* eslint-disable consistent-return */
/* eslint-disable no-undef */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

chai.use(chaiHttp);
const { expect } = chai;

const details = {
  id: 200,
  buyer: 'Okoye Rita',
  car_id: 100,
  created_on: 'Wed May 22 09:13:52 2019 UTC',
  status: 'Pending',
  price: 4000000,
  price_offered: 38000000,
};


const API_PREFIX = '/api/v1';

describe('Create an Order', () => {
  it('/api/v1/order should respond with status code 201 and create an order', (done) => {
    chai.request(app)
      .post(`${API_PREFIX}/order`)
      .set('accept', 'application/json')
      .send(details)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).to.equal(201);
        expect(res.body.message).to.eql('Order created');
        done();
      });
  });

  it('/api/v1/order/:id should respond with status code 200 and retrieve an order', (done) => {
    const id = 201;
    chai.request(app)
      .get(`${API_PREFIX}/order/${id}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).to.equal(200);
        expect(res.body.message).to.eql('Order retrieved successfully');
        done();
      });
  });

  it('/api/v1/order/:id/price should respond with status code 404 and and show order not found', (done) => {
    const id = 201;
    chai.request(app)
      .patch(`${API_PREFIX}/order/${id}/price`)
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
