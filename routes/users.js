const express = require('express');
const router = express.Router();
const UserModel = require('../models/user')
const bcrypt = require('bcrypt')
const passport = require('passport')
const ensureAuthenticated = require('../config/auth')
const checkNotAuthenticated = require('../config/loggedIn')
const { route } = require('.')


router.get('/', (req, res) =>{
    // console.log(req.session)
    console.log(req.user)
    res.send(req.user)
})

router.get('/me', (req, res) =>{
    // console.log(req.user)
    res.send(req.user)
})

router.get('/login', (req, res) =>{
    // console.log(req)
    // if(req.session.passport){
    //     return res.status(404).send({ error: "not logged in"})
    // }
    // // console.log(req.session.passport.user)
    // next();
    res.send(200)
})


router.post('/login', function(req, res, next){
    passport.authenticate('local', function(err, user, info){
        if(err){
            return next(err)
        }
        if (! user) {
            return res.status(404).send({ error : info.message});
        }
        req.login(user, function(err){
            if(err){
              return next(err);
            }
            // console.log(req.session.passport.user)
            return res.send({ success : true, message : 'authentication succeeded', user: user});        
        });
    })(req, res, next)
})

router.get('/register',  ensureAuthenticated, (req, res) => {
    console.log('hello')
    res.send('test')
})

router.post('/register', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const {name, email} = req.body
        const user = new UserModel({name, email, password: hashedPassword})
        user.save()
        res.status(200).send(user)
    } catch (err) {
        res.status(404).send(err)
    }
})


router.get('/logout', (req, res) => {
    req.logout()
    console.log('logged out')
    res.send(202)
})

module.exports = router;