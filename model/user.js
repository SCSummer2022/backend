const { DataTypes } = require('sequelize');
const sequelize = require('./db');

const Learner = sequelize.sequelize.define('Learner', {
    id: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
    role_id: {type: DataTypes.STRING, allowNull: false},
    last_name: {type: DataTypes.STRING, allowNull: false},
    first_name: {type: DataTypes.STRING, allowNull: false},
    second_name: {type: DataTypes.STRING, allowNull: false},
    birthday: {type: DataTypes.DATEONLY, allowNull: false},
    phone_number: {type: DataTypes.INTEGER},
    email: {type: DataTypes.STRING, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false}    
});

Learner.sync()
    .then(() => Learner.create({
            role_id: 'администратор',
            last_name: 'Андреевич',
            first_name: 'Павел',
            second_name: 'Небойков',
            birthday: new Date(2002, 6, 20),
            phone_number: '546789',
            email: 'neboi222@mail.ru',
            password: 'easypeasy'
        })
    )
const Role = sequelize.sequelize.define('Role', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        name: {type: DataTypes.STRING, allowNull: false}
    });
Role.sync()
    .then(() => Role.create({
        id: 'some_id',
        name: 'some_name'
    })
    )
const Team = sequelize.sequelize.define('Team', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false}
    });
Team.sync()
    .then(() => Team.create({
        id: 'some_id',
        name: 'some_name'
    })
)
const School = sequelize.sequelize.define('School', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false}
    });
School.sync()
    .then(() => School.create({
        id: 'some_id',
        name: 'some_name'
    })
)

module.exports = {
    Learner: Learner,
    Role: Role,
    Team: Team,
    School: School
}