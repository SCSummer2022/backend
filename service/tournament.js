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
async function tournamentSearch(tournamentID) {
    await initData();

    let tournament = await Tournament.findByPk(tournamentID);
    return getModelData(tournament);
}

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
        participants_min: newTrnmnt.participants_min,
        participants_max: newTrnmnt.participants_max,
        age_min: newTrnmnt.age_min,
        age_max: newTrnmnt.age_max,
        class_min: newTrnmnt.class_min,
        class_max: newTrnmnt.class_max,
        team_size: newTrnmnt.team_size
    });
    return addTour;
}

//Редактирование турнира
async function tournamentEdit(tournamentID, changes) {
    await initData();

    await Tournament.update(changes, {
        where: { id: tournamentID }
    });
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
    if (page < 0 || size < 1) {
        return
    }
    let AllTournaments = await Tournament.findAll();

    let startIndex = page * size;
    let indexAfter = Math.min(startIndex + size, AllTournaments.length);
    let parsedTournaments = [];
    for (let currIndex = startIndex; currIndex < indexAfter; currIndex++) {
        parsedTournaments.push(getModelData(AllTournaments[currIndex]))
    }
    return parsedTournaments
}

module.exports = {
    tournamentSearch: tournamentSearch,
    tournamentAdd: tournamentAdd,
    tournamentEdit: tournamentEdit,
    tournamentDel: tournamentDel,
    getListOfTournaments: getListOfTournaments
}