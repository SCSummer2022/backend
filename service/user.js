let model = require('../model/user');
module.exports = {
    getAllUserInfo: function (page, pageSize){
            
        let userList = new Array();
            
            for(let i = page*pageSize-pageSize; i <= page*pageSize-1; i++) {
                userList.push(model.users[i]);
            }
            return userList;

    }
}