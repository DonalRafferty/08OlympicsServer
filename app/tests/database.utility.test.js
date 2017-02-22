'use strict';

var expect = require('chai').expect,
    rewire = require('rewire'),
    dataBaseMock, dropCollectionMock;

/**
 * Database utility tests
 */

describe('Data mapping utility tests', function () {
    beforeEach(function (done) {
        dataBaseMock = rewire('../utilities/database.utility');
        dropCollectionMock = dataBaseMock.__get__('dropCollection');
        done();
    });
    it.skip('correctly drop the database collection', function (done) {
        // TODO: Need to mock out the Mongoose stuff, come back to this given time to mock it out
    });
    it.skip('correctly insert the database collection', function(){
        // TODO: Need to mock out the Mongoose stuff, come back to this given time to mock it out
    });
});