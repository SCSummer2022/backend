
let tournament = require('../model/tournament');
const {TournamentType} = require("../model/tournament");
module.exports = {
    getHelloModel: async function () {
        let result = {};
        result.TournamentTypes = await tournament.TournamentType.findAll();
        //TournamentTypes = TournamentTypes.map(r => r.dataValues);
        result.SportTypes = await tournament.SportType.findAll();
        result.City = await tournament.City.findAll();
        result.Tournament = await tournament.Tournament.findAll();
        result.CityParticipant = await tournament.CityParticipant.findAll();
        return result;
    }
}