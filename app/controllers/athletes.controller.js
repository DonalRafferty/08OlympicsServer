'use strict';

const athleteSchema = require('../models/athlete.model');

/*
    Controller for athletes API
 */

/*
    Return all athlets
 */
exports.list = function (req, res) {
    athleteSchema.find(function(err, athletes){
        if(err)
            res.send(err);
        res.json(athletes);
    });
};

/*
    Return all athletes by country
 */
exports.listByCountry = function (req, res) {
    athleteSchema.find({ 'country': req.params.countryId.toUpperCase() }, function(err, athletes){
        if(err)
            res.send(err);
        res.json(athletes);
    });
};