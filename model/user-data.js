const {Role, Learner, Teacher, Team, School, City} = require('./user');


let init = false;

module.exports = {
    init: async function () {
        if (init) return;
        init = true;

        await Role.sync()
        await Role.create({name: 'Ученик'})
        await Role.create({name: 'Учитель'})

        await Team.sync()
            .then(() => Team.create({
                    name: 'some_name'
                })
            )

        await School.sync()
        await School.create({name: 'Школа 14'})
        await School.create({name: 'Школа 5'})

        await City.sync()
        await City.create({id: 1, name: 'Москва'})
        await City.create({id: 2, name: 'Новосибирск'})
        await City.create({id: 3, name: 'Ярославль'})

        await Learner.sync();
        await Learner.create({
            role_id: 1,
            last_name: 'Андреевич',
            first_name: 'Павел',
            second_name: 'Небойков',
            birthday: new Date(2002, 6, 20),
            email: 'neboi222@mail.ru',
            password: 'easypeasy',
            city: 1,
            school: 1,
            class: 5,
            fav_sport_types: null
        })
        await Learner.create({
            role_id: 1,
            last_name: 'Андреевич',
            first_name: 'Павел',
            second_name: 'Небойков',
            birthday: new Date(2002, 6, 20),
            email: 'neboi222@mail.ru',
            password: 'easypeasy',
            city: 1,
            school: 1,
            class: 5,
            fav_sport_types: null
        })
        await Learner.create({
            role_id: 1,
            last_name: 'Андреевич',
            first_name: 'Павел',
            second_name: 'Небойков',
            birthday: new Date(2002, 6, 20),
            email: 'neboi222@mail.ru',
            password: 'easypeasy',
            city: 1,
            school: 1,
            class: 5,
            fav_sport_types: null
        })
        await Learner.create({
            role_id: 1,
            last_name: 'Андреевич',
            first_name: 'Павел',
            second_name: 'Небойков',
            birthday: new Date(2002, 6, 20),
            email: 'neboi222@mail.ru',
            password: 'easypeasy',
            city: 1,
            school: 1,
            class: 5,
            fav_sport_types: null
        })


        await Teacher.sync();
        await Teacher.create({
            role_id: 2,
            last_name: 'Самсонович',
            first_name: 'Секулай',
            second_name: 'Ботвинюк',
            birthday: new Date(1977, 3, 15),
            phone_number: '+73748378900',
            email: 'ssbot@mail.ru',
            password: 'ksteach93#',
            city: 3,
            school: 2,
            access: true
        });


        await require('./tournament-data').init();
    }
}