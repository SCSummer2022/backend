let learner = require('../model/user');
const {Learner} = require("../model/user");
module.exports = {
    getAllUserInfo: async function () {
        let result = {};
        result.role_id = await learner.role_id.findAll();
        result.last_name = await learner.last_name.findAll();
        result.first_name = await learner.first_name.findAll();
        result.second_name = await learner.second_name.findAll();
        result.birthday = await learner.birthday.findAll();
        result.phone_number = await learner.phone_number.findAll();
        result.email = await learner.email.findAll();
        result.password = await learner.password.findAll();
        return result;
    }
}