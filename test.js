const app = require('./app')
const request = require('supertest')
// const mocha = require('mocha')

describe('/user/register',() =>{
    it("GET /user/register", (done) => {
        request(app)
            .get('/user/register')
            .expect(200, done())
    })
} )

describe('/lists',() =>{
    it("GET /list", (done) => {
        request(app)
            .get('/lists')
            .expect(200)
            .end(function(err, res){
                if (err) done(err);
                done();
                });
    })
} )

// describe('/list',() =>{
//     it("GET /list", (done) => {
//         request(app)
//             .get('/lists')
//             .expect(404)
//             .end(function(err, res){
//                 if (err) done(err);
//                 done();
//                 });
//     })
// } )

describe('/list',() =>{
    it("Post new recipe without name", (done) => {
        request(app)
            .post('/lists')
            .send({"duration":345})
            .expect(404)
            .end(function(err, res){
                if (err) done(err);
                done();
                });
    })
} )