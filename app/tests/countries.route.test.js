'use strict';

var expect = require('chai').expect,
    request = require('supertest'),
    app = require('../../server'),
    agent = request.agent(app);

describe('Countries route tests', function () {
    describe('Positive cases', function () {
        it('should 200 with a non empty body response', function (done) {
            agent.get('/api/countries')
                .expect(200)
                .end(function (countryErr, countryRes) {
                    expect(countryRes.body).to.not.be.empty;
                    expect(countryRes.body).to.be.ok;
                    // Call the assertion callback
                    done(countryErr);
                });
        });
        it('should return a list of countries ', function (done) {
            agent.get('/api/countries')
                .expect(200)
                .end(function (countryErr, countryRes) {
                    expect(countryRes.body[0]).to.include.keys('name');
                    expect(countryRes.body[0]).to.include.keys('medals');
                    // Call the assertion callback
                    done(countryErr);
                });
        });
    });
});