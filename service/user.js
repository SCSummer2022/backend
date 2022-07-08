const {Learner} = require("../model/user");
const {Teacher} = require("../model/user");

module.exports = {

//todo нужно использовать тело запроса - где находятся параметры поиска
    getLearnersInfo: async function (pageParams) {
        let page = pageParams.page;
        let pageSize = pageParams.pageSize;
        await require('../model/user-data').init();
        return pageParams;
    },

    getTeachersInfo: async function () {
        await require('../model/user-data').init();
        return await Teacher.findAll();
    }
}