'use strict';
const https = require('https');
const endpoint = require('../config/endpoint.config');

/*
 * Helper function that retrieves the file from github
 * The injectedCallback is used to asynchronously pass
 * the results to the next part of the chain.
 */
exports.retrieveFile = function(injectedCallback){
    var options = { //options object for holding URL data
        host: endpoint.config.host,
        path: endpoint.config.path
    };

    //Simple HTTP GET to retrieve and append the data to a String
    https.get(options.host + options.path, function(response){
        var str = '';

        //Another chunk of data has been received, so append it to `str`
        response.on('data', function (chunk) {
            str += chunk;
        });

        //the whole response has been received
        response.on('end', function () {
            injectedCallback(JSON.parse(str)); //Send the full String back via the callback
        });
    });
};
