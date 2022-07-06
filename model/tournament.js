const sequelize = require('./db');
const {DataTypes} = require('sequelize');

const TournamentType = sequelize.sequelize.define('TournamentType', {
    id: {type: DataTypes.STRING, primaryKey: true},
    name: DataTypes.STRING,
    code: DataTypes.STRING
});
TournamentType.sync()
    .then(() => TournamentType.create({
            id: 'some_id',
            name: 'some_name',
            code: 'some_code'
        })
    )

const SportType = sequelize.sequelize.define('SportType', {
    id: {type: DataTypes.STRING, primaryKey: true},
    name: DataTypes.STRING,
    code: DataTypes.STRING
});
SportType.sync()
    .then(() => SportType.create({
            id: 'some_id',
            name: 'some_name',
            code: 'some_code'
        })
    )

const City = sequelize.sequelize.define('City', {
    id: {type: DataTypes.STRING, primaryKey: true},
    name: DataTypes.STRING
});
City.sync()
    .then(() => City.create({
            id: 'some_id',
            name: 'some_name'
        })
    )

const Tournament = sequelize.sequelize.define('Tournament', {
    id: {type: DataTypes.STRING, primaryKey: true},
    name: DataTypes.STRING,
    tournament_type_id: {type: DataTypes.STRING},
    sport_type : DataTypes.STRING,
    start_date : DataTypes.DATE,
    end_date : DataTypes.DATE,
    school_or_city : DataTypes.BOOLEAN,
    city : DataTypes.STRING,
    participants_min : DataTypes.INTEGER,
    participants_max : DataTypes.INTEGER,
    age_min : DataTypes.INTEGER,
    age_max : DataTypes.INTEGER,
    class_min : DataTypes.INTEGER,
    class_max : DataTypes.INTEGER,
    team_size : DataTypes.INTEGER
});
Tournament.sync()
    .then(() => Tournament.create({
            id: 'some_id',
            name: 'some_name',
            tournament_type_id: 'some_id',
            sport_type : 'some_id',
            start_date : new Date(2022, 6, 20),
            end_date : new Date(2022, 7, 21),
            school_or_city : true,
            city : 'some_city',
            participants_min : 20,
            participants_max : 23,
            age_min : 12,
            age_max : 15,
            class_min : 7,
            class_max : 8,
            team_size : 10
        })
    )

const CityParticipant = sequelize.sequelize.define('CityParticipant', {
    tournament_id: {type: DataTypes.STRING, primaryKey: true},
    city_id: {type: DataTypes.STRING, primaryKey: true}
});
CityParticipant.sync()
    .then(() => CityParticipant.create({
            tournament_id: 'some_id',
            city_id: 'some_id'
        })
    )

const TournamentParticipant = sequelize.sequelize.define('TournamentParticipant', {
    tournament_id: {type: DataTypes.STRING, primaryKey: true},
    user_id: {type: DataTypes.STRING, primaryKey: true}
});
TournamentParticipant.sync()
    .then(() => TournamentParticipant.create({
            tournament_id: 'some_id',
            user_id: 'some_id'
        })
    )

const Match = sequelize.sequelize.define('Match', {
    id: {type: DataTypes.STRING, primaryKey: true},
    tournament_id: DataTypes.STRING,
    name: DataTypes.STRING
});
Match.sync()
    .then(() => Match.create({
            id: 'some_id',
            tournament_id: 'some_id',
            name: 'some_name'
        })
    )

const MatchParticipant = sequelize.sequelize.define('MatchParticipant', {
    id: {type: DataTypes.STRING, primaryKey: true},
    match_id: DataTypes.STRING,
    user_id: DataTypes.STRING,
    team_id: DataTypes.STRING,
    match_result: DataTypes.STRING
});
MatchParticipant.sync()
    .then(() => MatchParticipant.create({
            id: 'some_id',
            match_id: 'some_id',
            user_id: 'some_id',
            team_id: 'some_id',
            match_result: 'some_id'
        })
    )

const MatchResult = sequelize.sequelize.define('MatchResult', {
    id: {type: DataTypes.STRING, primaryKey: true},
    name: DataTypes.STRING
});
MatchResult.sync()
    .then(() => MatchResult.create({
            id: '11',
            name: 'победа'
        })
    )
    .then(() => MatchResult.create({
            id: '12',
            name: 'поражение'
        })
    )
    .then(() => MatchResult.create({
            id: '13',
            name: 'ничья'
        })
    )

module.exports = {
    TournamentType: TournamentType,
    SportType: SportType,
    City: City,
    Tournament: Tournament,
    CityParticipant: CityParticipant,
    TournamentParticipant: TournamentParticipant,
    Match: Match,
    MatchParticipant: MatchParticipant,
    MatchResult: MatchResult
}