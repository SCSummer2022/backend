const sequelize = require('./db');
const {DataTypes} = require('sequelize');

const TournamentType = sequelize.sequelize.define('TournamentType', {
    id: {type: DataTypes.STRING, primaryKey: true},
    name: 'STRING',
    code: 'STRING'
});
TournamentType.sync()
    .then(() => TournamentType.create({
            id: 'some_id',
            name: 'some_name',
            code: 'some_code'
        })
    )

const SportType = sequelize.sequelize.define('SportType', {
    id: {type: 'STRING', primaryKey: true},
    name: 'STRING',
    code: 'STRING'
});
SportType.sync()
    .then(() => SportType.create({
            id: 'some_id',
            name: 'some_name',
            code: 'some_code'
        })
    )

const City = sequelize.sequelize.define('City', {
    id: {type: 'STRING', primaryKey: true},
    name: 'STRING'
});
City.sync()
    .then(() => City.create({
            id: 'some_id',
            name: 'some_name'
        })
    )

const Tournament = sequelize.sequelize.define('Tournament', {
    id: {type: 'STRING', primaryKey: true},
    name: 'STRING',
    tournament_type_id: 'STRING',
    sport_type: 'STRING',
    start_date: 'DATE',
    end_date: 'DATE',
    school_or_city: 'BOOLEAN',
    city: 'STRING',
    participants_min: 'INTEGER',
    participants_max: 'INTEGER',
    age_min: 'INTEGER',
    age_max: 'INTEGER',
    class_min: 'INTEGER',
    class_max: 'INTEGER',
    team_size: 'INTEGER'
});
Tournament.sync()
    .then(() => Tournament.create({
            id: 'some_id',
            name: 'some_name',
            tournament_type_id: 'some_id',
            sport_type: 'some_id',
            start_date: new Date(2022, 6, 20),
            end_date: new Date(2022, 7, 21),
            school_or_city: true,
            city: 'some_city',
            participants_min: 20,
            participants_max: 23,
            age_min: 12,
            age_max: 15,
            class_min: 7,
            class_max: 8,
            team_size: 10
        })
    )

const CityParticipant = sequelize.sequelize.define('CityParticipant', {
    city_id: {type: 'STRING', primaryKey: true},
    tournament_id: {type: 'STRING', primaryKey: true}
});
CityParticipant.sync()
    .then(() => CityParticipant.create({
            city_id: 'some_id',
            tournament_id: 'some_id'
        })
    )


module.exports = {
    TournamentType: TournamentType,
    SportType: SportType,
    City: City,
    Tournament: Tournament,
    CityParticipant: CityParticipant
}