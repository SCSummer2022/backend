const { DataTypes } = require('sequelize/types');
const sequelize = require('./db');

const User = sequelize.sequelize.define('User', {
    id: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
    role_id: {type: DataTypes.STRING,
        allowNull: false,
        references:{
            model: Role,
            key: id
        }},
    last_name: {type: DataTypes.STRING, allowNull: false},
    first_name: {type: DataTypes.STRING, allowNull: false},
    second_name: {type: DataTypes.STRING, allowNull: false},
    birthday: {type: DataTypes.DATEONLY, allowNull: false},
    phone_number: {type: DataTypes.INTEGER},
    email: {type: DataTypes.STRING, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false}    
});

User.sync()
    .then(() => User.create({
            role: 'администратор',
            last_name: 'Андреевич',
            first_name: 'Павел',
            second_name: 'Небойков',
            birthday: new Date(2002, 6, 20),
            phone_number: '546789',
            email: 'neboi222@mail.ru',
            password: 'easypeasy'
        })
    )
const Role = sequelize.sequelize.define('Teams', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        name: {type: DataTypes.STRING, allowNull: false}
    });
Role.sync()
    .then(() => Role.create({
        id: 'some_id',
        name: 'some_name'
    })
    )
const Team = sequelize.sequelize.define('Teams', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false}
    });
Team.sync()
    .then(() => Team.create({
        id: 'some_id',
        name: 'some_name'
    })
)
const School = sequelize.sequelize.define('Teams', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false}
    });
School.sync()
    .then(() => School.create({
        id: 'some_id',
        name: 'some_name'
    })
)
const City = sequelize.sequelize.define('Teams', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false}
    });
City.sync()
    .then(() => City.create({
        id: 'some_id',
        name: 'some_name'
    })
)
module.exports = {
    User: User
}