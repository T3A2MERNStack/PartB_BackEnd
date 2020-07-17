const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')

const UserModel = require('./models/user')

module.exports = function(passport){
    passport.use(
        // Match user
        new LocalStrategy({usernameField: 'email'}, (email, password, done) => {
            UserModel.findOne({email: email})
                .then(user => {
                    if(!user){
                        return done(null, false, {message: "email is not registered"})
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
                .catch(err => console.log(err))
        })
    )
    passport.serializeUser((user, done)=> done(null, user.id))
    passport.deserializeUser((id, done)=> {
        return done(null, getUserById(id))
    })
}

// function initialize(passport, getUserByEmail, getUserById){
//     const authenticateUser = async (email, password, done) => {
//         const user = getUserByEmail(email)
//         if (user == null){
//             return done(null, false, {message: "No user with that email"})
//         }
//         try{
//             if (await bcrypt.compare(password, user.password)){
//                 return done(null, user)
//             } else {
//                 return done(null, false, {message: "password incorrect"})
//             }
//         } catch (err) {
//             return done(err)
//         }
//     }
//     passport.use(new LocalStrategy({usernameField: 'email'}, 
//     authenticateUser))
//     passport.serializeUser((user, done)=> done(null, user.id))
//     passport.deserializeUser((id, done)=> {
//         UserModel.findById(id, (err, user) => {
//              done(err,user)
//         })
//     })

// }

// module.exports = initialize