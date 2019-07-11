/* eslint-disable consistent-return */
/* eslint-disable no-undef */
import chai from 'chai';
import 'chai/register-should';
import chaiHttp from 'chai-http';
import app from '../app';
import {
  validAd,
} from './dummyData/cars';

const details = {
  id: 1,
  email: 'chiomab@yahoo.com',
  created_on: new Date(),
  manufacturer: 'Ford',
  model: '2009',
  price: parseFloat('150000.00'),
  state: 'new',
  status: 'sold',
  body_type: 'truck',
  imageUrl: 'http://www.image.com',
};

const API_PREFIX = '/api/v1';

let authToken;


chai.use(chaiHttp);
const {
  should,
  expect,
} = chai;
should();


describe('/GET /api/v1/car', () => {
  before((done) => {
    chai.request(app)
      .post('/api/v1/auth/signin')
      .send({
        email: 'Okoyecb@gmail.com',
        password: 'chi123',
      })
      .end((err, res) => {
        authToken = res.body.token;
        console.log(res.body);
        done();
      });
  });

  it('it should get all cars whether sold or unsold', (done) => {
    chai.request(app)
      .get('/api/v1/car')
      .send(validAd)
      .end((err, res) => {
        expect(res).to.have.status(200);
        res.body.should.have.property('message');
        done();
      });
  });

  it('it should get a single car', (done) => {
    const id = 3;
    chai.request(app)
      .get(`${API_PREFIX}/car/${id}`)
      .set('x-access-token', `Bearer ${authToken}`)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).to.equal(200);
        expect(res.body.message).to.eql('Car retrieved successfully');
        done();
      });
  });

  // it('/api/v1/car should Delete Car', (done) => {
  //   console.log('ghgyhgh', authToken);
  //   const id = 2;
  //   chai.request(app)
  //     .delete(`${API_PREFIX}/car/${id}`)
  //     .set('x-access-token', `Bearer ${authToken}`)
  //     .send(details)
  //     .end((err, res) => {
  //       expect(res.status).to.eql(200);
  //       expect(res.body.message).to.eql('Car deleted successfully');
  //       done();
  //     });
  // });

  it('/api/v1/car?body_type=Sedan should respond with status code 200', (done) => {
    chai.request(app)
      .get(`${API_PREFIX}/car?body_type=Sedan`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).to.eql(200);
        expect(res.body.message).to.eql('Cars retrieved successfully');
        done();
      });
  });
  it('/api/v1/car?status=available&manufacturer=Honda should respond with status code 200', (done) => {
    chai.request(app)
      .get(`${API_PREFIX}/car?status=available&manufacturer=Toyota`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).to.eql(200);
        expect(res.body.message).to.eql('Cars retrieved successfully');
        done();
      });
  });

  it('/api/v1/car?status=available should respond with status code 200', (done) => {
    chai.request(app)
      .get(`${API_PREFIX}/car?status=available`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).to.eql(200);
        expect(res.body.message).to.eql('Cars retrieved successfully');
        done();
      });
  });

  it('/api/v1/car?status=sold should respond with status code 200', (done) => {
    chai.request(app)
      .get(`${API_PREFIX}/car?status=sold`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err) return done(err);
        expect(res.status).to.eql(200);
        expect(res.body.message).to.eql('Cars retrieved successfully');
        done();
      });
  });
});
