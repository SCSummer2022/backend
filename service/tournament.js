const { Tournament } = require('../model/tournament');

//Тест ORM
async function initData() {
    await require('../model/tournament-data').init();
}

function getModelData(model) {
    if (model) {
        model = model.dataValues
        delete model.createdAt
        delete model.updatedAt
    }
    return model;
}

//Поиск конкретного турнира
// async function tournamentSearch(tournamentID) {
//     await initData();
// 
// let tournament = await Tournament.findOne({
//     where: { id: 4 }
// })
//     let AllTournaments = await Tournament.findOne({ where: { id: Number(tournamentID) } });
//     return AllTournaments;
// }

//Добавление турнира
async function tournamentAdd(newTrnmnt) {
    await initData();

    let addTour = await Tournament.create({
        id: newTrnmnt.id,
        name: newTrnmnt.name,
        tournament_type_id: newTrnmnt.tournament_type_id,
        sport_type: newTrnmnt.sport_type,
        start_date: newTrnmnt.start_date,
        end_date: newTrnmnt.end_date,
        school_or_city: newTrnmnt.school_or_city,
        city: newTrnmnt.city,
        team_size: newTrnmnt.team_size
    });
    return addTour;
}

//Редактирование турнира
async function tournamentEdit(tournamentID, changes) {
    await initData();

    await Tournament.update(changes, {
        where: { id: tournamentID }
    })

}

//Удаление
async function tournamentDel(tournamentIdForDel) {
    await initData();

    await Tournament.destroy({
        where: { id: tournamentIdForDel }
    });
}

//Поиск постранично
async function getListOfTournaments(page, size) {
    await initData()

    if (page < 1 || size < 1) {
        return
    }
    let startIndex = (page * size) - size;
    let AllTournaments = await Tournament.findAll({ offset: startIndex, limit: size });
    return AllTournaments;
}

module.exports = {
    // tournamentSearch: tournamentSearch,
    tournamentAdd: tournamentAdd,
    tournamentEdit: tournamentEdit,
    tournamentDel: tournamentDel,
    getListOfTournaments: getListOfTournaments
}