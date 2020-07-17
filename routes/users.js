const express = require('express');
const router = express.Router();
const UserModel = require('../models/user')
const bcrypt = require('bcrypt')
const passport = require('passport')
// const { route } = require('.')

router.get('/', (req, res) =>
    res.send(200)
)

router.get('/login', (req, res) =>
    res.send(200)
)

router.post('/login',

(req, res) => console.log('testing')
)

router.get('/register', (req, res) => {
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

module.exports = router;