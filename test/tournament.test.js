const req = require('supertest');
let app = require('../index.js');


// it('Delete tournament', function (done) {
//     req(app).delete('/tournament/1/del').expect({}).end(done);
// });

// //Работает
// it('Search tournament', function (done) {
//     req(app).get('/tournament/2').expect({
//         "id": 2,
//         "tournamentName": "Турнир 2",
//     }).end(done);
// });

//Не работает
it('Add tournament', function (done) {
    req(app).post('/tournament/add').expect(200).end(done);
})
