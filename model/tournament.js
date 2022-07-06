const sequelize = require('./db');
const {DataTypes} = require('sequelize');

const TournamentType = sequelize.sequelize.define('TournamentType', {
    id: {type: DataTypes.STRING, primaryKey: true},
    name: {type: DataTypes.STRING, allowNull: false},
    code: {type: DataTypes.STRING, allowNull: false}
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
    name: {type: DataTypes.STRING, allowNull: false},
    code: {type: DataTypes.STRING, allowNull: false}
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
    name: {type: DataTypes.STRING, allowNull: false}
});
City.sync()
    .then(() => City.create({
            id: 'some_id',
            name: 'some_name'
        })
    )

const Tournament = sequelize.sequelize.define('Tournament', {
    id: {type: DataTypes.STRING, primaryKey: true},
    name: {type: DataTypes.STRING, allowNull: false},
    tournament_type_id: {type: DataTypes.STRING, allowNull: false},
    sport_type : {type: DataTypes.STRING, allowNull: false},
    start_date : {type: DataTypes.DATE, allowNull: false},
    end_date : {type: DataTypes.DATE, allowNull: false},
    school_or_city : {type: DataTypes.BOOLEAN, allowNull: false},
    city : {type: DataTypes.STRING, allowNull: false},
    participants_min : {type: DataTypes.INTEGER, allowNull: false},
    participants_max : {type: DataTypes.INTEGER, allowNull: false},
    age_min : {type: DataTypes.INTEGER, allowNull: false},
    age_max : {type: DataTypes.INTEGER, allowNull: false},
    class_min : {type: DataTypes.INTEGER, allowNull: false},
    class_max : {type: DataTypes.INTEGER, allowNull: false},
    team_size : {type: DataTypes.INTEGER, allowNull: false}
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
    tournament_id: {type: DataTypes.STRING, allowNull: false},
    name: {type: DataTypes.STRING, allowNull: false}
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
    match_id: {type: DataTypes.STRING, allowNull: false},
    user_id: {type: DataTypes.STRING, allowNull: false},
    team_id: {type: DataTypes.STRING, allowNull: false},
    match_result: {type: DataTypes.STRING, allowNull: false}
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
    name: {type: DataTypes.STRING, allowNull: false}
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