const express = require('express');
const router = express.Router();
const UserModel = require('../models/user')
const bcrypt = require('bcrypt')
const passport = require('passport')
const { ensureAuthenticated } = require('../config/auth')
router.get('/', (req, res) =>
    res.send("log in success")
)

router.get('/login', (req, res) =>
    res.send(200)
)

router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
    })(req, res, next)
})

router.get('/register',  ensureAuthenticated, (req, res) => {
    console.log('testing')
    res.send('test')
})

router.post('/register', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        console.log(hashedPassword)
        const {name, email} = req.body
        const user = new UserModel({name, email, password: hashedPassword})
        user.save()
        res.status(200).send()
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