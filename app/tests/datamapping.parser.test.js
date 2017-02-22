'use strict';

var expect = require('chai').expect,
    rewire = require('rewire'),
    dataMappingMock, mapAthleteDataMock, mapCountryDataMock, mockArray;

/**
 * Data mapping utility tests
 */

describe('Data mapping utility tests', function () {
    beforeEach(function (done) {
        dataMappingMock = rewire('../utilities/datamapping.parser');
        mapAthleteDataMock = dataMappingMock.__get__('mapAthleteData');
        mapCountryDataMock = dataMappingMock.__get__('mapCountryData');
        mockArray = [
            {
                "athlete": "KOGO, Micah",
                "country": "KEN",
                "sex": "Men",
                "event": "10000m",
                "medal": "Bronze"
            },
            {
                "athlete": "BEKELE, Kenenisa",
                "country": "ETH",
                "sex": "Men",
                "event": "10000m",
                "medal": "Gold"
            },
            {
                "athlete": "SIHINE, Sileshi",
                "country": "ETH",
                "sex": "Men",
                "event": "10000m",
                "medal": "Silver"
            }];
        done();
    });
    it.skip('should return the data inserted to the DB', function (done) {
        // TODO: Implement this when you get time to mock out Mongoose
    });
    it('should correctly add or update an athlete depending on if it exists in the array or not', function(){
        dataMappingMock.__set__('athletes', mockArray);
        mapAthleteDataMock({
            "athlete": "DIBABA, Tirunesh",
            "country": "ETH",
            "sex": "Women",
            "event": "10000m",
            "medal": "Gold"
        });
        expect(dataMappingMock.__get__('athletes').length).to.equal(4);
        mapAthleteDataMock({
            "athlete": "DIBABA, Tirunesh",
            "country": "ETH",
            "sex": "Women",
            "event": "100m",
            "medal": "Silver"
        });
        expect(dataMappingMock.__get__('athletes').length).to.equal(4);
        expect(dataMappingMock.__get__('athletes')[3].events.length).to.equal(2);
        expect(dataMappingMock.__get__('athletes')[3].medals).to.deep.equal({
            bronze: 0,
            gold: 1,
            silver: 1,
            total: 2
        });
    });
    it('should correctly add or update an athlete depending on if it exists in the array or not', function(){
        dataMappingMock.__set__('countries', mockArray);
        mapCountryDataMock({
            "athlete": "BOLT, Usain",
            "country": "JAM",
            "sex": "Men",
            "event": "100m",
            "medal": "Gold"
        });
        expect(dataMappingMock.__get__('countries').length).to.equal(4);
        mapCountryDataMock({
            "athlete": "BOLT, Usain",
            "country": "JAM",
            "sex": "Men",
            "event": "100m",
            "medal": "Gold"
        });
        expect(dataMappingMock.__get__('countries').length).to.equal(4);
        expect(dataMappingMock.__get__('countries')[3].name).to.equal('JAM');
        expect(dataMappingMock.__get__('countries')[3].medals).to.deep.equal({
            bronze: 0,
            gold: 2,
            silver: 0,
            total: 2
        });
    });
});