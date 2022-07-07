const { DataTypes } = require('sequelize');
const sequelize = require('./db');

const Role = sequelize.sequelize.define('Role', {
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
    school: {type: DataTypes.STRING, allowNull: false},
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

const School = sequelize.sequelize.define('School', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false}
});

Role.hasMany(Teacher, {foreignKey: {name: 'role_id'}})
Teacher.belongsTo(Role)

Role.hasMany(Learner, {foreignKey: {name: 'role_id'}})
Learner.belongsTo(Role)

module.exports = {
    Learner: Learner,
    Teacher: Teacher,
    Role: Role,
    Team: Team,
    School: School
}