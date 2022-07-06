
let tournament = require('../model/tournament');
module.exports = {
    getHelloModel: async function () {
        let result = await tournament.TournamentType.findAll();
        return result.map(r => r.dataValues);
    }
}