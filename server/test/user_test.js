/* eslint-disable consistent-return */
/* eslint-disable no-undef */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';
// import { userModel } from './dummyData/user';

// config chai to use expect

chai.use(chaiHttp);
const { expect } = chai;

const details = {
  id: 1000,
  email: 'ooyecb@gmail.com',
  first_name: 'Michael',
  last_name: 'Smith',
  password: 'zxcvbbn',
  address: 'Ojota Avenue Osapa London',
};


describe('User Sign-up Test', () => {
  it('/api/v1/auth/signup should respond with status code 201 and create a User', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .set('Accept', 'application/json')
      .send(details)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).to.equal(201);
        expect(res.body.message).to.eql('User successfully created');
        done();
      });
  });

  it('/api/v1/auth/signin should respond with status code 201 and create a User', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signin')
      .set('Accept', 'application/json')
      .send(details)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).to.equal(201);
        expect(res.body.message).to.eql('Login Succesful');
        done();
      });
  });
});
