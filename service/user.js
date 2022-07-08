const {Learner, Teacher} = require("../model/user");

module.exports = {

//todo нужно использовать тело запроса - где находятся параметры поиска
    getLearnersInfo: async function (pageParams) {
        await require('../model/user-data').init();
        let page = pageParams.page;
        let pageSize = pageParams.pageSize;
        let learnersList = new Array();
        for (let i = page*pageSize-pageSize+1; i <= page*pageSize; i++){
            let learnerInfo = await Learner.findByPk(i);
            learnersList.push(learnerInfo)
        }
        return learnersList
    },

    getTeachersInfo: async function (pageParams) {
        await require('../model/user-data').init();
        let teacherInfo;
        let page = pageParams.page;
        let pageSize = pageParams.pageSize;
        let teachersList = new Array();
        for (let i = page*pageSize-pageSize+1; i <= page*pageSize; i++){
            teacherInfo = await Teacher.findByPk(i);
            teachersList.push(teacherInfo)
        }
        return teachersList
    },
    addNewLearner: async function (learnerParams) {
        await require('../model/user-data').init()
        let newLearner = Learner.create(learnerParams)
        return newLearner
    },
    deleteLearner: async function (learnerId) {
        await require('../model/user-data').init()
        let deletedLearner = await Learner.findByPk(learnerId)
        await deletedLearner.destroy()
        return deletedLearner
    },
    updateLearner: async function (learnerId, learnerParams) {
        await require('../model/user-data').init()
        let updatedLearner = await Learner.findByPk(learnerId)
        updatedLearner.set(learnerParams)
        await updatedLearner.save()
        return updatedLearner
    }
}