const sequelize = require('./db');

const User = sequelize.sequelize.define('User', {
    id: {type: DataTypes.STRING, primaryKey: true},
    name: DataTypes.STRING,
    code: DataTypes.STRING
});

User.sync()
    .then(() => User.create({
            id: 'some_id',
            name: 'some_name',
            code: 'some_code'
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