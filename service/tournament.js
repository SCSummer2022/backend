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
        // let arrToDelete = [tournamentIdForDel]
        for (let tournament of modelTournament["tournaments"]) {
            // for (let idx = tournament.length - 1; idx >= 0; idx--) {
            //     if (arrToDelete.includes(tournament[idx].id)) {
            //         tournament.splice(idx, 1);
            //     }
            // }
            if (tournamentIdForDel === tournament.id) {
                tournament = JSON.parse(tournament)
                let i = tournament.getKeyByValue(tournamentIdForDel);

                return i;
                // delete tournament[i];
            }
            // return tournament;

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
        // return { id: 2, tournamentName: 'Турнир 2' };

        let newTour = new tournament(tournamentID, tournamentName);
        for (let tournament of modelTournament["tournaments"]) {
            //return newTour;
            tournament.push(newTour);
            return 200;
        };
    }

}

    //Редактирование турнира
    // tournamentEdit: function (tournamentID, newTournamentName) {
    //     return modelTournament;
    // },

    //Поиск постранично
    // getListOfTournaments: function (page, size) {
    //     return modelTournament;
    // },
// }