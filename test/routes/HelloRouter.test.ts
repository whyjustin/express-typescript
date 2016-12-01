import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import app from '../../src/ExpressApplication';

chai.use(chaiHttp);
const expect = chai.expect;

describe('GET api/v1/hello', () => {
  it('responds with hello world', () => {
    return chai.request(app).get('/api/v1/hello')
      .then(res => {
        expect(res.status).to.equal(200);
        expect(res).to.be.json;
        expect(res.body).to.deep.equal({
          message: 'hello world'
        });
      });
  });
});