const sequelize = require('./db');

const TournamentType = sequelize.sequelize.define('TournamentType', {
    id: {type: 'STRING', primaryKey: true},
    name: 'STRING',
    code: 'STRING'
});

TournamentType.sync()
    .then(() => TournamentType.create({
        id: 'some_id',
        name: 'some_name',
        code: 'some_code'
    })
)


module.exports = {
    TournamentType: TournamentType
}