const express = require('express');
const router = express.Router();
const UserModel = require('../models/user')
// const { route } = require('.')

router.get('/', (req, res) =>
    res.send('users home')
)

router.get('/login', (req, res) =>
    res.send('login')
)

router.get('/register', (req, res) =>
    res.send('hello')
)

router.post('/register', async (req, res) => {
    const user = new UserModel(req.body)
    try {
        await user.save();
        res.send(user);
    } catch (err) {
        res.status(500).send(err);
    }
})

module.exports = router;