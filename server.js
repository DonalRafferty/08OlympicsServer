'use strict';

const datamapper = require('./app/utilities/datamapping.parser');
const express = require('express');
const bodyParser= require('body-parser');
const app = express();
const databaseConfig = require('./app/config/database.config.js');
const port = process.env.PORT || 4000;
const countryRoutes = require('./app/routes/countries.route');
const athleteRoutes = require('./app/routes/athletes.route');
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Allow Cross origin requests
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Setup Routes
app.use('/api', countryRoutes);
app.use('/api', athleteRoutes);

// Connect to DB
mongoose.connect('mongodb://' + databaseConfig.config.username + ':'
    + databaseConfig.config.password + '@' + databaseConfig.config.connectionUrl);

// When the Medals data has been retrieved, parsed and put into DB start the server
var dataRetrievedCallback = function(result) {
    app.listen(port);
    console.log('listening on ' + port);
};

// On start up of the server make the call to retrieve and parse the Medals data
datamapper.parseFileData(dataRetrievedCallback);

// Expose app
exports = module.exports = app;