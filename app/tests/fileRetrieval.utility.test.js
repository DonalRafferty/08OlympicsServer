'use strict';

var expect = require('chai').expect,
    fileRetrieval = require('../utilities/fileRetrieval.utility');

/**
 * File retrieval utility tests
 */

describe('File retrieval utility tests', function () {

    it('should return the file list', function (done) {
        fileRetrieval.retrieveFile(function (file) {
            expect(file).to.not.be.empty;
            expect(file).to.be.ok;
            done();
        });
    });
    it('should return the file list as JSON', function (done) {
        fileRetrieval.retrieveFile(function (file) {
            expect(typeof file).to.equal('object');
            done();
        });
    });
    it('should return the file list as JSON in array format', function (done) {
        fileRetrieval.retrieveFile(function (file) {
            expect(file).to.be.instanceof(Array);
            done();
        });
    });
    it('should return the file list as JSON with athletes having a specific structure', function (done) {
        fileRetrieval.retrieveFile(function (file) {
            expect(file[0]).to.include.keys(
                'athlete',
                'country',
                'sex',
                'event',
                'medal');
            done();
        });
    });
});