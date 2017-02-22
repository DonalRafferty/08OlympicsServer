'use strict';

/*
    Functions for interfacing with the db
 */

/*
    Drops the collection based on the supplied Schema model
 */
var dropCollection = function (schema) {
    schema.collection.drop();
};

/*
    Insert the supplied data into the DB
 */
exports.insertArrayIntoDb = function(schema, array, resultCallback) {
    dropCollection(schema);
    schema.collection.insertMany(array)
        .then(function(result) {
            resultCallback(result)
        });
};