'use strict';

/*
    Medal factory function for mapping the data
    received to the medals object
 */
exports.countMedals = function(newObj, originalAthlete) {
    return Object.assign({}, newObj.medals, {
        bronze: originalAthlete.medal === "Bronze" ? newObj.medals.bronze + 1 : newObj.medals.bronze,
        silver: originalAthlete.medal === "Silver" ? newObj.medals.silver + 1 : newObj.medals.silver,
        gold: originalAthlete.medal === "Gold" ? newObj.medals.gold + 1 : newObj.medals.gold,
        total: newObj.medals.bronze + newObj.medals.silver + newObj.medals.gold + 1
    });
};
