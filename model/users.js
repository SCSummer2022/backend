const sequelize = require('./db');

const User = sequelize.sequelize.define('User', {
    id: {type: 'STRING', primaryKey: true},
    name: 'STRING',
    code: 'STRING'
});

User.sync()
    .then(() => User.create({
            id: 'some_id',
            name: 'some_name',
            code: 'some_code'
        })
    )


module.exports = {
    User: User
}