// @ts-ignore
import chaiHttp = require('chai-http');
import * as chai from 'chai';
import * as sinon from 'sinon';
import { app } from '../app';
import { Response } from 'superagent';
import Teams from '../database/models/TeamModel';

const { expect } = chai;

chai.use(chaiHttp);

describe('Testing route /teams', () => {
  let chaiHttpResponse: Response;
  beforeEach(async () => {
    sinon
      .stub(Teams, "findByPk")
      .resolves({"id": 1,"teamName":"Avaí/Kindermann"} as Teams)
    sinon
      .stub(Teams, 'findAll')
      .resolves([{"id": 1,"teamName":"Avaí/Kindermann"}] as Teams[]);
  });
  afterEach(()=>{
    (Teams.findByPk  as sinon.SinonStub).restore();
    (Teams.findAll as sinon.SinonStub).restore();
  })

  it('should be possible to get all teams', async () => {
    chaiHttpResponse = await chai.request(app).get('/teams')
    expect(chaiHttpResponse.body).to.be.deep.equal([{"id": 1,"teamName":"Avaí/Kindermann"}])
  });

  it('should be possible to get a team by id', async () => {
    chaiHttpResponse = await chai.request(app).get('/teams/2')
    expect(chaiHttpResponse.body).to.be.deep.equal({"id": 2,"teamName":"Bahia"})
  });
});
