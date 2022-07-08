const {Learner} = require("../model/user");
const {Teacher} = require("../model/user");

module.exports = {

//todo нужно использовать тело запроса - где находятся параметры поиска
    getLearnersInfo: async function (filter) {
        let page = filter.page
        let pageSize = filter.pageSize
        await require('../model/user-data').init();
        return Learner.findAll();
    },

    getTeachersInfo: async function () {
        await require('../model/user-data').init();
        return Teacher.findAll();
    },
    createNewLearner: async function (newLearner) {
        await Learner.create(newLearner);
        //todo убрать хард код
        return await Learner.findByPk(2)
    },
    deleteLearner: async function (id) {
        let model = await Learner.findByPk(id);
        await Learner.destroy({where: {id: id}})
        return model
    }
}