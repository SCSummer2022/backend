const sequelize = require('./db');
const {DataTypes} = require('sequelize');

const TournamentType = sequelize.sequelize.define('TournamentType', {
    id: {type: DataTypes.STRING, primaryKey: true},
    name: {type: DataTypes.STRING, allowNull: false},
    code: {type: DataTypes.STRING, allowNull: false}
});
const SportType = sequelize.sequelize.define('SportType', {
    id: {type: DataTypes.STRING, primaryKey: true},
    name: {type: DataTypes.STRING, allowNull: false},
    code: {type: DataTypes.STRING, allowNull: false}
});
const City = sequelize.sequelize.define('City', {
    id: {type: DataTypes.STRING, primaryKey: true},
    name: {type: DataTypes.STRING, allowNull: false}
});
const Tournament = sequelize.sequelize.define('Tournament', {
    id: {type: DataTypes.STRING, primaryKey: true},
    name: {type: DataTypes.STRING, allowNull: false},
    tournament_type_id: {type: DataTypes.STRING, allowNull: false},
    sport_type : {type: DataTypes.STRING, allowNull: false},
    start_date : {type: DataTypes.DATE, allowNull: false},
    end_date : {type: DataTypes.DATE, allowNull: false},
    school_or_city : {type: DataTypes.BOOLEAN, allowNull: false},
    city : {type: DataTypes.STRING},
    participants_min : {type: DataTypes.INTEGER},
    participants_max : {type: DataTypes.INTEGER},
    age_min : {type: DataTypes.INTEGER},
    age_max : {type: DataTypes.INTEGER},
    class_min : {type: DataTypes.INTEGER},
    class_max : {type: DataTypes.INTEGER},
    team_size : {type: DataTypes.INTEGER, allowNull: false}
});
const CityParticipant = sequelize.sequelize.define('CityParticipant', {
    tournament_id: {type: DataTypes.STRING, primaryKey: true},
    city_id: {type: DataTypes.STRING, primaryKey: true}
});
const TournamentParticipant = sequelize.sequelize.define('TournamentParticipant', {
    tournament_id: {type: DataTypes.STRING, primaryKey: true},
    user_id: {type: DataTypes.STRING, primaryKey: true}
});
const Match = sequelize.sequelize.define('Match', {
    id: {type: DataTypes.STRING, primaryKey: true},
    tournament_id: {type: DataTypes.STRING, allowNull: false},
    name: {type: DataTypes.STRING, allowNull: false}
});
const MatchParticipant = sequelize.sequelize.define('MatchParticipant', {
    id: {type: DataTypes.STRING, primaryKey: true},
    match_id: {type: DataTypes.STRING, allowNull: false},
    user_id: {type: DataTypes.STRING},
    team_id: {type: DataTypes.STRING},
    match_result: {type: DataTypes.STRING}
});
const MatchResult = sequelize.sequelize.define('MatchResult', {
    id: {type: DataTypes.STRING, primaryKey: true},
    name: {type: DataTypes.STRING, allowNull: false}
});

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