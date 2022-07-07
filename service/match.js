const {TournamentType,SportType,City,Tournament,CityParticipant,TournamentParticipant,Match,MatchParticipant,MatchResult} = require('../model/tournament');

async function initData() {
    await require('../model/tournament-data').init();
}

async function findMatches(tournamentId, page, pageSize) {
    await initData()

    let AllMatches = await Match.findAll({
        where: {tournament_id: tournamentId}
    })
    let startIndex = page*pageSize
    let indexAfter = Math.min(startIndex+pageSize, AllMatches.length)
    let TargetMatches = []
    for (let currIndex = startIndex; currIndex < indexAfter; currIndex++) {
        TargetMatches.push(AllMatches[currIndex])
    }
    return TargetMatches
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

async function deleteMatch(tournamentId, matchId) {
    await initData()

    await Match.destroy({
        where: {tournament_id: tournamentId, id: matchId}
    })
}

module.exports = {
    findMatches: findMatches,
    findMatch: findMatch,
    updateMatch: updateMatch,
    deleteMatch: deleteMatch
}