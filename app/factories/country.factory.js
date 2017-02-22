'use strict';

/*
    Factory function for mapping the Medals JSON
    data to the Country model
 */
exports.createCountry = function(dataObject) {
    return {
        name: dataObject.country,
        medals: {
            bronze: dataObject.medal === "Bronze" ? 1 : 0,
            silver: dataObject.medal === "Silver" ? 1 : 0,
            gold: dataObject.medal === "Gold" ? 1 : 0
        }
    };
};