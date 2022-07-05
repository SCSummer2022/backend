let modelTournament = require('../model/tournament');

module.exports = {
    getTournamentModel: function () {
        return modelTournament;
    },
    TournamentDel: function (tournamentNameForDel) {
        let tournamentList = modelTournament[0]["tournaments"];
        let arrToDelete = [tournamentNameForDel]
        for (let idx = tournamentList.length - 1; idx >= 0; idx--) {
            if (arrToDelete.includes(tournamentList[idx].tournamentName)) {
                tournamentList.splice(idx, 1);
            }
        }
        return tournamentList;
    }
}