'use strict';

var fileRetrieval = require('./fileRetrieval.utility'); //File Retrieval helper class
var countryFactory = require('../factories/country.factory');
var athleteFactory = require('../factories/athlete.factory');
var arrayUtility = require('../utilities/array.utility');
var medalFactory = require('../factories/medal.factory');
var databaseUtility = require('../utilities/database.utility');
var countrySchema = require('../models/country.model');
var athleteSchema = require('../models/athlete.model');

/*
    Functions for mapping the medals JSON into a structure we want to use
 */

var athletes = []; //Hold the new athletes JSON data
var countries = []; //Hold the new countries JSON data

/*
    Map the Medals JSON to create a new array of athlete JSON
    based on the Athlete model, removes duplicates and increments
    an athletes events and medals data
    TODO: This is an impure function, it should be refactored to be pure given time
 */
var mapAthleteData = function(athlete) {
    var index = arrayUtility.indexOfAttribute(athletes, 'name', athlete.athlete);
    if (index === -1) {
        athletes.push(athleteFactory.createAthlete(athlete));
    } else {
        athletes[index].events.push({
            name: athlete.event,
            medal: athlete.medal
        });
        athletes[index].medals = medalFactory.countMedals(athletes[index], athlete);
    }
};

/*
    Map the Medals JSON to create a new array of countries JSON
    based on the Country model, removes duplicates and increments
    a countries medal count
 */
var mapCountryData = function(athlete) {
    var index = arrayUtility.indexOfAttribute(countries, 'name', athlete.country);
    if (index === -1) {
        countries.push(countryFactory.createCountry(athlete));
    } else {
        countries[index].medals = medalFactory.countMedals(countries[index], athlete);
    }
};

/*
    Once the Medals JSON is retrieved, loop through it and create the
    new Athletes and Countries data
 */
exports.parseFileData = function(callback){
    fileRetrieval.retrieveFile(function(data){ //Get the JSON data
        data.forEach(function(athlete){
            mapAthleteData(athlete); //Map Athletes
            mapCountryData(athlete); //Map Countries
        });
        // Insert the new data into the DB
        databaseUtility.insertArrayIntoDb(countrySchema, countries, function(result) {
            databaseUtility.insertArrayIntoDb(athleteSchema, athletes, function(result){
                callback(result);
            });
        });
    });
};