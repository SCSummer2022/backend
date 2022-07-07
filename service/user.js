let learner = require('../model/user');
const {Learner} = require("../model/user");

let teacher = require('../model/user');
const {Teacher} = require("../model/user");

module.exports = {
    getUsersInfo: async function () {
        await require('../model/user-data').init();
        return Learner.findAll();
    },
    addNewUser: async function () {

    }
}