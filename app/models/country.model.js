'use strict';

const mongoose = require('mongoose');
var Schema = mongoose.Schema;

/*
    Country mongoode schema
 */

var CountrySchema = new Schema({
    name: String,
    medals: {
        gold: Number,
        silver: Number,
        bronze: Number,
        total: Number
    }
});

module.exports = mongoose.model('Country', CountrySchema);