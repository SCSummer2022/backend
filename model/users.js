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


module.exports = {
    User: User
}