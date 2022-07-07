const {TournamentType,SportType,City,Tournament,CityParticipant,TournamentParticipant,Match,MatchParticipant,MatchResult} = require('../model/tournament');

async function initData() {
    await require('../model/tournament-data').init();
}

function getModelData(model) {
    if (model) {
        model = model.dataValues
        delete model.createdAt
        delete model.updatedAt
    }
    return model
}

async function findMatches(tournamentId, page, pageSize) {
    await initData()
    if (page < 0 || pageSize < 1) {
        return
    }
    let AllMatches = await Match.findAll({
        where: {tournament_id: tournamentId}
    })
    let startIndex = page*pageSize
    let indexAfter = Math.min(startIndex+pageSize, AllMatches.length)
    let TargetMatches = []
    for (let currIndex = startIndex; currIndex < indexAfter; currIndex++) {
        TargetMatches.push(getModelData(AllMatches[currIndex]))
    }
    return TargetMatches
}

async function findMatch(tournamentId, matchId) {
    await initData()

    let TargetMatch = await Match.findOne({
        where: {tournament_id: tournamentId, id: matchId}
    })
    return getModelData(TargetMatch)
}

async function addMatch(tournamentId, matchData) {
    await initData()

    await Match.create({
        id: matchData.matchId,
        tournament_id: tournamentId,
        name: matchData.matchName
    })
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
    addMatch: addMatch,
    updateMatch: updateMatch,
    deleteMatch: deleteMatch
}