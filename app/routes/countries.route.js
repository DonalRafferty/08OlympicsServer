'use strict';

const express = require('express');
const countries = require('../controllers/countries.controller');
const router = express.Router();

/*
    Countries API routes
 */

/*
    Get all countries
 */
router.route('/countries')
    .get(countries.list);

module.exports=router;
