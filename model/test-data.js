const {Role, Learner, Teacher, Team, School} = require('./user');


let init = false;

module.exports = {
    init: async function () {
        if (init) return false;

        init = true;


        await Role.sync()
            .then(() => Role.create({name: 'Ученик'}).then(() => Role.create({name: 'Учитель'})))

        await Learner.sync()
            .then(() => Learner.create({
                    role_id: 1,
                    last_name: 'Андреевич',
                    first_name: 'Павел',
                    second_name: 'Небойков',
                    birthday: new Date(2002, 6, 20),
                    phone_number: '546789',
                    email: 'neboi222@mail.ru',
                    password: 'easypeasy',
                    city: 'Москва',
                    school: '144',
                    class: '5'
                })
            )


        await Teacher.sync()
            .then(() => Teacher.create({
                    role_id: 'Учитель',
                    last_name: 'Самсонович',
                    first_name: 'Секулай',
                    second_name: 'Ботвинюк',
                    birthday: new Date(1977, 3, 15),
                    phone_number: '+73748378900',
                    email: 'ssbot@mail.ru',
                    password: 'ksteach93#',
                    city: 'Антоновка',
                    school: '1',
                    access: true
                })
            )

        await Team.sync()
            .then(() => Team.create({
                    name: 'some_name'
                })
            )

        await School.sync()
            .then(() => School.create({
                    name: 'some_name'
                })
            )
    }
}