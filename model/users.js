const sequelize = require('./db');

const User = sequelize.sequelize.define('User', {
    id: {type: 'STRING', primaryKey: true, allowNull: false, autoIncrement: true},
    role: {type: 'STRING', allowNull: false},
    last_name: {type: 'STRING', allowNull: false},
    first_name: {type: 'STRING', allowNull: false},
    second_name: {type: 'STRING', allowNull: false},
    birthday: {type: 'DATE', allowNull: false},
    phone_number: {type: 'INTEGER'},
    email: {type: 'STRING', allowNull: false},
    password: {type: 'STRING', allowNull: false}

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
    id:{type: DataTypes.STRING, primaryKey: true, autoIncrement: true},
        name: {type: DataTypes.STRING, allowNull: false}
    });
Role.sync()
    .then(() => Role.create({
        id: 'some_id',
        name: 'some_name'
    })
    )
const Teams = sequelize.sequelize.define('Teams', {
    id:{type: DataTypes.STRING, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false}
    });
Teams.sync()
    .then(() => Teams.create({
        id: 'some_id',
        name: 'some_name'
    })
)
const School = sequelize.sequelize.define('Teams', {
    id:{type: DataTypes.STRING, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false}
    });
School.sync()
    .then(() => School.create({
        id: 'some_id',
        name: 'some_name'
    })
)
const City = sequelize.sequelize.define('Teams', {
    id:{type: DataTypes.STRING, primaryKey: true, autoIncrement: true},
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