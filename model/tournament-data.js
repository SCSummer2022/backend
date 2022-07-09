const {TournamentType,SportType,City,Tournament,CityParticipant,TournamentParticipant,Match,MatchParticipant,MatchResult} = require('./tournament');

let init = false;

module.exports = {
    init: async function () {
        if (init) return false;
        init = true;

        await TournamentType.sync()
            .then(() => TournamentType.create({
                    id: 3,
                    name: 'some_name',
                    code: 'some_code'
                })
            )
        await SportType.sync()
            .then(() => SportType.create({
                    id: 3,
                    name: 'some_name',
                    code: 'some_code'
                })
            )
        await City.sync()
            .then(() => City.create({
                    id: 3,
                    name: 'some_name'
                })
            )
        await Tournament.sync()
            .then(() => Tournament.create({
                    id: 4,
                    name: 'some_name',
                    tournament_type_id: 3,
                    sport_type : 3,
                    start_date : new Date(2022, 6, 20),
                    end_date : new Date(2022, 7, 21),
                    school_or_city : true,
                    city : 3,
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
                    tournament_id: 3,
                    city_id: 3
                })
            )
        await TournamentParticipant.sync()
            .then(() => TournamentParticipant.create({
                    tournament_id: 3,
                    user_id: 3
                })
            )
        await Match.sync()
            .then(() => Match.create({
                    id: 3,
                    tournament_id: 4,
                    name: 'some_match_name'
                })
            )
            .then(() => Match.create({
                    id: 4,
                    tournament_id: 4,
                    name: 'some_match_name'
                })
            )
            .then(() => Match.create({
                    id: 5,
                    tournament_id: 4,
                    name: 'some_match_name'
                })
            )
            .then(() => Match.create({
                    id: 6,
                    tournament_id: 4,
                    name: 'some_match_name'
                })
            )
        await MatchParticipant.sync()
            .then(() => MatchParticipant.create({
                    id: 3,
                    match_id: 3,
                    user_id: 3,
                    team_id: 13
                })
            )
        await MatchResult.sync()
            .then(() => MatchResult.create({
                    id: 11,
                    name: 'победа'
                })
            )
            .then(() => MatchResult.create({
                    id: 12,
                    name: 'поражение'
                })
            )
            .then(() => MatchResult.create({
                    id: 13,
                    name: 'ничья'
                })
            )
    }
}