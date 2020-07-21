const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')

const UserModel = require('./models/user')

module.exports = function(passport){
    passport.use(
        // Match user
        new LocalStrategy({usernameField: 'email'}, (email, password, done) => {
            UserModel.findOne({ email: email })
                .then(user => {
                    if(!user){
                        return done(null, false, { message: "email is not registered"})
                    }
                // Match password
                    bcrypt.compare(password, user.password, (err, isMatch) => {
                        if (err) throw err;

                        if(isMatch) {
                            return done(null, user)
                        } else {
                            return done(null, false, {message: "password no matched"})
                        }
                    })
                })
                .catch(err => done(err))
        })
    )  

    passport.serializeUser((user, done) => {
        done(null, user.id)
        // console.log(user.id)
        }
    )

    passport.deserializeUser((id, done) => {
        UserModel.findById(id)
            .then(user => {
               return done(null, user)
            })
            .catch(err => done(err))
    })
}
