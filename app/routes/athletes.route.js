'use strict';

const express = require('express');
const athletes = require('../controllers/athletes.controller');
const router = express.Router();

/*
    Routes for the athletes API
 */

/*
    Get all athletes
 */
router.route('/athletes')
    .get(athletes.list);

/*
    Get athletes by country
 */
router.route('/athletes/country/:countryId')
    .get(athletes.listByCountry);

module.exports=router;
