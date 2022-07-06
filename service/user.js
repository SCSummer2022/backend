let model = require('../model/user');
class user {
    constructor(firstname, secondname) {
        this.id = 6;
        this.fname = firstname;
        this.sname = secondname;
    }
}
module.exports = {
    findUser: function (userId){
        for (let i in model.users) {
            if (model.users[i].id === userId) {
                return model.users[i];
            }
        }
    },
    getAllUserInfo: function (page, pageSize){
        let countUsers = pageSize*page;
        if(page <= 0 || pageSize <= 0){
            return ('Номер страницы и/или размер страницы должны быть положительными!')
        }
        else if (countUsers <= model.users.length){
            let userList = new Array();

            for(let i = countUsers-pageSize; i < countUsers; i++) {
                userList.push(model.users[i]);
            }
            return userList;
        }
        else if (countUsers - pageSize <= model.users.length){
            let userList = new Array();

            for(let i = countUsers-pageSize; i < countUsers; i++) {
                userList.push(model.users[i]);
            }
            return userList;
        }
        else if(countUsers - pageSize> model.users.length){
            return('Больше пользователей нет');
        }
    },
    addNewUser: function (fname, sname){
        let newUser = new user(fname, sname);
        model.users.push(newUser);
        return model.users[5];
    },
    deleteUser: function (id){

        let indexId;
        if (id in model.users) {
            indexId = model.users.indexOf(id);
            delete model.users[indexId];
        }
        return 200;

    },
    editUser: function (userId, fname, sname){
        let userIndex;

        for (let i in model.users) {
            if (model.users[i].id === userId) {
                userIndex = i;
                break;
            }
        }

        model.users[userIndex].fname = fname;
        model.users[userIndex].sname = sname;

        return 400;

    }
}