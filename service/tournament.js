const { tournaments } = require('../model/tournament');

let modelTournament = require('../model/tournament');

class tournament {
    constructor(tournamentID, tournamentName) {
        this.id = tournamentID;
        this.tournamentName = tournamentName
    }
}

module.exports = {

    //Удаление
    tournamentDel: function (tournamentIdForDel) {
        let arrToDelete = [tournamentIdForDel]
        for (let idx = modelTournament["tournaments"].length - 1; idx >= 0; idx--) {
            if (arrToDelete.includes(modelTournament["tournaments"][idx]["id"])) {
                delete modelTournament["tournaments"][tournamentIdForDel - 1];
                return 200;
                break;
            }
        }

    },

    //Поиск конкретного турнира
    tournamentSearch: function (tournamentID) {
        for (let tournament of modelTournament["tournaments"]) {
            if (tournament.id === tournamentID) {
                return tournament;
            }
        }
    },

    //Добавление турнира
    tournamentAdd: function (tournamentID, tournamentName) {
        let newTour = new tournament(tournamentID, tournamentName);

        modelTournament["tournaments"].push(newTour);
        return modelTournament["tournaments"][tournamentID - 1];

    },

    //Редактирование турнира
    tournamentEdit: function (tournamentID, newTournamentName) {
        let arrToEdit = [tournamentID];
        for (let idx = modelTournament["tournaments"].length - 1; idx >= 0; idx--) {
            if (arrToEdit.includes(modelTournament["tournaments"][idx]["id"])) {
                modelTournament["tournaments"][tournamentID - 1]["tournamentName"] = newTournamentName;
                // return 200;
                return modelTournament;
                break;
            }
        }
    },

    //Поиск постранично
    getListOfTournaments: function (page, size) {

        let index, offSet

        if (page == 1 || page <= 0) {
            index = 0;
            offSet = size;
        }

        else if (page > modelTournament["tournaments"].length) {
            index = page - 1;
            offSet = modelTournament["tournaments"].length;
        }

        else {
            index = page * size - size;
            offSet = index + size;
        }
        const slicedItems = modelTournament["tournaments"].slice(index, offSet);

        return slicedItems;
    }
}