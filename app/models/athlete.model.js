'use strict';

const mongoose = require('mongoose');
var Schema = mongoose.Schema;

/*
    Athlete Mongoose model
 */

var AthleteSchema = new Schema({
    name: String,
    country: String,
    sex: String,
    events: [
        {
            name: String,
            medal: String
        }
    ],
    medals: {
        gold: Number,
        silver: Number,
        bronze: Number
    }
});

module.exports = mongoose.model('Athlete', AthleteSchema);
