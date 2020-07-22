

const passport = require('passport')
// const GoogleStrategy = require('passport-google-oauth20').Strategy
const User = require('./models/user')

// {username: "foo", password: "bar"} => {username: 'foo', hash: "rdaogyvafbiolu"}
passport.serializeUser(function(user, done) {
    // this method is done( no error, here is the user)
    done(null, user)
})

// {username: 'foo', hash: "rdaogyvafbiolu"} => {username: "foo", password: "bar"}
passport.deserializeUser(function(user, done) {
    // this method is done( no error, here is the user)
    done(null, user)
})

// Initializing a Local Strategy on the User Model
passport.use(User.createStrategy());

