const {Learner} = require("../model/user");
const {Teacher} = require("../model/user");

module.exports = {
    getLearnersInfo: async function () {
        await require('../model/user-data').init();
        return Learner.findAll();
    },

    getTeachersInfo: async function () {
        await require('../model/user-data').init();
        return Teacher.findAll();
    }
}