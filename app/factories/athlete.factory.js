'use strict';

/*
    Factory function for mapping the Medals JSON data
    to the Athlete model
 */
exports.createAthlete = function(dataObject) {
    return {
        name: dataObject.athlete,
        country: dataObject.country,
        sex: dataObject.sex,
        events: [{
            name: dataObject.event,
            medal: dataObject.medal
        }],
        medals: {
            bronze: dataObject.medal === "Bronze" ? 1 : 0,
            silver: dataObject.medal === "Silver" ? 1 : 0,
            gold: dataObject.medal === "Gold" ? 1 : 0,
            total: 1
        }
    };
};