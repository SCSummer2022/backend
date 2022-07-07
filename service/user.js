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
    },
    createNewLearner: async function (newLearner){
        await Learner.create(newLearner);
        return await Learner.findByPk(2)
    },
    deleteLearner: async function (learnerForDelete, id){
        await Learner.destroy({where: {id: id}})
        return await Learner.findByPk(id)
    }
}