
let tournament = require('../model/tournament');
//const {TournamentType} = require("../model/tournament");

module.exports = {
    getHelloModel: async function () {
        let result = {};
        result.TournamentTypes = await tournament.TournamentType.findAll();
        //TournamentTypes = TournamentTypes.map(r => r.dataValues);
        result.SportTypes = await tournament.SportType.findAll();
        result.City = await tournament.City.findAll();
        result.Tournament = await tournament.Tournament.findAll();
        result.CityParticipant = await tournament.CityParticipant.findAll();
        result.TournamentParticipant = await tournament.TournamentParticipant.findAll();
        result.Match = await tournament.Match.findAll();
        result.MatchParticipant = await tournament.MatchParticipant.findAll();
        result.MatchResult = await tournament.MatchResult.findAll();
        //result.User = await users.User.findAll();
        return result;
    }
}