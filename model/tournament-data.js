const {TournamentType,SportType,City,Tournament,CityParticipant,TournamentParticipant,Match,MatchParticipant,MatchResult} = require('./tournament');

let init = false;

module.exports = {
    init: async function () {
        if (init) return false;
        init = true;

        await TournamentType.sync()
            .then(() => TournamentType.create({
                    id: 'some_id',
                    name: 'some_name',
                    code: 'some_code'
                })
            )
        await SportType.sync()
            .then(() => SportType.create({
                    id: 'some_id',
                    name: 'some_name',
                    code: 'some_code'
                })
            )
        await City.sync()
            .then(() => City.create({
                    id: 'some_id',
                    name: 'some_name'
                })
            )
        await Tournament.sync()
            .then(() => Tournament.create({
                    id: 'some_id',
                    name: 'some_name',
                    tournament_type_id: 'some_id',
                    sport_type : 'some_id',
                    start_date : new Date(2022, 6, 20),
                    end_date : new Date(2022, 7, 21),
                    school_or_city : true,
                    city : 'some_city',
                    participants_min : 20,
                    participants_max : 23,
                    age_min : 12,
                    age_max : 15,
                    class_min : 7,
                    class_max : 8,
                    team_size : 10
                })
            )
        await CityParticipant.sync()
            .then(() => CityParticipant.create({
                    tournament_id: 'some_id',
                    city_id: 'some_id'
                })
            )
        await TournamentParticipant.sync()
            .then(() => TournamentParticipant.create({
                    tournament_id: 'some_id',
                    user_id: 'some_id'
                })
            )
        await Match.sync()
            .then(() => Match.create({
                    id: 'some_id',
                    tournament_id: 'some_id',
                    name: 'some_name'
                })
            )
        await MatchParticipant.sync()
            .then(() => MatchParticipant.create({
                    id: 'some_id',
                    match_id: 'some_id',
                    user_id: 'some_id',
                    team_id: 'some_id',
                    match_result: 'some_id'
                })
            )
        await MatchResult.sync()
            .then(() => MatchResult.create({
                    id: '11',
                    name: 'победа'
                })
            )
            .then(() => MatchResult.create({
                    id: '12',
                    name: 'поражение'
                })
            )
            .then(() => MatchResult.create({
                    id: '13',
                    name: 'ничья'
                })
            )
    }
}