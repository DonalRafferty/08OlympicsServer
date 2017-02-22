'use strict';

var expect = require('chai').expect,
    arrayUtility = require('../utilities/array.utility');

describe('array utility tests', function () {
    it('return index of item when finding a match in the array', function (done) {
        var arrayItems = [{
                test: "test1"
            },
            {
                test: "test2"
            },
            {
                test: "test3"
            }];
        expect(arrayUtility.indexOfAttribute(arrayItems, 'test', 'test1')).to.equal(0);
        expect(arrayUtility.indexOfAttribute(arrayItems, 'test', 'test2')).to.equal(1);
        expect(arrayUtility.indexOfAttribute(arrayItems, 'test', 'test3')).to.equal(2);
        done();
    });
    it('return -1 when finding it doesnt match in the array', function (done) {
        var arrayItems = [{
            test: "test1"
        },
            {
                test: "test2"
            },
            {
                test: "test3"
            }];
        expect(arrayUtility.indexOfAttribute(arrayItems, 'test', 'test89')).to.equal(-1);
        expect(arrayUtility.indexOfAttribute(arrayItems, 'testable', 'test89')).to.equal(-1);
        done();
    });
});
