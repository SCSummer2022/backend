let learner = require('../model/user');
const {Learner} = require("../model/user");

let teacher = require('../model/user');
const {Teacher} = require("../model/user");

module.exports = {
    getAllLearnersInfo: async function () {
        let result = {}
        result.role_id = await learner.role_id.findAll()
        result.last_name = await learner.last_name.findAll()
        result.first_name = await learner.first_name.findAll()
        result.second_name = await learner.second_name.findAll()
        result.birthday = await learner.birthday.findAll()
        result.phone_number = await learner.phone_number.findAll()
        result.email = await learner.email.findAll()
        result.password = await learner.password.findAll()
        result.city = await learner.city.findAll()
        result.class = await learner.password.findAll()
        result.school = await learner.password.findAll()
        return result;
    }
}

module.exports = {
    getAllTeachersInfo: async function () {
        let result = {};
        result.role_id = await teacher.role_id.findAll();
        result.last_name = await teacher.last_name.findAll();
        result.first_name = await teacher.first_name.findAll();
        result.second_name = await teacher.second_name.findAll();
        result.birthday = await teacher.birthday.findAll();
        result.phone_number = await teacher.phone_number.findAll();
        result.email = await teacher.email.findAll();
        result.password = await teacher.password.findAll();
        result.city = await teacher.city.findAll();
        result.school = await teacher.school.findAll();
        result.access = await teacher.access.findAll();
        return result;
    }
}