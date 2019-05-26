/* eslint-disable no-undef */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

// config chai to use expect

chai.use(chaiHttp);
const { expect } = chai;

describe('AutoMart Server', () => {
  it('should respond with status code 200', (done) => {
    chai
      .request(app)
      .get('/')
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.eql(
          'Hi there! Welcome to our AutoMart API',
        );
        done();
      });
  });
});
