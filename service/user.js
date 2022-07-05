let model = require('../model/user');
class user {
    constructor(firstname, secondname) {
        this.id = 6;
        this.fname = firstname;
        this.sname = secondname;
    }
}
module.exports = {
    getAllUserInfo: function (page, pageSize){
            
        let userList = new Array();
            
            for(let i = page*pageSize-pageSize; i < page*pageSize; i++) {
                userList.push(model.users[i]);
            }
            return userList;

    },
    addNewUser: function (fname, sname){
        let newUser = new user(fname, sname);
        model.users.push(newUser);
        return newUser;
    }
}