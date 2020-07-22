const express = require('express');
const router = express.Router();
const User = require('../models/user')
const bcrypt = require('bcrypt')
const passport = require('passport')
const {ensureAuthenticated } = require('../config/auth')


router.get('/me', (req, res) =>{
    console.log(req.user)
    res.send(req.user)
})

router.get('/login', (req, res) =>{
    res.send(200)
})


router.post('/login', function(req, res, next){
    passport.authenticate('local', function(err, user){
        if(err){
            throw err
        }
        if (! user) {
            res.status(401).send({name: "Incorrect Credentials", message: "The details you have entered are not correct"})
        } else {
            req.login(user , err => {
                if (err) throw err
                res.send(user)
            })
        }
        // req.login(user, function(err){`as
        //     if(err){
        //       return next(err);
        //     }
        //     // console.log(req.session.passport.user)
        //     return res.send({ success : true, message : 'authentication succeeded', user: user});        
        // });
    })(req, res, next)
})

router.post('/register',(req, res) => {
    // try {
    //     const hashedPassword = await bcrypt.hash(req.body.password, 10)
    //     const {name, email} = req.body
    //     const user = new UserModel({name, email, password: hashedPassword})
    //     user.save()
    //     res.status(200).send(user)
    // } catch (err) {
    //     res.status(404).send(err)
    // }
    User.register(new User({username: req.body.username, email: req.body.email}), req.body.password, function(err, user){
        if (err) {
            console.log(err)
            // return that error sent in the response object
            return res.send({fail: err})
        } else {
            // if it works, authenticate the user, attaches session cookie to response automatically
            passport.authenticate('local')(req, res, function() {
                console.log(req.user)
                return res.send(user)
            })
        }
    })
})


router.get('/logout', (req, res) => {
    // call the logout function provided by passport
    req.logOut()
    // send an ok
    res.sendStatus(200)
})

module.exports = router;