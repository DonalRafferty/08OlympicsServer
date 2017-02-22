'use strict';

const countrySchema = require('../models/country.model');

/*
    Controller for the country API
 */

/*
    Return all countries
 */
exports.list = function (req, res) {
    countrySchema.find({}).sort({ 'medals.total': -1 }).exec(function(err, countries){
        if(err)
            res.send(err);
        res.json(countries);
    });
};