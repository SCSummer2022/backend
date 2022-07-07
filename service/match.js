let tournament = require('../model/tournament');
//const sequelize = require('../model/db');

module.exports = {
    getTournaments: async function () {
        console.log('getTournaments')
        //await tournament.Tournament.sync()
        //await sequelize.sequelize.sync()
        let Tournaments = await tournament.Tournament.findAll()
        console.log('Tournaments = ' + Tournaments)
        return Tournaments;
    }
}