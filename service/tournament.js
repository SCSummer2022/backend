let modelTournament = require('../model/tournament');

module.exports = {

    //Удаление
    // tournamentDel: function (tournamentIdForDel) {
    //     let arrToDelete = [tournamentIdForDel]
    //     for (let idx = modelTournament["tournaments"].length - 1; idx >= 0; idx--) {
    //         if (arrToDelete.includes(modelTournament["tournaments"][idx].id)) {
    //             modelTournament["tournaments"].splice(idx, 1);
    //         }
    //     }
    //     return "text";
    // },

    //Поиск конкретного турнира
    tournamentSearch: function (tournamentID) {
        for (let tournament of modelTournament["tournaments"]) {
            if (tournament.id === tournamentID) {
                return tournament;
            }
        }
    },

    //Добавление турнира
    // tournamentAdd: function (tournamentName) {
    //     modelTournament["tournaments"].push([4, tournamentName]);
    //     return modelTournament["tournaments"][modelTournament["tournaments"].length];

    // },

    //Редактирование турнира
    // tournamentEdit: function (tournamentID, newTournamentName) {
    //     return modelTournament;
    // },

    //Поиск постранично
    // getListOfTournaments: function (page, size) {
    //     return modelTournament;
    // },
}