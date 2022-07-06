const req = require('supertest');
let app = require('../index.js');


// it('Delete tournament', function (done) {
//     request(app).delete('/tournament/2/del').expect("text").end(done);
// });


it('Search tournament', function (done) {
    req(app).get('/tournament/2').expect({
        "id": 2,
        "tournamentName": "Турнир 2",
    }).end(done);
})
