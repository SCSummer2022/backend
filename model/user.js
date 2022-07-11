const { DataTypes } = require('sequelize');
const sequelize = require('./db');
//const tournament = require('../model/tournament')

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
    role_id: {type: DataTypes.INTEGER, allowNull: false},
    last_name: {type: DataTypes.STRING, allowNull: false},
    first_name: {type: DataTypes.STRING, allowNull: false},
    second_name: {type: DataTypes.STRING, allowNull: false},
    birthday: {type: DataTypes.DATEONLY, allowNull: false},
    phone_number: {type: DataTypes.INTEGER},
    email: {type: DataTypes.STRING, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false},
    city: {type: DataTypes.INTEGER, allowNull: false},
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
    city: {type: DataTypes.INTEGER, allowNull: false},
    school: {type: DataTypes.INTEGER, allowNull: false},
    class: {type: DataTypes.INTEGER},
    access: {type: DataTypes.BOOLEAN, allowNull: false}
});


const Team = sequelize.sequelize.define('Team', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false}
});

const City = sequelize.sequelize.define('City', {
    id: {type: DataTypes.INTEGER, primaryKey: true},
    name: {type: DataTypes.STRING, allowNull: false}
});

//sequelize.sequelize.sync()

//СВЯЗИ ТАБЛИЦ
/////////////////////
//Role, Learner
Role.hasMany(Learner, {foreignKey: {name: 'role_id'}})
Learner.belongsTo(Role, {foreignKey: {name: 'role_id'}})
//Role, Teacher
Role.hasMany(Teacher, {foreignKey: {name: 'role_id'}})
Teacher.belongsTo(Role, {foreignKey: {name: 'role_id'}})
//Learner, School
School.hasMany(Learner, {foreignKey: {name: 'school'}})
Learner.belongsTo(School, {foreignKey: {name: 'school'}})
//Learner, City
City.hasMany(Learner, {foreignKey: {name: 'city'}})
Learner.belongsTo(City, {foreignKey: {name: 'city'}})
//Teacher - [] - School
Teacher.belongsToMany(School, {through: 'Teachers_school', foreignKey: 'teacher_id'})
School.belongsToMany(Teacher, {through: 'Teachers_school', foreignKey: 'school_id'})


module.exports = {
    Learner: Learner,
    Teacher: Teacher,
    Role: Role,
    Team: Team,
    School: School,
    City: City,
}