const {TournamentType,SportType,City,Tournament,CityParticipant,TournamentParticipant,Match,MatchParticipant,MatchResult} = require('../model/tournament');

async function initData() {
    await require('../model/tournament-data').init();
}

async function findMatch(tournamentId, matchId) {
    await initData()

    let TargetMatch = await Match.findOne({
        where: {tournament_id: tournamentId, id: matchId}
    })
    console.log('Match = ' + JSON.stringify(TargetMatch))
    return TargetMatch
}

async function updateMatch(tournamentId, matchId, matchChanges) {
    await initData()

    await Match.update(matchChanges,{
        where: {tournament_id: tournamentId, id: matchId}
    })
}

module.exports = {
    findMatch: findMatch,
    updateMatch: updateMatch
}