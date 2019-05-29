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

const updatedOrder = {
  id: 201,
  car_id: 100,
  status: 'Pending',
  old_price_offered: 4000000,
  new_price_offered: 38000000,
};

describe('Create an Order', () => {
  it('/api/v1/order should respond with status code 201 and create an order', (done) => {
    chai.request(app)
      .post('/api/v1/order')
      .set('Accept', 'application/json')
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
      .get(`/api/v1/order/${id}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).to.equal(200);
        expect(res.body.message).to.eql('Order retrieved successfully');
        done();
      });
  });

  it('/api/v1/order/:id should respond with status code 201 and update the order', (done) => {
    const id = 201;
    chai.request(app)
      .patch(`/api/v1/order/${id}`)
      .set('Accept', 'application/json')
      .send(updatedOrder)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).to.equal(201);
        expect(res.body.message).to.eql('Order Updated successfully');
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
