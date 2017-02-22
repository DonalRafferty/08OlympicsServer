'use strict';

var expect = require('chai').expect,
    request = require('supertest'),
    app = require('../../server'),
    agent = request.agent(app);

describe('Athletes route tests', function () {
    describe('Positive cases', function () {
        it('should 200 with a non empty body response', function (done) {
            agent.get('/api/athletes/country/RUS')
                .expect(200)
                .end(function (athleteErr, athleteRes) {
                    expect(athleteRes.body).to.not.be.empty;
                    expect(athleteRes.body).to.be.ok;
                    // Call the assertion callback
                    done(athleteErr);
                });
        });
        it('should return a list of athletes ', function (done) {
            agent.get('/api/athletes/country/RUS')
                .expect(200)
                .end(function (athleteErr, athleteRes) {
                    expect(athleteRes.body[0]).to.include.keys('name');
                    expect(athleteRes.body[0]).to.include.keys('medals');
                    expect(athleteRes.body[0]).to.include.keys('events');
                    expect(athleteRes.body[0]).to.include.keys('sex');
                    expect(athleteRes.body[0]).to.include.keys('country');
                    // Call the assertion callback
                    done(athleteErr);
                });
        });
    });
});