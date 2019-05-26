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


describe('Create a Post', () => {
  it('/api/v1/car should respond with status code 201 and create a post', (done) => {
    chai.request(app)
      .post('/api/v1/car')
      .set('Accept', 'application/json')
      .send(details)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).to.equal(201);
        expect(res.body.message).to.eql('Car Posted Successfully');
        done();
      });
  });
});
