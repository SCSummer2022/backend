const { DataTypes } = require('sequelize');
const sequelize = require('./db');
const tournament = require('../model/tournament')


const Role = sequelize.sequelize.define('Role', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false}
});

const School = sequelize.sequelize.define('School', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false}
});

const Learner = sequelize.sequelize.define('Learner', {
    id: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
    role_id: {type: DataTypes.STRING, allowNull: false},
    last_name: {type: DataTypes.STRING, allowNull: false},
    first_name: {type: DataTypes.STRING, allowNull: false},
    second_name: {type: DataTypes.STRING, allowNull: false},
    birthday: {type: DataTypes.DATEONLY, allowNull: false},
    phone_number: {type: DataTypes.INTEGER},
    email: {type: DataTypes.STRING, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false},
    city: {type: DataTypes.STRING, allowNull: false},
    school: {type: DataTypes.INTEGER, allowNull: false},
    class: {type: DataTypes.INTEGER, allowNull: false},
    fav_sport_types: {type: DataTypes.STRING}
});

const Teacher = sequelize.sequelize.define('Teacher', {
    id: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
    role_id: {type: DataTypes.STRING, allowNull: false},
    last_name: {type: DataTypes.STRING, allowNull: false},
    first_name: {type: DataTypes.STRING, allowNull: false},
    second_name: {type: DataTypes.STRING, allowNull: false},
    birthday: {type: DataTypes.DATEONLY, allowNull: false},
    phone_number: {type: DataTypes.INTEGER},
    email: {type: DataTypes.STRING, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false},
    city: {type: DataTypes.STRING, allowNull: false},
    school: {type: DataTypes.STRING, allowNull: false},
    class: {type: DataTypes.INTEGER},
    access: {type: DataTypes.BOOLEAN, allowNull: false}
});


const Team = sequelize.sequelize.define('Team', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false}
});


//СВЯЗИ ТАБЛИЦ
/////////////////////
//Role, Teacher
Role.hasMany(Teacher, {foreignKey: {name: 'role_id'}})
Teacher.belongsTo(Role)
//Role, Learner
Role.hasMany(Learner, {foreignKey: {name: 'role_id'}})
Learner.belongsTo(Role)
//Learner, Match -> MatchParticipant
Learner.belongsToMany(tournament.Match, {through: tournament.MatchParticipant, sourceKey: 'id', targetKey: 'id'})
tournament.Match.belongsToMany(Learner, {through: tournament.MatchParticipant, sourceKey: 'id', targetKey: 'id'})
//Learner, Tournament -> TournamentParticipant
Learner.belongsToMany(tournament.Tournament, {through: tournament.TournamentParticipant, sourceKey: 'id', targetKey: 'id'})
tournament.Tournament.belongsToMany(Learner, {through: tournament.Tournament, sourceKey: 'id', targetKey: 'id'})
//Sport_type, Learner -> connecting table
Learner.belongsToMany(tournament.SportType, {through: 'fav_sport_type', sourceKey: 'id', targetKey: 'id'})
tournament.SportType.belongsToMany(Learner, {through: 'fav_sport_type', sourceKey: 'id', targetKey: 'id'})
//School, Teacher -> connecting table
Teacher.belongsToMany(School, {through: 'Teachers_school', sourceKey: 'id', targetKey: 'id'})
School.belongsToMany(Teacher, {through: 'Teachers_school', sourceKey: 'id', targetKey: 'id'})
//Tournament, City -> CityParticipant
tournament.Tournament.belongsToMany(tournament.City, {through: tournament.CityParticipant, sourceKey: 'id', targetKey: 'id'})
tournament.City.belongsToMany(tournament.Tournament, {through: tournament.CityParticipant, sourceKey: 'id', targetKey: 'id'})
//Tournament, Match
tournament.Tournament.hasMany(tournament.Match, {foreignKey: {name: 'tournament_id'}})
tournament.Match.belongsTo(tournament.Tournament)
//Tournament, TournamentType
tournament.TournamentType.hasMany(tournament.Tournament, {foreignKey: {name: 'tournament_type_id'}})
tournament.Tournament.belongsTo(tournament.TournamentType)
//Tournament, SportType
tournament.SportType.hasMany(tournament.Tournament, {foreignKey: {name: 'sport_id'}})
tournament.Tournament.belongsTo(tournament.SportType)

//NOT WORKING!!!
/*//Learner, School
School.hasMany(Learner, {foreignKey: {name: 'school'}})
Learner.belongsTo(School)
//Learner, City
tournament.City.hasMany(Learner, {foreignKey: {name: 'city'}})
Learner.belongsTo(tournament.City)
//Teacher, City
tournament.City.hasMany(Teacher, {foreignKey: {name: 'city'}})
Teacher.belongsTo(tournament.City)*/

//НЕ СДЕЛАНЫ
//Match, result_type
//Может еще что-то



module.exports = {
    Learner: Learner,
    Teacher: Teacher,
    Role: Role,
    Team: Team,
    School: School
}