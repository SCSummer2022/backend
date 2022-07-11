const sequelize = require('./db');
const {DataTypes} = require('sequelize');
const {Learner,Team,City} = require('./user');

const TournamentType = sequelize.sequelize.define('TournamentType', {
    id: {type: DataTypes.INTEGER, primaryKey: true},
    name: {type: DataTypes.STRING, allowNull: false},
    code: {type: DataTypes.STRING, allowNull: false}
});
const SportType = sequelize.sequelize.define('SportType', {
    id: {type: DataTypes.INTEGER, primaryKey: true},
    name: {type: DataTypes.STRING, allowNull: false},
    code: {type: DataTypes.STRING, allowNull: false}
});
const Tournament = sequelize.sequelize.define('Tournament', {
    id: {type: DataTypes.INTEGER, primaryKey: true},
    name: {type: DataTypes.STRING, allowNull: false},
    tournament_type_id: {type: DataTypes.INTEGER, allowNull: false},
    sport_type : {type: DataTypes.INTEGER, allowNull: false},
    start_date : {type: DataTypes.DATE, allowNull: false},
    end_date : {type: DataTypes.DATE, allowNull: false},
    school_or_city : {type: DataTypes.BOOLEAN, allowNull: false},
    participants_min : {type: DataTypes.INTEGER},
    participants_max : {type: DataTypes.INTEGER},
    age_min : {type: DataTypes.INTEGER},
    age_max : {type: DataTypes.INTEGER},
    class_min : {type: DataTypes.INTEGER},
    class_max : {type: DataTypes.INTEGER},
    team_size : {type: DataTypes.INTEGER, allowNull: false}
});
const CityParticipant = sequelize.sequelize.define('CityParticipant', {
    tournament_id: {type: DataTypes.INTEGER, primaryKey: true},
    city_id: {type: DataTypes.INTEGER, primaryKey: true}
});
const TournamentParticipant = sequelize.sequelize.define('TournamentParticipant', {
    tournament_id: {type: DataTypes.INTEGER, primaryKey: true},
    user_id: {type: DataTypes.INTEGER, primaryKey: true}
});
const Match = sequelize.sequelize.define('Match', {
    id: {type: DataTypes.INTEGER, primaryKey: true},
    tournament_id: {type: DataTypes.INTEGER, allowNull: false},
    name: {type: DataTypes.STRING, allowNull: false}
});
const MatchParticipant = sequelize.sequelize.define('MatchParticipant', {
    id: {type: DataTypes.INTEGER, primaryKey: true},
    match_id: {type: DataTypes.INTEGER, allowNull: false},
    user_id: {type: DataTypes.INTEGER},
    team_id: {type: DataTypes.INTEGER},
    match_result: {type: DataTypes.INTEGER}
});
const MatchResult = sequelize.sequelize.define('MatchResult', {
    id: {type: DataTypes.INTEGER, primaryKey: true},
    name: {type: DataTypes.INTEGER, allowNull: false}
});

sequelize.sequelize.sync()

TournamentType.hasMany(Tournament, {foreignKey: 'tournament_type_id'})
Tournament.belongsTo(TournamentType, {foreignKey: 'tournament_type_id'})

SportType.hasMany(Tournament, {foreignKey: 'sport_type'})
Tournament.belongsTo(SportType, {foreignKey: 'sport_type'})

MatchResult.hasMany(MatchParticipant, {foreignKey: 'match_result'})
MatchParticipant.belongsTo(MatchResult, {foreignKey: 'match_result'})

Tournament.belongsToMany(City, {through: 'CityParticipant', foreignKey: 'tournament_id'})
City.belongsToMany(Tournament, {through: 'CityParticipant', foreignKey: 'city_id'})

Tournament.hasMany(Match, {foreignKey: 'tournament_id'})
Match.belongsTo(Tournament, {foreignKey: 'tournament_id'})

Match.hasMany(MatchParticipant, {foreignKey: 'match_id'})
MatchParticipant.belongsTo(Match, {foreignKey: 'match_id'})

Learner.hasMany(MatchParticipant, {foreignKey: 'user_id'})
MatchParticipant.belongsTo(Learner, {foreignKey: 'user_id'})

Team.hasMany(MatchParticipant, {foreignKey: 'team_id'})
MatchParticipant.belongsTo(Team, {foreignKey: 'team_id'})

Tournament.belongsToMany(Learner, {through: 'TournamentParticipant', foreignKey: 'tournament_id'})
Learner.belongsToMany(Tournament, {through: 'TournamentParticipant', foreignKey: 'user_id'})

SportType.belongsToMany(Learner, {through: 'FavSportType', foreignKey: 'sport_type_id'})
Learner.belongsToMany(SportType, {through: 'FavSportType', foreignKey: 'learner_id'})

module.exports = {
    TournamentType: TournamentType,
    SportType: SportType,
    Tournament: Tournament,
    CityParticipant: CityParticipant,
    TournamentParticipant: TournamentParticipant,
    Match: Match,
    MatchParticipant: MatchParticipant,
    MatchResult: MatchResult
}