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
        let i = 1;
        for (i in modelTournament["tournaments"]) {
            if (modelTournament["tournaments"][i - 1].id == tournamentID) {
                return modelTournament["tournaments"][i];
                break;
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