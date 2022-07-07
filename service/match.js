let tournament = require('../model/tournament');
const {TournamentType,SportType,City,Tournament,CityParticipant,TournamentParticipant,Match,MatchParticipant,MatchResult} = require('../model/tournament');

module.exports = {
    getTournaments: async function () {
        console.log('getTournaments')
        await require('../model/tournament-data').init();
        //await tournament.Tournament.sync()
        let Tournaments = await Tournament.findAll()
        console.log('Tournaments = ' + Tournaments)
        return Tournaments;
    }
}