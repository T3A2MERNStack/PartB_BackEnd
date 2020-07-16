const app = require('./app')
const request = require('supertest')
const { assert } = require('chai')
const expect = require('chai').assert

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
                if (err) return done(err);
                console.log(res)
                assert(res.body, [])
                done()
                });
    })
} )


describe('/list',() =>{
    it("Post new recipe should NOT save to the database", (done) => {
        request(app)
            .post('/lists')
            .send({"duration":345})
            .expect(404)
            .end(function(err, res){
                if (err) done(err);
                done();
                });
    })
    it("Post new recipe should save to the database", (done) => {
        request(app)
            .post('/lists')
            .send({"name":"Arisa", "duration":345})
            .expect(200)
            .end(function(err, res){
                if (err) done(err);
                done();
                });
    })
    describe('DELETE /lists/:id',() =>{
        it("Should Delete", (done) => {
            request(app)
                .del('/lists/1')
                .expect(404)
                .end(function(err, res){
                    if (err) done(err);
                    done();
                    });
        })
    })
} )