const {Learner} = require("../model/user");
const {Teacher} = require("../model/user");

module.exports = {

//методы ученика
    getLearnersInfo: async function (pageParams) {
        await require('../model/user-data').init();
        let page = pageParams.page - 1;
        let pageSize = pageParams.pageSize;
        let learnersList = await Learner.findAll({offset: page*pageSize, limit: pageSize});
        return learnersList
    },
    addNewLearner: async function (learnerParams) {
        await require('../model/user-data').init()
        let newLearner = await Learner.create(learnerParams)
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
    },

//методы учителя
    getTeachersInfo: async function (pageParams) {
        await require('../model/user-data').init();
        let page = pageParams.page - 1;
        let pageSize = pageParams.pageSize;
        let teachersList = await Teacher.findAll({offset: page*pageSize, limit: pageSize});
        return teachersList
    },
    addNewTeacher: async function (teacherParams) {
        await require('../model/user-data').init()
        let newTeacher = await Teacher.create(teacherParams)
        return newTeacher
    },
    deleteTeacher: async function (teacherId) {
        await require('../model/user-data').init()
        let deletedTeacher = await Teacher.findByPk(teacherId)
        await deletedTeacher.destroy()
        return deletedTeacher
    },
    updateTeacher: async function (teacherId, teacherParams) {
        await require('../model/user-data').init()
        let updatedTeacher = await Teacher.findByPk(teacherId)
        updatedTeacher.set(teacherParams)
        await updatedTeacher.save()
        return updatedTeacher
    }
}