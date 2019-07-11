/* eslint-disable consistent-return */
/* eslint-disable no-undef */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

const {
  expect,
} = chai;
chai.use(chaiHttp);

// let token;

/* Test for get all users */

describe('Create New user', () => {
  it('it should create a new user', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send({
        first_name: 'Twickkie',
        last_name: 'Yewa',
        email: 'Twiclke@gmail.com',
        password: '2388sswordy',
        address: 'Ade Street, Isolo',
      })
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).to.equal(201);
        done();
      });
  });

  it('Signin A User', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signin')
      .send({
        email: 'jos824@gmail.com',
        password: 'passwordy',
      })
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).to.equal(201);
        done();
      });
  });
});
